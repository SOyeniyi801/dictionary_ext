const button = document.getElementById("button");
const wordInput = document.getElementById("word")


button.addEventListener("click", async () => {
    const word = wordInput.value
  fetchData(word)
  wordInput.value = ''
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
      const url = `/api/${word}`;
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      const wordDisplay = document.getElementById('wordDisplay')
      wordDisplay.innerHTML = word

      const pronunciationDisplay = document.getElementById('pronunciation')
      pronunciationDisplay.innerHTML = data.pronunciation.all

      const definitionsList = document.getElementById('definition')
      definitionsList.innerHTML = ""

      data.results.forEach(result => {
        const li = document.createElement('li')
        li.textContent = result.definition
        definitionsList.appendChild(li)
      });
      console.log(data);
    } catch {}
  };

  const getSynonyms = async (word) => {
    try {
        const url = `/api/${word}/synonyms`
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
              },
        })

        const data = await response.json()

        const synonymsList = document.getElementById("synonyms")
        synonymsList.innerHTML = ""

        if(data.synonyms.length === 0) {
            synonymsList.innerHTML = "There are no synonyms for this word"
        } else{
            data.synonyms.forEach(synonym => {
                const li = document.createElement('li')
                li.textContent = synonym
                synonymsList.appendChild(li)
            })
            console.log(data)
        }

        

    } catch {

    }
  }

  const getAntonyms = async (word) => {
    try {
        const url = `/api/${word}/antonyms`
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
              },
        })

        const data = await response.json()

        const antonymsList = document.getElementById("antonyms")
        antonymsList.innerHTML = ""

        if(data.antonyms.length === 0){
            antonymsList.innerHTML = "There are no antonyms for this word"
        } else{
            data.antonyms.forEach(antonym => {
                const li = document.createElement('li')
                li.textContent = antonym
                antonymsList.appendChild(li)
            })
            console.log(data)
        }

        

    } catch {

    }
  }
 
