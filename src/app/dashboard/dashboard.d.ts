declare namespace dashboard {

  interface IWidget {
    x: number;
    y: number;
    w: number;
    h: number;

    xChange(): void;
    yChange(): void;
    hChange(): void;
    wChange(): void;
    
  }
}
