const API_ROOT = "https://api.openweathermap.org/data/2.5/";

export const APIUrls = {
  current: () => `${API_ROOT}weather?`,
  sevenDays: () => `${API_ROOT}onecall?`,
};
