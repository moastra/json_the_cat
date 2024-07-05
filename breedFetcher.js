// initialize needle
const needle = require('needle');
// api url
const fetchBreedCats = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

// error messages generation
  needle.get(url, (error, response) => {
    if (error) {
      callback(`Request failed: ${error.message}`, null); // if url is messed up, send error message
      return;
    }
    if (response.statusCode !== 200) {
      callback(`Error: Received code ${response.statusCode}`, null); // if all isn't good, send code.
      return;

    }
    const data = response.body;
    if (data.length === 0) {
      callback(`Breed ${breedName} not found :/`, null); // error message if breed inputed is not properly done.
    } else {
      callback(null, data[0].description); // take out the breed description from the object.
    }
  });
};

const breedName = process.argv[2]; // able to write the breed name in the command line

fetchBreedCats(breedName, (error, description) => {
  if (error) {
    console.log(error);
  } else {
    console.log(description);
  }
});