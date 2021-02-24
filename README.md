<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />


## Controlando Performance com React Memo, useCallback e useMemo

Nesta aula, criaremos um aplicativo que consumirá dados da API GitHub,
e com isso, seremos capazes de navegar por vários conceitos de **melhoria e análise de desempenho**,
aprenderemos como usar hooks como `useMemo` e `useCallback` a nosso favor para controlar o desempenho das nossas aplicações,
fazendo memoização de cálculos e funções pesadas, também veremos como
analisar nossa renderização com `React Developer Tools` e usar a API `Memo` do React para evitar
renderizações desnecessárias de nossos componentes, no final dessa aula, você será capaz
aplicar esses conceitos para analisar e melhorar o desempenho de seus aplicativos em react.


## Primeiros passos 🏁

Clone o repositório.

```sh
git clone https://github.com/vitormalencar/
```

`cd` no diretório.

```sh
cd react-memoization-hooks
```

Instale as dependências do projeto:

```sh
yarn install

# ou

npm install
```

Inicie o servidor de desenvolvimento:

```sh
yarn start

# ou

npm run start
```

Finalmente, vá para [localhost: 3000](http://localhost:3000) no navegador de sua escolha e você está pronto para ir 🚀.

💡 **Dica profissional** use o `App.final.js` como guia de referência final, este arquivo contém o projeto final para que você possa acompanhar.

## **Opcional** Executando o servidor localmente 📶

Se você deseja executar o servidor offline:

```sh
yarn run start:server

# ou

npm run start:server
```

Isso deve abrir um servidor local na porta `3001`, você pode testar acessando
[localhost:3001/repositories](http://localhost:3001/repositories)
se você quiser alterar os dados, pode editar o [`db.json`](./db.json) local.

Em vez de apontar para a API do github, você deve usar localhost:

```diff
# Search
-- const SEARCH = "https://api.github.com/search/repositories";
++ const SEARCH = "http://localhost:3001/repositories";

# E ao buscar os dados, use

React.useEffect(() => {
    getRepositories(query)
      .then((res) => res.json())
--      .then((data) => setItems((data &&  data.items) || []));
++      .then((data) => setItems((data &&  data[0].items) || []));
  }, [getRepositories, query]);

```

## Ferramentas 🧰

- [x] React como uma linguagem de IU
- [x] Prettier como formatador de código
- [x] JSON server como servidor local
- [x] TailwindCss UI como nosso kit de ferramentas de design

## Estrutura do Projeto 🏗

O projeto segue um esqueleto regular [create-react-app](https://github.com/facebook/create-react-app) com muito poucas modificações.

Na pasta src, temos dois diretórios principais:

- `App.js`: o lugar onde está a lógica principal para este workshop
- `Components /`: componentes reutilizados nas páginas
- `Services /`: que contém, como o nome sugere, funções de serviço de utilidade,

## Expert

| [<img src="https://avatars.githubusercontent.com/u/7741167?s=460&u=41e738d1178fcf31656665fe34c1c490d9c271cb&v=4" width="75px;"/>](https://github.com/vitormalencar) |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                          [Vitor Alencar](https://github.com/vitormalencar)                                                          |


## Licença

Projetado com ♥ por [vitormalencar](https://vitormalencar.com). Licenciado sob a [Licença MIT](licença).
