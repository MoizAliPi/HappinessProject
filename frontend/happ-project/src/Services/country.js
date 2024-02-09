export function getCountryData(country) {
  // GET request using fetch with error handling
  return fetch(
    "https://happyie-backend-73da835acddb.herokuapp.com/country?name=" + country
  ).then((data) => data.json());
}
