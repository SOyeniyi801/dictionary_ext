const button = document.getElementById("button");
const wordInput = document.getElementById("word")


button.addEventListener("click", async () => {
    const word = wordInput.value
  fetchData(word)
  wordInput.value = ''
  document.querySelector('.main-container').style.display = 'block'
});

wordInput.addEventListener("keypress", async (event) => {
    if (event.key === 'Enter') {
        const word = wordInput.value
      fetchData(word);
      wordInput.value = ''
    }
  });

  const fetchData = async (word) => {
    await getDefinition(word);
    await getSynonyms(word);
    await getAntonyms(word);
  };

  const getDefinition = async (word) => {
    try {
        const url = `http://localhost:3000/api/${word}`;
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch definition");
        }

        const data = await response.json();

        const wordDisplay = document.getElementById('wordDisplay');
        wordDisplay.innerHTML = word;

        const pronunciationDisplay = document.getElementById('pronunciation');
        if(data.pronunciation  === undefined ){
          pronunciationDisplay.innerHTML = "Word not found"
          console.log(data.pronunciation)
        } else {
          pronunciationDisplay.innerHTML = data.pronunciation?.all || data.pronunciation;
        }
        

        const definitionsList = document.getElementById('definition');
        definitionsList.innerHTML = "";

        if (data.results && data.results.length > 0) {
            data.results.forEach(result => {
                const li = document.createElement('li');
                li.textContent = result.definition;
                definitionsList.appendChild(li);
            });
        } else {
            definitionsList.innerHTML = "No definitions found";
        }
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
};

const getSynonyms = async (word) => {
    try {
        const url = `http://localhost:3000/api/${word}/synonyms`;
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch synonyms");
        }

        const data = await response.json();

        const synonymsList = document.getElementById("synonyms");
        synonymsList.innerHTML = "";

        if (data.synonyms && data.synonyms.length > 0) {
            data.synonyms.forEach(synonym => {
                const li = document.createElement('li');
                li.textContent = synonym;
                synonymsList.appendChild(li);
            });
        } else {
            synonymsList.innerHTML = "No synonyms found";
        }
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
};

const getAntonyms = async (word) => {
    try {
        const url = `http://localhost:3000/api/${word}/antonyms`;
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch antonyms");
        }

        const data = await response.json();

        const antonymsList = document.getElementById("antonyms");
        antonymsList.innerHTML = "";

        if (data.antonyms && data.antonyms.length > 0) {
            data.antonyms.forEach(antonym => {
                const li = document.createElement('li');
                li.textContent = antonym;
                antonymsList.appendChild(li);
            });
        } else {
            antonymsList.innerHTML = "No antonyms found";
        }
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
};
