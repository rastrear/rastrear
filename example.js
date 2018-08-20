const r = require('./index')

const code = '' // ex: 'AA198862742BR'

r.lastEvent(code)
  .then(res => console.log(res.data))
  .catch(err => console.log(err))

r.allEvents(code)
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
