var benchMax = document.getElementById("benchPress");
var squatMax = document.getElementById("squat");
var deadliftMax = document.getElementById("deadlift");
var overheadPressMax = document.getElementById("overheadPress");

var submitButton = document.getElementById("submitButton");

function submitResults() {
    var weightResults = {
        benchResults: benchMax.value * .75,
        squatResults: squatMax.value * .75,
        deadliftResults: deadliftMax.value * .75,
        overheadPressResults: overheadPressMax.value * .75
    }

    localStorage.setItem("weightResults", JSON.stringify(weightResults));
};

submitButton.addEventListener("submit", function (event) {
    event.preventDefault();
    submitResults();
});

