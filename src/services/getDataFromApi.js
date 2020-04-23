const getDataFromApi = () => {
  return (
    fetch('https://rickandmortyapi.com/api/character/?page=1')
      //   https://rickandmortyapi.com/api/character/?page=1
      .then((response) => response.json())
      .then((data) => {
        return data.results.map((item) => {
          return {
            id: item.id,
            name: item.name,
            species: item.species,
            photo: item.image,
            status: item.status,
            origin: item.origin.name,
            episodes: item.episode.length,
          };
        });
      })
  );
};

export default getDataFromApi;
