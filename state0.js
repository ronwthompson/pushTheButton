var pushinButtons = {}

pushinButtons.state0 = function(){}
pushinButtons.state0.prototype = {
    preload: function(){

    },
    create: function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL

        game.input.keyboard.addKey(Phaser.Keyboard.ENTER).onDown.add(exitTitle)
    },
    update: function(){

    }
}

function exitTitle(){
    game.state.start('state1')
}