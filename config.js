//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "dylanmt1200@gmail.com";
global.location = "Plumtree,Zimbabwe.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Harare";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "263713571083";
global.owner = process.env.OWNER_NUMBER || "263713571083";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVBDS05wVDZnb3JONlE4cldKd3MzZ1lhR2RPV3RsbTZtZHJpN2lwTjNWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEljNlUyTy85SFo3ZHo3WjlOUnA4WmlTZFdxb3pvOFd4NmloOGh1dXdGRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJT3dOai9ldGVPalJPSEdGdmdaWi9hWVlINnNwUmxBWG5pZzFuQytrQVhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKeGdCZUxOaG4vdnM0QWV1S0FWVW9qWjZEL1p2dzNYQVFEUUlZS2hQbWh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllPWFRjdUhoYTNCZ0ozNm0vS1daZkptLy9qWUJxRCthV2pUWkFwbjJYMDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ild4enJma0dTVFlXMHo4SDBRbiswaHFEYTU5anhESGNVSzkrbnJ3VEE0elU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS05UTTZvTXdwbit6UGVOeDNSeHVGc1kzaUFFSVdyRVdENDE1Uk01VGlWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkpBbHBWeUpDc3V6Qi90dUlTV0t1VldhQ3JLWW1zc1dQZzUwR0lad2YxMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRXN21FMzlhdDJhTUVOWkE4VWNwZ0xBQUpzTmphNmhmNzlHc09EcFBha3hxWFlFVkdIaTd6RHE4Wkd5Y1JBVDN3UEpTSm5qT2ZXYmpnQXpJZVBhdUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc5LCJhZHZTZWNyZXRLZXkiOiJRZWk5YUxITW9FN3Jla2UxUVBxYW9tTjlxWStaYW5wZ3JZQTBQanJJUmRzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxMzU3MTA4M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5NjUxODIxRkRDMzQyNTI3Njc5NjEzMkU2MDE2M0JGQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxMzc1MjI5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3MTM1NzEwODNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMUM1MjI5N0I0NjQ0QTg4MzQ4MTAyOTQxMTUwMzkyNTcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTM3NTIyOX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzEzNTcxMDgzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjZGMTM4NUY3QjAzOTYwQjZENkQzNkVBRUVDOTMyN0ZEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjEzNzUyMzJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InF6UV9Ob21OUVRpRktrOVlrR21UdUEiLCJwaG9uZUlkIjoiODVmYmJmNzEtMTNhNS00N2JmLWFmNWEtN2M0OTA4NmRkN2MzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh6TW1aa0dvNFFKVWhRSXZNeFFPZFcrNkY1Zz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3K2psWVJxYlJCOHhwVjV4SENxNUJscnB4ajg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOTVFVk1TTFMiLCJtZSI6eyJpZCI6IjI2MzcxMzU3MTA4MzoxN0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJEZWUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wvNzQ2b0dFTzJ6NkxRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlQyeFhhL3pLbWxmN0hvaGpCOUVQOWVFWlE0U0ZLMG1YRzAzTWYrNHRPbFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikg1TmtzdzJmcnpnZlVjRTdWTVNVbEwxc056ZWJhbWg3MmR1b2lvQTYwZmVyVFlEYWFMY0QvMXZmTHdSYldURGZST1ZFSDBKVVNCNzl1MWx4SGVKQ0RRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRTFdrSGtMZllXSFBtZW51dTVScE9HLzVlc0E4RC9XaWNUK1p1aGM1d3I5L3J2V05GcDd5dDhwYTVUYmZYZGthL1R2OXR1VjBzbGdQTnhJQ1FZSXdDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxMzU3MTA4MzoxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVOXNWMnY4eXBwWCt4NklZd2ZSRC9YaEdVT0VoU3RKbHh0TnpIL3VMVHBVIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMzc1MjI3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlaTyJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".,#,!,$",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "DYLAN",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
