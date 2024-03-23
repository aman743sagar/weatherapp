// const apikey="";
// const apiurl="";
//  const searchBox=document.querySelector(".search input");
//  const seachBtn=document.querySelector(".search button");
// async function checkWeather(city){
//     const response=await fetch(apiurl + city + `&appid=${apikey}`);
//     var data=await response.json();
//     console.log(data);
//     document.querySelector(".city").innerHTML=data.name;
//     document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"C";
//     document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
//     document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
// }
// seachBtn.addEventListener("click",()=>{
//     checkWeather(searchBox.value);

// })



// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 1160a3ccfdeaac83b5723c5af85a5ad7

let key='9f6290d6cda9a36a63755fadee71f83d'

let searchbtn=document.querySelector('input')
let btn=document.querySelector('button')
let tem=document.querySelector('#temp')
let city=document.querySelector('.city')
let hum=document.querySelector('.humidity')
let win=document.querySelector('.wind')


btn.addEventListener('click',()=>{
    let text=searchbtn.value
    console.log(text,"inp")


fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${key}`).then((data)=>{
    return data.json()
}).then((data)=>{
    console.log(data)
    add(data)
}).catch((err)=>{
    console.log(err);
})
})
function add(data){
//  console.log(data,"rrr")
   // for(let i of a){
    //     let li=document.createElement('li')
    //     li.innerText=i.id
    //     ul.appendChild(li)
    // }
    city.innerHTML=data.name
    temp.innerHTML= Math.round(data.main.temp) +"C";
    hum.innerHTML=data.main.humidity+"%";
    win.innerHTML=data.wind.speed+"km/h"
}

