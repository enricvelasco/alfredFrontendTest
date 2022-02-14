const StarshipEntity = ({
  cargo_capacity,
  consumables,
  cost_in_credits,
  hyperdrive_rating,
  length,
  manufacturer,
  max_atmosphering_speed,
  model,
  name,
  passengers,
  starship_class,
  url,
}) => {
  const arr = url.split('/');
  return Object.freeze({
    id: arr[arr.length - 2],
    cargoCapacity: cargo_capacity,
    consumables,
    price: cost_in_credits,
    hyperDriveRating: hyperdrive_rating,
    length,
    manufacturer,
    atmospheringSpeed: max_atmosphering_speed,
    model,
    name,
    passengers,
    class: starship_class,
    url,
  });
};

export default StarshipEntity;
