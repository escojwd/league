function League(id, teams) {
    this.id = id,
    this.teams = [],
    this.addTeams = function(t){ this.teams.push(t) },
    this.orderTeamsByRating = function tableCol() {
        this.teams.sort(function(t1, t2){
            if(t1.points == t2.points) {
                return t2.goalDifference - t1.goalDifference;
            } else{
                return t2.points - t1.points;
            }
        })
    }
};

// let clubId = Math.floor(Math.random() * 100);

function Team (name, id, games = 0, win = 0, draw = 0, loose = 0, goalScored = 0, goalConcedent = 0, goalDifference, points = 0) {
    this.name = name,
    this.id = id,
    this.games = games,
    this.win = win,
    this.draw = draw,
    this.loose = loose,
    this.goalScored = goalScored,
    this.goalConcedent = goalConcedent,
    this.goalDifference = this.goalScored - this.goalConcedent,
    this.points = points
    // this.logo = logo
}

let teamOne = new Team(
    name = "FC Bayern",
    id = function clubId() {
        return this.name + "_" + Math.floor(Math.random() * 10000);
    },
    games = 0,
    win = 0,
    draw = 0,
    loose = 0,
    goalScored = 10,
    goalConcedent = 3,
    goalDifference = this.goalScored - this.goalConcedent,
    points = 110
    // logo = function logo() {
    //     let teamLogo = document.createElement('img');
    //     teamLogo.setAttribute("src", "/assets/logos/ac-milan.png");
    // }
)

let teamTwo = new Team(
    name = "AC Milan",
    id = function clubId() {
        return this.name + "_" + Math.floor(Math.random() * 10000);
    },
    games = 0,
    win = 0,
    draw = 0,
    loose = 0,
    goalScored = 10,
    goalConcedent = 8,
    goalDifference = this.goalScored - this.goalConcedent,
    points = 110
    // logo = function logo() {
    //     let teamLogo = document.createElement('img');
    //     teamLogo.setAttribute("src", "/assets/logos/ac-milan.png");
    // }
)

let teamThree = new Team(
    name = "Real madrid",
    id = function clubId() {
        return this.name + "_" + Math.floor(Math.random() * 10000);
    },
    games = 0,
    win = 0,
    draw = 0,
    loose = 0,
    goalScored = 0,
    goalConcedent = 0,
    goalDifference = function difference(){ return this.goalScored - this.goalConcedent},
    points = 11,
    // logo = function logo() {
    //     let teamLogo = document.createElement('img');
    //     teamLogo.setAttribute("src", "/assets/logos/ac-milan.png");
    // }
)

let teamFour = new Team(
    name = "FC Barcelona",
    id = function clubId() {
        return this.name + "_" + Math.floor(Math.random() * 10000);
    },
    games = 0,
    win = 0,
    draw = 0,
    loose = 0,
    goalScored = 0,
    goalConcedent = 0,
    goalDifference = function difference(){ return this.goalScored - this.goalConcedent},
    points = 11,
    // logo = function logo() {
    //     let teamLogo = document.createElement('img');
    //     teamLogo.setAttribute("src", "/assets/logos/ac-milan.png");
    // }
)

let leagueOne = new League(1, "superliga");

leagueOne.addTeams(teamOne);
leagueOne.addTeams(teamTwo);
leagueOne.addTeams(teamThree);
leagueOne.addTeams(teamFour);


leagueOne.orderTeamsByRating();

// let text = ["text1", "text2", "text3", "text4"];
// text.forEach(function(el) {
//     let div = document.createElement("div");
//     div.className = "final-block";
//     div.innerHTML = el;
//     document.body.appendChild(div);
// });


// tr must be an array... wride code that is giving 
// ( in thead tr's th is 8 pieces) 8 td to each tr

function teamsTable() {
    let allTeams = [];
    for (let i = 0; i < leagueOne.teams.length; i++) {
        let teamsQuantity = document.createElement("tr");
        for (let k = 0; k < leagueOne.teams.AD; k++) {
            // მონიშნე teams-ს ობიექტის ყველა property AD-ში
            // every- გამოიყენე
        }
        allTeams.push(teamsQuantity);        
    }
    return allTeams;
}

teamsTable();

// console.log(leagueOne.teams);
console.log(teamsTable());
