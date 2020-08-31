import * as path from 'path'
import {DockerComposeEnvironment} from 'testcontainers'
import axios from 'axios'

import message from './message'

describe('integration test', () => {
  it('starts gateway', async () => {
    const filepath = path.join(__dirname, '../')
    const filename = 'docker-compose.json'
    const env = await new DockerComposeEnvironment(filepath, filename).withBuild().up()
    // make sure server is started
    await wait(3000)
    const res = await axios.get('http://localhost:3000')
    expect(res.data.toString()).toEqual(message)
    await env.down()
  })
})

function wait(ms: number) {
  return new Promise(res => {
    setTimeout(() => res(), ms)
  })
}
