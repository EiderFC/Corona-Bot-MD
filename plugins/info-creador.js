let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
*ββ π΄π» π½ππΌπ΄ππΎ π³π΄ πΌπΈ CREADORA π΄π wa.me/34666936886*
`.trim()   
let buttonMessage= {
'document': { url: `https://youtu.be/z83vayqzht8` },
'mimetype': `application/${document}`,
'fileName': `γ  π―ππππ πΎππππ γ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://discord.com/invite/Mz4rxjw',
'mediaType': 2,
'previewType': 'pdf',
'title': 'α΄Κ α΄α΄α΄α΄Κ Κα΄α΄ α΄α΄ α΄‘Κα΄α΄sα΄α΄α΄β©',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtu.be/z83vayqzht8' }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'πΌπ΄π½π'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: 'π³πΎπ½π°π'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;EIDER π;;;\nFN:EIDER π\nORG:EIDER π\nTITLE:\nitem1.TEL;waid=34666936886:+34 666396886\nitem1.X-ABLabel:EIDER π\nX-WA-BIZ-DESCRIPTION:[β] α΄α΄Ι΄α΄α΄α΄α΄α΄ α΄ α΄sα΄α΄ Ι΄α΄α΄ α΄α΄Κα΄ α΄α΄sα΄s Ιͺα΄α΄α΄Κα΄α΄Ι΄α΄α΄s.\nX-WA-BIZ-NAME:EIDER π\nEND:VCARD`
//await conn.sendMessage(m.chat, { contacts: { displayName: 'Eider π', contacts: [{ vcard }] }}, {quoted: m})
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
