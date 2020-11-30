const tBody = document.querySelector('tbody');
const selectClubs = document.querySelectorAll('select');
const saveBtn = document.getElementById('save-result');
const matchScore = document.querySelectorAll('input');



function League(id) {
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

function Team (name, games = 0, win = 0, draw = 0, loose = 0, goalScored = 0, goalConcedent = 0, goalDifference, points = 0) {
    this.name = name,
    this.id = this.name + "_" + Math.floor(Math.random() * 10000),
    this.games = games,
    this.win = win,
    this.draw = draw,
    this.loose = loose,
    this.goalScored = goalScored,
    this.goalConcedent = goalConcedent,
    this.goalDifference = this.goalScored - this.goalConcedent,
    this.points = points,
    this.form = [];
    // this.logo = logo
}

let leagueOne = new League(1, "superliga");

leagueOne.teams = JSON.parse(localStorage.getItem("matches"));

if(leagueOne.teams == null){
    leagueOne.teams = [];
    leagueOne.addTeams(new Team("FC Bayern"));
    leagueOne.addTeams(new Team("AC Milan"));
    leagueOne.addTeams(new Team("Real Madrid"));
    leagueOne.addTeams(new Team("FC Barcelona"));
}


function teamsTable() {
    tBody.innerHTML = "";
    leagueOne.teams.forEach((team, index)  => {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.textContent = index + 1;
        tr.appendChild(td);
        
        let teamsProp = ["name", "games", "win", "draw", "loose", "goalDifference", "points", "form"];
        teamsProp.forEach(prop => {
            const td = document.createElement('td');
            if(prop == "goalDifference"){
                td.textContent = team.goalScored + "/" + team.goalConcedent;
            }else{
                if(prop == "form") {
                    td.textContent = team.form.join(" ");
                } else {
                    td.textContent = team[prop];
                }
            }
            tr.appendChild(td);
        });
        tBody.appendChild(tr);
    });
}

teamsTable();

function generateOptions() {
    selectClubs.forEach( select => {
        leagueOne.teams.forEach( team => {
            let option = document.createElement('option');
            option.textContent = team.name;
            option.value = team.id;
            select.appendChild(option);
        });
    });
}

generateOptions();

saveBtn.addEventListener('click', () => {
    let firstOption = selectClubs[0];
    let secondOption = selectClubs[1];
    
    let firstTeam = leagueOne.teams.find( team => firstOption.value == team.id);
    let secondTeam = leagueOne.teams.find( team => secondOption.value == team.id);
    
    let firstScore = matchScore[0];
    let secondScore = matchScore[1];
    
    if(firstScore.value == "" || secondScore.value == "" || firstOption.value == secondOption.value){
        return;
    }
    
    firstTeam.games++;
    secondTeam.games++;

    firstTeam.goalScored += +firstScore.value;
    firstTeam.goalConcedent += +secondScore.value;

    secondTeam.goalScored += +secondScore.value;
    secondTeam.goalConcedent += +firstScore.value;



    if(firstScore.value > secondScore.value){
        firstTeam.points +=3;
        firstTeam.win++;
        secondTeam.loose++
    }else{
        if(firstScore.value === secondScore.value){
            firstTeam.points +=1;
            firstTeam.draw++;
            secondTeam.points +=1;
            secondTeam.draw++;
        }else{
            secondTeam.points +=3;
            secondTeam.win++;
            firstTeam.loose++;

        }
    }

    
    // console.log(firstTeam);
    // console.log(secondTeam);
    
    
    leagueOne.orderTeamsByRating();
    teamsTable();
    localStorage.setItem("matches", JSON.stringify(leagueOne.teams));
})



// console.log(matchScore);
