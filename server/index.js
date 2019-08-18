const express = require('express')
const cors = require('cors')
const app = express()
const port = 3333
const rootDir = './rootDir'

import {getAllDirectoryContent} from './helpers/directory'

app.use(cors())

app.get('/', async (req, res) => {
  const files = await getAllDirectoryContent(rootDir)
  res.send(files)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
