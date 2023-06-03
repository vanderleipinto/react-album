import { useParams } from "react-router-dom";
import { Photo } from "../types/Photo";
import { useEffect, useState } from "react";
import { api } from "../assets/api";

export const PhotoPage = () => {
  const [photo, setPhoto] = useState<Photo>();

  useEffect(() => {
    loadPhoto(params.slug as string);
  }, []);

  const loadPhoto = async (id: string) => {
    try {
      const data = await api.loadPhoto(id);
      setPhoto(data);
    } catch (error) {
      console.error(error);
    }
  };

  const params = useParams();

  return (
    <div>
      <hr />
      <h3>
        Photo {params.slug} - {photo?.title}
      </h3>
      <div id="PhotoSingle">
        <img src={photo?.url} alt={photo?.title} />
      </div>
    </div>
  );
};
