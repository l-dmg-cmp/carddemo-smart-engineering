const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it');
const hljs = require('highlight.js'); // Requerido antes de ser usado
const { spawnSync } = require('child_process');

// Leitura dos parâmetros de entrada
const inputMarkdownPath = process.argv[2];
const outputDir = process.argv[3];

if (!inputMarkdownPath || !outputDir) {
    console.error('Uso: node convert.js <caminho/para/input.md> <caminho/para/diretorio/saida>');
    process.exit(1);
}

// Cria o diretório de saída, se não existir
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const baseName = path.basename(inputMarkdownPath, '.md');

let markdown;
try {
    markdown = fs.readFileSync(inputMarkdownPath, 'utf8');
} catch (error) {
    console.error(`Erro ao ler o arquivo ${inputMarkdownPath}:`, error.message);
    process.exit(1);
}

// Inicializa markdown-it com suporte para destacar código
const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return '<pre class="hljs"><code>' +
                    hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                    '</code></pre>';
            } catch (__) {}
        }
        return '<pre class="hljs"><code>' + markdownIt().utils.escapeHtml(str) + '</code></pre>';
    }
});

// Contador para os diagramas Mermaid
let mermaidDiagramIndex = 0;

// Personaliza o renderizador para os blocos de código
md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    const token = tokens[idx];
    const code = token.content.trim();
    const langName = token.info.trim();

    if (langName === 'mermaid') {
        mermaidDiagramIndex += 1;

        // Usa o nome base do arquivo Markdown no nome dos diagramas
        const diagramBaseName = `${baseName}_diagram_${mermaidDiagramIndex}`;
        const diagramMmdPath = path.join(outputDir, `${diagramBaseName}.mmd`);
        const diagramSvgPath = path.join(outputDir, `${diagramBaseName}.svg`);

        fs.writeFileSync(diagramMmdPath, code);
        console.log(`Gerando diagrama ${diagramMmdPath}`);

        // Executa o mmdc com opções de escala
        const result = spawnSync('mmdc.cmd', [
            '-i', diagramMmdPath,
            '-o', diagramSvgPath
        ], {
            encoding: 'utf-8',
            shell: true,
            stdio: 'inherit'
        });

        if (result.error) {
            console.error(`Erro ao gerar diagrama ${diagramMmdPath}:`, result.error.message);
        } else if (result.status !== 0) {
            console.error(`Erro ao gerar diagrama ${diagramMmdPath}:`, result.stderr);
        } else {
            console.log(`Diagrama ${diagramSvgPath} gerado com sucesso.`);
        }

        // Caminho relativo do SVG para uso no HTML
        const relativeSvgPath = path.basename(diagramSvgPath);

        // Retorna o elemento <img> com estilos CSS para ser inserido no HTML
        const svgTag = `<img src="${relativeSvgPath}" alt="Mermaid Diagram ${mermaidDiagramIndex}" style="max-width: 100%; height: auto;">`;

        return svgTag;
    } else {
        // Renderização padrão para outros blocos de código (com destaque)
        if (langName && hljs.getLanguage(langName)) {
            try {
                const highlightedCode = hljs.highlight(code, { language: langName, ignoreIllegals: true }).value;
                return `<pre class="hljs"><code>${highlightedCode}</code></pre>`;
            } catch (__) {}
        }
        const escapedCode = markdownIt().utils.escapeHtml(code);
        return `<pre class="hljs"><code>${escapedCode}</code></pre>`;
    }
};

// Converte o Markdown para HTML
const htmlContent = md.render(markdown);

// Envolve o conteúdo HTML em uma estrutura básica, incluindo estilos modernos
const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>${baseName}</title>
    <!-- Incluindo o Bootstrap CSS a partir de CDN -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- Incluindo o Highlight.js CSS para destaque de código -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/default.min.css">
    <style>
        body {
            padding: 20px;
        }
        img {
            max-width: 100%;
            height: auto;
        }
        /* Estilos personalizados podem ser adicionados aqui */
    </style>
</head>
<body>
    <div class="container">
        ${htmlContent}
    </div>
    <!-- Incluindo o jQuery e o Bootstrap JS a partir de CDN -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Incluindo o Highlight.js JS para destaque de código -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
    <script>hljs.highlightAll();</script>
</body>
</html>
`;

// Caminho para o arquivo HTML de saída
const outputHtmlPath = path.join(outputDir, `${baseName}.html`);

// Escreve o resultado em um arquivo HTML
fs.writeFileSync(outputHtmlPath, html);
console.log(`Conversão completa: ${outputHtmlPath} gerado.`);
