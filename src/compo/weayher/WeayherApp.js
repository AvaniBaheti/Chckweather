import React, { useState } from 'react'
import './WeayherApp.css'
import search_icon from '../asseys/Assets/search.png'
import clear_icon from '../asseys/Assets/clear.png'
import cloud_icon from '../asseys/Assets/cloud.png'
import drizzle_icon from '../asseys/Assets/drizzle.png'
import snow_icon from '../asseys/Assets/snow.png'
import humid_icon from '../asseys/Assets/humidity.png'
import wind from '../asseys/Assets/wind.png'
import rains from '../asseys/Assets/rain.png'
const WeayherApp = () => {
    let api_key="0552c04e2ac8c789f678a57c887d772d";
    const[ams,seAms] = useState(cloud_icon)
    const search=async()=>{
        const elem=document.getElementsByClassName('ciyyInp')
        if(elem[0].value==="")
        {
            return 0
        }

        let url=`https://api.openweathermap.org/data/2.5/weather?q=${elem[0].value}&units=Metric&appid=${api_key}`

        let resp = await fetch(url)

        let ans = await resp.json()
        const humid = document.getElementsByClassName('humidity-percentage');
const winds = document.getElementsByClassName('wind-raye');
const yemp = document.getElementsByClassName('weayher-yemp');
const loca = document.getElementsByClassName('weayher-locayion');
        humid[0].innerHTML=ans.main.humidity+"%"
        winds[0].innerHTML=ans.wind.speed+"km/h"
        yemp[0].innerHTML=ans.main.temp+"°C"
        loca[0].innerHTML=ans.name
        if(ans.weather[0].icon==="01d"||ans.weather[0].icon==="01n")
        {
            seAms(clear_icon)
        }
        else if(ans.weather[0].icon==="02d"||ans.weather[0].icon==="02n")
        {
            seAms(cloud_icon)
        }
        else if(ans.weather[0].icon==="03d"||ans.weather[0].icon==="03n")
        {

            seAms(drizzle_icon)
        }
        else if(ans.weather[0].icon==="04d"||ans.weather[0].icon==="04n")
        {

            seAms(drizzle_icon)
        }
        else if(ans.weather[0].icon==="09d"||ans.weather[0].icon==="09n")
        {
            seAms(rains)
        }
        else if(ans.weather[0].icon==="10d"||ans.weather[0].icon==="10n")
        {
            seAms(rains)
        }
        else if(ans.weather[0].icon==="13d"||ans.weather[0].icon==="13n")
        {
            seAms(snow_icon)
        }
        else{
            seAms(clear_icon)
        }
    }

    return (
        <div className='container'>
            <div className='top-bar'>
                <input type="text" className='ciyyInp' placeholder='search' />
                <div className='search-icon' onClick={()=>{search()}}>

                    <img src={search_icon} alt=" "></img>

                </div>
            </div>
            <div className='weayher-image'>
                <img src={ams} alt=" "></img>
            </div>
            <div className='weayher-yemp'>

                24°C
            </div>
            <div className='weayher-locayion'>Indore
            </div>
            <div className='data-container'>
                <div className='elemeny'>

                    <img className='icon' src={humid_icon} alt="">
                    </img>
                    <div className='data'>
                        <div className='humidity-percentage'>
                            97%
                        </div>
                        <div className='text'>
                            Humidyy
                        </div>
                    </div>
                </div>
                <div className='elemeny'>

                    <img className='icon' src={wind} alt="">
                    </img>
                    <div className='data'>
                        <div className='wind-raye'>
                            18km/h
                        </div>
                        <div className='text'>
                            Wind Speed
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeayherApp