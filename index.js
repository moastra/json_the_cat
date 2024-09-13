const fetchBreedDescription = require('./breedFetcher');

const breedName = process.argv[2]; // able to write the breed name in the command line

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log(error);
  } else {
    console.log(description);
  }
});