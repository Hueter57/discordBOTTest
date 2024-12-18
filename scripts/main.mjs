'use strict'

// Description:
//  main script
//
// Commands:
//   

export default async robot => {
  robot.respond(/hoge$/i, async res => {
    await res.reply("fuga");
  });
  robot.respond(/ping$/i, async res => {
    await res.reply("pong");
  });
  robot.hear(/おいすー$/i, async res => {
    await res.reply("おいす～");
  });
  robot.respond(/借金地獄$/i, async res => {
    await res.reply("金持ち天国");
  });
  robot.respond(/選ばれたのは綾鷹でした$/i, async res => {
    await res.send("取り残された爽健美茶");
  });
  robot.respond(/釣った魚に餌やらない$/i, async res => {
    await res.emote("釣り場に来てひたすら餌をまく");
  });
  robot.hear(/透き通るような白$/i, async res => {
    await res.reply("松崎しげる");
  });
}
