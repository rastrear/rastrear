const axios = require('axios')

const r = axios.create({
  baseURL: 'https://webservice.correios.com.br/service/rest/rastro/',
  headers: { 'Content-Type': 'text/xml' }
})

const xml = (code, result) => `
  <rastroObjeto>
    <usuario>MobileXect</usuario>
    <tipo>L</tipo>
    <resultado>${result}</resultado>
    <objetos>
      ${Array.isArray(code) ? code.toString().replace(/,/g, '') : code}
    </objetos>
    <lingua>101</lingua>
  </rastroObjeto>`

/**
 * @name lastEvent
 * @description Retorna o ultimo evento do pacote
 * @param {string|array} code Código de rastreamento do produto
 * @return {Promise<object>} Promise com objeto de resposta da requisição
 */
exports.lastEvent = (code = '') => r.post('/rastroMobile', xml(code, 'U'))

/**
 * @name allEvents
 * @description Retorna todos os eventos do pacote
 * @param {string|array} code Código de rastreamento do produto
 * @return {Promise<object>} Promise com objeto de resposta da requisição
 */
exports.allEvents = (code = '') => r.post('/rastroMobile', xml(code, 'T'))
