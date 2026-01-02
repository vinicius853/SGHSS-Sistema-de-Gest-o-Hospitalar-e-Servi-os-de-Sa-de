 


PROJETO MULTIDISCIPLINAR

  			Desenvolvimento 
Front- End. 


Vinicius de Souza. RU: 4633580  

RESUMO

O presente trabalho tem como objetivo o desenvolvimento de um sistema web denominado Sistema de Gestão Hospitalar e Serviços de Saúde (SGHSS), elaborado com fins acadêmicos. O sistema simula funcionalidades básicas de um ambiente hospitalar, permitindo o cadastro, gerenciamento e visualização de dados de pacientes, bem como a apresentação de informações consolidadas por meio de um painel de controle com gráficos. O desenvolvimento foi realizado utilizando tecnologias front-end, como HTML, CSS e JavaScript, com persistência de dados simulada por meio do LocalStorage do navegador. Os resultados demonstram que o sistema atende aos objetivos propostos, proporcionando uma aplicação funcional e didática.
Palavras-chave: Sistema hospitalar. Desenvolvimento web. LocalStorage. Dashboard.


















________________________________________
Sumário
RESUMO	2
1 INTRODUÇÃO	4
2 OBJETIVOS	4
2.1 Objetivo Geral	4
2.2 Objetivos Específicos	4
3 JUSTIFICATIVA	4
4 METODOLOGIA	5
5 DESCRIÇÃO DO SISTEMA	5
5.1 Fluxograma do sistema	5
5.2 Tela de Login	6
5.3 Cadastro de Pacientes	6
5.4 Dashboard	7
5.5 Relatórios	7
6 PLANO DE TESTES	7
6.1 Objetivo do Plano de Testes	7
6.2 Escopo dos Testes	8
6.3 Tipos de Testes Realizados	8
6.3.1 Testes Funcionais	8
6.3.2 Testes de Interface (UI)	8
6.3.3 Testes de Navegação	8
6.3.4 Testes de Persistência de Dados	8
6.4 Casos de Teste (Resumo)	9
6.5 Resultados Obtidos	9
6.6 Considerações sobre os Testes	9
7 TECNOLOGIAS UTILIZADAS	9
8 RESULTADOS OBTIDOS	10
9 CONSIDERAÇÕES FINAIS	10
REFERÊNCIAS	10


1 INTRODUÇÃO

A área da saúde demanda sistemas informatizados capazes de organizar informações de forma segura e eficiente. Nesse contexto, o desenvolvimento de sistemas de gestão hospitalar torna-se fundamental para o controle de dados e apoio à tomada de decisões.
O presente trabalho apresenta o desenvolvimento do Sistema de Gestão Hospitalar e Serviços de Saúde (SGHSS), criado como projeto acadêmico no curso de Análise e Desenvolvimento de Sistemas, com foco na aplicação prática dos conceitos estudados em sala de aula.
________________________________________
2 OBJETIVOS

2.1 Objetivo Geral
Desenvolver um sistema web capaz de simular a gestão de pacientes em um ambiente hospitalar, utilizando tecnologias front-end.
2.2 Objetivos Específicos
•	Desenvolver uma interface web funcional e intuitiva;
•	Implementar controle de acesso por meio de autenticação simples;
•	Permitir o cadastro e armazenamento de dados de pacientes;
•	Gerar relatórios a partir dos dados cadastrados;
•	Exibir indicadores e gráficos estatísticos em um dashboard;
•	Simular um banco de dados utilizando o LocalStorage.
________________________________________
3 JUSTIFICATIVA
A escolha do tema justifica-se pela relevância dos sistemas de informação na área da saúde, bem como pela necessidade de consolidar os conhecimentos adquiridos durante o curso. O desenvolvimento do SGHSS proporciona uma visão prática sobre a criação de sistemas web e o uso de tecnologias amplamente utilizadas no mercado.
________________________________________

4 METODOLOGIA
A metodologia adotada baseou-se no desenvolvimento incremental do sistema, utilizando as seguintes etapas: - Levantamento de requisitos; - Planejamento da estrutura do sistema; - Desenvolvimento das páginas HTML; - Estilização com CSS; - Implementação das funcionalidades com JavaScript; - Testes e validação do sistema.
A persistência de dados foi realizada por meio do LocalStorage, simulando o funcionamento de um banco de dados.
________________________________________

5 DESCRIÇÃO DO SISTEMA

5.1 Fluxograma do sistema
O fluxograma apresentado na Figura X representa o funcionamento geral do sistema SGHSS, demonstrando o fluxo de navegação do usuário desde o acesso ao sistema, validação de login, utilização das funcionalidades principais até o encerramento da sessão.
 

5.2 Tela de Login
Responsável pelo controle de acesso ao sistema, utilizando sessionStorage para manter a sessão ativa durante a navegação.
USUARIOS: MEDICO OU ADMIN, SENHA: 1234
 

5.3 Cadastro de Pacientes
Permite o cadastro de pacientes com informações pessoais, armazenadas localmente no navegador.
 





5.4 Dashboard
Apresenta indicadores gerais e gráficos estatísticos gerados dinamicamente com a biblioteca Chart.js.
 
5.5 Relatórios
Exibe a listagem dos pacientes cadastrados, possibilitando a exclusão de registros.
 
________________________________________
6 PLANO DE TESTES
6.1 Objetivo do Plano de Testes
O presente plano de testes tem como objetivo verificar o correto funcionamento das funcionalidades do sistema SGHSS – Sistema de Gestão Hospitalar e de Serviços de Saúde, garantindo que as operações implementadas no front-end atendam aos requisitos definidos, apresentem comportamento esperado e ofereçam uma boa experiência ao usuário.
Os testes realizados possuem caráter funcional e exploratório, adequados ao escopo acadêmico do projeto e à ênfase em desenvolvimento front-end.
________________________________________
6.2 Escopo dos Testes
Os testes abrangeram as seguintes funcionalidades do sistema:
•	Autenticação de usuários (login);
•	Navegação entre as páginas do sistema;
•	Cadastro de pacientes;
•	Armazenamento de dados no LocalStorage;
•	Exibição de relatórios de pacientes;
•	Exclusão de registros;
•	Visualização do dashboard e gráficos;
•	Encerramento da sessão (logout).
________________________________________
6.3 Tipos de Testes Realizados
6.3.1 Testes Funcionais
Os testes funcionais foram realizados para verificar se cada funcionalidade do sistema executa corretamente as ações para as quais foi projetada. Foram testados os formulários, botões, validações de campos e fluxos de navegação.
6.3.2 Testes de Interface (UI)
Os testes de interface tiveram como objetivo avaliar a organização visual das telas, legibilidade das informações, disposição dos elementos e consistência do layout entre as páginas do sistema.
6.3.3 Testes de Navegação
Foram realizados testes de navegação para garantir que os links do menu lateral conduzem corretamente às páginas de Dashboard, Cadastro de Pacientes, Relatórios e Logout, sem erros ou comportamentos inesperados.
6.3.4 Testes de Persistência de Dados
Os testes de persistência verificaram se os dados cadastrados permanecem armazenados após o recarregamento da página, utilizando o recurso LocalStorage do navegador, simulando um banco de dados local.
________________________________________
6.4 Casos de Teste (Resumo)
Caso de Teste	Descrição	Resultado Esperado
CT01	Login com dados válidos	Acesso ao dashboard
CT02	Login com dados inválidos	Mensagem de erro
CT03	Cadastro de paciente	Dados salvos com sucesso
CT04	Listagem de pacientes	Exibição correta no relatório
CT05	Exclusão de paciente	Registro removido do sistema
CT06	Navegação pelo menu	Redirecionamento correto
CT07	Logout	Retorno à tela de login
________________________________________
6.5 Resultados Obtidos
Após a execução dos testes, foi possível constatar que o sistema apresentou comportamento satisfatório, atendendo aos requisitos funcionais propostos. As funcionalidades principais operaram conforme esperado, demonstrando estabilidade e coerência com o escopo definido para o projeto.
________________________________________
6.6 Considerações sobre os Testes
Os testes realizados foram suficientes para validar o funcionamento do protótipo front-end do sistema SGHSS. Para trabalhos futuros, recomenda-se a implementação de testes automatizados e testes de segurança mais avançados, bem como a utilização de um banco de dados real para ampliar a confiabilidade do sistema.

7 TECNOLOGIAS UTILIZADAS
•	HTML5
•	CSS3
•	JavaScript
•	Chart.js
•	LocalStorage e SessionStorage
________________________________________


8 RESULTADOS OBTIDOS
O sistema desenvolvido apresentou funcionamento adequado, atendendo aos requisitos propostos. Foi possível realizar o cadastro de pacientes, visualizar relatórios e acompanhar indicadores por meio do dashboard.
________________________________________

9 CONSIDERAÇÕES FINAIS
Conclui-se que o desenvolvimento do SGHSS atingiu seus objetivos, proporcionando aprendizado prático e consolidando os conhecimentos adquiridos durante o curso. O sistema pode ser aprimorado futuramente com a implementação de um banco de dados real e autenticação mais robusta.
github: https://github.com/vinicius853/SGHSS-Sistema-de-Gest-o-Hospitalar-e-Servi-os-de-Sa-de 
________________________________________
REFERÊNCIAS
W3SCHOOLS. HTML Tutorial. Disponível em: https://www.w3schools.com. Acesso em: 2026.
MDN WEB DOCS. JavaScript Guide. Disponível em: https://developer.mozilla.org. Acesso em: 2026.

