// // might use this later
// const results = document.getElementById("results");
// const urlParams = new URLSearchParams(window.location.search);
// const benchPress = urlParams.get("benchPress");
// const squat = urlParams.get("squat");
// const deadlift = urlParams.get("deadlift");
// const overheadPress = urlParams.get("overheadPress");
// const benchPressMax = Math.round(benchPress * 1.03);
// const squatMax = Math.round(squat * 1.03);
// const deadliftMax = Math.round(deadlift * 1.03);
// const overheadPressMax = Math.round(overheadPress * 1.03);
// results.innerHTML = `


const urlQuote = 'https://exercisedb.p.rapidapi.com/exercises';
const optionsQuote = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '73ddeda899msh5d7527043d2bc8ap123fccjsne25c74f58fc2',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

async function getQuote() {
    try {
        const response = await fetch(urlQuote, optionsQuote);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
getQuote();

const urlVideo = 'https://youtube-search-and-download.p.rapidapi.com/search?query=weight+lifting+tips';
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





var roundtoThousandth = function (number) {
    return Math.round(number * 1000) / 1000;
}

var buildExercise = function (exerciseName, sets) {
    var results = '<tr><td>' + exerciseName + '</td>';
    for (var i = 0; i < sets.length; i++) {
        results += '<td>' + roundtoThousandth(sets[i]) + '</td>';
    }

    var buildDay = function (exercises) {
        return '<table><tbody>' + exercises.join('') + '</tbody></table>';

    }
}

// function getQuote() {
//     fetch(url, options)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//         });
// }
// getQuote();