var wins = 0;
var losses = 0;
var totalPoints = 0;
var crystalsBtn = $("#crystals");
var crystalOneBtn = $("#crystal1");
var crystalTwoBtn = $("#crystal2");
var crystalThreeBtn = $("#crystal3");
var crystalFourBtn = $("#crystal4");

$(document).ready(function() {
    function startGame() {
        totalPoints = 0;
        requiredPoints = Math.floor(Math.random() * 101) + 19;
        $(".winCondition").text(requiredPoints);
        console.log(requiredPoints);    
    }

    function winCondition() {
        if (totalPoints === requiredPoints) {
            wins++;
            $(".wins").text("Wins: " + wins);
            startGame();
            generateCrystalValue();
            console.log(requiredPoints);    
            console.log("wins: " + wins);
        }

        else if (totalPoints > requiredPoints) {
            losses++;
            $(".losses").text("Losses: " + losses );
            startGame();
            generateCrystalValue();
            requiredPoints = Math.floor(Math.random() * 101) + 19;
        console.log(requiredPoints);    
            console.log("losses: " + losses);
        }
    }   

    function generateCrystalValue() {
        $("#crystal1").ready(function() {
            var randomCrystalValue = Math.floor(Math.random() * 10) + 2;
            crystalOneBtn.attr("data-value", randomCrystalValue);
        })
        $("#crystal2").ready(function() {
            var randomCrystalValue = Math.floor(Math.random() * 10) + 2;
            crystalTwoBtn.attr("data-value", randomCrystalValue);
        })
        $("#crystal3").ready(function() {
            var randomCrystalValue = Math.floor(Math.random() * 10) + 2;
            crystalThreeBtn.attr("data-value", randomCrystalValue);
        })
        $("#crystal4").ready(function() {
            var randomCrystalValue = Math.floor(Math.random() * 10) + 2;
            crystalFourBtn.attr("data-value", randomCrystalValue);      
        })
    }

    startGame();
    generateCrystalValue();

    console.log(totalPoints);
    $("#crystal1").on("click",function() {
        totalPoints = totalPoints + parseInt(($(this).attr("data-value")));
        $(".totalScore").text(totalPoints);
        winCondition();
        console.log(totalPoints);
        console.log("aaa", $(this).attr("data-value"));
    })
    $("#crystal2").on("click",function() {
        totalPoints = totalPoints + parseInt(($(this).attr("data-value")));
        $(".totalScore").text(totalPoints);
        winCondition();
        console.log(totalPoints);
        console.log("aaa", $(this).attr("data-value"));
    })
    $("#crystal3").on("click",function() {
        totalPoints = totalPoints + parseInt(($(this).attr("data-value")));
        $(".totalScore").text(totalPoints);
        winCondition();
        console.log(totalPoints);
        console.log("aaa", $(this).attr("data-value"));
    })
    $("#crystal4").on("click",function() {
        totalPoints = totalPoints + parseInt(($(this).attr("data-value")));
        $(".totalScore").text(totalPoints);
        winCondition();
        console.log(totalPoints);
        console.log("aaa", $(this).attr("data-value"));
    })
    console.log(totalPoints);




})