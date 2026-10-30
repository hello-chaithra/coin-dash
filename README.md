# coin-dash

A practical workbook for learning game development and game jam basics with KAPLAY by building a "Coin-Dash" game.

[![Kaplay Coin Dash Workbook on Gist](https://img.shields.io/badge/Read%20the%20Workbook-Gist-2ea44f?style=for-the-badge&logo=github)](https://gist.github.com/hello-chaithra/e5f32608f5469e2a6e6d5b17e3425df4#file-kaplay-coin-dash-workbook-md)

## What I learned
- **Game basics in Kaplay:** everything is a game object built from components like `pos()`, `rect()`, and `area()`, and tags like `"coin"` group them.
- **Scenes and game flow:** splitting the game into menu, game, and game over scenes, and switching between them with `go()`.
- **Events and collisions:** using `onKeyDown`, `onUpdate`, `loop`, and `onCollide` to handle movement, timers, scoring, and enemies.
- **Git on a real project:** one feature branch for each change, then merge and push, and fixing a rejected push with `git pull --allow-unrelated-histories`.
- **Reading errors:** most problems were typos, the wrong folder, or the wrong port, so `git status`, `git branch`, and the browser console helped a lot.
