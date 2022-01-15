const telegrambot = require('node-telegram-bot-api')
  const key = '5041436716:AAHR3LCNeBAt9hhO-qYOe88UEax6DVcydas'

  const bot = new telegrambot(key,{polling: true})

 bot.on('message',(msg)=>{
     const chatId = msg.chat.id;
     bot.sendMessage(chatId, 'Hello')
 })
