const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang='ta-IN'


let p = document.createElement("p");

/*recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  console.log(text)
  
  // comment 22,23,24,25 to get text in a single p block
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    console.log(text)
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();

btn1.getElementBtId("Click", () => {
    recognition.start();
});
*/


function spchToTxt() {

	recognition.start();

	recognition.addEventListener("result", (e) => {
	  texts.appendChild(p);
	  const text = Array.from(e.results)
	    .map((result) => result[0])
	    .map((result) => result.transcript)
	    .join("");

	  document.getElementById("InputMessage").value = text;
	  
	});
}


