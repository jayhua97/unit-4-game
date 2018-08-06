$(document).ready(function() {
    var totalPoints = 0;
    var crystalsBtn = $("#crystals");
    var crystalOneBtn = $("#crystal1");
    var crystalTwoBtn = $("#crystal2");
    var crystalThreeBtn = $("#crystal3");
    var crystalFourBtn = $("#crystal4");
    var requiredPoints = Math.floor(Math.random() * 101) + 19;
    console.log(requiredPoints);    

    function generateCrystalValue() {
        var randomCrystalValue = Math.floor(Math.random() * 8) + 2;
        crystalsBtn.attr("data-value", randomCrystalValue);
    }



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



    console.log(totalPoints);
    $("#crystal1").on("click",function() {
        totalPoints = totalPoints + parseInt(($(this).attr("data-value")));
        $(".totalScore").text(totalPoints);
        console.log(totalPoints);
        console.log("aaa", $(this).attr("data-value"));
    })
    $("#crystal2").on("click",function() {
        totalPoints = totalPoints + parseInt(($(this).attr("data-value")));
        $(".totalScore").text(totalPoints);
        console.log(totalPoints);
        console.log("aaa", $(this).attr("data-value"));
    })
    $("#crystal3").on("click",function() {
        totalPoints = totalPoints + parseInt(($(this).attr("data-value")));
        $(".totalScore").text(totalPoints);
        console.log(totalPoints);
        console.log("aaa", $(this).attr("data-value"));
    })
    $("#crystal4").on("click",function() {
        totalPoints = totalPoints + parseInt(($(this).attr("data-value")));
        $(".totalScore").text(totalPoints);
        console.log(totalPoints);
        console.log("aaa", $(this).attr("data-value"));
    })

    $(".winCondition").text(requiredPoints);

})