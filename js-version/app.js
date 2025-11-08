async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const apiKey = "7c475af5178142b9a1b172828250611";
  const api_url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  try {
    const response = await fetch(api_url);
    if (!response.ok) throw new Error("City not found or API error");

    const data = await response.json();

    const temp = data.current.temp_c;
    const wind = data.current.wind_kph;
    const condition = data.current.condition.text;

    document.getElementById("output").innerHTML = `
          <h3>Weather in ${data.location.name}, ${data.location.country}</h3>
          <p>🌡 Temperature: ${temp} °C</p>
          <p>💨 Wind Speed: ${wind} kph</p>
          <p>☁ Condition: ${condition}</p>
        `;
  } catch (error) {
    document.getElementById(
      "output"
    ).innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
