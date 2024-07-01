const getWeatherData = () => {
  //request data for a location
  const requestUrl = (location) => {
    //api key
    const apiKey = "key=848757827fc14e0bba3160706240107";
    const baseLink = "http://api.weatherapi.com/v1/current.json?";

    return `${baseLink}${apiKey}&q=${location}`;
  };

  const getData = async (location) => {
    const url = requestUrl(location);

    try {
      const response = await fetch(url, { mode: "cors" });
      const data = await response.json();
      return data;
    } catch (err) {
      return "error was ", err;
    }
  };

  return getData("paris");
};

export { getWeatherData };
