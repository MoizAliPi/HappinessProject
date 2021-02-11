export function getCountryData(country){
    // GET request using fetch with error handling
    return fetch('https://happyie-project.herokuapp.com/country?name='+country)
    .then(data => data.json())
}