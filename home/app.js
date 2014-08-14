Home = Backbone.View.extend({
    template: 'home',
    render: function() {
        var that = this;
        $.get(this.template + "/index.html", function(template) {
            var data = {
                "title": "Tic-Tac-Toe Games in Progress",
                "games": [{
                    "id": 1,
                    "player1": "Eric Morgan",
                    "player2": "Charles May",
                    "player1_wins": 0,
                    "player2_wins": 2
                }, {
                    "id": 2,
                    "player1": "Valerie Bowman",
                    "player2": "Felicia Cole",
                    "player1_wins": 0,
                    "player2_wins": 0
                }, {
                    "id": 3,
                    "player1": "Guy Benson",
                    "player2": "Norman Day",
                    "player1_wins": 3,
                    "player2_wins": 3
                }, {
                    "id": 4,
                    "player1": "Emanuel Weaver",
                    "player2": "Sammy Nelson",
                    "player1_wins": 10,
                    "player2_wins": 4
                }, {
                    "id": 5,
                    "player1": "Oliver Mcbride",
                    "player2": "Jill Hansen",
                    "player1_wins": 102,
                    "player2_wins": 30
                }, {
                    "id": 6,
                    "player1": "Alison Bell",
                    "player2": "Owen Dixon",
                    "player1_wins": 10,
                    "player2_wins": 200
                }, {
                    "id": 7,
                    "player1": "Lawrence Adams",
                    "player2": "Ebony Schmidt",
                    "player1_wins": 1,
                    "player2_wins": 0
                }, {
                    "id": 8,
                    "player1": "Tony Robbins",
                    "player2": "Shelley Mills",
                    "player1_wins": 5,
                    "player2_wins": 21
                }, {
                    "id": 9,
                    "player1": "Dustin Watts",
                    "player2": "Glen Clayton",
                    "player1_wins": 12,
                    "player2_wins": 19
                }, {
                    "id": 10,
                    "player1": "Douglas Bates",
                    "player2": "Eduardo Martin",
                    "player1_wins": 1,
                    "player2_wins": 3
                }, {
                    "id": 11,
                    "player1": "Lola Swanson",
                    "player2": "Nichole Carlson",
                    "player1_wins": 101,
                    "player2_wins": 0
                }, {
                    "id": 12,
                    "player1": "Fernando Mitchell",
                    "player2": "Bessie Sharp",
                    "player1_wins": 9,
                    "player2_wins": 0
                }, {
                    "id": 13,
                    "player1": "Randal Austin",
                    "player2": "Rodolfo Mccormick",
                    "player1_wins": 7,
                    "player2_wins": 90
                }, {
                    "id": 14,
                    "player1": "Louise Chandler",
                    "player2": "Laura Beck",
                    "player1_wins": 93,
                    "player2_wins": 112
                }, {
                    "id": 15,
                    "player1": "Ernesto Brock",
                    "player2": "Lois Singleton",
                    "player1_wins": 109,
                    "player2_wins": 87
                }, {
                    "id": 16,
                    "player1": "Lora Osborne",
                    "player2": "Katie Johnston",
                    "player1_wins": 201,
                    "player2_wins": 7
                }, {
                    "id": 17,
                    "player1": "Priscilla Horton",
                    "player2": "Julius Hale",
                    "player1_wins": 10,
                    "player2_wins": 53
                }, {
                    "id": 18,
                    "player1": "Andrew Fernandez",
                    "player2": "Henrietta Morris",
                    "player1_wins": 30,
                    "player2_wins": 99
                }, {
                    "id": 19,
                    "player1": "Joe Shelton",
                    "player2": "Martin Ramsey",
                    "player1_wins": 34,
                    "player2_wins": 20
                }, {
                    "id": 20,
                    "player1": "Mary Little",
                    "player2": "Pam Goodwin",
                    "player1_wins": 29,
                    "player2_wins": 43
                }, {
                    "id": 21,
                    "player1": "Lynda Nguyen",
                    "player2": "Jermaine Hughes",
                    "player1_wins": 61,
                    "player2_wins": 71
                }, {
                    "id": 22,
                    "player1": "Clifford Young",
                    "player2": "Tonya Baldwin",
                    "player1_wins": 0,
                    "player2_wins": 0
                }, {
                    "id": 23,
                    "player1": "Adrienne Kennedy",
                    "player2": "Jordan Howard",
                    "player1_wins": 10,
                    "player2_wins": 1
                }, {
                    "id": 24,
                    "player1": "Lena Newton",
                    "player2": "Kristi Guerrero",
                    "player1_wins": 30,
                    "player2_wins": 1
                }, {
                    "id": 25,
                    "player1": "Alicia Casey",
                    "player2": "Jody Lopez",
                    "player1_wins": 0,
                    "player2_wins": 0
                }]
            }
            data.topTen = _.sortBy(data.games, function(game) {
                game.winner = game.player1_wins >= game.player2_wins ? game.player1 : game.player2;
                return game.winner_wins = game.player1_wins >= game.player2_wins ? game.player1_wins : game.player2_wins;
            }).reverse().slice(0, 10);
            template = Handlebars.compile(template);
            that.$el.html(template(data));
        });
        return this;
    }
});
