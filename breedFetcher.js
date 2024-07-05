const needle = require('needle');

const fetchBreedCats = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  needle.get(url, (error, response) => {
    if (error) {
      callback(`Request failed: ${error.message}`, null);
      return;
    }
    if (response.statusCode !== 200) {
      callback(`Error: Received code ${response.statusCode}`, null);
      return;

    }
    const data = response.body;
    if (data.length === 0) {
      callback(`Breed ${breedName} not found :/`, null);
    } else {
      callback(null, data[0].description);
    }
  });
};

const breedName = process.argv[2];

fetchBreedCats(breedName, (error, description) => {
  if (error) {
    console.log(error);
  } else {
    console.log(description);
  }
});