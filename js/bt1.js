inputMath = prompt("Nhap diem mon Toan");
inputPhycis = prompt("Nhap diem mon Vat ly");
inputChemistry = prompt("Nhap diem mon Hoa hoc");

let Math = parseFloat(inputMath);
let Phycis = parseFloat(inputPhycis);
let Chemistry = parseFloat(inputChemistry);
let Avarage = (Math + Phycis + Chemistry) / 3;
let Tatol = Math + Phycis + Chemistry;

if (Math > 0 && Phycis > 0 && Chemistry > 0) {
  document.write("Diem mon Toan: " + Math + " diem");
  document.write("</br>");
  document.write("Diem mon Vat ly: " + Phycis + " diem");
  document.write("</br>");
  document.write("Diem mon Hoa hoc: " + Chemistry + " diem");
  document.write("</br>");
  document.write("Diem trung binh mon: " + Avarage + " diem");
  document.write("</br>");
  document.write("Tong: " + Tatol + " diem");
}else{
    document.write("Input again");
}
