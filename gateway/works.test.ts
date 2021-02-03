import * as path from 'path'
import {DockerComposeEnvironment} from 'testcontainers'

describe('integration test', () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000

  it('starts gateway without port', async () => {
    const filepath = path.join(__dirname, '../')
    const filename = 'docker-compose.works.yaml'
    const env = await new DockerComposeEnvironment(filepath, filename).up()
    const container = env.getContainer("repro_gateway-works")
    console.log(container)
    await env.down()
  })
})