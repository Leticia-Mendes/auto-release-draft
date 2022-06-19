import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    core.setOutput('release-url', 'http://example.com')
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
