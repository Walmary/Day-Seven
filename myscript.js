/*javaScript program */
/*created: 04/07/2022*/
/*author: Walter Munoz*/

/*this function get system date*/
function getDay() {
    let getDate;
    getDate = new Date();
    var sDate = getDate.getDate() + '/' + (getDate.getMonth() + 1) + '/' + getDate.getFullYear();
    return sDate;
}
/*this function get system hour*/
function getHours() {
    let getHour;
    getHour = new Date();
    var sHour = getHour.getHours() + ':' + getHour.getMinutes() + ':' + getHour.getSeconds();
    return sHour;
}

function putChar() {
    let start = "*";
    for (i = 1; i < 20; i++) {
        if (i <= 10) {
            start = start + "*";
        }
        if (i > 10) {
            start = start.replace('*', '');
            //   start =  start - "*";
        }
        document.write('<br>');
        document.writeln(start);
        // console.log(start);

    }
    return start;
}