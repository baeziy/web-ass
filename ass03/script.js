const button = document.querySelector("button");
button.addEventListener("click", () => {
  const input = document.querySelector("#input");
  const val = input.value;
  const arrays = val.match(/\[.*?\]/g);
  let output = "Arrays occurring in the paragraph are:<br>";

  if (arrays) {
    for (let array of arrays) {
      output += array + "<br>";
    }
  } else {
    output = "No arrays found in the paragraph.";
  }

  document.querySelector("#output").innerHTML = output;
});
