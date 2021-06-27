export default function runAnimation() {
  let app;
  console.log('application running');
  app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0xf1f8d6,
  });

  const graphic = new PIXI.Graphics();
  graphic.x = app.renderer.width / 2;
  graphic.y = app.renderer.height / 2;
  app.stage.addChild(graphic);

  // graphic.lineStyle(5, 0xABCDEF)
  graphic.beginFill('0x' + 'FDCDED');
  graphic.drawShape(new PIXI.Circle(300, 0, 100, 100));
  graphic.endFill();

  document.body.appendChild(app.view);
}
