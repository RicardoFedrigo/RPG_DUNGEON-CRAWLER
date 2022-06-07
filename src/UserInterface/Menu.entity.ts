import { RenderInterface } from "./interfaces/Render.interface";

export class Menu {
  private render: RenderInterface;
  public static readonly type = "menu";
  public static readonly entityName = "Menu";

  constructor(render: RenderInterface) {
    this.render = render;
  }

  renderMenu(): void {
    const menu = `
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
    this.render.draw(menu);
    this.render.render();
  }
}
