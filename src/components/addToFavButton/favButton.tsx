import { nanoid } from "nanoid";
import React from "react";
import styled from "styled-components";
import { LordIcon } from "../lordIcon/lordIcon";
type FavButtonProps = {
  fn: () => void;
  favCities: string[] | null;
  cityName: string;
};

const AddToFavButton = ({ fn, favCities, cityName }: FavButtonProps) => {
;
  return (
    <FavButton onClick={fn} key={nanoid()}>
      {favCities?.includes(cityName) ? (
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
