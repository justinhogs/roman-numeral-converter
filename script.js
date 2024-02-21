const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertToRoman = () => {
  output.innerText = "";
  const input = parseInt(number.value);

  if (number.value.length == 0) {
    output.innerText = "Please enter a valid number";
  } else if (input >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else if (input <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (input < 4000) {
    let thousands = Math.floor(input / 1000);
    let hundreds = Math.floor((input - thousands * 1000) / 100);
    let tens = Math.floor((input - thousands * 1000 - hundreds * 100) / 10);
    let ones = Math.floor(
      input - thousands * 1000 - hundreds * 100 - tens * 10,
    );

    for (let i = 0; i < thousands; i++) {
      output.innerText += "M";
    }

    if (hundreds == 9) {
      output.innerText += "CM";
    } else if (hundreds < 9 && hundreds > 4) {
      output.innerText += "D";
      for (let i = 0; i < hundreds - 5; i++) {
        output.innerText += "C";
      }
    } else if (hundreds == 4) {
      output.innerText += "CD";
    } else {
      for (let i = 0; i < hundreds; i++) {
        output.innerText += "C";
      }
    }

    if (tens == 9) {
      output.innerText += "XC";
    } else if (tens < 9 && tens > 4) {
      output.innerText += "L";
      for (let i = 0; i < tens - 5; i++) {
        output.innerText += "X";
      }
    } else if (tens == 4) {
      output.innerText += "XL";
    } else {
      for (let i = 0; i < tens; i++) {
        output.innerText += "X";
      }
    }

    if (ones == 9) {
      output.innerText += "IX";
    } else if (ones < 9 && ones > 4) {
      output.innerText += "V";
      for (let i = 0; i < ones - 5; i++) {
        output.innerText += "I";
      }
    } else if (ones == 4) {
      output.innerText += "IV";
    } else {
      for (let i = 0; i < ones; i++) {
        output.innerText += "I";
      }
    }
  }
};

convertBtn.addEventListener("click", convertToRoman);
