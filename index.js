// const API_key = "2819c661d00f76d51b6d2066f12bfb3f";
// async function showWheather(){
//     const city ='bhopal';
//     const wheather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);
//     const data = await wheather.json();
//     let newpara = document.createElement('p');
//     newpara.textContent=`${data?.main?.humidity.toFixed(0)} %`
//     let para = document.createElement('div');
//     para.textContent=`${data?.visibility.toFixed(2)} %`
//     document.body.appendChild(newpara);
//     document.body.appendChild(para);

// }
// showWheather();

 

// const myLocation = document.querySelector('.your');
// const  searchLocation = document.querySelector('.search');
// const getMyLocation = document.querySelector('#get-location');

// let currentloc = myLocation;
// let searching = searchLocation;
// const API_key = "2819c661d00f76d51b6d2066f12bfb3f";

// currentloc.classList.add("current-tab");
// function switched(location){
//     if(location != currentloc){
//         currentloc.classList.remove("current-tab");
//         currentloc=location;
//         currentloc.classList.add("current-tab");
//         // searching.classList.add("showSearch");
//     }
// }

// myLocation.addEventListener("click", () =>{
    //     switched(myLocation);
// });
    
    // searchLocation.addEventListener("click", () =>{
        //     switched(searchLocation);
// });
   
        
console.log('kapil');
       
const myLocation = document.querySelector('#yourloc');
const selectLocation = document.querySelector('#selectloc');
const searchDiv =document.querySelector('#srchBox');
const grantAccess =document.querySelector('.grand_access');
const maincontain =document.querySelector('.holeContain');
const searchIcon = document.querySelector('#click-icon');
const searchCity = document.querySelector('#search');
const max = document.querySelector('#maxtmp');
const wimg = document.querySelector('#wImg');
let cityKaNam = document.querySelector('#cityName');
const contry = document.querySelector('.flag');
        
const inputcity = searchCity.value;
let loc = myLocation ;
let srching = searchDiv ;
let graAccess = grantAccess;
let mainCOn = maincontain;
        
        
cityKaNam.innerHTML = 'Bina';
console.log(cityKaNam.innerHTML);
        
loc.classList.add("active");
graAccess.classList.add('visible');
mainCOn.classList.add('show');
        
    
    
function switched(location){
    if( location != loc){
        loc.classList.remove("active");
        loc = location
        loc.classList.add("active");
    }
}   

const d = new Date();

let hour = d.getHours();
document.getElementById("demo1").innerHTML = hour ;

let minutes = d.getMinutes();
document.getElementById("demo").innerHTML = minutes;

async function getweather(cityhai){
    const City = cityhai;
    const API_key = "2819c661d00f76d51b6d2066f12bfb3f";
    const mausam = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_key}`);
    const data = await mausam.json();
    console.log(data);
    addinfo(data);
    
}

// async function getweather(lati, long){
//     const API_key = "2819c661d00f76d51b6d2066f12bfb3f";
//     // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//     const mausam = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${API_key}`);
//     const data = await mausam.json();
//     console.log(data);
//     addinfo(data);
    
// }


function addinfo(data){
    contry.innerHTML = data.sys.country;
    cityKaNam.innerHTML = data.name;
    cloud.innerHTML = data.clouds.all;
    windspeed.innerHTML = data.wind.speed;
    humidity.innerHTML = data.main.humidity;
    const mintemp = data.main.temp_min -273.15 ;
    const maxtemp = data.main.temp_max -273.15 ;
    temp.innerHTML = parseFloat(mintemp).toFixed() ;
    max.innerHTML = parseFloat(maxtemp).toFixed() ;
    // const wid = data.weather[0].icon ;
    wimg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    disc.innerHTML = data.weather[0].main;

}

myLocation.addEventListener('click', ()=>{
    switched(myLocation);
    graAccess.classList.add('visible');
    srching.classList.remove('visible');
    mainCOn.classList.add('show');
    getweather('bina');
})

selectLocation.addEventListener('click', ()=>{
    switched(selectLocation);
    srching.classList.add('visible');
    graAccess.classList.remove('visible');
    mainCOn.classList.remove('show');   
})

getweather('bina');


// timZone.innerHTML = data.dt;
searchIcon.addEventListener("click", () => {
    // cityKaNam.innerHTML ='Bina';
    if(searchCity.value){
        // cityKaNam.innerHTML =  searchCity.value;
        mainCOn.classList.add('show');
        srching.classList.remove('visible');

        console.log(cityKaNam.innerHTML);
        getweather(searchCity.value);
        searchCity.value = '';
    }
    
});







// locationgather
function getlocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        alert("geolocation is not support in your device");
    }
}
function showPosition(position){
    console.log(position.coords.latitude,position.coords.longitude) ;

}

getlocation();
console.log(showPosition);