import "./style.css";
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";

const refs = {
  input: document.getElementById("number-of-exaples"),
  text: document.getElementById("show-number"),
  examplesList: document.getElementById("exampleList"),
};

const generateMathExample = (numExamples) => {
  const examples = [];

  for (let i = 0; i < numExamples; i += 1) {
    const number1 = Math.floor(Math.random() * 99) + 1;
    const number2 = Math.floor(Math.random() * 99) + 1;
    const operator = Math.random() < 0.5 ? "+" : "-";
    let result;

    if (operator === "+") {
      result = number1 + number2;
    } else {
      const maxNum = Math.max(number1, number2);
      const minNum = Math.min(number1, number2);
      result = maxNum - minNum;
    }

    const example = `${number1} ${operator} ${number2} = `;
    examples.push({ example, result });
  }

  return examples;
};

refs.input.addEventListener("change", chengesNumOfExamples);

function chengesNumOfExamples(event) {
  refs.text.textContent = `${event.currentTarget.value} шт`;
  const numExamplesToGenerate = event.currentTarget.value;
  const mathExamples = generateMathExample(numExamplesToGenerate);

  refs.examplesList.innerHTML = "";

  mathExamples.forEach((exampleObj) => {
    const listItem = document.createElement("li");
    listItem.textContent = exampleObj.example;
    refs.examplesList.appendChild(listItem);
  });
}
