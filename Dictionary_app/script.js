const inputEl = document.getElementById('input')
const infoTextEl = document.getElementById('info-text')
const meaningContainerEl = document.getElementById('meaning-container')
const titleEl = document.getElementById('title')
// const meaningEl = document.getElementById('meaning')
// const partOfSpeechEl = document.getElementById('part_of_speech')
const meaningWrapperEl = document.getElementById('meaning-wrapper')
const audioEl = document.getElementById('audio')
// const synonymsEl = document.getElementById('synonyms')
// const antonymsEl = document.getElementById('antonyms')

async function fetchAPI(word) {
  try {
    infoTextEl.style.display = 'block'
    meaningContainerEl.innerHTML = ''
    infoTextEl.innerText = `Searching the meaning of "${word}"`
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const result = await fetch(url).then((res) => res.json())

    if (result.title) {
      meaningContainerEl.style.display = 'block'
      infoTextEl.style.display = 'block'
      infoTextEl.style.innerText = result.title
      titleEl.innerText = word
      meaningEl.innerText = result.title
      audioEl.style.display = 'none'
    } else {
      infoTextEl.style.display = 'none'
      meaningContainerEl.style.display = 'block'
      audioEl.style.display = 'block'
      titleEl.innerText = result[0].word

      let audioSrc = getWordAudio(result[0].phonetics)
      if (audioSrc == 'no audio') {
        audioEl.style.display = 'none'
      } else {
        audioEl.src = audioSrc
        meaningContainerEl.append(audioEl)
      }

      result[0].meanings.map((meaning) => {
        console.log(meaning)
        const definationContainer = document.createElement('div')
        definationContainer.classList.add('defination_container')
        const partOfSpeechEl = document.createElement('p')
        partOfSpeechEl.innerHTML = `★ Part of Speech: ${meaning.partOfSpeech}`
        partOfSpeechEl.classList.add('prtSpeech')
        console.log(partOfSpeechEl.innerText)
        definationContainer.appendChild(partOfSpeechEl)

        let synonyms = meaning.synonyms
        console.log(typeof synonyms)
        if (synonyms != null && synonyms != undefined && synonyms != '') {
          const synonymsEl = document.createElement('p')
          // console.log(synonyms.split(',').slice(0, 3).join())
          synonymsEl.innerHTML = `★ Synonyms: ${synonyms}`

          synonymsEl.classList.add('prtSpeech')
          // console.log(synonymsEl.innerText)
          definationContainer.appendChild(synonymsEl)
        }

        let antonyms = meaning.antonyms
        if (antonyms != null && antonyms != undefined && antonyms != '') {
          const antonymsEl = document.createElement('p')
          antonymsEl.innerHTML = `★ Antonyms: ${antonyms}`
          antonymsEl.classList.add('prtSpeech')
          // console.log(antonymsEl.innerText)
          definationContainer.appendChild(antonymsEl)
        }

        // meaning.definitions.map((definition) => {
        //   console.log(definition)
        //   let meaningEl = document.createElement('li')
        //   meaningEl.innerText = definition.definition
        //   meaningEl.classList.add('meaning')
        //   console.log(meaningEl.innerText)

        //   meaningWrapperEl.appendChild(meaningEl)
        // })

        let definition = meaning.definitions[0].definition
        // console.log(meaning.definitions[0])
        let meaningEl = document.createElement('li')
        meaningEl.innerText = `★ Defination: ${definition}`
        meaningEl.classList.add('meaning')
        // console.log(meaningEl.innerText)
        definationContainer.appendChild(meaningEl)

        meaningContainerEl.appendChild(definationContainer)
      })

      const readMoreLink = document.createElement('a')
      // readMoreLink.innerHtml = `<a href="${result[0].sourceUrls[0]}">Read More</a>`
      readMoreLink.href = result[0].sourceUrls[0]
      readMoreLink.innerHTML = 'Read More'
      readMoreLink.classList.add('read_more_link')
      meaningContainerEl.appendChild(readMoreLink)

      // meaningEl.innerText = result[0].meanings[0].definitions[0].definition
    }
  } catch (error) {
    console.log(error)
    infoTextEl.innerText = `Unable to search the meaning of the word, try another please.`
  }
}

inputEl.addEventListener('keyup', (e) => {
  if (e.target.value && e.key === 'Enter') {
    meaningContainerEl.innerHTML = ''
    fetchAPI(e.target.value)
  }
})

function getWordAudio(phonetics) {
  let len = phonetics.length

  for (let i = 0; i < len; i++) {
    if (
      phonetics[i].audio &&
      phonetics[i].audio != '' &&
      phonetics[i].audio != undefined
    ) {
      return phonetics[i].audio
    }
  }
  return 'no audio'
}
