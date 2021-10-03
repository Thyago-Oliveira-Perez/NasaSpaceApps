var chave = config.CHAVE_API;

const getCurrentWeather = async (cityid) => {
    var request = "https://api.openweathermap.org/data/2.5/weather?id=" + cityid + "&appid=" + config.CHAVE_API + "&units=metric" + "&lang=pt_br";

    return await fetch(request);
}

const updateInfo = async (cityid) => {
    const response = await getCurrentWeather(cityid);
    const myJson = await response.json();

    var temperatura = parseInt(myJson["main"]["temp"]);
    var clima = myJson["weather"][0]["description"];
    var vento = myJson["wind"]["speed"];

    document.getElementById("temperatura").innerHTML = "TEMPERATURA : " + temperatura + "ºC";
    document.getElementById("extraTemperatura").innerHTML = "Temperatura : " + temperatura + "ºC";
    document.getElementById("clima").innerHTML = "Clima : " + clima;
    document.getElementById("vento").innerHTML = "Vento : " + vento + "km/h";
}

res = updateInfo("3463030");
