import { Link, useParams } from "react-router-dom";
import { Photo } from "../types/Photo";
import { Album as Albumtype } from "../types/Album";
import { useEffect, useState } from "react";
import { api } from "../assets/api";

export const AlbumPage = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [album, setAlbum] = useState<Albumtype | null>(null);

  useEffect(() => {
    loadPhotos(params.slug as string);
    loadAlbum(params.slug as string);
  }, []);

  const loadPhotos = async (id: string) => {
    try {
      let json = await api.loadPhotos(id);
      setPhotos(json);
    } catch (error) {
      console.error(error);
    }
  };

  const loadAlbum = async (id: string) => {
    try {
      let data = await api.loadAlbum(id);
      if (data) setAlbum(data);
    } catch (error) {
      console.error(error);
    }
  };

  const params = useParams();

  return (
    <div>
      Album {params.slug} -- {album?.title}
      <div id="PhotoList">
        {photos.map((item, index) => (
          <div key={index} id="GridItem">
            <Link to={"/photo/" + item?.id.toString()}>
              <img src={item.thumbnailUrl} alt={item.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
