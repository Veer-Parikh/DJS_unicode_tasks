
const axios = require('axios');

function getMeaning(word) {

    return axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((fetch)=> {
    let info = fetch.data;

    if (info.length === 0) {
      return { error: 'Word not found' };
    } else {
      return info;
    }
})
}
let search = 'hello';
getMeaning(search)
  .then((result) => {
    console.log(JSON.stringify(result, null, 2))
  })