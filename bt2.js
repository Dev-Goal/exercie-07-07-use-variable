// function chuyenDoi() {
//   let tempureC = document.getElementById("number1").value;
//   let tempureF = (9 * tempureC) / 5 + 32;
//   document.getElementById("result").innerHTML = "Nhiệt độ F tương ứng là: " + tempureF;
// }

var change = document.getElementById("btn1");
change.addEventListener("click", getChange);
function getChange(){
    let tempureC = document.getElementById("number1").value;
    let tempureF = (9 * tempureC) / 5 + 32;
    document.getElementById("resultC").innerHTML = "Nhiệt độ C là: " + tempureC;
    document.getElementById("resultF").innerHTML = "Nhiệt độ F tương ứng là: " + tempureF;
}
