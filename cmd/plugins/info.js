module.exports = {
  config: {
    name: "info",
    prefix: "auto",
    credits: "Nayan",
    aliases: ["info", "details"],
    permission: 0,
    description: "Displays detailed information about the admin, bot, and server",
    tags: ["Utility"],
  },
  start: async ({ event, api }) => {
    const { threadId } = event;

    const n = await api.getMe();

    
    const formatUptime = (uptime) => {
      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const uptime = formatUptime(process.uptime());

    
    const adminInfo = `
𝐀𝐝𝐦𝐢𝐧 𝐈𝐧𝐟𝐨
╭──✦ 𝗔𝗗𝗠𝗜𝗡  𝗜𝗡𝗙𝗢 ✦──╮
├‣𝙽𝙰𝙼𝙴     : 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰
├‣𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 : 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰
├‣𝚁𝙴𝙻𝙸𝙶𝙸𝙾𝙽 : 𝙸𝚂𝙻𝙰𝙼
├‣𝙰𝙳𝙳𝚁𝙴𝚂𝚂  : 𝙿𝙾𝙽𝙲𝙷𝙰𝙶𝙰𝚁𝙷
├‣𝙶𝙴𝙽𝙳𝙴𝚁   : 𝙼𝙰𝙻𝚎
├‣𝙰𝙶𝙴      : 18+
├‣𝚁𝙴𝙻𝙰𝚃𝙸𝙾𝙽 : 𝚂𝙸𝙽𝙶𝙻𝙴
├‣𝚆𝙾𝚁𝙺     : 𝚂𝚃𝚄𝙳𝙴𝙽𝚃
├‣𝙼𝙰𝙸𝚕   : rsrana609@gmail.com
├‣𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿: 01988686406
├‣𝚃𝙴𝙻𝙸𝙶𝚁𝙰𝙼 : ar.rana007
├‣𝙵𝙱 𝙻𝙸𝙽𝙺 : https://facebook.com/RANA.IS.BUSY.OKAY
╰────────────────♡彡
`;

    
    const botInfo = `
𝐁𝐨𝐭 𝐈𝐧𝐟𝐨
𝐁𝐨𝐭 𝐔𝐬𝐞𝐫 𝐍𝐚𝐦𝐞: ${n.username || "N/A"}
𝐁𝐨𝐭 𝐍𝐚𝐦𝐞       : ${n.first_name || "N/A"}
𝐁𝐨𝐭 𝐔𝐬𝐞𝐫 𝐈𝐃     : ${n.id || "N/A"}
`;

    
    const serverInfo = `
𝐒𝐞𝐫𝐯𝐞𝐫 𝐈𝐧𝐟𝐨
𝐒𝐞𝐫𝐯𝐞𝐫 𝐔𝐩𝐭𝐢𝐦𝐞      : ${uptime}
𝐒𝐞𝐫𝐯𝐞𝐫 𝐍𝐨𝐝𝐞 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : ${process.version}
𝐌𝐞𝐦𝐨𝐫𝐲 𝐔𝐬𝐞𝐝      : ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB
`;

    const fullInfo = `${adminInfo}\n${botInfo}\n${serverInfo}`;
    await api.sendMessage(threadId, fullInfo.trim());
  },
};
