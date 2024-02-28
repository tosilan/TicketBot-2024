/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          


   # MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/


const fs = require('fs');
const config = require('../config.js');



module.exports = {
  name: "reset",
  description: "このサーバーのチケットシステムのセットアップをリセットします。",
  run: async (client, interaction) => {
    try {
       if (!interaction.member.permissions.has('ADMINISTRATOR')) {
        return interaction.reply({ content: 'チケットを設定するには、サーバー管理者である必要があります。', ephemeral: true });
      }
     
      const serverId = interaction.guildId;
      const setupData = JSON.parse(fs.readFileSync(config.setupFilePath, 'utf8'));

     
      if (setupData[serverId]) {
        delete setupData[serverId];
        fs.writeFileSync(config.setupFilePath, JSON.stringify(setupData, null, 2));

        return interaction.reply({ content: 'チケットシステムのセットアップが正常にリセットされました。', ephemeral: true });
      } else {
        return interaction.reply({ content: 'このサーバーのチケットシステムのセットアップが見つかりませんでした。', ephemeral: true });
      }
    } catch (error) {
      console.error('チケットシステム設定のリセットエラー');
      await interaction.reply({ content: 'リセットに失敗しました!許可を確認してください。', ephemeral: true });
    }
  },
};

/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          


   # MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/
