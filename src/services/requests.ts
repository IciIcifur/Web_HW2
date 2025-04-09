import {apiClient} from "./apiClient.ts";

export const getBreeds = async () => {
    const response = await apiClient.get('/breeds/list/all');
    return response.data;
};

export const getRandomBreedPhoto = async (breed) => {
    const response = await apiClient.get(`/breeds/${breed}/images/random`);
    return response.data;
}

export const getBreedPhotos = async (breed) => {
    const response = await apiClient.get(`/breeds/${breed}/images`);
    return response.data;
};