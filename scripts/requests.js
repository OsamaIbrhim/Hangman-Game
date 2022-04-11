//setTimeout()
// Promise pattrn
const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if(response.status === 200){
        const data = await response.json()
        return data.puzzle
    }else{
        throw new Error('Unable to fetch puzzle')
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.com/v3.1/all')
    if(response.status === 200){
        const data = await response.json()
        const country = data.find((country) => country.cca2 === countryCode)
        return country.name
    }else{
        throw new Error('Unable to fetch country')
    }
}

const getLocation = async () =>{
    const response = await fetch('git//ipinfo.io/json?token=4b229b4d3acd9e')
    if(response.status ===200){
        return response.json()
    }else{
        throw new Error('Unable to fetch Location')
    }
}

const getCurrentCountry = async () =>{
    const lucation = await getLocation()
    return getCountry(lucation.country)
}