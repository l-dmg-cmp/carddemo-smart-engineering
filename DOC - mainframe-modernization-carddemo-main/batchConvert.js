const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

// Obtém os diretórios raiz de entrada e saída a partir dos argumentos da linha de comando
const inputRootDir = process.argv[2];
const outputRootDir = process.argv[3];

if (!inputRootDir || !outputRootDir) {
    console.error('Uso: node batchConvert.js <caminho/para/diretorio/entrada> <caminho/para/diretorio/saida>');
    process.exit(1);
}

// Função para deletar arquivos no diretório de saída
function deleteOutputFiles(dir) {
    if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir);

        files.forEach((file) => {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                // Ignora a pasta node_modules
                if (file !== 'node_modules') {
                    deleteOutputFiles(fullPath);
                    // Remove o diretório vazio após limpar seu conteúdo
                    fs.rmdirSync(fullPath);
                }
            } else if (stat.isFile()) {
                fs.unlinkSync(fullPath);
                console.log(`Arquivo deletado: ${fullPath}`);
            }
        });
    }
}

// Limpa o diretório de saída antes de iniciar o processo
console.log('Limpando o diretório de saída...');
deleteOutputFiles(outputRootDir);

// Função recursiva para percorrer diretórios
function traverseDirectory(inputDir) {
    const files = fs.readdirSync(inputDir);

    files.forEach((file) => {
        const inputFullPath = path.join(inputDir, file);
        const stat = fs.statSync(inputFullPath);

        if (stat.isDirectory()) {
            // Ignora a pasta node_modules
            if (file !== 'node_modules') {
                // Determina o caminho correspondente no diretório de saída
                const relativePath = path.relative(inputRootDir, inputFullPath);
                const outputFullPath = path.join(outputRootDir, relativePath);

                // Cria o diretório de saída, se não existir
                if (!fs.existsSync(outputFullPath)) {
                    fs.mkdirSync(outputFullPath, { recursive: true });
                }

                // Percorre recursivamente o subdiretório
                traverseDirectory(inputFullPath);
            }
        } else if (stat.isFile() && path.extname(file).toLowerCase() === '.md') {
            // Se for um arquivo .md, converte para .html
            const inputMarkdownPath = inputFullPath;

            // Determina o caminho de saída correspondente
            const relativePath = path.relative(inputRootDir, inputDir);
            const outputDir = path.join(outputRootDir, relativePath);
            const outputHtmlPath = path.join(outputDir, `${path.basename(file, '.md')}.html`);

            console.log(`Convertendo ${inputMarkdownPath} para ${outputHtmlPath}`);

            // Chama o convert.js para realizar a conversão
            const result = spawnSync('node', ['convert.js', inputMarkdownPath, outputDir], {
                encoding: 'utf-8',
                shell: true,
                stdio: 'inherit'
            });

            if (result.error) {
                console.error(`Erro ao converter ${inputMarkdownPath}:`, result.error.message);
            } else if (result.status !== 0) {
                console.error(`Erro ao converter ${inputMarkdownPath}:`, result.stderr);
            } else {
                console.log(`Conversão de ${inputMarkdownPath} concluída.`);
            }
        }
    });
}

// Função para coletar arquivos HTML organizados por diretório
function collectHtmlFilesByDir(dir, rootDir) {
    let htmlFilesByDir = {};

    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        const relativeDir = path.relative(rootDir, dir).replace(/\\/g, '/');
        const relativePath = path.relative(rootDir, fullPath).replace(/\\/g, '/');

        if (stat.isDirectory()) {
            // Ignora a pasta node_modules
            if (file !== 'node_modules') {
                // Percorre recursivamente o subdiretório
                const subDirFiles = collectHtmlFilesByDir(fullPath, rootDir);
                // Combina os resultados
                for (const [subDir, files] of Object.entries(subDirFiles)) {
                    if (!htmlFilesByDir[subDir]) {
                        htmlFilesByDir[subDir] = [];
                    }
                    htmlFilesByDir[subDir] = htmlFilesByDir[subDir].concat(files);
                }
            }
        } else if (stat.isFile() && path.extname(file).toLowerCase() === '.html' && file !== 'index.html') {
            // Adiciona o arquivo ao diretório correspondente
            if (!htmlFilesByDir[relativeDir]) {
                htmlFilesByDir[relativeDir] = [];
            }
            htmlFilesByDir[relativeDir].push({
                name: file,
                path: relativePath
            });
        }
    });

    return htmlFilesByDir;
}

// Função para gerar o índice HTML com categorias e CSS
function generateIndexHtml(htmlFilesByDir, outputDir) {
    // Inicia a construção do conteúdo do índice
    let indexContent = '<!DOCTYPE html>\n';
    indexContent += '<html lang="pt-BR">\n';
    indexContent += '<head>\n';
    indexContent += '    <meta charset="UTF-8">\n';
    indexContent += '    <title>SMART ENGINEERING - CODE DOCUMENTATION</title>\n';
    indexContent += '    <!-- Incluindo o Bootstrap CSS a partir de CDN -->\n';
    indexContent += '    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">\n';
    indexContent += '    <style>\n';
    indexContent += '        body { font-family: Arial, sans-serif; padding: 20px; }\n';
    indexContent += '        h2 { color: #333; margin-top: 20px; }\n';
    indexContent += '        .list-group-item { border: none; padding-left: 0; }\n';
    indexContent += '        .list-group-item a { color: #007bff; }\n';
    indexContent += '        .list-group-item a:hover { text-decoration: none; }\n';
    indexContent += '        li { margin: 2px 0; padding: 5px 0 !IMPORTANT; } /* Reduz o espaçamento entre as linhas */\n';
    indexContent += '    </style>\n';
    indexContent += '</head>\n';
    indexContent += '<body>\n';
    indexContent += '    <div class="container">\n';
    indexContent += '        <h1>SMART ENGINEERING - CODE DOCUMENTATION</h1>\n';

    // Ordena os diretórios, colocando 'project' primeiro
    const priorityDirs = ['PROJECT', 'PROJECT/DIAGRAM', 'DOC/03-EPIC', 'DOC/04-USER_STORY', 'DOC/05-TECH_STORY', 'PROJECT/REVIEW', 'DOC/02-DOCUMENT'  ];

    const sortedDirs = Object.keys(htmlFilesByDir).sort(function(a, b) {
        const indexA = priorityDirs.indexOf(a);
        const indexB = priorityDirs.indexOf(b);

        if (indexA !== -1 && indexB !== -1) {
            return indexA - indexB;
        } else if (indexA !== -1) {
            return -1;
        } else if (indexB !== -1) {
            return 1;
        } else {
            return a.localeCompare(b);
        }
    });

    sortedDirs.forEach(function(dir) {
        const files = htmlFilesByDir[dir];
        // Título da categoria (diretório)
        const categoryName = dir || 'Root';

        indexContent += '        <h2>' + categoryName + '</h2>\n';

        // Inicia a linha para o sistema de grid do Bootstrap
        indexContent += '        <div class="row">\n';

        // Define o número de colunas (por exemplo, 3 colunas)
        const numColumns = 4;
        const columnClass = 'col-md-' + Math.floor(12 / numColumns);

        // Divide os arquivos entre as colunas
        const filesPerColumn = Math.ceil(files.length / numColumns);
        for (let i = 0; i < numColumns; i++) {
            indexContent += '            <div class="' + columnClass + '">\n';
            indexContent += '                <ul class="list-group">\n';

            const start = i * filesPerColumn;
            const end = start + filesPerColumn;
            const filesInColumn = files.slice(start, end);

            filesInColumn.forEach(function(file) {
                indexContent += '                    <li class="list-group-item"><a href="' + file.path + '">' + file.name + '</a></li>\n';
            });

            indexContent += '                </ul>\n';
            indexContent += '            </div>\n';
        }

        indexContent += '        </div>\n'; // Fecha a linha
    });

    indexContent += '    </div>\n';
    indexContent += '    <!-- Incluindo o jQuery e o Bootstrap JS a partir de CDN -->\n';
    indexContent += '    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>\n';
    indexContent += '    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>\n';
    indexContent += '</body>\n';
    indexContent += '</html>\n';

    // Caminho para o arquivo index.html
    const indexPath = path.join(outputDir, 'index.html');

    // Escreve o arquivo index.html
    fs.writeFileSync(indexPath, indexContent);
    console.log('Índice gerado em: ' + indexPath);
}



// Inicia a travessia a partir do diretório raiz de entrada
traverseDirectory(inputRootDir);

// Após a conversão, gera o índice
console.log('Gerando o índice dos arquivos HTML...');
const htmlFilesByDir = collectHtmlFilesByDir(outputRootDir, outputRootDir);
generateIndexHtml(htmlFilesByDir, outputRootDir);
