import { apiClient } from "./apiClient.ts";

export const getBreeds = async () => {
  const response = await apiClient.get("/breeds/list/all");

  return response.data;
};

export const getRandomBreedPhoto = async (breed: string) => {
  const response = await apiClient.get(`/breed/${breed}/images/random`);
  return response.data;
};

export const getBreedPhotos = async (breed: string) => {
  const response = await apiClient.get(`/breed/${breed}/images`);
  return response.data;
};
