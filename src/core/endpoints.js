const basePath = 'https://swapi.py4e.com/api';

export const starshipsListPath = () => `${basePath}/starships`;
export const starshipByIdPath = (id) => `${basePath}/starships/${id}`;
