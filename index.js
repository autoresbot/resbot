// =============================================
// VERSION UPDATE
// UPDATE TERAKHIR 23 Agustus 2024 JAM 00:00 WIB
// WEBSITE : autoresbot.com
// VERSION : 3.3.1
// =============================================

const _0x3dea8c=_0x1267;(function(_0xfa9850,_0x5c6842){const _0x5d37ea=_0x1267,_0x5df78c=_0xfa9850();while(!![]){try{const _0x1b16bf=-parseInt(_0x5d37ea(0x220))/0x1*(parseInt(_0x5d37ea(0x235))/0x2)+parseInt(_0x5d37ea(0x1b4))/0x3+-parseInt(_0x5d37ea(0x164))/0x4+parseInt(_0x5d37ea(0x177))/0x5*(-parseInt(_0x5d37ea(0x19c))/0x6)+-parseInt(_0x5d37ea(0x179))/0x7*(-parseInt(_0x5d37ea(0x257))/0x8)+parseInt(_0x5d37ea(0x21d))/0x9*(parseInt(_0x5d37ea(0x258))/0xa)+-parseInt(_0x5d37ea(0x16b))/0xb*(-parseInt(_0x5d37ea(0x247))/0xc);if(_0x1b16bf===_0x5c6842)break;else _0x5df78c['push'](_0x5df78c['shift']());}catch(_0x3ce3ea){_0x5df78c['push'](_0x5df78c['shift']());}}}(_0x34b8,0x8ddfe));const config=require(_0x3dea8c(0x203)),{default:makeWASocket,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,getAggregateVotesInPollMessage,proto}=require(_0x3dea8c(0x23e));require(_0x3dea8c(0x20a));const moment=require(_0x3dea8c(0x1ad)),fs=require('fs'),https=require('https'),util=require(_0x3dea8c(0x1ed)),unlinkAsync=util[_0x3dea8c(0x183)](fs['unlink']),pino=require(_0x3dea8c(0x25a)),chalk=require('chalk'),path=require(_0x3dea8c(0x162)),readline=require(_0x3dea8c(0x1f7)),axios=require(_0x3dea8c(0x246)),FileType=require(_0x3dea8c(0x1de)),yargs=require(_0x3dea8c(0x25d)),_=require(_0x3dea8c(0x1fa)),{Boom}=require(_0x3dea8c(0x186)),{generateImage}=require('./App/canvas_resbot/resbot_module.js'),PhoneNumber=require(_0x3dea8c(0x196)),figlet=require('figlet');let {UploadFileUgu,webp2mp4File,TelegraPh}=require('./App/lib/uploader');const usePairingCode=!![],jammenit=moment()['tz']('Asia/Jakarta')[_0x3dea8c(0x1e5)]('HH:mm');let fulltext;function _0x1267(_0x233009,_0x34807d){const _0x34b8b8=_0x34b8();return _0x1267=function(_0x126757,_0x17ff0d){_0x126757=_0x126757-0x162;let _0x207077=_0x34b8b8[_0x126757];return _0x207077;},_0x1267(_0x233009,_0x34807d);}const {imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require('./App/lib/exif'),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require(_0x3dea8c(0x18b)),question=_0x5c8a68=>{const _0x42404a=_0x3dea8c,_0x34b6d0=readline[_0x42404a(0x1c1)]({'input':process['stdin'],'output':process[_0x42404a(0x23c)]});return new Promise(_0x15a11b=>{const _0x21b531=_0x42404a;_0x34b6d0[_0x21b531(0x24a)](_0x5c8a68,_0x15a11b);});};function readJsonFile(_0x33c137){const _0x45ba7a=_0x3dea8c;try{const _0x390d4c=fs[_0x45ba7a(0x1e2)](_0x33c137);return JSON['parse'](_0x390d4c);}catch(_0xa696c2){return{};}}var low;try{low=require(_0x3dea8c(0x21f));}catch(_0x37794f){low=require(_0x3dea8c(0x264));}const {Low:Low,JSONFile:JSONFile}=low,mongoDB=require(_0x3dea8c(0x22d)),storeLogger=pino({'level':'info','destination':fs[_0x3dea8c(0x1e1)](_0x3dea8c(0x184),{'flags':'a'})}),store=makeInMemoryStore({'logger':storeLogger}),color=(_0x5c2742,_0x23a31a)=>_0x23a31a?chalk[_0x3dea8c(0x1e6)](_0x23a31a)(_0x5c2742):chalk[_0x3dea8c(0x249)](_0x5c2742);global[_0x3dea8c(0x1d1)]=new Object(yargs(process[_0x3dea8c(0x194)][_0x3dea8c(0x243)](0x2))[_0x3dea8c(0x1c5)](!0x1)[_0x3dea8c(0x190)]()),global['db']=new Low(/https?:\/\//[_0x3dea8c(0x204)](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb/[_0x3dea8c(0x204)](opts['db'])?new mongoDB(opts['db']):new JSONFile(_0x3dea8c(0x16e))),global[_0x3dea8c(0x22f)]=global['db'],global[_0x3dea8c(0x1a0)]=async function(){const _0x595c43=_0x3dea8c;if(global['db'][_0x595c43(0x1a6)])return new Promise(_0x195dd5=>setInterval(function(){const _0x2fac5c=_0x595c43;!global['db'][_0x2fac5c(0x1a6)]&&(clearInterval(this),_0x195dd5(null==global['db']['data']?global[_0x2fac5c(0x1a0)]():global['db'][_0x2fac5c(0x1b6)]));},0x3e8));null===global['db'][_0x595c43(0x1b6)]&&(global['db']['READ']=!0x0,await global['db'][_0x595c43(0x1f4)](),global['db'][_0x595c43(0x1a6)]=!0x1,global['db']['data']={'users':{},'chats':{},'game':{},'database':{},'settings':{},'setting':{},'others':{},'sticker':{},...global['db'][_0x595c43(0x1b6)]||{}},global['db']['chain']=_[_0x595c43(0x256)](global['db'][_0x595c43(0x1b6)]));},loadDatabase(),global['db']&&setInterval(async()=>{const _0x213822=_0x3dea8c;global['db'][_0x213822(0x1b6)]&&await global['db'][_0x213822(0x1f8)]();},0x7530);function hapusFileDenganEkstensi(_0x1a761a,_0x835667){fs['readdir'](_0x1a761a,(_0x338496,_0x2210d9)=>{const _0x13539b=_0x1267;_0x338496?console[_0x13539b(0x1f9)](_0x13539b(0x1bf),_0x338496):_0x2210d9['forEach'](_0x11b8e4=>{const _0xeab8f8=_0x13539b;_0x11b8e4['endsWith'](_0x835667)&&(fs['unlinkSync'](path[_0xeab8f8(0x201)](_0x1a761a,_0x11b8e4)),console[_0xeab8f8(0x1a3)](_0xeab8f8(0x19b)+_0x11b8e4));});});}const ekstensiYangDihapus=[_0x3dea8c(0x253),_0x3dea8c(0x205),_0x3dea8c(0x199),_0x3dea8c(0x1ff),_0x3dea8c(0x1d6),_0x3dea8c(0x1f2)];function _0x34b8(){const _0x1b73d5=['promote','connectionLost','message','sendTextWithMentions','silent','messages','1348530dqucnE','PhoneNumber:\x20','data','STATUS\x20BOT\x20CONNECTED','mtype','Restart\x20Required,\x20Restarting...','welcome2.png','Gagal\x20mengunduh\x20file:\x20','20.0.04','author','finish','Gagal\x20membaca\x20direktori:','copyNForward','createInterface','timedOut','promises','\x1b[4m','exitProcess','readFile','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','parseMention','sendContact','restaring.txt','video','name','image','@desc','\x20KAMU\x20AKAN\x20DI\x20*BLOCK*\x20\x0a\x0aSilakan\x20Hubungi\x20Owner\x20Untuk\x20Membuat\x20Block\x20!\x0aWebsite\x20:\x20autoresbot.com/contact','\x1b[0m','opts','server','asDocument','alloc','badSession','.mp4','serializeM','registered','@broadcast','bold','messages.upsert','redBright','exit','file-type','desc','loggedOut','createWriteStream','readFileSync','@NAME','call','format','keyword','trim','\x1b[8m','ERROR\x20','mkdirSync','viewOnce','yellow','util','replace','image/webp','creds.update','.\x20\x0aMAAF\x20@','webp','WhatsApp','read','international','contextInfo','readline','write','error','lodash','pipe','authState','\x1b[30m','\x1b[37m','.mp3','downloadMediaMessage','join','sticker','./resconfig','test','.png','Storage/src/','requestPairingCode','isBuffer','getFile','./ac','document','public','watchFile','contacts.update','status','repeat','@DESC','output','categories','resolve','conversation','ignore','demote','cache','\x1b[32m','existsSync','writeFile','@GROUP','846JgSmJw','\x0aitem1.X-ABLabel:Ponsel\x0aitem2.EMAIL;type=INTERNET:aplusscell@gmail.com\x0aitem2.X-ABLabel:Email\x0aitem3.URL:https://chat.whatsapp.com/HbCl8qf3KQK1MEp3ZBBpSf\x0aitem3.X-ABLabel:Instagram\x0aitem4.ADR:;;Indonesia;;;;\x0aitem4.X-ABLabel:Region\x0aEND:VCARD','lowdb','73537MAEkRn','@s.whatsapp.net','connection.update','participants','fromMe','includes','concat','Ubuntu','statusCode','text','pollCreationMessageV3','participant','packname','./App/lib/mongoDB','pollCreationMessageV2','DATABASE','utf8','verifiedName','sendText','./App/lib/sticker.js','relayMessage','16wDPVUG','BOT\x20TIDAK\x20DAPAT\x20MENERIMA\x20PANGGILAN\x20','./autoresbot','Masukan\x20Nomer\x20Yang\x20Aktif\x20(Awali\x20Dengan\x20628)\x20:\x0a','writeFileSync','group-participants.update','greenBright','stdout','Bad\x20Session\x20File,\x20Please\x20Delete\x20Folder\x20Storage/session\x20and\x20Start\x20Again','@whiskeysockets/baileys','\x1b[5m','asSticker','user','decodeJid','slice','\x0aitem1.TEL;waid=','\x1b[1m','axios','12veXOuP','key','green','question','remoteJid','groupMetadata','readViewOnce','SUARA','\x1b[31m','./cache/','close','map','.gif','Storage/session','split','chain','8NOImLs','104530HTAWQT','typeWelcome','pino','unlink','https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60','yargs/yargs','from','reset','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','resbot_version','viewOnceMessage','ephemeralMessage','./App/lib/lowdb','path','isVideo','1852440oiRVaR','cMod','msg','string','WebMessageInfo','creds','notify','1339822HuNLVi','@name','contacts','App/src/database.json','\x0aFN:','./Storage/db/left.json','base64','caption','sendMessage','.bin','./Storage/db/db_antipolling.json','Unknown\x20DisconnectReason:\x20','195gZIGbG','anticall','6389334jnBCVJ','examplefile.jpg','./Storage/db/welcome.json','ext','audio','offer','viewOnceMessageV2','downloadAndSaveMediaMessage','getName','\x1b[34m','promisify','Storage/app.log','pollCreationMessage','@hapi/boom','_Bot\x20Berhasil\x20Di\x20Restart\x20!_','status@broadcast','subject','matchAll','./App/lib/myfunc','\x1b[2m','Pairing\x20code:\x20','endsWith','remove','parse','get','welcome1.png','block','argv','isArray','awesome-phonenumber','utf-8','withoutContact','.jpg','keys','Berhasil\x20menghapus\x20file:\x20','128328qmxBEr','connectionClosed','connectionReplaced','length','loadDatabase','updateBlockStatus','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Restart\x20Bot','log','application/octet-stream','OFF','READ','action','fromBuffer','open','add','profilePictureUrl','sendImage','moment-timezone'];_0x34b8=function(){return _0x1b73d5;};return _0x34b8();}ekstensiYangDihapus['forEach'](_0x3000c8=>{hapusFileDenganEkstensi(__dirname,_0x3000c8);});async function downloadFile(_0x567031,_0x551730,_0xa12063){return new Promise((_0x3de7d6,_0xa0e1ab)=>{const _0x26cca5=_0x1267;fs[_0x26cca5(0x21a)](_0x551730)||fs[_0x26cca5(0x1ea)](_0x551730);const _0x5ede92=path[_0x26cca5(0x201)](_0x551730,_0xa12063),_0x4e5003=fs['createWriteStream'](_0x5ede92);https[_0x26cca5(0x191)](_0x567031,_0x37988d=>{const _0x37b632=_0x26cca5;_0x37988d[_0x37b632(0x1fb)](_0x4e5003)['on'](_0x37b632(0x1be),()=>{_0x4e5003['close'](),_0x3de7d6(_0x5ede92);})['on']('error',_0x4c5d60=>{const _0x134b9a=_0x37b632;fs[_0x134b9a(0x25b)](_0x5ede92,()=>_0xa0e1ab(_0x134b9a(0x1bb)+_0x4c5d60[_0x134b9a(0x1b0)]));});});});}async function processAndDeleteFile(_0x5e2ccc){const _0x8308a8=_0x3dea8c;try{const _0x3d96c9=await downloadFile(_0x5e2ccc,_0x8308a8(0x250),_0x8308a8(0x17a));let _0x16c76c=await TelegraPh('./'+_0x3d96c9),_0x53b3f5=_0x16c76c;return _0x16c76c&&await unlinkAsync(_0x3d96c9),_0x53b3f5;}catch(_0x152dee){throw _0x152dee;}}function colorfulConsoleLog(_0x5a7ba0,_0x419b3e){const _0x3a617c=_0x3dea8c,_0x6ad31c={'reset':_0x3a617c(0x1d0),'bright':_0x3a617c(0x245),'dim':_0x3a617c(0x18c),'underscore':_0x3a617c(0x1c4),'blink':_0x3a617c(0x23f),'reverse':'\x1b[7m','hidden':_0x3a617c(0x1e8),'black':_0x3a617c(0x1fd),'red':_0x3a617c(0x24f),'green':_0x3a617c(0x219),'yellow':'\x1b[33m','blue':_0x3a617c(0x182),'magenta':'\x1b[35m','cyan':'\x1b[36m','white':_0x3a617c(0x1fe)},_0x1dc36c=process['stdout']['columns']||_0x5a7ba0[_0x3a617c(0x19f)]+0x4,_0x157c7b='='['repeat'](_0x1dc36c),_0x3d7e6c='_'[_0x3a617c(0x210)](_0x1dc36c);console[_0x3a617c(0x1a3)](''+_0x6ad31c[_0x419b3e]+_0x6ad31c[_0x3a617c(0x25f)]+'\x0a'),console['log'](''+_0x6ad31c[_0x419b3e]+_0x157c7b),console[_0x3a617c(0x1a3)](_0x6ad31c[_0x419b3e]+'|\x20'+_0x5a7ba0+'\x20|'),console[_0x3a617c(0x1a3)](''+_0x6ad31c[_0x419b3e]+_0x157c7b+_0x6ad31c[_0x3a617c(0x25f)]),console[_0x3a617c(0x1a3)](''+_0x6ad31c[_0x419b3e]+_0x6ad31c['reset']+'\x0a');}colorfulConsoleLog(config[_0x3dea8c(0x261)],_0x3dea8c(0x1ec));async function connectToWhatsApp(){const _0x4818de=_0x3dea8c,{state:_0x31751b,saveCreds:_0x3af02d}=await useMultiFileAuthState(_0x4818de(0x254)),_0x11f4e3=makeWASocket({'logger':pino({'level':_0x4818de(0x1b2)}),'printQRInTerminal':![],'auth':_0x31751b,'connectTimeoutMs':0x1770,'defaultQueryTimeoutMs':0x0,'keepAliveIntervalMs':0x2710,'emitOwnEvents':!![],'fireInitQueries':!![],'generateHighQualityLinkPreview':!![],'syncFullHistory':!![],'markOnlineOnConnect':!![],'browser':[_0x4818de(0x227),'Chrome',_0x4818de(0x1bc)]});if(usePairingCode&&!_0x11f4e3[_0x4818de(0x1fc)][_0x4818de(0x169)][_0x4818de(0x1d8)]){const _0xa63777=await question(_0x4818de(0x238)),_0x3109d2=await _0x11f4e3[_0x4818de(0x207)](_0xa63777[_0x4818de(0x1e7)]());console[_0x4818de(0x1a3)](_0x4818de(0x1b5)+_0xa63777),console[_0x4818de(0x1a3)](_0x4818de(0x18d)+_0x3109d2);}return _0x11f4e3[_0x4818de(0x242)]=_0x4fceb7=>{const _0x579500=_0x4818de;if(!_0x4fceb7)return _0x4fceb7;if(/:\d+@/gi[_0x579500(0x204)](_0x4fceb7)){let _0x37b4ef=jidDecode(_0x4fceb7)||{};return _0x37b4ef[_0x579500(0x241)]&&_0x37b4ef[_0x579500(0x1d2)]&&_0x37b4ef['user']+'@'+_0x37b4ef['server']||_0x4fceb7;}return _0x4fceb7;},_0x11f4e3['ev']['on'](_0x4818de(0x1db),async _0x55fc03=>{const _0x2c6db1=_0x4818de;try{chatinfo=_0x55fc03[_0x2c6db1(0x1b3)][0x0];if(chatinfo['message']&&(chatinfo[_0x2c6db1(0x1b0)][_0x2c6db1(0x22a)]||chatinfo[_0x2c6db1(0x1b0)][_0x2c6db1(0x22e)]||chatinfo['message'][_0x2c6db1(0x185)])){const _0x4dcdae=readJsonFile(_0x2c6db1(0x175));if(_0x4dcdae[_0x2c6db1(0x225)](chatinfo['key'][_0x2c6db1(0x24b)]))return _0x11f4e3[_0x2c6db1(0x173)](chatinfo[_0x2c6db1(0x248)][_0x2c6db1(0x24b)],{'delete':chatinfo['key']});}if(chatinfo&&chatinfo[_0x2c6db1(0x1b0)]){const _0x529e20=Object[_0x2c6db1(0x19a)](chatinfo['message']);_0x529e20[0x0]===_0x2c6db1(0x263)&&(chatinfo[_0x2c6db1(0x1b0)]=chatinfo[_0x2c6db1(0x1b0)][_0x2c6db1(0x263)]['message']),_0x529e20[0x0]===_0x2c6db1(0x17f)&&(chatinfo[_0x2c6db1(0x1b0)]=chatinfo[_0x2c6db1(0x1b0)][_0x2c6db1(0x17f)]['message']);}if(chatinfo[_0x2c6db1(0x248)]&&chatinfo[_0x2c6db1(0x248)][_0x2c6db1(0x24b)]===_0x2c6db1(0x188))return;if(!_0x11f4e3[_0x2c6db1(0x20c)]&&!chatinfo[_0x2c6db1(0x248)][_0x2c6db1(0x224)]&&_0x55fc03['type']===_0x2c6db1(0x16a))return;if(!chatinfo[_0x2c6db1(0x1b0)])return;m=smsg(_0x11f4e3,chatinfo,store),require(_0x2c6db1(0x237))(_0x11f4e3,m,_0x55fc03,store);}catch(_0x12c359){console[_0x2c6db1(0x1a3)](_0x12c359);}}),config[_0x4818de(0x178)]&&_0x11f4e3['ev']['on'](_0x4818de(0x1e4),async _0x5b6cd8=>{const _0x92cfe6=_0x4818de;await _0x11f4e3[_0x92cfe6(0x242)](_0x11f4e3['user']['id']);for(let _0x594418 of _0x5b6cd8)0x0==_0x594418['isGroup']&&_0x92cfe6(0x17e)==_0x594418['status']&&(await _0x11f4e3[_0x92cfe6(0x1b1)](_0x594418[_0x92cfe6(0x25e)],_0x92cfe6(0x236)+(_0x594418[_0x92cfe6(0x163)]?'VIDEO':_0x92cfe6(0x24e))+_0x92cfe6(0x1f1)+_0x594418[_0x92cfe6(0x25e)][_0x92cfe6(0x255)]('@')[0x0]+_0x92cfe6(0x1cf)),(await sleep(0xfa0),await _0x11f4e3[_0x92cfe6(0x1a1)](_0x594418[_0x92cfe6(0x25e)],_0x92cfe6(0x193))));}),_0x11f4e3['ev']['on'](_0x4818de(0x23a),async _0x412c14=>{const _0x116980=_0x4818de;try{let _0x427b8a=await _0x11f4e3[_0x116980(0x24c)](_0x412c14['id']),_0x3989c4=_0x412c14[_0x116980(0x223)];for(let _0x7023a1 of _0x3989c4){const _0x258c87='@'+_0x7023a1[_0x116980(0x255)]('@')[0x0];if(_0x7023a1==_0x412c14[_0x116980(0x223)][0x0])try{ppuser=await _0x11f4e3[_0x116980(0x1ab)](_0x7023a1,_0x116980(0x1cd)),pushname_=await _0x11f4e3[_0x116980(0x181)](_0x7023a1);}catch(_0x21c8ce){console['log'](_0x21c8ce),ppuser=_0x116980(0x25c),pushname_=_0x258c87;}async function _0x29c99e(_0x15f0c5,_0x21d9d5){try{return await generateImage(_0x15f0c5,ppuser,_0x21d9d5);}catch(_0x533695){throw console['error']('Error\x20generating\x20image:',_0x533695),_0x533695;}}try{ppgroup=await _0x11f4e3[_0x116980(0x1ab)](_0x412c14['id'],_0x116980(0x1cd));}catch{ppgroup='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';}if(_0x412c14[_0x116980(0x1a7)]==_0x116980(0x1aa)){const _0x496cb3=JSON[_0x116980(0x190)](fs[_0x116980(0x1e2)](_0x116980(0x17b),'utf-8'))||{};let _0x3b8f74=_0x116980(0x1a5);if(Array[_0x116980(0x195)](_0x496cb3[_0x412c14['id']])&&_0x496cb3[_0x412c14['id']][0x0][_0x116980(0x20f)]=='on'){_0x3b8f74='ON';let _0x30a117=_0x496cb3[_0x412c14['id']][0x0]['text'][_0x116980(0x1ee)](_0x116980(0x1e3),pushname_)[_0x116980(0x1ee)](_0x116980(0x16c),pushname_)[_0x116980(0x1ee)](_0x116980(0x21c),_0x427b8a[_0x116980(0x189)])[_0x116980(0x1ee)]('@group',_0x427b8a[_0x116980(0x189)])['replace'](_0x116980(0x211),_0x427b8a[_0x116980(0x1df)])['replace'](_0x116980(0x1ce),_0x427b8a['desc']);if(config['typeWelcome']==0x1)try{const _0x3be053=await _0x29c99e(pushname_,_0x116980(0x192));_0x11f4e3[_0x116980(0x173)](_0x412c14['id'],{'image':_0x3be053,'caption':_0x30a117,'mentions':[_0x7023a1]});}catch(_0x456b0f){console[_0x116980(0x1f9)](_0x456b0f);}else{if(config[_0x116980(0x259)]==0x2)try{const _0x461334=await _0x29c99e(pushname_,_0x116980(0x1ba));_0x11f4e3['sendMessage'](_0x412c14['id'],{'image':_0x461334,'caption':_0x30a117,'mentions':[_0x7023a1]});}catch(_0x485aed){console['error'](_0x485aed);}else config[_0x116980(0x259)]==0x3&&_0x11f4e3[_0x116980(0x173)](_0x412c14['id'],{'text':_0x30a117,'mentions':[_0x7023a1]});}}}else{if(_0x412c14[_0x116980(0x1a7)]==_0x116980(0x18f)){const _0xe079c5=JSON[_0x116980(0x190)](fs[_0x116980(0x1e2)](_0x116980(0x170),_0x116980(0x197)))||{};let _0x1c87f6='OFF';if(Array[_0x116980(0x195)](_0xe079c5[_0x412c14['id']])&&'on'==_0xe079c5[_0x412c14['id']][0x0]['status']){_0x1c87f6='ON';let _0x3da313=_0xe079c5[_0x412c14['id']][0x0]['text']['replace'](_0x116980(0x1e3),_0x258c87)[_0x116980(0x1ee)](_0x116980(0x21c),_0x427b8a['subject']);_0x11f4e3['sendMessage'](_0x412c14['id'],{'text':_0x3da313,'mentions':[_0x7023a1]});}}else{if(_0x412c14[_0x116980(0x1a7)]==_0x116980(0x1ae)){}else{if(_0x412c14[_0x116980(0x1a7)]==_0x116980(0x217)){}}}}}}catch(_0x199228){console[_0x116980(0x1a3)](chalk[_0x116980(0x1dc)][_0x116980(0x1da)](_0x116980(0x1e9)+_0x199228));}}),_0x11f4e3['ev']['on'](_0x4818de(0x20e),_0x174807=>{const _0x2e24ab=_0x4818de;for(let _0x3ecbcb of _0x174807){let _0x3abccc=_0x11f4e3[_0x2e24ab(0x242)](_0x3ecbcb['id']);store&&store[_0x2e24ab(0x16d)]&&(store[_0x2e24ab(0x16d)][_0x3abccc]={'id':_0x3abccc,'name':_0x3ecbcb[_0x2e24ab(0x16a)]});}}),_0x11f4e3[_0x4818de(0x181)]=(_0x50f18c,_0x127d5b=!0x1)=>{const _0x4b4e8b=_0x4818de;let _0x1e984d;return id=_0x11f4e3[_0x4b4e8b(0x242)](_0x50f18c),_0x127d5b=_0x11f4e3[_0x4b4e8b(0x198)]||_0x127d5b,id[_0x4b4e8b(0x18e)]('@g.us')?new Promise(async _0x5d6752=>{const _0x4d8e18=_0x4b4e8b;_0x1e984d=store['contacts'][id]||{},_0x1e984d[_0x4d8e18(0x1cc)]||_0x1e984d[_0x4d8e18(0x189)]||(_0x1e984d=_0x11f4e3[_0x4d8e18(0x24c)](id)||{}),_0x5d6752(_0x1e984d[_0x4d8e18(0x1cc)]||_0x1e984d[_0x4d8e18(0x189)]||PhoneNumber('+'+id[_0x4d8e18(0x1ee)](_0x4d8e18(0x221),''))['getNumber'](_0x4d8e18(0x1f5)));}):(_0x1e984d='0@s.whatsapp.net'===id?{'id':id,'name':_0x4b4e8b(0x1f3)}:id===_0x11f4e3[_0x4b4e8b(0x242)](_0x11f4e3[_0x4b4e8b(0x241)]['id'])?_0x11f4e3[_0x4b4e8b(0x241)]:store['contacts'][id]||{},(_0x127d5b?'':_0x1e984d['name'])||_0x1e984d[_0x4b4e8b(0x189)]||_0x1e984d[_0x4b4e8b(0x231)]||PhoneNumber('+'+_0x50f18c[_0x4b4e8b(0x1ee)](_0x4b4e8b(0x221),''))['getNumber'](_0x4b4e8b(0x1f5)));},(_0x11f4e3[_0x4818de(0x1c9)]=async(_0x4a3071,_0x57d5e6,_0x5e14af='',_0x512ee7={})=>{const _0x3280c8=_0x4818de;let _0x149a7f=[];for(let _0x3938f5 of _0x57d5e6)_0x149a7f['push']({'displayName':await _0x11f4e3[_0x3280c8(0x181)](_0x3938f5+_0x3280c8(0x221)),'vcard':_0x3280c8(0x1c7)+await _0x11f4e3[_0x3280c8(0x181)](_0x3938f5+_0x3280c8(0x221))+_0x3280c8(0x16f)+await _0x11f4e3[_0x3280c8(0x181)](_0x3938f5+_0x3280c8(0x221))+_0x3280c8(0x244)+_0x3938f5+':'+_0x3938f5+_0x3280c8(0x21e)});_0x11f4e3[_0x3280c8(0x173)](_0x4a3071,{'contacts':{'displayName':_0x149a7f[_0x3280c8(0x19f)]+'\x20Kontak','contacts':_0x149a7f},..._0x512ee7},{'quoted':_0x5e14af});},_0x11f4e3[_0x4818de(0x20c)]=!0x0,_0x11f4e3['ev']['on'](_0x4818de(0x1f0),_0x3af02d)),_0x11f4e3[_0x4818de(0x200)]=async _0xd7a217=>{const _0x57ac6c=_0x4818de;let _0x358b01=(_0xd7a217['msg']||_0xd7a217)['mimetype']||'',_0x4a278c=_0xd7a217[_0x57ac6c(0x1b8)]?_0xd7a217[_0x57ac6c(0x1b8)][_0x57ac6c(0x1ee)](/Message/gi,''):_0x358b01[_0x57ac6c(0x255)]('/')[0x0];const _0xad7041=await downloadContentFromMessage(_0xd7a217,_0x4a278c);let _0x18ca6f=Buffer[_0x57ac6c(0x25e)]([]);for await(const _0x5d7e85 of _0xad7041)_0x18ca6f=Buffer[_0x57ac6c(0x226)]([_0x18ca6f,_0x5d7e85]);return _0x18ca6f;},_0x11f4e3[_0x4818de(0x1ac)]=async(_0x7da229,_0x83440c,_0x796b20='',_0x3ee84f='',_0xe394d3)=>{const _0x4fb634=_0x4818de;let _0x17d521=Buffer[_0x4fb634(0x208)](_0x83440c)?_0x83440c:/^data:.*?\/.*?;base64,/i[_0x4fb634(0x204)](_0x83440c)?Buffer[_0x4fb634(0x25e)](_0x83440c['split']`,`[0x1],'base64'):/^https?:\/\//['test'](_0x83440c)?await await getBuffer(_0x83440c):fs[_0x4fb634(0x21a)](_0x83440c)?fs[_0x4fb634(0x1e2)](_0x83440c):Buffer[_0x4fb634(0x1d4)](0x0);return await _0x11f4e3[_0x4fb634(0x173)](_0x7da229,{'image':_0x17d521,'caption':_0x796b20,..._0xe394d3},{'quoted':_0x3ee84f});},_0x11f4e3[_0x4818de(0x232)]=(_0x545ca3,_0x31480d,_0xa57501='',_0x59584a)=>_0x11f4e3['sendMessage'](_0x545ca3,{'text':_0x31480d,..._0x59584a},{'quoted':_0xa57501}),_0x11f4e3[_0x4818de(0x1b1)]=async(_0x31a474,_0x1963db,_0x391ac9,_0x47f0c7={})=>_0x11f4e3[_0x4818de(0x173)](_0x31a474,{'text':_0x1963db,'contextInfo':{'mentionedJid':[..._0x1963db[_0x4818de(0x18a)](/@(\d{0,16})/g)][_0x4818de(0x252)](_0x15b0d0=>_0x15b0d0[0x1]+_0x4818de(0x221))},..._0x47f0c7},{'quoted':_0x391ac9}),_0x11f4e3['sendImageAsSticker']=async(_0x1383c1,_0x42a816,_0x16bf86,_0x21a276={})=>{const _0x1ce823=_0x4818de;let _0x3a3de3,_0x1322f9=Buffer[_0x1ce823(0x208)](_0x42a816)?_0x42a816:/^data:.*?\/.*?;base64,/i[_0x1ce823(0x204)](_0x42a816)?Buffer[_0x1ce823(0x25e)](_0x42a816[_0x1ce823(0x255)]`,`[0x1],_0x1ce823(0x171)):/^https?:\/\//[_0x1ce823(0x204)](_0x42a816)?await await getBuffer(_0x42a816):fs['existsSync'](_0x42a816)?fs[_0x1ce823(0x1e2)](_0x42a816):Buffer['alloc'](0x0);return _0x3a3de3=_0x21a276&&(_0x21a276[_0x1ce823(0x22c)]||_0x21a276[_0x1ce823(0x1bd)])?await writeExifImg(_0x1322f9,_0x21a276):await imageToWebp(_0x1322f9),await _0x11f4e3['sendMessage'](_0x1383c1,{'sticker':{'url':_0x3a3de3},..._0x21a276},{'quoted':_0x16bf86}),_0x3a3de3;},_0x11f4e3['sendVideoAsSticker']=async(_0x5de2d3,_0x59a0c6,_0x224b97,_0x204fef={})=>{const _0x5d7680=_0x4818de;let _0x1bd9ca,_0x514744=Buffer[_0x5d7680(0x208)](_0x59a0c6)?_0x59a0c6:/^data:.*?\/.*?;base64,/i[_0x5d7680(0x204)](_0x59a0c6)?Buffer[_0x5d7680(0x25e)](_0x59a0c6['split']`,`[0x1],'base64'):/^https?:\/\//[_0x5d7680(0x204)](_0x59a0c6)?await await getBuffer(_0x59a0c6):fs[_0x5d7680(0x21a)](_0x59a0c6)?fs[_0x5d7680(0x1e2)](_0x59a0c6):Buffer['alloc'](0x0);return _0x1bd9ca=_0x204fef&&(_0x204fef[_0x5d7680(0x22c)]||_0x204fef[_0x5d7680(0x1bd)])?await writeExifVid(_0x514744,_0x204fef):await videoToWebp(_0x514744),await _0x11f4e3['sendMessage'](_0x5de2d3,{'sticker':{'url':_0x1bd9ca},..._0x204fef},{'quoted':_0x224b97}),_0x1bd9ca;},_0x11f4e3[_0x4818de(0x180)]=async(_0x21d3d4,_0x1b93f4,_0x29b2c3=!0x0)=>{const _0x2b0adf=_0x4818de;let _0x5dee77=_0x21d3d4[_0x2b0adf(0x166)]?_0x21d3d4[_0x2b0adf(0x166)]:_0x21d3d4,_0x1cacd4=(_0x21d3d4[_0x2b0adf(0x166)]||_0x21d3d4)['mimetype']||'',_0x3d1118=_0x21d3d4['mtype']?_0x21d3d4[_0x2b0adf(0x1b8)]['replace'](/Message/gi,''):_0x1cacd4[_0x2b0adf(0x255)]('/')[0x0];const _0x5ef657=await downloadContentFromMessage(_0x5dee77,_0x3d1118);let _0x378958=Buffer[_0x2b0adf(0x25e)]([]);for await(const _0x4e7b1 of _0x5ef657)_0x378958=Buffer['concat']([_0x378958,_0x4e7b1]);let _0x18617e=await FileType[_0x2b0adf(0x1a8)](_0x378958);return trueFileName=_0x29b2c3?_0x1b93f4+'.'+_0x18617e[_0x2b0adf(0x17c)]:_0x1b93f4,await fs[_0x2b0adf(0x239)](trueFileName,_0x378958),trueFileName;},_0x11f4e3[_0x4818de(0x165)]=(_0x23dc99,_0x298021,_0x4c50c6='',_0x38e965=_0x11f4e3[_0x4818de(0x241)]['id'],_0x4a4339={})=>{const _0x32d64e=_0x4818de;let _0x2141a4=Object[_0x32d64e(0x19a)](_0x298021[_0x32d64e(0x1b0)])[0x0],_0x3a76b1=_0x32d64e(0x263)===_0x2141a4;_0x3a76b1&&(_0x2141a4=Object[_0x32d64e(0x19a)](_0x298021['message'][_0x32d64e(0x263)][_0x32d64e(0x1b0)])[0x0]);let _0x483301=_0x3a76b1?_0x298021[_0x32d64e(0x1b0)][_0x32d64e(0x263)][_0x32d64e(0x1b0)]:_0x298021[_0x32d64e(0x1b0)],_0x354aac=_0x483301[_0x2141a4];return _0x32d64e(0x167)==typeof _0x354aac?_0x483301[_0x2141a4]=_0x4c50c6||_0x354aac:_0x354aac[_0x32d64e(0x172)]?_0x354aac[_0x32d64e(0x172)]=_0x4c50c6||_0x354aac[_0x32d64e(0x172)]:_0x354aac[_0x32d64e(0x229)]&&(_0x354aac[_0x32d64e(0x229)]=_0x4c50c6||_0x354aac['text']),'string'!=typeof _0x354aac&&(_0x483301[_0x2141a4]={..._0x354aac,..._0x4a4339}),(_0x298021['key']['participant']||_0x298021[_0x32d64e(0x248)][_0x32d64e(0x22b)])&&(_0x38e965=_0x298021['key'][_0x32d64e(0x22b)]=_0x38e965||_0x298021[_0x32d64e(0x248)][_0x32d64e(0x22b)]),(_0x298021[_0x32d64e(0x248)]['remoteJid'][_0x32d64e(0x225)](_0x32d64e(0x221))||_0x298021[_0x32d64e(0x248)][_0x32d64e(0x24b)][_0x32d64e(0x225)](_0x32d64e(0x1d9)))&&(_0x38e965=_0x38e965||_0x298021[_0x32d64e(0x248)][_0x32d64e(0x24b)]),_0x298021[_0x32d64e(0x248)]['remoteJid']=_0x23dc99,_0x298021[_0x32d64e(0x248)][_0x32d64e(0x224)]=_0x38e965===_0x11f4e3[_0x32d64e(0x241)]['id'],proto[_0x32d64e(0x168)]['fromObject'](_0x298021);},_0x11f4e3['sendFile']=async(_0x4f8db5,_0x343a01,_0x1fe1c7,_0x4e1f03={},_0x24c556={})=>{const _0x11cd84=_0x4818de;let _0x15ad5c=await _0x11f4e3[_0x11cd84(0x209)](_0x343a01,!0x0),{filename:_0x83c220,size:_0x558a3a,ext:_0x3f5b61,mime:_0x1570f9,data:_0xc6613e}=_0x15ad5c,_0x2fe343='',_0x16fa35=_0x1570f9,_0x4877ae=_0x83c220;if(_0x24c556[_0x11cd84(0x1d3)]&&(_0x2fe343=_0x11cd84(0x20b)),_0x24c556[_0x11cd84(0x240)]||/webp/[_0x11cd84(0x204)](_0x1570f9)){let {writeExif:_0x12674d}=require(_0x11cd84(0x233)),_0x479a4c={'mimetype':_0x1570f9,'data':_0xc6613e};_0x4877ae=await _0x12674d(_0x479a4c,{'packname':config[_0x11cd84(0x22c)],'author':config[_0x11cd84(0x22c)],'categories':_0x24c556[_0x11cd84(0x213)]?_0x24c556[_0x11cd84(0x213)]:[]}),await fs[_0x11cd84(0x1c3)][_0x11cd84(0x25b)](_0x83c220),_0x2fe343=_0x11cd84(0x202),_0x16fa35=_0x11cd84(0x1ef);}else _0x2fe343=/image/['test'](_0x1570f9)?_0x11cd84(0x1cd):/video/[_0x11cd84(0x204)](_0x1570f9)?_0x11cd84(0x1cb):/audio/['test'](_0x1570f9)?_0x11cd84(0x17d):_0x11cd84(0x20b);return await _0x11f4e3[_0x11cd84(0x173)](_0x4f8db5,{[_0x2fe343]:{'url':_0x4877ae},'mimetype':_0x16fa35,'fileName':_0x1fe1c7,..._0x24c556},{'quoted':_0x4e1f03,..._0x24c556}),fs[_0x11cd84(0x1c3)][_0x11cd84(0x25b)](_0x4877ae);},_0x11f4e3[_0x4818de(0x1c8)]=async _0xf0d4d5=>[..._0xf0d4d5['matchAll'](/@([0-9]{5,16}|0)/g)][_0x4818de(0x252)](_0x19fb6d=>_0x19fb6d[0x1]+_0x4818de(0x221)),_0x11f4e3[_0x4818de(0x1c0)]=async(_0x30ba48,_0x50047c,_0x2546d2=!0x1,_0x45719d={})=>{const _0x2692e2=_0x4818de;let _0x8d4d0d;_0x45719d[_0x2692e2(0x24d)]&&(_0x50047c[_0x2692e2(0x1b0)]=_0x50047c[_0x2692e2(0x1b0)]&&_0x50047c['message'][_0x2692e2(0x263)]&&_0x50047c[_0x2692e2(0x1b0)]['ephemeralMessage'][_0x2692e2(0x1b0)]?_0x50047c[_0x2692e2(0x1b0)][_0x2692e2(0x263)]['message']:_0x50047c['message']||void 0x0,_0x8d4d0d=Object['keys'](_0x50047c[_0x2692e2(0x1b0)][_0x2692e2(0x262)][_0x2692e2(0x1b0)])[0x0],_0x50047c['message']&&_0x50047c[_0x2692e2(0x1b0)][_0x2692e2(0x216)]?_0x50047c[_0x2692e2(0x1b0)][_0x2692e2(0x216)]:_0x50047c[_0x2692e2(0x1b0)],delete _0x50047c[_0x2692e2(0x1b0)][_0x2692e2(0x262)][_0x2692e2(0x1b0)][_0x8d4d0d][_0x2692e2(0x1eb)],_0x50047c[_0x2692e2(0x1b0)]={..._0x50047c[_0x2692e2(0x1b0)][_0x2692e2(0x262)][_0x2692e2(0x1b0)]});let _0x32b77a=Object[_0x2692e2(0x19a)](_0x50047c[_0x2692e2(0x1b0)])[0x0],_0x5362f5=await generateForwardMessageContent(_0x50047c,_0x2546d2),_0x13cd1e=Object[_0x2692e2(0x19a)](_0x5362f5)[0x0],_0x132efd={};_0x2692e2(0x215)!=_0x32b77a&&(_0x132efd=_0x50047c[_0x2692e2(0x1b0)][_0x32b77a][_0x2692e2(0x1f6)]),_0x5362f5[_0x13cd1e]['contextInfo']={..._0x132efd,..._0x5362f5[_0x13cd1e][_0x2692e2(0x1f6)]};const _0x51ca48=await generateWAMessageFromContent(_0x30ba48,_0x5362f5,_0x45719d?{..._0x5362f5[_0x13cd1e],..._0x45719d,..._0x45719d[_0x2692e2(0x1f6)]?{'contextInfo':{..._0x5362f5[_0x13cd1e]['contextInfo'],..._0x45719d[_0x2692e2(0x1f6)]}}:{}}:{});return await _0x11f4e3[_0x2692e2(0x234)](_0x30ba48,_0x51ca48[_0x2692e2(0x1b0)],{'messageId':_0x51ca48['key']['id']}),_0x51ca48;},_0x11f4e3[_0x4818de(0x209)]=async(_0x1e9287,_0x5d1775)=>{const _0x4f4184=_0x4818de;let _0x443be8,_0x58b7d9=Buffer['isBuffer'](_0x1e9287)?_0x1e9287:/^data:.*?\/.*?;base64,/i['test'](_0x1e9287)?Buffer[_0x4f4184(0x25e)](_0x1e9287[_0x4f4184(0x255)]`,`[0x1],'base64'):/^https?:\/\//[_0x4f4184(0x204)](_0x1e9287)?await(_0x443be8=await getBuffer(_0x1e9287)):fs[_0x4f4184(0x21a)](_0x1e9287)?(filename=_0x1e9287,fs['readFileSync'](_0x1e9287)):_0x4f4184(0x167)==typeof _0x1e9287?_0x1e9287:Buffer['alloc'](0x0),_0x3b8edb=await FileType['fromBuffer'](_0x58b7d9)||{'mime':_0x4f4184(0x1a4),'ext':_0x4f4184(0x174)};return filename=_0x4f4184(0x206)+0x1*new Date()+'.'+_0x3b8edb[_0x4f4184(0x17c)],_0x58b7d9&&_0x5d1775&&fs[_0x4f4184(0x1c3)][_0x4f4184(0x21b)](filename,_0x58b7d9),{'res':_0x443be8,'filename':filename,'size':await getSizeMedia(_0x58b7d9),..._0x3b8edb,'data':_0x58b7d9};},_0x11f4e3[_0x4818de(0x1d7)]=_0x1a389c=>smsg(_0x11f4e3,_0x1a389c,store,antipolling),_0x11f4e3['ev']['on'](_0x4818de(0x222),async _0x1b9cfc=>{const _0x522120=_0x4818de,{connection:_0x248085,lastDisconnect:_0x500777}=_0x1b9cfc;if(_0x248085===_0x522120(0x251)){let _0x1e432e=new Boom(_0x500777?.['error'])?.[_0x522120(0x212)][_0x522120(0x228)];_0x1e432e===DisconnectReason[_0x522120(0x1d5)]?(console[_0x522120(0x1a3)](chalk[_0x522120(0x1dc)][_0x522120(0x1da)](_0x522120(0x23d))),process['exit']()):_0x1e432e===DisconnectReason[_0x522120(0x19d)]?(console[_0x522120(0x1a3)](chalk[_0x522120(0x1dc)]['bold']('Connection\x20closed,\x20reconnecting....')),connectToWhatsApp()):_0x1e432e===DisconnectReason[_0x522120(0x1af)]?(console[_0x522120(0x1a3)](chalk[_0x522120(0x1dc)][_0x522120(0x1da)](_0x522120(0x260))),connectToWhatsApp()):_0x1e432e===DisconnectReason[_0x522120(0x19e)]?(console[_0x522120(0x1a3)](chalk[_0x522120(0x1dc)][_0x522120(0x1da)](_0x522120(0x1a2))),process[_0x522120(0x1dd)]()):_0x1e432e===DisconnectReason[_0x522120(0x1e0)]?(console[_0x522120(0x1a3)](chalk[_0x522120(0x1dc)][_0x522120(0x1da)]('Perangkat\x20Terkeluar,\x20Silakan\x20Hapus\x20Folder\x20Storage/session\x20Kemudian\x20lalukan\x20Pairing\x20Ulang\x20Kembali')),process['exit']()):_0x1e432e===DisconnectReason['restartRequired']?(console[_0x522120(0x1a3)](chalk[_0x522120(0x1dc)]['bold'](_0x522120(0x1b9))),connectToWhatsApp()):_0x1e432e===DisconnectReason[_0x522120(0x1c2)]?(console['log'](chalk[_0x522120(0x1dc)][_0x522120(0x1da)]('Connection\x20TimedOut,\x20Reconnecting...')),connectToWhatsApp()):(console[_0x522120(0x1a3)](chalk[_0x522120(0x1dc)][_0x522120(0x1da)](_0x522120(0x176)+_0x1e432e+'|'+_0x248085)),connectToWhatsApp());}else{if(_0x248085===_0x522120(0x1a9)){console[_0x522120(0x1a3)](chalk['greenBright']('['+jammenit+']')+'\x20'+chalk[_0x522120(0x23b)](_0x522120(0x1b7)));const _0x59b832=_0x522120(0x1ca);function _0x3cf3e0(){const _0x1f8082=_0x522120;fs[_0x1f8082(0x1c6)](_0x59b832,_0x1f8082(0x230),(_0x364886,_0x935373)=>{const _0x1661f4=_0x1f8082;_0x364886||(_0x11f4e3[_0x1661f4(0x173)](_0x935373,{'text':_0x1661f4(0x187)}),fs[_0x1661f4(0x25b)](_0x59b832,_0x336b72=>{}));});}_0x3cf3e0();}}}),_0x11f4e3;}connectToWhatsApp();let file=require[_0x3dea8c(0x214)](__filename);fs[_0x3dea8c(0x20d)](file,()=>{const _0x4c93fd=_0x3dea8c;fs['unwatchFile'](file),console[_0x4c93fd(0x1a3)](chalk[_0x4c93fd(0x1dc)]('Update\x20'+__filename)),delete require[_0x4c93fd(0x218)][file],require(file);});