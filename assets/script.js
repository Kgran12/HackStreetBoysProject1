// might use this later
const results = document.getElementById("results");
const urlParams = new URLSearchParams(window.location.search);
const benchPress = urlParams.get("benchPress");
const squat = urlParams.get("squat");
const deadlift = urlParams.get("deadlift");
const overheadPress = urlParams.get("overheadPress");
const benchPressMax = Math.round(benchPress * 1.03);
const squatMax = Math.round(squat * 1.03);
const deadliftMax = Math.round(deadlift * 1.03);
const overheadPressMax = Math.round(overheadPress * 1.03);
results.innerHTML = `