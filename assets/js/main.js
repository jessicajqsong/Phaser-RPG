var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [
    BootScene,
    TitleScene,
    GameScene,
    UiScene,
  ],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false, // Debug
      gravity: {
        y: 0,
      },
    },
  },
  pixelArt: true,
  roundPixels: true,
};

var game = new Phaser.Game(config);

/*
Scenes:
  - BootScene: load assets
  - TitleScene: display the game title and the "start game" button
  - GameScene: game main logic
  - UiScene: display how much gold the player currently has

Classes:
  - Player: create the player object, handle player keyboard input, etc.
  - Chest: create the treasure chest object, and how much gold is in the chest, etc.
  - UiButton: create the buttons, with hover animation, etc.
  - Map: Using the JSON from Tiled, create the map
  - Spawner: Generate a chest or a monster at specific intervals and up to specific limit
             - ChestModel: Create an object that will store the x, y coordinates of the chest object,
                           how much gold it has, the ID of the chest, the spawner ID that the chest belongs to
                           

  GameManager:
  - Tiled JSON contains layers for player, chest, monster spawn locations
  - Create a game manager to use these data passed in from JSON
  - 



*/