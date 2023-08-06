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
        var exerciseToDisplay = result[98].gifUrl;
        var excerciseEl = ` <img src="${exerciseToDisplay}" alt="exercise gif">`
        var exerciseContainerEl = document.querySelector("#exerciseExamples");
        exerciseContainerEl.innerHTML = excerciseEl;
        
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
        var videoToDisplay = result.contents[0].video.videoId;
        var videoEl = `
        <iframe width="420" height="315" src="https://www.youtube.com/embed/${videoToDisplay}"></iframe>`
        var videoContainerEl = document.querySelector("#dynamicVideo");
        videoContainerEl.innerHTML = videoEl;
    } catch (error) {
        console.error(error);

    }
}
getvideo();

