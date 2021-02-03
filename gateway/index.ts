import * as express from 'express'

import {message} from './message'

const app = express()

app.use('**', (_req, res) => {
  res.send(message)
})

app.listen(3000)
