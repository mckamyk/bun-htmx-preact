import {glob} from 'glob';
import chokidar from 'chokidar'
import {bundlerLog} from './logger'

const shouldWatch = Bun.argv.includes('-w') || Bun.argv.includes("--watch")

if (shouldWatch) {
  try {
    build()
    const watcher = chokidar.watch('src/frontend', {persistent: true, ignoreInitial: true})
    watcher.on('add', path => build(path, 'added'))
    watcher.on('change', path => build(path, 'updated'))
    watcher.on('unlink', path => build(path, 'deleted'))
  } catch {
    bundlerLog.error("It appears file watching is not supported yet.")
    build()
  }
} else {
  build();
}

async function build(path?: string, mode?: "added" | "updated" | "deleted") {
  if (path || mode) {
    bundlerLog.info(`${path} ${mode}`)
  }

  const files = await glob('src/frontend/**/*.component.tsx');

  const t = Date.now()

  const output = await Bun.build({
    entrypoints: files,
    outdir: 'dist',
    minify: false,
    splitting: true,
    // sourcemap: 'inline'
  })
  
  bundlerLog.info(`${output.outputs.length} components built in ${Date.now()-t}ms.`)
  output.logs.filter(l => l.level === 'error').forEach(err => {
    bundlerLog.error(`\t Build Error: ${err.position?.file}-L${err.position?.line} -- ${err.message}`)
  })
}


