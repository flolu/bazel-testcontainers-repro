import axios from 'axios'
import * as path from 'path'
import {DockerComposeEnvironment} from 'testcontainers'

import {message} from './message'

describe('integration test', () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

  it('starts gateway', async () => {
    const filepath = path.join(__dirname, '../')
    const filename = 'docker-compose.json'
    const env = await new DockerComposeEnvironment(filepath, filename).up()
    const container = env.getContainer("gateway");
    const res = await axios.get(`http://${container.getHost()}:${container.getMappedPort(3000)}`)
    expect(res.data.toString()).toEqual(message)
    await env.down()
  })
})