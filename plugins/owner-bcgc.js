import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of groups) { 
conn.sendButton(id, `*ââââ° đđđđđđđđđđ âąâââ*\n*â*\n*â â§* ${text}\n*â*\n*ââââââââââââââââ*`, 'đđđđ đđ đđ đžđđđđđđžđŧđŋđ đđđđžđđŧđ\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['đ¤ đžđđŊđ´đ đ¤', '.owner'],['đ đŗđžđŊđ°đ đ', '.donasi']], false, { 
contextInfo: { externalAdReply: {
title: 'á´á´á´á´É´ÉĒá´á´á´á´ á´ŌÉĒá´ÉĒá´Ę á´ ÉĸĘá´á´á´s',
body: 'ĘĘ Corona īšŖ Ęá´á´', 
sourceUrl: `https://chat.whatsapp.com/BpBbWjCpWpL0cdUIvwZyqW`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*[âđđđđâ] đŧđ´đŊđđ°đšđ´ đ´đŊđđ¸đ°đŗđž đ° ${groups.length} đļđđđŋđž/đ*\n\n*đđđđ: đ´đ đŋđžđđ¸đąđģđ´ đđđ´ đđ´đŊđļđ° đĩđ°đģđģđžđ đ´đđđ´ đ˛đžđŧđ°đŊđŗđž đ đŊđž đđ´ đ´đŊđđ¸đ´ đ° đđžđŗđžđ đģđžđ đ˛đˇđ°đđ, đŗđ¸đđ˛đđģđŋđ´ đŋđžđ đ´đģ đŧđžđŧđ´đŊđđž*`)
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.rowner = true
export default handler
