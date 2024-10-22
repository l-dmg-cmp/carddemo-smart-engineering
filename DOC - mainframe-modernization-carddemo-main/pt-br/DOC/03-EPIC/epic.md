Gerado em: 1º de outubro de 2024

# **Documento de Título:** Aplicativo CardDemo - Especificação do Programa

# **Épico 1: Gestão de Produtos de Investimento**

- **Objetivo:** Fornecer um conjunto abrangente de ferramentas para criar, gerenciar, configurar e gerar relatórios sobre produtos de investimento oferecidos pelo Sicredi.
- **Atores:** Gerentes de produto, analistas financeiros, administradores de sistema, caixas bancários, representantes de atendimento ao cliente.
- **Requisitos:**
    - Capacidade de definir e configurar vários tipos de produtos de investimento, incluindo renda fixa, renda variável, contas de poupança e produtos especializados.
    - Suporte para diferentes métodos de cálculo de taxa de juros, estruturas de taxas e regimes fiscais.
- **Arquivos Envolvidos:**
    * `ccrmbaa.prg` (Cadastro de Aplicações de Investimento)
    * `ccrmbba.prg` (Resgate de Título de Investimento)
    * `ccrmbbc.prg` (Gerenciamento de Resgates de Produtos Exclusivos)
    * `ccrmbeb.prg` (Renegociação de Taxas de Juros)
    * `ccrmbeq.prg` (Gerenciamento de Grupos de Taxas de Investimento)
    * `ccrmber.prg` (Gerenciamento de Taxas de Poupança)
    * `ccrmcab.prg` (Relatório de Listagem de Produtos)

# **Épico 2: Gestão de Contas**

- **Objetivo:** Fornecer funcionalidades para gerenciar contas de clientes, incluindo visualização, atualização e realização de transações.
- **Atores:** Representantes de atendimento ao cliente, administradores de sistema, clientes (por meio de internet banking).
- **Requisitos:**
    - Capacidade de visualizar saldos de contas, histórico de transações e detalhes da conta.
    - Funcionalidade para atualizar informações do cliente, como endereço, número de telefone e e-mail.
    - Suporte para várias operações de conta, incluindo depósitos, saques, transferências e pagamentos de contas.
- **Arquivos Envolvidos:**
    * `COACTUPC.cbl` (Atualização de Conta CardDemo)
    * `COACTVWC.cbl` (Sistema de Gerenciamento de Cartão de Crédito - Funcionalidade de Visualização de Conta)
    * `CVACT01Y.cpy` (Sistema de Gerenciamento de Conta CardDemo - Especificação de Registro de Conta)

# **Épico 3: Gestão de Cartão de Crédito**

- **Objetivo:** Gerenciar o ciclo de vida do cartão de crédito, incluindo a emissão de novos cartões, ativação/desativação de cartões, definição de limites de crédito e tratamento de transações relacionadas a cartões.
- **Atores:** Analistas de crédito, representantes de atendimento ao cliente, administradores de sistema.
- **Requisitos:**
    - Capacidade de gerar novos números de cartão de crédito e associá-los a contas de clientes.
    - Funcionalidade para ativar, desativar e bloquear cartões de crédito.
    - Suporte para definir e ajustar limites de crédito.
    - Processos para lidar com pagamentos com cartão de crédito, compras, adiantamentos em dinheiro e outras transações.
- **Arquivos Envolvidos:**
    * `CBACT02C.cbl` (Processador de Arquivo de Dados do Cartão)
    * `CBACT03C.cbl` (Processador de Arquivo de Dados de Referência Cruzada de Conta do Cartão)
    * `COCRDLIC.cbl` (Exibição e Navegação da Lista de Cartão de Crédito)
    * `COCRDSLC.cbl` (Sistema de Recuperação de Detalhes do Cartão de Crédito)
    * `COCRDUPC.cbl` (Programa de Atualização de Detalhes do Cartão de Crédito)
    * `CVACT02Y.cpy` (Especificação da Estrutura de Dados do Cartão)
    * `CVACT03Y.cpy` (Sistema de Gerenciamento de Cartão de Crédito - Especificação de Dados de Referência Cruzada do Cartão)
    * `COCRDLI_CPY.md` (Especificação de Layout de Dados do Cartão de Crédito para Sistemas Internos e Externos)
    * `COCRDSL_CPY.md` (Especificação da Estrutura de Exibição do Cartão de Crédito)
    * `COCRDUP_CPY.md` (Estrutura de Dados de Verificação de Duplicatas de Cartão de Crédito)

# **Épico 4: Processamento de Transações**

- **Objetivo:** Processar vários tipos de transações de forma eficiente, precisa e segura, garantindo a integridade dos dados e a conformidade regulatória.
- **Atores:** Administradores de sistema, sistema de processamento em lote, sistemas de câmaras de compensação.
- **Requisitos:**
    - Suporte para processar transações com cartão de crédito de vários canais, como online, terminais POS e caixas eletrônicos.
    - Mecanismos de autorização de transação em tempo real e detecção de fraude.
    - Processos precisos e eficientes de liquidação e reconciliação de transações.
    - Conformidade com os padrões da indústria, como PCI DSS, para tratamento seguro de dados confidenciais do titular do cartão.
- **Arquivos Envolvidos:**
    * `CBACT04C.cbl` (Cálculo de Juros do CardDemo)
    * `CBSTM03A.CBL` (Geração de Extrato de Conta do CardDemo)
    * `CBSTM03B.CBL` (Sub-rotina do Processador de Arquivo de Transação do Cartão)
    * `CBTRN01C.cbl` (Processamento Diário de Transações do CardDemo)
    * `CBTRN02C.cbl` (Processamento Diário de Transações do CardDemo)
    * `CBTRN03C.cbl` (Geração de Relatório de Detalhes de Transação de Cartão de Crédito do CardDemo)
    * `COBIL00C.cbl` (Pagamento de Conta Online do CardDemo)
    * `COTRN00C.cbl` (Aplicativo CardDemo: Funcionalidade de Listagem de Transações)
    * `COTRN01C.cbl` (Recuperação de Detalhes da Transação do CardDemo)
    * `COTRN02C.cbl` (Adição de Transação do CardDemo)
    * `COSTM01_CPY.md` (Estrutura de Relatórios de Transações do CardDemo)
    * `COBIL00_CPY.md` (Processador de Transações de Pagamento de Conta)
    * `COTRN00_CPY.md` (Sistema de Tratamento de Transações)
    * `COTRN01_CPY.md` (Especificação de Registro de Transação de Cartão de Crédito)
    * `COTRN02_CPY.md` (Estrutura de Dados de Transação do Cartão)

# **Épico 5: Relatórios e Análise**

- **Objetivo:** Gerar vários relatórios e fornecer insights analíticos para apoiar a tomada de decisão, acompanhar o desempenho dos negócios e garantir a conformidade regulatória.
- **Atores:** Gerenciamento, analistas de negócios, auditores.
- **Requisitos:**
    - Capacidade de gerar relatórios sobre indicadores-chave de desempenho, como volume de transações, receita e taxas de fraude.
    - Recursos de relatórios personalizáveis para permitir que os usuários definam filtros de dados específicos, intervalos de datas e formatos de relatório.
    - Integração com ferramentas de visualização de dados para criar painéis interativos e relatórios.
    - Geração de relatórios regulatórios exigidos por órgãos governamentais e padrões da indústria.
- **Arquivos Envolvidos:**
    * `CBSTM03A.CBL` (Geração de Extrato de Conta do CardDemo)
    * `CBTRN03C.cbl` (Geração de Relatório de Detalhes de Transação de Cartão de Crédito do CardDemo)
    * `CORPT00C.cbl` (Geração de Relatório de Transações do CardDemo)
    * `COSTM01_CPY.md` (Estrutura de Relatórios de Transações do CardDemo)
    * `CORPT00_CPY.md` (Entrada de Parâmetro de Relatório Corporativo)
    * `CVTRA07Y.cpy` (Especificação de Layout de Relatório de Transação de Cartão)

# **Épico 6: Gestão de Usuários e Segurança**

- **Objetivo:** Gerenciar o acesso, funções e permissões do usuário para garantir a segurança do sistema e a confidencialidade dos dados.
- **Atores:** Administradores de sistema, administradores de segurança.
- **Requisitos:**
    - Controle de acesso baseado em função (RBAC) para restringir o acesso do usuário a funcionalidades autorizadas.
    - Mecanismos de autenticação fortes, como autenticação de dois fatores, para evitar acesso não autorizado.
    - Trilhas de auditoria para rastrear ações do usuário e alterações no sistema para fins de segurança e conformidade.
    - Políticas e procedimentos seguros de gerenciamento de senhas.
- **Arquivos Envolvidos:**
    * `COADM01C.cbl` (Aplicativo CardDemo: Menu Administrativo)
    * `COSGN00C.cbl` (Aplicativo CardDemo: Autenticação de Usuário Segura e Controle de Acesso)
    * `COUSR00C.cbl` (Gerenciamento de Usuários do CardDemo: Listar Usuários)
    * `COUSR01C.cbl` (Sistema de Gerenciamento de Usuários do CardDemo)
    * `COUSR02C.cbl` (Programa de Atualização de Usuário do CardDemo)
    * `COUSR03C.cbl` (Gerenciamento de Usuários do CardDemo - Exclusão de Usuário)
    * `COADM02Y_cpy.md` (Menu de Gerenciamento de Usuários do CardDemo)
    * `COMEN02Y_cpy.md` (Aplicativo CardDemo: Menu do Administrador)
    * `COADM01_CPY.md` (Sistema de Exibição de Dados Administrativos do CardDemo)
    * `COSGN00_CPY.md` (Gerenciamento de Informações de Login do Usuário)
    * `COUSR00_CPY.md` (Tela de Gerenciamento de Usuário)
    * `COUSR01_CPY.md` (Gerenciamento de Informações do Usuário)
    * `COUSR02_CPY.md` (Sistema de Gerenciamento de Conta de Usuário)
    * `COUSR03_CPY.md` (Gerenciamento de Informações do Usuário)

# **Épico 7: Processamento em Lote**

- **Objetivo:** Lidar com grandes volumes de dados e realizar operações durante o horário de pico para garantir o desempenho eficiente do sistema.
- **Atores:** Agendadores, sistema de processamento em lote.
- **Requisitos:**
    - Agendamento automatizado e execução de trabalhos em lote.
- **Arquivos Envolvidos:**
    * `CBACT01C.cbl` (Aplicativo CardDemo: Processamento em Lote de Dados de Conta)
    * `CBACT02C.cbl` (Processador de Arquivo de Dados do Cartão)
    * `CBACT03C.cbl` (Processador de Arquivo de Dados de Referência Cruzada de Conta do Cartão)
    * `CBACT04C.cbl` (Cálculo de Juros do CardDemo)
    * `CBCUS01C.cbl` (Extração de Dados do Cliente do CardDemo)
    * `CBSTM03A.CBL` (Geração de Extrato de Conta do CardDemo)
    * `CBTRN01C.cbl` (Processamento Diário de Transações do CardDemo)
    * `CBTRN02C.cbl` (Processamento Diário de Transações do CardDemo)
    * `CBTRN03C.cbl` (Geração de Relatório de Detalhes de Transação de Cartão de Crédito do CardDemo)

# **Épico 8: Gestão de Dados do Cliente**

- **Objetivo:** Manter informações precisas e atualizadas do cliente para várias operações comerciais, incluindo gerenciamento de contas, marketing e atendimento ao cliente.
- **Atores:** Representantes de atendimento ao cliente, equipe de marketing, analistas de dados.
- **Requisitos:**
    - Armazenamento centralizado de dados do cliente, incluindo informações de contato, dados demográficos e preferências de conta.
    - Processos de validação e limpeza de dados para garantir a precisão e consistência dos dados.
    - Capacidade de segmentar dados de clientes para campanhas de marketing direcionadas e atendimento personalizado ao cliente.
    - Conformidade com os regulamentos de privacidade de dados, como GDPR, para lidar com informações confidenciais do cliente.
- **Arquivos Envolvidos:**
    * `CBCUS01C.cbl` (Extração de Dados do Cliente do CardDemo)
    * `CUSTREC_cpy.md` (Especificação de Registro de Dados do Cliente)
    * `CVCUS01Y_cpy.md` (Especificação de Dados do Cliente)
    * `CUSTREC.cpy` (Especificação de Registro de Dados do Cliente)

# **Épico 9: Utilitários do Sistema**

- **Objetivo:** Fornecer um conjunto de funções utilitárias para oferecer suporte à manutenção do sistema, gerenciamento de dados e outras tarefas operacionais.
- **Atores:** Administradores de sistema, desenvolvedores.
- **Requisitos:**
    - Utilitários para conversão de dados, como formatos de data e hora, para garantir a compatibilidade entre diferentes sistemas.
    - Funções para registro, tratamento de erros e depuração para facilitar a solução de problemas e manutenção do sistema.
    - Ferramentas para backup e recuperação de dados para evitar perda de dados e garantir a continuidade dos negócios.
- **Arquivos Envolvidos:**
    * `CSUTLDTC.cbl` (Aplicativo CardDemo: Utilitário de Conversão de Data)
    * `CSDAT01Y_cpy.md` (Gerenciamento de Data e Hora do CardDemo)
    * `CSLKPCDY_cpy.md` (Guardião da Integridade de Dados: Garantindo Números de Telefone, Códigos de Estado e CEPs Precisos)
    * `CSMSG01Y_cpy.md` (Exibição de Mensagem do Aplicativo CardDemo)
    * `CSMSG02Y_cpy.md` (Tratamento de Erros do Sistema do Cartão)
    * `CSSETATY_cpy.md` (Validação de Campo do CardDemo)
    * `CSSTRPFY_cpy.md` (Tradutor de Ação do Usuário CICS)
    * `CSUSR01Y_cpy.md` (Gerenciamento de Perfil de Segurança do Usuário)
    * `CSUTLDPY_cpy.md` (Aplicativo CardDemo - Módulo de Validação de Data)
    * `CSUTLDWY_cpy.md` (Kit de Ferramentas de Gerenciamento de Data)
    * `CSDAT01Y.cpy` (Aplicativo CardDemo - Especificação Padrão de Data e Hora)
    * `CSLKPCDY.cpy` (Guardião da Integridade de Dados: Garantindo Números de Telefone, Códigos de Estado e CEPs Precisos)
    * `CSMSG01Y.cpy` (Aplicativo CardDemo - Especificação do Repositório de Mensagens Comuns)
    * `CSMSG02Y.cpy` (Especificação de Registro de Erros do Sistema do Cartão)
    * `CSSETATY.cpy` (Especificação de Validação de Campo do CardDemo)
    * `CSSTRPFY.cpy` (Especificação do Tradutor de Ação do Usuário CICS)
    * `CSUSR01Y.cpy` (Perfil de Segurança do Usuário - Especificação da Estrutura de Dados)
    * `CSUTLDPY.cpy` (Aplicativo CardDemo - Especificação do Módulo de Validação de Data)
    * `CSUTLDWY.cpy` (Kit de Ferramentas de Gerenciamento de Data - Especificação COBOL Copybook)

# **Épico 10: Gestão de Arquivos de Dados**

- **Objetivo:** Definir e gerenciar arquivos de dados usados para armazenar e recuperar informações no aplicativo CardDemo.
- **Atores:** Administradores de sistema, administradores de banco de dados.
- **Requisitos:**
    - Definição de estruturas de arquivo, layouts de registro e tipos de dados.
    - Alocação de espaço de armazenamento e gerenciamento de permissões de acesso a arquivos.
    - Implementação de procedimentos de backup e recuperação de dados para arquivos de dados críticos.
    - Monitoramento do uso do arquivo e ajuste de desempenho conforme necessário.
- **Arquivos Envolvidos:**
    * `LISTCAT.txt` (Aplicativo CardDemo: Inventário de Armazenamento de Dados)
    * `acctdata.txt` (Sistema de Gerenciamento de Cartão de Crédito - Especificação de Dados da Conta)
    * `carddata.txt` (Extração e Validação de Dados do Cartão de Crédito)
    * `cardxref.txt` (Sistema de Rastreamento de Cartão de Crédito)
    * `custdata.txt` (Sistema de Gerenciamento de Dados do Cliente)
    * `dailytran.txt` (Sistema de Processamento de Transações Diárias)
    * `discgrp.txt` (Especificação de Alocação de Grupo de Disco)
    * `tcatbal.txt` (Especificação de Relatório de Saldo da Categoria de Transação)
    * `trancatg.txt` (Sistema de Processamento de Transações com Cartão de Crédito)
    * `trantype.txt` (Tradutor de Código de Tipo de Transação)

--Made by "Smart Engineering" (by Compass.UOL)--