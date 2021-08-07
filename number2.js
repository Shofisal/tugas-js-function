function minFahrenheit (number){
    return number - 32
}

function getFahrenheit (celcius){
    return minFahrenheit (celcius) * 5/9;
}
console.log (getFahrenheit (15))
document.write ('Hasilnya:')
document.write (getFahrenheit(15))