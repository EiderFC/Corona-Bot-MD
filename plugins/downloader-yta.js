let limit = 50
import fs from 'fs'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
if (!args || !args[0]) throw `*[βππππβ] πΈπ½ππ΄πππ΄ π΄π» π²πΎπΌπ°π½π³πΎ πΌπ°π π΄π» π΄π½π»π°π²π΄ / π»πΈπ½πΊ π³π΄ ππ½ ππΈπ³π΄πΎ π³π΄ ππΎππππ±π΄*`
conn.reply(m.chat, `*_β³Sα΄ α΄sα΄α΄ α΄Κα΄α΄α΄sα΄Ι΄α΄α΄ Sα΄ α΄α΄α΄Ιͺα΄...β³_*\n\n*β SΙͺ Sα΄ α΄α΄α΄Ιͺα΄ Ι΄α΄ α΄s α΄Ι΄α΄ Ιͺα΄α΄α΄, α΄Κα΄α΄Κα΄ α΄α΄Ι΄ α΄Κ α΄α΄α΄α΄Ι΄α΄α΄ #playdoc α΄ #play.1 α΄ #ytmp3doc β*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ππ΄πΏππΎπ³ππ²ππΎπ π³π΄ π°ππ³πΈπΎ',
body: 'ΚΚ corona οΉ£ Κα΄α΄',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/EiderFC/Corona-Bot-MD`}}})
let chat = global.db.data.chats[m.chat]
const isY = /y(es)/gi.test(args[1])
const { thumbnail, audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
const limitedSize = (isPrems || isOwner ? 350 : limit) * 3074
let audio, source, res, link, lastError, isLimit
for (let i in _audio) {
try {
audio = _audio[i]
isLimit = limitedSize < audio.fileSizeH
if (isLimit) continue
link = await audio.download()
if (link) res = await fetch(link)
isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
if (isLimit) continue
if (res) source = await res.arrayBuffer()
if (source instanceof ArrayBuffer) break
} catch (e) {
audio = link = source = null
lastError = e
}}
if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw '*[β] π΄πππΎπ: ' + (lastError || 'π½πΎ π΅ππ΄ πΏπΎππΈπ±π»π΄ π³π΄ππ²π°ππΆπ°π π΄π» π°ππ³πΈπΎ*')
conn.sendFile(m.chat, source, title + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i
export default handler
