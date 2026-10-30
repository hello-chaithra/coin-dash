import kaplay from "kaplay";

kaplay({
  width: 800,
  height: 600,
  background: [20, 20, 40],
  letterbox: true,
});

scene("game", () => {
  const SPEED = 300;

  const player = add([
    rect(32, 32),
    color(80, 200, 255),
    pos(width() / 2, height() / 2),
    anchor("center"),
    area(),
    "player",
  ]);

  onKeyDown("left", () => player.move(-SPEED, 0));
  onKeyDown("right", () => player.move(SPEED, 0));
  onKeyDown("up", () => player.move(0, -SPEED));
  onKeyDown("down", () => player.move(0, SPEED));

  onKeyDown("a", () => player.move(-SPEED, 0));
  onKeyDown("d", () => player.move(SPEED, 0));
  onKeyDown("w", () => player.move(0, -SPEED));
  onKeyDown("s", () => player.move(0, SPEED));

  player.onUpdate(() => {
    player.pos.x = clamp(player.pos.x, 16, width() - 16);
    player.pos.y = clamp(player.pos.y, 16, height() - 16);
  });
});

go("game");