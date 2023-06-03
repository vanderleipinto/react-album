import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../assets/api";
import { Album } from "../types/Album";

export const Home = () => {
  //crio um state do tipo Album com um vetor vazio para comportar os albuns
  const [albums, setAlbums] = useState<Album[]>([]);
  useEffect(() => {
    loadAlbuns();
  }, []);

  const loadAlbuns = async () => {
    let json = await api.loadAlbuns();
    setAlbums(json);
  };

  return (
    <>
      <header>
        <h1>Galeria de Fotos</h1>
      </header>
      <hr />
      <h3>Total de albuns {albums.length}</h3>
      {albums.map((item, index) => (
        <div key={index} id="album">
          <Link to={"/album/" + item.id.toString()}>{item.title}</Link>
        </div>
      ))}
    </>
  );
};
