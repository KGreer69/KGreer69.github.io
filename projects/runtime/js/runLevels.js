var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createSawBlade(x, y){
    var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = x;
    sawBladeHitZone.y = y;
    game.addGameItem(sawBladeHitZone);
    var obstacleImage = draw.bitmap("img/sawblade.png");
    sawBladeHitZone.addChild(obstacleImage);
    obstacleImage.x = -25;
    obstacleImage.y = -25;
    }
    createSawBlade(800, 300)
    createSawBlade(450, 200)
    createSawBlade(1240, 300)
    function createEnemy(x,y){
    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50, "red");
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = 400;
    enemy.y = groundY - 50;
    game.addGameItem(enemy);
    enemy.velocityX =-3;
    enemy.rotationalVelocity = 9
    enemy.onPlayerCollision = function () {game.changeIntegrity(-10)
    };
    enemy.onProjectileCollision = function(){
      game.increaseScore(100);
     enemy.fadeOut();
    }
  }
  createEnemy(400, groundY - 10);
  createEnemy(800, groundY - 100);
  createEnemy(1200, groundY - 50);  
  function createReward(x,y){
 var rewards = game.createGameItem("reward", 25);
    var redSquare = draw.rect(50, 50, "pink");
    redSquare.x =  -25
    redSquare.y = -25;
    rewards.addChild(redSquare);
    rewards.x = x;300
    rewards.y = groundY - y;
    game.addGameItem(rewards);
    rewards.velocityX =-1;
    rewards.rotationalVelocity = 9
    rewards.onPlayerCollision = function () {game.changeIntegrity(10)
      function createMarker(){
        
      }
    };
  } 
  createReward(650, 60)
    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
