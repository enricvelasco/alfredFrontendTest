import {api} from "../../services/api";
import {starshipsListPath} from "../../endpoints";
import StarshipListValueObject from "../model/starshipListValueObject";

export const GetStarshipsList = () => {
  const url = starshipsListPath();
  return new Promise((resolve, reject) => {
    api.get(url)
        .then(res => {
          const {data} = res;
          const {results} = data;

          resolve(StarshipListValueObject(results));
        })
        .catch(e => reject(e))
  });
};
