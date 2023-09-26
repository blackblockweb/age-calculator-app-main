let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let years = document.getElementById("years");
let months = document.getElementById("months");
let days = document.getElementById("days");


year.onkeyup = function yearold() {
    let yearresult = 2023 - year.value ;
    years.innerHTML = yearresult;
}

month.onkeyup = function monthold() {
    let monthresult = 12 - month.value ;
    months.innerHTML = monthresult;
}

day.onkeyup = function monthold() {
    let dayresult = 31 - day.value ;
    days.innerHTML = dayresult;
}