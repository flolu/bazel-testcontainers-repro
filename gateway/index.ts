import * as express from 'express'

const app = express()

app.use('**', (_req, res) => {
  res.send('server is running\n')
})

app.listen(3000)
