import { RenderInterface } from "./interfaces/Render.interface";

type action = "start" | "end" | null;

export class Menu {
  private render: RenderInterface;
  public static readonly type = "menu";
  public static readonly entityName = "Menu";
  private image = "";

  private action: action = null;
  private run: boolean = false;

  constructor(render: RenderInterface) {
    this.render = render;
  }

  renderMenu(): void {
    this.image = `
        ############################################
        #              DUNGEON CRAWLER             #
        #                                          #
        #                                          #
        #             ->START                      #
        #               QUIT                       #
        #                                          #
        #                                          #
        ############################################
        `;
    this.render.draw(this.image);
    this.render.render();
  }

  selectMenuItem(key: string): void {
    switch (key) {
      case "\x1B[A":
        this.image = `
        ############################################
        #              DUNGEON CRAWLER             #
        #                                          #
        #                                          #
        #             ->START                      #
        #               QUIT                       #
        #                                          #
        #                                          #
        ############################################
        `;
        this.action = "start";
        break;
      case "\x1B[B":
        this.image = `
        ############################################
        #              DUNGEON CRAWLER             #
        #                                          #
        #                                          #
        #               START                      #
        #             ->QUIT                       #
        #                                          #
        #                                          #
        ############################################
        `;
        this.action = "end";
        break;
      case "\r":
        this.run = true;
      default:
        return; // Quit when this doesn't handle the key event.
    }
    this.render.draw(this.image);
    this.render.render();
  }

  public getRun(): boolean {
    return this.run;
  }

  public getAction(): action {
    return this.action;
  }
}
