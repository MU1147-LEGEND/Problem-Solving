// this function converts time AM/PM to 24 Hrs clock.

function timeConversion(s) {
    let timeAM = s.includes("AM");
    let timePM = s.includes("PM");

    let time = s.split(":");
    time[2] = time[2].slice(0, 2);
    if (timeAM) {
        if (time[0] === "12") {
            time[0] = "00";
        }
        return time.join(":");

    } else if (timePM) {
        time[0] = Number(time[0]) + 12;
        if (time[0] === 24) {
            time[0] = "12";
        }
        return time.join(":");
    }
}

let time = "12:05:45PM"; // time should given only this format.
console.log(timeConversion(time));
