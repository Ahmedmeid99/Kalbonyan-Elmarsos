/////////////////////////////////////
//CHALLENGE 01 (cynchronous)
// const countryName = getCountryName();
// console.log(countryName);

/////////////////////////////////////
//CHALLENGE 02 (Acynchronous)
getCountryName((error, countryName) => {
  if (error) {
    console.log(error);
  } else {
    console.log(countryName);
  }
});
