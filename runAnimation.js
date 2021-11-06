export default function runAnimation() {
  let app;
  console.log('application running');
  app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0xf1f8d6,
  });

  const circle = new PIXI.Graphics();
  if (circle.anchor) circle.anchor.set(0.5);

  // const animationLoop = () => {
  //   requestAnimationFrame(animationLoop);
  //   circle.x += 1;
  // }

  const moveCircle = (e) => {
    let pos = e.data.global;
    // circle.x += 1;
    if (circle.x > pos.x) circle.x -= 10;
    if (circle.x < pos.x) circle.x += 10;
    // if (pos.x > circle.y) circle.y += 1;
    // if (pos.x < circle.y) circle.y -= 1;
  };
  const setup = () => {
    // app.stage.interactive = true;
    circle.interactive = true;
    app.stage.addChild(circle);

    // circle.lineStyle(5, 0xABCDEF)
    circle.beginFill('0x' + 'FDCDED');
    circle.drawShape(new PIXI.Circle(1000, 300, 150, 100));
    circle.endFill();

    circle.on('mouseover', moveCircle);
    // animationLoop();
  };

  app.loader.load(setup);

  document.body.appendChild(app.view);
}
