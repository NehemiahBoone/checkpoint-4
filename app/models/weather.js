export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin
    this.tempF = (data.main.temp - 273) * 9 / 5 + 32
    this.tempC = data.main.temp - 273.15
    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
  }

  get TemplateF() {
    return `
      <div class="col-12 text-right text-primary">
        <h1 onclick="app.weatherController.toggleTempC()">${this.tempF.toFixed(0)}F</h1>
      </div>
    `
  }

  get TemplateC() {
    return `
      <div class="col-12 text-right text-primary">
        <h1 onclick="app.weatherController.toggleTempF()">${this.tempC.toFixed(0)}C</h1>
      </div>
    `
  }
}