const countriesContainer = document.querySelector(".countriesContainer")

fetch("https://restcountries.com/v3.1/all")
.then(function(res){
    console.log(res);
    return res.json()
})
.then(function(data){
    // console.log(data);

    data.forEach(element => {
        console.log(element);
        const countriesCard = document.createElement("div")
        countriesCard.classList.add("countriesCard")

        const countryName = element.name.official
        const nameElement = document.createElement("h2")
        nameElement.innerText = "country name: " + countryName



        const countryCapitalElement = document.createElement("p")
        if(element.capital != undefined){
            const countryCapital = element.capital[0]
            countryCapitalElement.innerText = "country capital: " + countryCapital
        }

        const countryCoatOfArmsElement = document.createElement("img")
        if(element.coatOfArms.svg != undefined){
            const countryCoatOfArms = element.coatOfArms.svg
            countryCoatOfArmsElement.src = countryCoatOfArms
        }    

        const countryContinents = document.createElement("p")
        const countryContinentsElement = element.continents[0]
        countryContinents.innerText = "country continents: " + countryContinentsElement

        const countryCurrencies = document.createElement("p")
        for(let key in element.currencies){
            // console.log(key);
            // console.log(element.currencies[key]);
            const countryCurrenciesElement = element.currencies[key].name + " " + element.currencies[key].symbol
            countryCurrencies.innerText = "country currency: "+ countryCurrenciesElement
        }

        const countryFlag = document.createElement("p")
        const countryFlagElement = element.flag
        countryFlag.innerText = countryFlagElement

        const countryLanguages = document.createElement("p")
        for(let key in element.languages){
            const countryLanguagesElement = element.languages[key]
            countryLanguages.innerText = "country language: "+ countryLanguagesElement
        }

        const countryPopulation = document.createElement("p")
        const countryPopulationElement = element.population
        countryPopulation.innerText = "country population: " + countryPopulationElement

        const countryStartOfWeek = document.createElement("p")
        const countryStartOfWeekElement = element.startOfWeek
        countryStartOfWeek.innerText = "start of week: " + countryStartOfWeekElement


        countriesContainer.appendChild(countriesCard)
        countriesCard.appendChild(nameElement)
        countriesCard.appendChild(countryCapitalElement)
        countriesCard.appendChild(countryCoatOfArmsElement)
        countriesCard.appendChild(countryContinents)
        countriesCard.appendChild(countryCurrencies)
        countriesCard.appendChild(countryFlag)
        countriesCard.appendChild(countryLanguages)
        countriesCard.appendChild(countryPopulation)
        countriesCard.appendChild(countryStartOfWeek)

    });
})
