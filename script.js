document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("calculatorForm");
    const result = document.getElementById("result");
    const operatorBtns = document.querySelectorAll(".operator-btn");
    let selectedOperator = "";

    operatorBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        selectedOperator = btn.getAttribute("data-operator");
        operatorBtns.forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const num1 = parseFloat(document.getElementById("num1").value);
      const num2 = parseFloat(document.getElementById("num2").value);

      let calculation;

      switch (selectedOperator) {
        case "+":
          calculation = num1 + num2;
          break;
        case "-":
          calculation = num1 - num2;
          break;
        case "*":
          calculation = num1 * num2;
          break;
        case "/":
          if (num2 !== 0) {
            calculation = num1 / num2;
          } else {
            result.style.color = "red";
            result.textContent = "Error: Division by zero is not allowed.";
            return;
          }
          break;
        default:
          result.style.color = "red";
          result.textContent = "Please select an operator.";
          return;
      }

      result.style.color = "green";
      result.textContent = `Result: ${calculation}`;
    });
  });