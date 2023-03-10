import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getLocalStorageData } from "../../helpers/useLocalStorage";
import { LordIcon } from "../lordIcon/lordIcon";
import { useLocalStorage } from "react-use";
import { setFavCities } from "../../store/favCitiesReducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { translateCityName } from "../../api/geonamesApi";

type FavButtonProps = {
  cityName: string;
};

const AddToFavButton = ({ cityName }: FavButtonProps) => {
  const [_, setFavoritesCitiesLocalStorage] = useLocalStorage<string[]>(
    "favoritesCities",
    []
  );
  const favoritesCities = useAppSelector(
    (state) => state.favoritesCities.cities
  );
  const dispatch = useAppDispatch();
  const toggleCityInFavorites = (city: string) => {
    if (favoritesCities) {
      favoritesCities?.includes(city);
      const cityIndex = favoritesCities?.indexOf(city);

      const isCityInFavCities = cityIndex !== -1;
      const updatedCities = isCityInFavCities
        ? favoritesCities?.filter((e, i) => i !== cityIndex)
        : [...favoritesCities, city];
      setFavoritesCitiesLocalStorage(updatedCities);
      dispatch(setFavCities(updatedCities));
    }
  };

  return (
    <FavButton onClick={() => toggleCityInFavorites(cityName)} key={nanoid()}>
      {favoritesCities?.includes(cityName) ? (
        <LordIcon
          src="https://cdn.lordicon.com/pbglwcrp.json"
          trigger="hover"
          colors={{ primary: "#545454", secondary: "#f59e0b" }}
          size={36}
        />
      ) : (
        <LordIcon
          src="https://cdn.lordicon.com/mdgrhyca.json"
          trigger="morph"
          colors={{ primary: "#f59e0b" }}
          stroke="80"
          size={36}
        />
      )}
    </FavButton>
  );
};
const FavButton = styled.button`
  transition: all 0.5s ease-in;
  width: fit-content;
  height: fit-content;
`;
export default AddToFavButton;
