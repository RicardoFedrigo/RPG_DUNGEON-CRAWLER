import { Console } from "console";
import { Menu } from "./UserInterface/Menu.entity";
import { Render } from "./UserInterface/Render/Render.entity";

const menu = new Menu(new Render());

menu.renderMenu();

const stdin = process.stdin;

// without this, we would only get streams once enter is pressed
stdin.setRawMode(true);

// unless an error or process.exit() happens)
// resume stdin in the parent process (node app won't quit all by itself
stdin.resume();

// i don't want binary, do you?
stdin.setEncoding("utf8");

// on any data into stdin
stdin.on("data", function (key) {
  // ctrl-c ( end of text )
  if (key.toString() === '\x03') {
    process.exit();
  }
  menu.selectMenuItem(key.toString())

  if(menu.getRun())
  process.stdout.write(key);
});
