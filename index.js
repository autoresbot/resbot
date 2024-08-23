// =============================================
// VERSION UPDATE
// UPDATE TERAKHIR 14 Juli 2024 JAM 00:00 WIB
// WEBSITE : autoresbot.com
// VERSION : 3.3
// =============================================

const config = require("./resconfig");
const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  makeInMemoryStore,
  jidDecode,
  getAggregateVotesInPollMessage,
  proto,
} = require("@whiskeysockets/baileys");
require("./ac");
const moment = require("moment-timezone");
const fs = require("fs");
const https = require("https");
const util = require("util");
const unlinkAsync = util.promisify(fs.unlink);
const pino = require("pino");
const chalk = require("chalk");
const path = require("path");
const readline = require("readline");
const axios = require("axios");
const FileType = require("file-type");
const yargs = require("yargs/yargs");
const _ = require("lodash");
const { Boom } = require("@hapi/boom");
const { generateImage } = require("./App/canvas_resbot/resbot_module.js");
const PhoneNumber = require("awesome-phonenumber");
const figlet = require("figlet");
let { UploadFileUgu, webp2mp4File, TelegraPh } = require("./App/lib/uploader");
const usePairingCode = true;

const jammenit = moment().tz("Asia/Jakarta").format("HH:mm");
let fulltext;
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid,
} = require("./App/lib/exif");
const {
  smsg,
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  fetchJson,
  await,
  sleep,
} = require("./App/lib/myfunc");
const question = (text) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(text, resolve);
  });
};

function readJsonFile(r) {
  try {
    const e = fs.readFileSync(r);
    return JSON.parse(e);
  } catch (r) {
    return {};
  }
}
var low;
try {
  low = require("lowdb");
} catch (a) {
  low = require("./App/lib/lowdb");
}
const { Low: Low, JSONFile: JSONFile } = low,
  mongoDB = require("./App/lib/mongoDB"),
  storeLogger = pino({
    level: "info",
    destination: fs.createWriteStream("Storage/app.log", { flags: "a" }),
  }),
  store = makeInMemoryStore({ logger: storeLogger }),
  color = (a, l) => (l ? chalk.keyword(l)(a) : chalk.green(a));
(global.opts = new Object(
  yargs(process.argv.slice(2)).exitProcess(!1).parse()
)),
  (global.db = new Low(
    /https?:\/\//.test(opts.db || "")
      ? new cloudDBAdapter(opts.db)
      : /mongodb/.test(opts.db)
      ? new mongoDB(opts.db)
      : new JSONFile("App/src/database.json")
  )),
  (global.DATABASE = global.db),
  (global.loadDatabase = async function () {
    if (global.db.READ)
      return new Promise((a) =>
        setInterval(function () {
          !global.db.READ &&
            (clearInterval(this),
            a(null == global.db.data ? global.loadDatabase() : global.db.data));
        }, 1e3)
      );
    null === global.db.data &&
      ((global.db.READ = !0),
      await global.db.read(),
      (global.db.READ = !1),
      (global.db.data = {
        users: {},
        chats: {},
        game: {},
        database: {},
        settings: {},
        setting: {},
        others: {},
        sticker: {},
        ...(global.db.data || {}),
      }),
      (global.db.chain = _.chain(global.db.data)));
  }),
  loadDatabase(),
  global.db &&
    setInterval(async () => {
      global.db.data && (await global.db.write());
    }, 3e4);

// BERSIHKAN OTOMATIS
function hapusFileDenganEkstensi(e, n) {
  fs.readdir(e, (a, i) => {
    a
      ? console.error("Gagal membaca direktori:", a)
      : i.forEach((a) => {
          a.endsWith(n) &&
            (fs.unlinkSync(path.join(e, a)),
            console.log(`Berhasil menghapus file: ${a}`));
        });
  });
}
const ekstensiYangDihapus = [".gif", ".png", ".jpg", ".mp3", ".mp4", "webp"];
ekstensiYangDihapus.forEach((n) => {
  hapusFileDenganEkstensi(__dirname, n);
});
async function downloadFile(e, n, t) {
  return new Promise((a, i) => {
    fs.existsSync(n) || fs.mkdirSync(n);
    const s = path.join(n, t),
      c = fs.createWriteStream(s);
    https.get(e, (e) => {
      e.pipe(c)
        .on("finish", () => {
          c.close(), a(s);
        })
        .on("error", (e) => {
          fs.unlink(s, () => i(`Gagal mengunduh file: ${e.message}`));
        });
    });
  });
}
async function processAndDeleteFile(e) {
  try {
    const n = await downloadFile(e, "./cache/", "examplefile.jpg");
    let t = await TelegraPh("./" + n),
      a = t;
    return t && (await unlinkAsync(n)), a;
  } catch (e) {
    throw e;
  }
}

function colorfulConsoleLog(text, color) {
  const colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
  };

  const lineLength = process.stdout.columns || text.length + 4; // Gunakan lebar terminal, jika tersedia
  const line = "=".repeat(lineLength);
  const line2 = "_".repeat(lineLength);
  console.log(`${colors[color]}${colors.reset}\n`);
  console.log(`${colors[color]}${line}`);
  console.log(`${colors[color]}| ${text} |`);
  console.log(`${colors[color]}${line}${colors.reset}`);
  console.log(`${colors[color]}${colors.reset}\n`);
}

colorfulConsoleLog(config.resbot_version, "yellow");

async function connectToWhatsApp() {
  const { state, saveCreds } = await useMultiFileAuthState("Storage/session");
  const { version } = await fetchLatestBaileysVersion();
  const autoresbot = makeWASocket({
    version,
    logger: pino({ level: "silent" }),
    printQRInTerminal: false,
    auth: state,
    browser: ["Ubuntu", "Chrome", "20.0.04"],
    });



  if (usePairingCode && !autoresbot.authState.creds.registered) {
    const phoneNumber = await question(
      "Masukan Nomer Yang Aktif (Awali Dengan 628) :\n"
    );
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    console.log('Meminta Code...');
    await delay(3000);
    const code = await autoresbot.requestPairingCode(phoneNumber.trim());
    console.log(`PhoneNumber: ${phoneNumber}`);
    console.log(`Pairing code: ${code}`);
  }

  autoresbot.decodeJid = (e) => {
    if (!e) return e;
    if (/:\d+@/gi.test(e)) {
      let r = jidDecode(e) || {};
      return (r.user && r.server && r.user + "@" + r.server) || e;
    }
    return e;
  };
  autoresbot.ev.on("messages.upsert", async (chatUpdate) => {
    try {
      chatinfo = chatUpdate.messages[0];
      if (
        chatinfo.message &&
        (chatinfo.message.pollCreationMessageV3 ||
          chatinfo.message.pollCreationMessageV2 ||
          chatinfo.message.pollCreationMessage)
      ) {
        const db_antipolling = readJsonFile("./Storage/db/db_antipolling.json");


        if (db_antipolling.includes(chatinfo.key.remoteJid)) {
          return autoresbot.sendMessage(chatinfo.key.remoteJid, {
            delete: chatinfo.key,
          });
        }
      }

      // (chatinfo.message =
      //   "ephemeralMessage" === Object.keys(chatinfo.message)[0]
      //     ? chatinfo.message.ephemeralMessage.message
      //     : chatinfo.message),
      //   "viewOnceMessageV2" === Object.keys(chatinfo.message)[0] &&
      //     (chatinfo.message = chatinfo.message.viewOnceMessageV2.message);

      if (chatinfo && chatinfo.message) {
        const messageKeys = Object.keys(chatinfo.message);
        
        if (messageKeys[0] === "ephemeralMessage") {
          chatinfo.message = chatinfo.message.ephemeralMessage.message;
        }
      
        if (messageKeys[0] === "viewOnceMessageV2") {
          chatinfo.message = chatinfo.message.viewOnceMessageV2.message;
        }
      }


      if (chatinfo.key && chatinfo.key.remoteJid === "status@broadcast") return
      if (
        !autoresbot.public &&
        !chatinfo.key.fromMe &&
        chatUpdate.type === "notify"
      )
        return
      if (!chatinfo.message) return
      m = smsg(autoresbot, chatinfo, store);
      require("./autoresbot")(autoresbot, m, chatUpdate, store);
    } catch (err) {
      console.log(err)
    }
  });

  /* =================| ANTICALL |==================== */
  config.anticall &&
    autoresbot.ev.on("call", async (t) => {
      await autoresbot.decodeJid(autoresbot.user.id);
      for (let o of t)
        if (0 == o.isGroup && "offer" == o.status) {
          await autoresbot.sendTextWithMentions(
            o.from,
            `BOT TIDAK DAPAT MENERIMA PANGGILAN ${
              o.isVideo ? "VIDEO" : "SUARA"
            }. \nMAAF @${
              o.from.split("@")[0]
            } KAMU AKAN DI *BLOCK* \n\nSilakan Hubungi Owner Untuk Membuat Block !\nWebsite : autoresbot.com/contact`
          );
          await sleep(4e3), await autoresbot.updateBlockStatus(o.from, "block");
        }
    });

  autoresbot.ev.on("group-participants.update", async (anu) => {
    try {
      let metadata = await autoresbot.groupMetadata(anu.id);
      let participants = anu.participants;
      for (let num of participants) {
        const nombor_user = `@${num.split("@")[0]}`;
        if (num == anu.participants[0]) {
          try {
            ppuser = await autoresbot.profilePictureUrl(num, "image");
            pushname_ = await autoresbot.getName(num);
          } catch (e) {
            console.log(e);
            ppuser =
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
            pushname_ = nombor_user;
          }
        }
        async function generatePeopleUserImage(e, r) {
          try {
            return await generateImage(e, ppuser, r);
          } catch (e) {
            throw (console.error("Error generating image:", e), e);
          }
        }
        try {
          ppgroup = await autoresbot.profilePictureUrl(anu.id, "image");
        } catch {
          ppgroup =
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
        }

        /* =================| MEMBER JOIN/OUT |==================== */
        if (anu.action == "add") {
          const db_welcome =
            JSON.parse(fs.readFileSync("./Storage/db/welcome.json", "utf-8")) ||
            {};
          let welcome_status = "OFF";
          if (
            Array.isArray(db_welcome[anu.id]) &&
            db_welcome[anu.id][0].status == "on"
          ) {
            welcome_status = "ON";
            let welcome_1 = db_welcome[anu.id][0].text
              .replace("@NAME", pushname_)
              .replace("@name", pushname_)
              .replace("@GROUP", metadata.subject)
              .replace("@group", metadata.subject)
              .replace("@DESC", metadata.desc)
              .replace("@desc", metadata.desc);
            if (config.typeWelcome == 1) {
              try {
                const PeopleUser = await generatePeopleUserImage(
                  pushname_,
                  "welcome1.png"
                );
                autoresbot.sendMessage(anu.id, {
                  image: PeopleUser,
                  caption: welcome_1,
                  mentions: [num],
                });
              } catch (e) {
                console.error(e);
              }
            } else if (config.typeWelcome == 2) {
              try {
                const PeopleUser = await generatePeopleUserImage(
                  pushname_,
                  "welcome2.png"
                );
                autoresbot.sendMessage(anu.id, {
                  image: PeopleUser,
                  caption: welcome_1,
                  mentions: [num],
                });
              } catch (e) {
                console.error(e);
              }
            } else if (config.typeWelcome == 3) {
              autoresbot.sendMessage(anu.id, {
                text: welcome_1,
                mentions: [num],
              });
            }
          }
        } else if (anu.action == "remove") {
          const db_left =
            JSON.parse(fs.readFileSync("./Storage/db/left.json", "utf-8")) ||
            {};
          let left_status = "OFF";
          if (
            Array.isArray(db_left[anu.id]) &&
            "on" == db_left[anu.id][0].status
          ) {
            left_status = "ON";
            let e = db_left[anu.id][0].text
              .replace("@NAME", nombor_user)
              .replace("@GROUP", metadata.subject);
            autoresbot.sendMessage(anu.id, { text: e, mentions: [num] });
          }
        } else if (anu.action == "promote") {
        } else if (anu.action == "demote") {
        }
      }
    } catch (err) {
      console.log(chalk.redBright.bold(`ERROR ${err}`));
    }
  });

  /* =================| FUNCTION |==================== */
  autoresbot.ev.on("contacts.update", (t) => {
    for (let o of t) {
      let t = autoresbot.decodeJid(o.id);
      store &&
        store.contacts &&
        (store.contacts[t] = { id: t, name: o.notify });
    }
  });
  autoresbot.getName = (e, t = !1) => {
    let a;
    return (
      (id = autoresbot.decodeJid(e)),
      (t = autoresbot.withoutContact || t),
      id.endsWith("@g.us")
        ? new Promise(async (e) => {
            (a = store.contacts[id] || {}),
              a.name || a.subject || (a = autoresbot.groupMetadata(id) || {}),
              e(
                a.name ||
                  a.subject ||
                  PhoneNumber(
                    "+" + id.replace("@s.whatsapp.net", "")
                  ).getNumber("international")
              );
          })
        : ((a =
            "0@s.whatsapp.net" === id
              ? { id: id, name: "WhatsApp" }
              : id === autoresbot.decodeJid(autoresbot.user.id)
              ? autoresbot.user
              : store.contacts[id] || {}),
          (t ? "" : a.name) ||
            a.subject ||
            a.verifiedName ||
            PhoneNumber("+" + e.replace("@s.whatsapp.net", "")).getNumber(
              "international"
            ))
    );
  };
  (autoresbot.sendContact = async (t, a, e = "", s = {}) => {
    let n = [];
    for (let t of a)
      n.push({
        displayName: await autoresbot.getName(t + "@s.whatsapp.net"),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await autoresbot.getName(
          t + "@s.whatsapp.net"
        )}\nFN:${await autoresbot.getName(
          t + "@s.whatsapp.net"
        )}\nitem1.TEL;waid=${t}:${t}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:aplusscell@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://chat.whatsapp.com/HbCl8qf3KQK1MEp3ZBBpSf\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
      });
    autoresbot.sendMessage(
      t,
      { contacts: { displayName: `${n.length} Kontak`, contacts: n }, ...s },
      { quoted: e }
    );
  }),
    (autoresbot.public = !0),
    autoresbot.ev.on("creds.update", saveCreds);
  autoresbot.downloadMediaMessage = async (e) => {
    let t = (e.msg || e).mimetype || "",
      a = e.mtype ? e.mtype.replace(/Message/gi, "") : t.split("/")[0];
    const o = await downloadContentFromMessage(e, a);
    let s = Buffer.from([]);
    for await (const e of o) s = Buffer.concat([s, e]);
    return s;
  };
  autoresbot.sendImage = async (e, t, a = "", s = "", f) => {
    let r = Buffer.isBuffer(t)
      ? t
      : /^data:.*?\/.*?;base64,/i.test(t)
      ? Buffer.from(t.split`,`[1], "base64")
      : /^https?:\/\//.test(t)
      ? await await getBuffer(t)
      : fs.existsSync(t)
      ? fs.readFileSync(t)
      : Buffer.alloc(0);
    return await autoresbot.sendMessage(
      e,
      { image: r, caption: a, ...f },
      { quoted: s }
    );
  };
  autoresbot.sendText = (e, t, s = "", o) =>
    autoresbot.sendMessage(e, { text: t, ...o }, { quoted: s });
  autoresbot.sendTextWithMentions = async (t, e, n, s = {}) =>
    autoresbot.sendMessage(
      t,
      {
        text: e,
        contextInfo: {
          mentionedJid: [...e.matchAll(/@(\d{0,16})/g)].map(
            (t) => t[1] + "@s.whatsapp.net"
          ),
        },
        ...s,
      },
      { quoted: n }
    );
  autoresbot.sendImageAsSticker = async (e, t, a, s = {}) => {
    let r,
      i = Buffer.isBuffer(t)
        ? t
        : /^data:.*?\/.*?;base64,/i.test(t)
        ? Buffer.from(t.split`,`[1], "base64")
        : /^https?:\/\//.test(t)
        ? await await getBuffer(t)
        : fs.existsSync(t)
        ? fs.readFileSync(t)
        : Buffer.alloc(0);
    return (
      (r =
        s && (s.packname || s.author)
          ? await writeExifImg(i, s)
          : await imageToWebp(i)),
      await autoresbot.sendMessage(
        e,
        { sticker: { url: r }, ...s },
        { quoted: a }
      ),
      r
    );
  };
  autoresbot.sendVideoAsSticker = async (e, t, a, s = {}) => {
    let i,
      r = Buffer.isBuffer(t)
        ? t
        : /^data:.*?\/.*?;base64,/i.test(t)
        ? Buffer.from(t.split`,`[1], "base64")
        : /^https?:\/\//.test(t)
        ? await await getBuffer(t)
        : fs.existsSync(t)
        ? fs.readFileSync(t)
        : Buffer.alloc(0);
    return (
      (i =
        s && (s.packname || s.author)
          ? await writeExifVid(r, s)
          : await videoToWebp(r)),
      await autoresbot.sendMessage(
        e,
        { sticker: { url: i }, ...s },
        { quoted: a }
      ),
      i
    );
  };
  autoresbot.downloadAndSaveMediaMessage = async (e, t, a = !0) => {
    let o = e.msg ? e.msg : e,
      r = (e.msg || e).mimetype || "",
      s = e.mtype ? e.mtype.replace(/Message/gi, "") : r.split("/")[0];
    const i = await downloadContentFromMessage(o, s);
    let m = Buffer.from([]);
    for await (const e of i) m = Buffer.concat([m, e]);
    let l = await FileType.fromBuffer(m);
    return (
      (trueFileName = a ? t + "." + l.ext : t),
      await fs.writeFileSync(trueFileName, m),
      trueFileName
    );
  };




  autoresbot.cMod = (e, t, s = "", a = autoresbot.user.id, r = {}) => {
    let o = Object.keys(t.message)[0],
      i = "ephemeralMessage" === o;
    i && (o = Object.keys(t.message.ephemeralMessage.message)[0]);
    let p = i ? t.message.ephemeralMessage.message : t.message,
      m = p[o];
    return (
      "string" == typeof m
        ? (p[o] = s || m)
        : m.caption
        ? (m.caption = s || m.caption)
        : m.text && (m.text = s || m.text),
      "string" != typeof m && (p[o] = { ...m, ...r }),
      (t.key.participant || t.key.participant) &&
        (a = t.key.participant = a || t.key.participant),
      (t.key.remoteJid.includes("@s.whatsapp.net") ||
        t.key.remoteJid.includes("@broadcast")) &&
        (a = a || t.key.remoteJid),
      (t.key.remoteJid = e),
      (t.key.fromMe = a === autoresbot.user.id),
      proto.WebMessageInfo.fromObject(t)
    );
  };
  autoresbot.sendFile = async (e, t, a, i = {}, s = {}) => {
    let o = await autoresbot.getFile(t, !0),
      { filename: m, size: r, ext: n, mime: c, data: u } = o,
      d = "",
      l = c,
      p = m;
    if ((s.asDocument && (d = "document"), s.asSticker || /webp/.test(c))) {
      let { writeExif: e } = require("./App/lib/sticker.js"),
        t = { mimetype: c, data: u };
      (p = await e(t, {
        packname: config.packname,
        author: config.packname,
        categories: s.categories ? s.categories : [],
      })),
        await fs.promises.unlink(m),
        (d = "sticker"),
        (l = "image/webp");
    } else
      d = /image/.test(c)
        ? "image"
        : /video/.test(c)
        ? "video"
        : /audio/.test(c)
        ? "audio"
        : "document";
    return (
      await autoresbot.sendMessage(
        e,
        { [d]: { url: p }, mimetype: l, fileName: a, ...s },
        { quoted: i, ...s }
      ),
      fs.promises.unlink(p)
    );
  };
  autoresbot.parseMention = async (a) =>
    [...a.matchAll(/@([0-9]{5,16}|0)/g)].map((a) => a[1] + "@s.whatsapp.net");
  autoresbot.copyNForward = async (e, s, a = !1, g = {}) => {
    let t;
    g.readViewOnce &&
      ((s.message =
        s.message &&
        s.message.ephemeralMessage &&
        s.message.ephemeralMessage.message
          ? s.message.ephemeralMessage.message
          : s.message || void 0),
      (t = Object.keys(s.message.viewOnceMessage.message)[0]),
      s.message && s.message.ignore ? s.message.ignore : s.message,
      delete s.message.viewOnceMessage.message[t].viewOnce,
      (s.message = { ...s.message.viewOnceMessage.message }));
    let n = Object.keys(s.message)[0],
      o = await generateForwardMessageContent(s, a),
      m = Object.keys(o)[0],
      c = {};
    "conversation" != n && (c = s.message[n].contextInfo),
      (o[m].contextInfo = { ...c, ...o[m].contextInfo });
    const r = await generateWAMessageFromContent(
      e,
      o,
      g
        ? {
            ...o[m],
            ...g,
            ...(g.contextInfo
              ? { contextInfo: { ...o[m].contextInfo, ...g.contextInfo } }
              : {}),
          }
        : {}
    );
    return (
      await autoresbot.relayMessage(e, r.message, { messageId: r.key.id }), r
    );
  };
  autoresbot.getFile = async (e, t) => {
    let a,
      i = Buffer.isBuffer(e)
        ? e
        : /^data:.*?\/.*?;base64,/i.test(e)
        ? Buffer.from(e.split`,`[1], "base64")
        : /^https?:\/\//.test(e)
        ? await (a = await getBuffer(e))
        : fs.existsSync(e)
        ? ((filename = e), fs.readFileSync(e))
        : "string" == typeof e
        ? e
        : Buffer.alloc(0),
      f = (await FileType.fromBuffer(i)) || {
        mime: "application/octet-stream",
        ext: ".bin",
      };
    return (
      (filename = "Storage/src/" + 1 * new Date() + "." + f.ext),
      i && t && fs.promises.writeFile(filename, i),
      { res: a, filename: filename, size: await getSizeMedia(i), ...f, data: i }
    );
  };
  autoresbot.serializeM = (m) => smsg(autoresbot, m, store, antipolling);
  autoresbot.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === "close") {
      let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
      reason === DisconnectReason.badSession
        ? (console.log(
            chalk.redBright.bold(
              "Bad Session File, Please Delete Folder Storage/session and Start Again"
            )
          ),
          process.exit())
        : reason === DisconnectReason.connectionClosed
        ? (console.log(
            chalk.redBright.bold("Connection closed, reconnecting....")
          ),
          connectToWhatsApp())
        : reason === DisconnectReason.connectionLost
        ? (console.log(
            chalk.redBright.bold("Connection Lost from Server, reconnecting...")
          ),
          connectToWhatsApp())
        : reason === DisconnectReason.connectionReplaced
        ? (console.log(
            chalk.redBright.bold(
              "Connection Replaced, Another New Session Opened, Please Restart Bot"
            )
          ),
          process.exit())
        : reason === DisconnectReason.loggedOut
        ? (console.log(
            chalk.redBright.bold(
              "Perangkat Terkeluar, Silakan Hapus Folder Storage/session Kemudian lalukan Pairing Ulang Kembali"
            )
          ),
          process.exit())
        : reason === DisconnectReason.restartRequired
        ? (console.log(chalk.redBright.bold("Restart Required, Restarting...")),
          connectToWhatsApp())
        : reason === DisconnectReason.timedOut
        ? (console.log(
            chalk.redBright.bold("Connection TimedOut, Reconnecting...")
          ),
          connectToWhatsApp())
        : (console.log(
            chalk.redBright.bold(
              `Unknown DisconnectReason: ${reason}|${connection}`
            )
          ),
          connectToWhatsApp());
    } else if (connection === "open") {
      /* =================| BOT CONNECTED |==================== */
      console.log(
        `${chalk.greenBright("[" + jammenit + "]")} ${chalk.greenBright(
          `STATUS BOT CONNECTED`
        )}`
      );

      /* =================| Kirim Pesan Restaring Kalau ada |==================== */
      const fileName = "restaring.txt";
      function readFileAndSendMessage() {
        fs.readFile(fileName, "utf8", (e, s) => {
          e ||
            (autoresbot.sendMessage(s, { text: "_Bot Berhasil Di Restart !_" }),
            fs.unlink(fileName, (e) => {}));
        });
      }
      readFileAndSendMessage();
    }
  });
  return autoresbot;
}

connectToWhatsApp();

/* =================| Detect Change Files |==================== */
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file),
    console.log(chalk.redBright(`Update ${__filename}`)),
    delete require.cache[file],
    require(file);
});
