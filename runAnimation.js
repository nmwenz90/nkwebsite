export default function runAnimation() {
  let app;
  console.log('application running');
  app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0xf1f8d6,
  });

  const circle = new PIXI.Graphics();

  const setup = () => {
    app.stage.interactive = true;
    app.stage.addChild(circle);

    // circle.lineStyle(5, 0xABCDEF)
    circle.beginFill('0x' + 'FDCDED');
    circle.drawShape(new PIXI.Circle(1100, 400, 150, 100));
    circle.endFill();

    // animationLoop();
  };

  app.loader.load(setup);

  const animationLoop = () => {
    requestAnimationFrame(animationLoop);
    circle.x = app.renderer.width / 2;
    circle.y = app.renderer.height / 2;
    circle.x += 1;
  };

  document.body.appendChild(app.view);
}
