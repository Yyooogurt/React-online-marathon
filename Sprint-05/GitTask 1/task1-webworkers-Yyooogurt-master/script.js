
let worker;

function calculate() {
  const input = document.getElementById("inputNumber").value;
  const result = document.getElementById("result");

  function createWorker() {
    worker = new Worker("worker.js");
    worker.onmessage = (data) => {
      result.innerText = `Result: ${data.data}`;
    };
  }
  if (result.innerText !== "Calculating...") {
    createWorker();
    result.innerHTML = "Calculating...";
    worker.postMessage(input);
  } else {
    worker.terminate();
    createWorker();
    result.innerHTML = "Calculating...";
    worker.postMessage(input);
  }
}

