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

    let score = 0;

  const scoreLabel = add([
    text("Score: 0", { size: 28 }),
    pos(20, 20),
  ]);

  function spawnCoin() {
    add([
      circle(10),
      color(255, 215, 0),
      pos(rand(30, width() - 30), rand(80, height() - 30)),
      anchor("center"),
      area(),
      "coin",
    ]);
  }

  // Start with 5 coins
  for (let i = 0; i < 5; i++) {
    spawnCoin();
  }

  player.onCollide("coin", (coin) => {
    destroy(coin);
    score += 1;
    scoreLabel.text = "Score: " + score;
    burp(); // built-in sound effect
    spawnCoin();
  });

    let timeLeft = 30;

  const timerLabel = add([
    text("Time: 30", { size: 28 }),
    pos(width() - 20, 20),
    anchor("topright"),
  ]);

  loop(1, () => {
    timeLeft -= 1;
    timerLabel.text = "Time: " + timeLeft;
    if (timeLeft <= 0) {
      go("lose", score);
    }
  });

    function spawnEnemy() {
    add([
      rect(30, 30),
      color(255, 70, 70),
      pos(rand(50, width() - 50), rand(100, height() - 50)),
      anchor("center"),
      area(),
      { vx: choose([-150, 150]) },
      "enemy",
    ]);
  }

  for (let i = 0; i < 3; i++) {
    spawnEnemy();
  }

  onUpdate("enemy", (e) => {
    e.move(e.vx, 0);
    if (e.pos.x < 20 || e.pos.x > width() - 20) {
      e.vx = -e.vx; // bounce off the walls
    }
  });

  player.onCollide("enemy", (e) => {
    shake(12);
    timeLeft -= 5;
    timerLabel.text = "Time: " + timeLeft;
    destroy(e);
    spawnEnemy();
  });

  player.onUpdate(() => {
    player.pos.x = clamp(player.pos.x, 16, width() - 16);
    player.pos.y = clamp(player.pos.y, 16, height() - 16);
  });
});

go("game");