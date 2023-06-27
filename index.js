const mineflayer = require("mineflayer");
const express = require('express');
const helmet = require("helmet");

const app = express();

app.use(helmet()); 
app.get('/', (req, res) => {
  res.send('Bot Is Ready')
});

app.listen(3000, () => {
  console.log('server started');
});

const bot = mineflayer.createBot({
    host:'BOOKMAN.aternos.me',
    port:'51155',
    username:'BOTWC',
    version:'1.18.2',
    viewDistance:'tiny'
})

function lookAtPlayer() {
    const playerfilter = e => e.type === "player"
    const player = bot.nearestEntity(playerfilter)
    if (!player) return
    const pos = player.position.offset(0,player.height, 0)
    bot.lookAt(pos)
}


bot.on("physicTick", lookAtPlayer)

bot.on('error', (err) => {
    console.log(err);
});
  
bot.on('login', () => {
    console.log('dane log in');
});
  
bot.on('end', () => {
    console.log('exit');
});