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
    var cidade = myJson["name"];

    var horario = new Date(myJson["dt"] * 1000);

    var hora   = "0" + horario.getHours();
    var minuto = "0" + horario.getMinutes();

    var ano = horario.getFullYear();
    var mes = "0" + horario.getMonth();
    var dia = "0" + horario.getDate();


    var tempoFormatado = hora.substr(-2) + "h" + minuto.substr(-2) + "min";
    var diaFormatado = ano + "/" + mes.substr(-2) + "/" + dia.substr(-2);

    document.getElementById("temperatura").innerHTML = "TEMPERATURA : " + temperatura + "ºC";
    document.getElementById("extraTemperatura").innerHTML = "Temperatura : " + temperatura + "ºC";
    document.getElementById("clima").innerHTML = "Clima : " + clima;
    document.getElementById("vento").innerHTML = "Vento : " + vento + "km/h";
    document.getElementById("titulo").innerHTML = cidade + " " + diaFormatado + " " + tempoFormatado;
}

res = updateInfo("3463030");
