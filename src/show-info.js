const showWeatherInfo = (data) => {
  const content = document.getElementById("#content");
  const [tempC, tempF] = [data.current.feelslike_c, data.current.feelslike_f];
  const condition = data.current.condition.text;
  const uv = data.current.uv;
  const humidity = data.current.humidity;

  document.getElementById("humidity").innerHTML = humidity;
  document.getElementById("uv").innerHTML = uv;
  document.getElementById("tempC").innerHTML = `${tempC}°C`;
  document.getElementById("tempF").innerHTML = `${tempF}°F`;
  document.getElementById("condition").innerHTML = condition;
};

export { showWeatherInfo };
