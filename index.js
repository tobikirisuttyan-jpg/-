const { Client, GatewayIntentBits } = require('discord.js');

// Botのクライアントを作成
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,           
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent 
    ]
});

// 起動時の処理
client.once('ready', () => {
    console.log(`${client.user.tag} としてログインしました`);
});

// メッセージを受け取った時の処理
client.on('messageCreate', message => {
    // Bot自身の発言は無視する
    if (message.author.bot) return;

    // 「こんにちは」と来たら「こんにちは！」と返す
    if (message.content === 'こんにちは') {
        message.channel.send('こんにちは！');
    }
});

// 以下にトークンの貼り付け
client.login('MTQ5ODU5MDIzNDM3MDExMzU2Nw.GXmiE-.ffi0Ed3gCl3tjL-kc5N21yn4AtAyEK70Zz2L5k');
