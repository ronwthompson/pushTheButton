var game = new Phaser.Game(800, 600, Phaser.AUTO, null, null, null,false)
game.state.add('state0', pushinButtons.state0)
game.state.add('state1', pushinButtons.state1)
game.state.start('state1')