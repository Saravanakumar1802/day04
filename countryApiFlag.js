//Create Request
var request = new XMLHttpRequest();

//REQUEST CONNECTION
request.open('GET', 'https://restcountries.com/v2/all?access_key=b1fa50d01631ca0880e7b4491814c60c')

//Sending Request
request.send();

request.onload=function(){
    var countryData=JSON.parse(this.responseText);
    for(let country of countryData){
    console.log(country.flag);
    } 
}





