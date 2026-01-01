# SISTEMA DE GESTÃO HOSPITALAR E SERVIÇOS DE SAÚDE (SGHSS)

## 1 INTRODUÇÃO

O presente trabalho acadêmico tem como finalidade o desenvolvimento de um sistema web denominado **Sistema de Gestão Hospitalar e Serviços de Saúde (SGHSS)**. O projeto foi elaborado como parte das atividades do curso de **Análise e Desenvolvimento de Sistemas**, com o objetivo de aplicar, de forma prática, os conhecimentos adquiridos nas disciplinas relacionadas ao desenvolvimento front-end.

O sistema simula funcionalidades básicas de um ambiente hospitalar, permitindo o cadastro, a visualização e o gerenciamento de pacientes, além da apresentação de informações consolidadas por meio de um painel de controle (dashboard).

---

## 2 OBJETIVOS

### 2.1 Objetivo Geral

Desenvolver um sistema web funcional que simule a gestão de pacientes em um ambiente hospitalar, utilizando tecnologias front-end e armazenamento local de dados.

### 2.2 Objetivos Específicos

* Desenvolver uma interface web organizada e intuitiva;
* Implementar um sistema de autenticação simples para controle de acesso;
* Permitir o cadastro e armazenamento de dados de pacientes;
* Gerar relatórios a partir dos dados cadastrados;
* Apresentar indicadores e gráficos estatísticos em um dashboard;
* Simular um banco de dados por meio do LocalStorage.

---

## 3 JUSTIFICATIVA

A realização deste projeto justifica-se pela necessidade de consolidar os conhecimentos teóricos estudados em sala de aula, proporcionando ao aluno uma experiência prática no desenvolvimento de sistemas web. Além disso, o tema proposto aproxima o estudante de situações reais encontradas no mercado de trabalho, especialmente na área de sistemas de informação para a saúde.

---

## 4 METODOLOGIA

O desenvolvimento do SGHSS foi realizado utilizando apenas tecnologias do lado do cliente (front-end). A persistência dos dados foi simulada por meio do **LocalStorage** do navegador, eliminando a necessidade de um servidor ou banco de dados externo.

As etapas do desenvolvimento consistiram em:

* Planejamento da estrutura do sistema;
* Criação das páginas HTML;
* Estilização com CSS;
* Implementação das funcionalidades com JavaScript;
* Testes de funcionamento e validação das funcionalidades.

---

## 5 DESCRIÇÃO DO SISTEMA

### 5.1 Tela de Login

A tela inicial do sistema permite a autenticação do usuário. O acesso às demais páginas é controlado por meio de sessão armazenada no `sessionStorage`.

### 5.2 Cadastro de Pacientes

Permite o cadastro de pacientes contendo as seguintes informações:

* Nome completo;
* CPF;
* Data de nascimento;
* Telefone;
* Endereço.

Os dados são armazenados no LocalStorage, juntamente com a data do cadastro.

### 5.3 Dashboard

O dashboard apresenta indicadores gerais do sistema, tais como:

* Total de pacientes cadastrados;
* Quantidade de cadastros realizados no dia;
* Gráfico de pacientes cadastrados por mês.

Os gráficos são gerados dinamicamente utilizando a biblioteca **Chart.js**.

### 5.4 Relatórios

A página de relatórios exibe uma listagem completa dos pacientes cadastrados, permitindo também a exclusão de registros. As informações são atualizadas automaticamente após qualquer alteração.

---

## 6 TECNOLOGIAS UTILIZADAS

* HTML5 – Estruturação das páginas;
* CSS3 – Estilização e layout;
* JavaScript – Lógica de programação e manipulação do DOM;
* Chart.js – Geração de gráficos;
* LocalStorage e SessionStorage – Armazenamento local de dados e controle de sessão.

---

## 7 ESTRUTURA DO PROJETO

SGHSS/

* index.html – Página de login
* dashboard.html – Dashboard com gráficos
* cadastro.html – Cadastro de pacientes
* relatorios.html – Relatórios e exclusão de registros
* style.css – Arquivo de estilos
* README.md – Documentação do projeto

---

## 8 CONSIDERAÇÕES FINAIS

O desenvolvimento do SGHSS possibilitou a aplicação prática dos conceitos estudados durante o curso, contribuindo para o aprimoramento das habilidades técnicas do aluno. O sistema atende aos objetivos propostos e pode ser expandido futuramente com a inclusão de um banco de dados real e funcionalidades adicionais.

---

## 9 AUTORIA

VINÍCIUS SOUZA
Curso: Análise e Desenvolvimento de Sistemas
Projeto Acadêmico – 2026



Projeto concluído para fins acadêmicos.
