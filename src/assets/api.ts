import axios from "axios";
import { Album as Albumtype } from "../types/Album";
import { Photo } from "../types/Photo";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const api = {
  loadAlbum: async (id: string) => {
    try {
      let response = await axiosInstance.get<Albumtype | null>(`/albums/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  loadAlbuns: async () => {
    try {
      let response = await axiosInstance.get("/albums");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  loadPhotos: async (id: string) => {
    try {
      let response = await axiosInstance.get(`/albums/${id}/photos`);
      let json = await response.data; //por padrão essa resposta já é Json
      return json;
    } catch (error) {
      console.error(error);
    }
  },

  loadPhoto: async (id: string) => {
    try {
      const response = await axiosInstance.get<Photo>(`/photos/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
