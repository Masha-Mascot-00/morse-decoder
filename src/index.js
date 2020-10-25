const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let singleElementArr = [];
  let morseArray = [];
  let oneMorseElement;
  let sentence = [];
  let arrExpr = expr.split("");
  for (let index = 0; index < arrExpr.length; ) {
    const element = arrExpr[index];
    let singleElement = arrExpr.slice(index, index + 10);
    singleElementArr.push(singleElement.join(""));
    index += 10;
  }
  singleElementArr.forEach((element) => {
    //0010101010
    let twoBinaryElement;
    if (element === "**********") {
      twoBinaryElement = "*****";
      morseArray.push(twoBinaryElement);
    } else {
      let binaryArray = element.split(""); // 0 0 1 0 1 0 1 0 1 0
      for (let index = 0; index < binaryArray.length; ) {
        const binaryElement = binaryArray[index]; // 0 0 /1 0 /1 0 /1 0 /1 0
        let doubleElement = binaryArray.slice(index, index + 2); // 0 0
        twoBinaryElement = doubleElement.join("");
        switch (twoBinaryElement) {
          case "00":
            twoBinaryElement = "";
            break;
          case "10":
            twoBinaryElement = ".";
            break;
          case "11":
            twoBinaryElement = "-";
            break;
          default:
            break;
        }
        morseArray.push(twoBinaryElement);
        index += 2;
      }
    }
    oneMorseElement = morseArray.join("");
    if (MORSE_TABLE.hasOwnProperty(oneMorseElement)) {
      const element = MORSE_TABLE[oneMorseElement];
      sentence.push(element);
    } else {
      sentence.push(" ");
    }

    morseArray = [];
  });
  return sentence.join("");
};

module.exports = {
  decode,
};
