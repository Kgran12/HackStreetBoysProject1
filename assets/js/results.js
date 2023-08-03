var benchResults = document.getElementById("benchResults");
var squatResults = document.getElementById("squatResults");
var deadliftResults = document.getElementById("deadliftResults");
var overheadPressResults = document.getElementById("pressResults");


function showWeight() {
    var savedWeight = JSON.parse(localStorage.getItem("weightResults"));
    benchResults.textContent = savedWeight.benchResults;
    squatResults.textContent = savedWeight.squatResults;
    deadliftResults.textContent = savedWeight.deadliftResults;
    overheadPressResults.textContent = savedWeight.overheadPressResults;

};
showWeight();

const urlQuote = 'https://exercisedb.p.rapidapi.com/exercises';
const optionsQuote = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '73ddeda899msh5d7527043d2bc8ap123fccjsne25c74f58fc2',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

async function getExercise() {
    try {
        const response = await fetch(urlQuote, optionsQuote);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
getExercise();

const urlVideo = 'https://youtube-search-and-download.p.rapidapi.com/search?query=weight+lifting+tipsper_page=5';
const optionsVideo = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '73ddeda899msh5d7527043d2bc8ap123fccjsne25c74f58fc2',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

async function getvideo() {
    try {
        const response = await fetch(urlVideo, optionsVideo);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
getvideo();

