let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*π·πΎπ»π° ππππ°ππΈπΎ ππ», ππ΄ πΈπ½ππΈππΎ π° ππ½πΈπππ΄ π° π»πΎπ πΆπππΏπΎπ πΎπ΅πΈπ²πΈπ°π»π΄π π³π΄ EIDER :D*

*β€ πΆπππππ πππππππππ πππ π±ππ:*
*1.-* https://chat.whatsapp.com/BpBbWjCpWpL0cdUIvwZyqW

*2.-* https://chat.whatsapp.com/JqnKCOeqDqXKqmAkIqvQF5

*3.-* https://discord.com/invite/Mz4rxjw

*4.-* https://discord.gg/TejzpNGfwb

*Y RECUERDA UNIRTE AL SERVER DE MINECRAFT
`.trim(), wm, media, [['π πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π» π', '#menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
