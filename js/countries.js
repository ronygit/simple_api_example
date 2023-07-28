function loadCountries() {
    fetch('https://restcountries.com/v3.1/all')
        .then(respons => respons.json())
        .then(countries => displayCountries(countries))
}


const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries')
    countries.forEach(country => {
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')">Details</button>
        `
        countriesDiv.appendChild(div)


    });
}

const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayCountryDetail(data[0]))
    // console.log(url)
}

const displayCountryDetail = country => {
    const countryDiv = document.getElementById('country-detail')
    countryDiv.innerHTML = `
     <h5>${country.name.common}</h5>
     <p>population: ${country.population}</p>
     <img width="200px" src="${country.flags.svg}" alt="" srcset="">     
     `
    // console.log(country)
}

loadCountries()