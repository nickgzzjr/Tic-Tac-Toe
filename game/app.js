var Game = Backbone.View.extend({
    template: 'game',
    render: function() {
        var that = this,
            dimension = 0,
            $content = $('#content'),
            $game;

        $.get(this.template + "/index.html", function(template) {
            that.$el.html(template);
            $game = that.$el.find("#game");

            $(window).resize(function() {
                dimension = _.min([window.innerHeight - 300, window.innerWidth - 80]);
                $game.height(dimension);
                $game.width(dimension);
            });
            dimension = _.min([window.innerHeight - 300, window.innerWidth - 80]);
            $game.height(dimension);
            $game.width(dimension);
        });
        return this;
    }
});
