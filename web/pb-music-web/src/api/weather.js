import axios from "axios";

export function weather() {
  return axios.get(`http://121.41.120.198:9298/sc/Asupervise/weather`);
}
