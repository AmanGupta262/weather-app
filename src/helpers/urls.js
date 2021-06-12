const API_ROOT = "https://api.openweathermap.org/data/2.5/";

const lat = "12.9762";
const lon = "77.6033";
const exclude = "minutely,hourly,current,alerts";

export const APIUrls = {
  current: () => `${API_ROOT}weather?`,
  sevenDays: () =>
    `${API_ROOT}onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=`,
};
