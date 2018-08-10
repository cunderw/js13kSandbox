function startGame() {
    // initialize the game and setup the canvas
    
    kontra.init();

    // create a basic sprite with a velocity
    window.player = kontra.sprite({
      x: 290,
      y: 180,
      dx: 3,
      dy: 3,
      width: 20,
      height: 40,
      color: 'red',
      health : 100,
      update: function() {       
        if (kontra.keys.pressed('left') && player.x > 0){
            // left arrow pressed            
            player.x -= player.dx;
          }
          else if (kontra.keys.pressed('right') && player.x < kontra.canvas.width - player.width) {
            player.x += player.dx;
          }
      
          if (kontra.keys.pressed('up') && player.y > 0) {
            player.y -= player.dy;
          }
          else if (kontra.keys.pressed('down') && player.y < kontra.canvas.height - player.height) {
            player.y += player.dy;
          }
        }
    });    
    // create the game loop to update and render the sprite
    window.loop = kontra.gameLoop({
      update: function() {
        player.update();
      },
      render: function() {
        player.render();
      }
    });

    // start the loop
    loop.start();
}