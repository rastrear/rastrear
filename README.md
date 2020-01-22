# @rastrear/rastrear

## Instalando

```bash
npm i --save @rastrear/rastrear
```

## Exemplo

```javascript
const rastrear = require("@rastrear/rastrear");

rastrear
  .lastEvent("PX000000000BR")
  .then(res => {
    console.log(res.data);
    // {
    //   versao: '3.0',
    //   quantidade: '1',
    //   pesquisa: 'Lista de Objetos',
    //   resultado: 'Todos os eventos',
    //   objeto: [
    //     {
    //       numero: 'PX000000000BR',
    //       sigla: 'PX',
    //       nome: 'ENCOMENDA PAC (ETIQUETA LOGICA) ',
    //       categoria: 'ENCOMENDA PAC',
    //       evento: [Array] // apenas o último evento
    //     }
    //   ]
    // }
  })
  .catch(err => console.log(err));

rastrear
  .allEvents("PX000000000BR")
  .then(res => {
    console.log(res.data);
    // {
    //   versao: '3.0',
    //   quantidade: '1',
    //   pesquisa: 'Lista de Objetos',
    //   resultado: 'Todos os eventos',
    //   objeto: [
    //     {
    //       numero: 'PX000000000BR',
    //       sigla: 'PX',
    //       nome: 'ENCOMENDA PAC (ETIQUETA LOGICA) ',
    //       categoria: 'ENCOMENDA PAC',
    //       evento: [Array] // todos os eventos do pacote
    //     }
    //   ]
    // }
  })
  .catch(err => console.log(err));
```

> Também é possível passar um `Array` com mais de um código de rastreamento.
