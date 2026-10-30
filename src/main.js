import kaplay from "kaplay";

kaplay({
  width: 800,
  height: 600,
  background: [20, 20, 40],
  letterbox: true,
});

add([
  text("Hello Kaplay!"),
  pos(width() / 2, height() / 2),
  anchor("center"),
]);