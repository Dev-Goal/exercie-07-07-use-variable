// inputMath = prompt("Nhap diem mon Toan");
// inputPhycis = prompt("Nhap diem mon Vat ly");
// inputChemistry = prompt("Nhap diem mon Hoa hoc");

// let Math = parseFloat(inputMath);
// let Phycis = parseFloat(inputPhycis);
// let Chemistry = parseFloat(inputChemistry);
// let Avarage = (Math + Phycis + Chemistry) / 3;
// let Tatol = Math + Phycis + Chemistry;

// if (Math > 0 && Phycis > 0 && Chemistry > 0) {
//   document.write("Diem mon Toan: " + Math + " diem");
//   document.write("</br>");
//   document.write("Diem mon Vat ly: " + Phycis + " diem");
//   document.write("</br>");
//   document.write("Diem mon Hoa hoc: " + Chemistry + " diem");
//   document.write("</br>");
//   document.write("Diem trung binh mon: " + Avarage + " diem");
//   document.write("</br>");
//   document.write("Tong: " + Tatol + " diem");
// }else{
//     document.write("Input again");
// }

var calc = document.getElementById("btn1");
calc.addEventListener("click", getAvarage);
function getAvarage() {
   inputMath = document.getElementById("math").value;
  let math = parseFloat(inputMath);
  console.log(math);
   inputPhysics = document.getElementById("physics").value;
  let physics = parseFloat(inputPhysics);
  console.log(physics);
   inputChemistry = document.getElementById("chemistry").value;
  let chemistry = parseFloat(inputChemistry);
  console.log(chemistry);
  let avarage = (math + physics + chemistry) / 3;

  document.getElementById("result1").innerHTML = "Điểm trung bình môn là: " + avarage;
}
