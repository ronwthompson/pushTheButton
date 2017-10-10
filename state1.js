pushinButtons.state1 = function(){}
pushinButtons.state1.prototype = {
    preload: function(){
        game.load.image('chirrut', 'assets/characters/chirrut.png')
    },

    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE) //enable the Arcade Physics system
        game.stage.backgroundColor = '#155fd9'
    
        player = game.add.sprite(100, 100, 'chirrut') // player and its settings
        player.anchor.setTo(0.5,0.5)
        game.physics.arcade.enable(player)
 
        player.body.collideWorldBounds = true

        cursors = game.input.keyboard.createCursorKeys() //game controls

        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    },

    update: function(){
        var hitPlatform = game.physics.arcade.collide(player) //collide the player with the platforms
        player.body.velocity.x = 0 //reset the players velocity when no button is pressed

        if (cursors.left.isDown){ //move to the left
            player.body.velocity.x = -100
            player.scale.setTo(1,1)
        } else if (cursors.right.isDown){ //move to the right
            player.body.velocity.x = 100
            player.scale.setTo(-1,1)
        } else{ //stand still if animations are introduced
            //player.animations.stop()
        }
    }
}