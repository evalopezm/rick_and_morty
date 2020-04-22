const getDataFromApi = () => {
  return (
    fetch('https://rickandmortyapi.com/api/character/1,2,3,7,8,13')
      //   https://rickandmortyapi.com/api/character/?page=1
      .then((response) => response.json())
      .then((data) => {
        return data.map((item) => {
          //   console.log(item);
          return {
            id: item.id,
            name: item.name,
            spieces: item.species,
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
