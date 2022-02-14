import StarshipEntity from "./starshipEntity";

const StarshipListValueObject = (list) => {
  return Object.freeze({
    list: list.map(item => StarshipEntity(item))
  })
}

export default StarshipListValueObject;
