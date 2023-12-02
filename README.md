# Lean it 101

## Descrição

- Utilizei Node, TypeScript, Fastify, Vitest, Supertest e Zod
- Foi escolhido o Strategy Pattern para separar cada um dos sortings (author, edition, title e composite), juntamente com DDD, a escolha desse patern foi pelo fato da aplicação ser bem simples mesmo
- Para rodar a aplicação basta rodar `npm install`, `docker compose build` e `docker compose up -d`
- Outra opção seria rodar a aplicação seria rodar `npm install` e `npm run dev`
- Para rodar os testes unitários `npm run test`
- Para rodar os testes E2E `npm run test:e2e`
- Para poder testar mais de um tipo de sorting, por exemplo, por `author` e `title`, optei por adicionar mais dois livros a alguns testes, para fazer mais sentido o teste
- Queria utilizar o Swagger, mas não consegui fazer ele rodar com Fastify e TypeScript, precisaria de mais tempo para achar uma solução

## Screenshots

![Screenshot from 2023-12-01 22-41-10](https://github.com/bruno-fialho/lean-it-101/assets/45835631/0b7e1369-c757-487c-b6c2-a2f3dfaf9540)
![Screenshot from 2023-12-01 22-41-18](https://github.com/bruno-fialho/lean-it-101/assets/45835631/8af786dd-21b4-4f5e-8a0e-9cf6a66e0964)
