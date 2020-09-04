import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {
  async getWeather() {
    console.log("Calling the Weatherman");
    let res = await api.get('weather');
    ProxyState.weather = new Weather(res.data);
  }

  toggleTempC() {
    let weather = ProxyState.weather
    document.getElementById("weather").innerHTML = weather.TemplateC
  }

  toggleTempF() {
    let weather = ProxyState.weather
    document.getElementById("weather").innerHTML = weather.TemplateF
  }
}

const weatherService = new WeatherService();
export default weatherService;