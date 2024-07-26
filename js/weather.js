let city=document.getElementById("city-name");

let search=document.getElementById("search-button");

let heading=document.getElementById("head");

let options={
    method:"GET",
}

function Changetempandhumd(main){
    let chamata=document.getElementById("neti");
    let hum=main.humidity+" "+"%";
    chamata.textContent=hum;
    let vedi=document.getElementById("temp");
    vedi.textContent=Math.ceil(main.temp)+""+"°C";
}

function changewind(wind){
    let gali=document.getElementById("windspeed");
    let spe=(Math.ceil(wind.speed*5));
    let spee=spe+" "+"km/h";
    gali.textContent=spee;
}

function changeicon(weather){
    let pic=weather.main;
    let sunpic=document.getElementById("sun");
    sunpic.src="../imgs/images 2/"+pic+".png";
    console.log(sunpic);
}

function getdetail(){
    let cityname=city.value;
    if(cityname!==""){
        let url="https://api.openweathermap.org/data/2.5/weather?q=";
        let key="&appid=ef2e90f0b76eb02860317244da3feecb&units=metric";
        url=url+cityname+key;
        heading.textContent=cityname;
        fetch(url,options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsondata){
        Changetempandhumd(jsondata.main);
        changewind(jsondata.wind);
        changeicon(jsondata.weather[0]);
        })
        city.value="";
    }
    else{
        alert("Please enter City Name");
    }
    
}
search.addEventListener("click",getdetail);