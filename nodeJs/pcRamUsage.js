const os = require('os')
//requimento do site - documentação NODE

setInterval(() => {
  const { arch, platform, totalmem, freemem } = os
  //objeto com os parametros que serão usados

  const tRam = totalmem() / 1024 / 1024
  const fRam = freemem() / 1024 / 1024
  //constante para transformar a informação de bytes para giga
  const usage = (fRam / fRam) * 100

  const stats = {
    OS: platform(),
    Arch: arch(),
    TotalRam: `${parseInt(tRam)} MB`,
    FreeRam: `${parseInt(tRam)} MB`,
    Usage: `${usage.toFixed(2)}%`
  }
  //objeto para acessar as informações que preciso

  console.clear()

  console.table(stats)
  //criar tabela no console
  exports.stats = stats
}, 1000)
//função para setar o tempo, a cada um segundo ela vai verificar a memória, até que tenha o comando para parar -- vou ter em tempo real como está a minha memória RAM
