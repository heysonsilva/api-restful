const express = require('express')
const app = express()
const port = 8080
const data = require('./mock.json')

app.get('/users', (req, res) => {
  res.json(data)
})

app.get('/users/:id', (req, res) => {
  const { id } = req.params
  const user = data.find(us => us.id == id)

  if (user) {
    res.json(user)
  } else {
    res.status(404).json({message: "Usuário Não Encontrado."})
  }
})

app.post('/users', (req, res)=> {
  const {name, phone_number } = req.body
  // Salvar

  res.json({name, phone_number})
})

app.put('/users/:id', (req, res) => {
  console.log("Hello world !!!!")
})

app.delete('/users/:id', () => {
  console.log("Hello world !!")
})


app.listen(port, () => {
  console.log(`Servidor Funcionando e Ouvindo na Porta: ${port}`)
})