import randomHelper from "./randomHelper";

const requestGrabFilms = async films => {
  const filmsArray = [];
  if (Array.isArray(films)) {
    if (films.length > 0) {
      await Promise.all(
        films.map(async filmUrl => {
          try {
            const filmResponse = await fetch(filmUrl);
            const data = await filmResponse.json();
            filmsArray.push(data);
          } catch (e) {
            throw Error("Error with the request");
          }
        })
      );
    }
  }
  return filmsArray;
};

async function requestAddPlanet() {
  const n = randomHelper();
  const url = `https://swapi.co/api/planets/${n}/`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const planet = data;
    try {
      const films = await requestGrabFilms(planet.films);
      planet.films = films;
      return planet;
    } catch (error) {
      throw Error("Error with the request");
    }
  } catch (error) {
    throw Error("Error with the request");
  }
}

export default requestAddPlanet;
