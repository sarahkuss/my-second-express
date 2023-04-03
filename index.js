import express from 'express'

const PORT = 3000

const app = express()

app.get('/', (req, res) => {
  res.send('I am index')
})

app.get('/hello', (req, res) => {
  res.send("Hello there")
})

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}...`)
})