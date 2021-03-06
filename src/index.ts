import { Game } from "./modules/Game/Game.entity";
import { terminal } from "./modules/terminal/terminal.entity";
import { Render } from "./UserInterface/Render/Render.entity";

const game = new Game(new Render());

const stdin = process.stdin;


// without this, we would only get streams once enter is pressed
stdin.setRawMode(true);

// unless an error or process.exit() happens)
// resume stdin in the parent process (node app won't quit all by itself
stdin.resume();

// i don't want binary, do you?
stdin.setEncoding("utf8");
terminal.CursorHide();
terminal.SetColor(32);
// on any data into stdin
stdin.on("data", function (key) {
  terminal.SetColor(32);
  // ctrl-c ( end of text )
  if (key.toString() === "\x03") {
    process.exit();
  }
  game.interaction(key.toString("utf-8"));
  game.run();
});

// process.on("uncaughtException", (error) => {
//   console.log(error);
// });
