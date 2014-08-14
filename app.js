Router = Backbone.Router.extend({
    routes: {
        "": "home",
        "game": "game"
    },
    content: $("#content"),
    initialize: function() {
        this.views = {
            home: new Home(),
            game: new Game()
        }
    },
    home: function() {
        this.content.html(this.views.home.render().el);
    },
    game: function() {
        this.content.html(this.views.game.render().el);
    }
});
new Router();
Backbone.history.start();
