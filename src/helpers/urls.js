const API_ROOT = "http://api.openweathermap.org/data/2.5/";
const API_KEY = process.env.REACT_APP_API_KEY;

const city = "Bengaluru";
const days = "7";

export const APIUrls = {
  current: () => `${API_ROOT}weather?q=${city}&appid=${API_KEY}`,
  sevenDays: () => `${API_ROOT}forecast/daily?q=${city}&cnt=${days}&appid=${API_KEY}`,
};