
const apikey='81a44fad83f89b313d90104670ae3dc8';
const apikey2='bd73b3899c68dd70110efaf092fc5d17';
window.addEventListener("load",()=>
{
    updatedata();
});
const searchbox=document.querySelector(".search-box");
searchbox.addEventListener('keypress',(evt) =>
{
    if(evt.keyCode==13)
    {
        // alert("hii")
        getResults(searchbox.value);
    }
})
function getResults (query) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apikey}`)
      .then(res=>
        {
        return res.json();
        }).then ((weatherdata)=>
        {
        console.log(weatherdata);
        updateweather(weatherdata);
        }).catch((err)=>
        {
        console.log(err);
        });
  }
function updatedata()
{
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position)=>
        {
            let latitude=position.coords.latitude;
            let longitude=position.coords.longitude;
            // console.log(latitude,longitude); 
            // if(latitude===' ')
            // alert('hi');   
            
            const url= `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
            fetch(url).then(res=>
            {
            return res.json();
            }).then ((weatherdata)=>
            {
            updateweather(weatherdata);
           
            }).catch((err)=>
            {
            console.log(err);
            });

            
        })
    }
    else
    {
        alert("Cannot locate");
    }
}

function updateweather(info)
{
    var city=document.querySelector(".city");
    var temphtml=document.querySelector(".temp");
    var weather=document.querySelector(".weather");
    var highlow=document.querySelector(".hi-low");
    
    let cityy = info.name;
    let country = info.sys.country;
    let {description, id} = info.weather[0];
    let {temp, feels_like,temp_min,temp_max} = info.main;
    let {speed}=info.wind;
    let sunrise=info.sys.sunrise;
    let sunset=info.sys.sunset;
    let locinfo=cityy+' , '+country;
    tempe=Math.floor(temp-273);
    city.innerHTML=locinfo;
    temphtml.innerHTML=tempe+'&#176;C';
    weather.innerHTML=description;  
    highlow.innerHTML=Math.floor(temp_min-273)+"&#176;C / "+Math.floor(temp_max-273)+"&#176;C";  
    updatedateandtime();
}
function updatedateandtime()
{
    const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months=["Jan","Feb","March","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    var datehtml=document.querySelector(".date");
    var date=new Date;
    var day=days[date.getDay()];
    datehtml.innerHTML=day+" "+date.getDate()+" "+months[date.getMonth()]+" "+date.getFullYear();
}

