
export default async robot => {
  robot.respond(/hoge$/i, async res => {
    await res.reply("fuga");
  });
  robot.respond(/ping$/i, async res => {
    await res.reply("pong");
  });
}
