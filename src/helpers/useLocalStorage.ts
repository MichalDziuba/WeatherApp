import { useLocalStorage } from "react-use";

export const updateLocalStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const getLocalStorageData = (key: string) => {
  const data = localStorage.getItem(key);
  if (!data) return [];
  else return JSON.parse(data);
};

export const favoritesCities = () => {
  const [favoritesCities, updateFavoritesCities, removeAllCities] = useLocalStorage("favoritesCities");
  if (!favoritesCities) {
    updateFavoritesCities([])
  }
  return {
    favoritesCities,
    updateFavoritesCities
  }
}