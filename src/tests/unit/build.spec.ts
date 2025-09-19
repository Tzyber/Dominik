import { execSync } from 'child_process'
import { describe, it } from 'vitest'

describe('Build Process', () => {
  it('should build without errors', () => {
    // This test has a 5-minute timeout to allow the build to complete.
    execSync('npm run build', { stdio: 'inherit' })
  }, 300000)
})
