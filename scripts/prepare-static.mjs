import { cpSync, existsSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'

const root = process.cwd()
const outDir = resolve(root, 'out')
const buildDir = resolve(root, 'build')

if (!existsSync(outDir)) {
  throw new Error('Static export directory "out" was not generated')
}

rmSync(buildDir, { recursive: true, force: true })
cpSync(outDir, buildDir, { recursive: true })
