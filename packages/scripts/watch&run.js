const fs = require('fs')
const { exec } = require('child_process')

const path = '/home/cz/code/work/gas-detector.git/refs/heads'
fs.watch(path, (event, filename) => {
  if (filename && event === 'change') {
    console.log('upate ~~, ', event, filename)
    exec('cd /home/cz/code/work/gas-detector && git pull && pnpm build', (error, stdout, stderr) => {
      console.log('=========== ', new Date().toLocaleString(), '  =================')
      if (error) {
        console.log(error)
        return
      }
      console.log(stdout)
      console.log(stderr)
    })
  }
})
