# Avaliação Full Stack - Carlos Cayke

Este projeto Full Stack foi desenvolvido para demonstrar habilidades no desenvolvimento de aplicações modernas, utilizando tecnologias de ponta para criar um sistema completo, para criar um encurtador de url, desde o Front-End até o Back-End.

## 📌 Funcionalidades Implementadas
- ✅ Encurtamento de URLs com redirecionamento
- ✅ Exibição de estatísticas de acessos
- ✅ Dashboard com gráficos interativos
- ✅ API documentada com Swagger
- ✅ Interface responsiva e moderna
 
## 🛠 Tecnologias Utilizadas

🌐 Front-End:
- Next.js - Framework React para aplicações modernas e performáticas.
- TailwindCSS - Biblioteca de estilização para um design responsivo e elegante.
- Recharts - Utilizado para exibição de gráficos dinâmicos e interativos.

⚙️ Back-End:
- Java com Spring Boot - Framework robusto para criação de APIs escaláveis.
- Spring Data MongoDB - Facilita a integração e manipulação do banco NoSQL.
- Lombok - Reduz a verbosidade do código através de anotações.
- Swagger - Ferramenta de documentação da API para facilitar testes e integração.

🗄 Banco de Dados:
- MongoDB - Banco de dados NoSQL escalável e eficiente.

## 🚀 Como Rodar o Projeto
📌 Pré-requisitos:
Certifique-se de ter as seguintes ferramentas instaladas no seu ambiente:

- Node.js (versão recomendada: 18+)
- NPM ou Yarn
- Java 17+
- MongoDB instalado e rodando localmente ou em um serviço como MongoDB Atlas.


# 🎨 Como Rodar o Front-End

- Clone o repositório: 
```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```
- Acesse a pasta do Front-End: 
```bash
cd frontend
```
- Instale as dependências:
```bash
npm install
```
- Execute o projeto:
```bash
npm run dev
```
- O projeto estará rodando em:
```bash
http://localhost:3000
```


# 🔧 Como Rodar o Back-End

- Acesse a pasta do Back-End:
```bash
cd shorter-url-backend
```
- Configure o MongoDB: Certifique-se de que o banco está rodando localmente, será necessário criar um database, com nome "urlshortener"
```bash
spring.data.mongodb.uri=mongodb://localhost:27017/urlshortner
```
- Compile e execute a aplicação
```bash
mvn clean install
mvn spring-boot:run
```
- O servidor estará rodando em:
```bash
http://localhost:8080
```
- Acesse a documentação Swagger:
```bash
http://localhost:8080/swagger-ui/index.html#
```


## 📜 Autor
- 👤 Carlos Cayke
- 📧 Email: carloscaykebn@gmail.com
- 🔗 LinkedIn: https://www.linkedin.com/in/carloscaykebn/

🚀 Projeto desenvolvido como parte de um desafio Full Stack.