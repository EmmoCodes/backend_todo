import express from 'express'
import cors from 'cors'

const PORT = 9898
const app = express()

app.use(cors())
app.use(express.json())

const todos = []

app.get('/api/todo', (req, res) => {
  res.json(todos)
})

app.post('/api/todo', (req, res) => {
  const foundTodo = todos.find(item => {
    console.log(item)
    return item.todo === req.body.todo
  })
  if (!foundTodo) {
    todos.push(req.body)
    res.end()
  } else {
    res.end()
  }

  //todos.push(req.body)
  // console.log(todos)
  // res.end()
})
app.listen(PORT, () => console.log('Ich lausche:', PORT))
