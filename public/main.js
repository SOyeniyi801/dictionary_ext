const button = document.getElementById("button");
button.addEventListener("click", async () => {
  const word = document.getElementById("word").value;
  console.log(word);

  const getDefinition = async () => {
    try {
      const url = `/api/${word}`;
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
    } catch {}
  };
  getDefinition();
});
