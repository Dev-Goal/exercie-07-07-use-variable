var area = document.getElementById("btn1");
area.addEventListener("click", getArea);
function getArea() {
  let pi = 3.14159265359;
  inputCircle = document.getElementById("circle").value;
  let Circle = parseFloat(inputCircle);
  let Area = Circle * Circle * pi;
  document.getElementById("result1").innerHTML =
    "Diện tích hình tròn là: " + Area;
}

var cv = document.getElementById("btn2");
cv.addEventListener("click", getCv);
function getCv() {
  let pi = 3.14159265359;
  inputCircle = document.getElementById("circle").value;
  let Circle = parseFloat(inputCircle);
  let Area = Circle * 2 * pi;
  document.getElementById("result1").innerHTML = "Chu vi hình tròn là: " + Area;
}
