import styled from "styled-components";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ContentWrapper } from "../contentWrapper/contentWrapper";
import { LordIcon } from "../lordIcon/lordIcon";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { translateCityName } from "../../api/geonamesApi";
import { useLocalStorage } from "react-use";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setFavCities } from "../../store/favCitiesReducer";

type SearchInputProps = {
  setSearchInputValue: Dispatch<SetStateAction<string>>;
  geoFunction: () => void;
  searchValue: string;
};
type ButtonProps = {
  left?: boolean;
  right?: boolean;
};
const SearchCityInput = ({
  setSearchInputValue,
  geoFunction,
  searchValue,
}: SearchInputProps) => {
  const [inputValue, setInputValue] = useState(searchValue);
  const [favoritesCitiesLocalStorage] = useLocalStorage<string[]>(
    "favoritesCities",
    []
  );

  const dispatch = useAppDispatch();
  const favoritesCities = useAppSelector(
    (state) => state.favoritesCities.cities
  );
  useEffect(() => {
    if (favoritesCitiesLocalStorage) {
      dispatch(setFavCities(favoritesCitiesLocalStorage));
    }
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const cityName = await translateCityName(inputValue);
    setSearchInputValue(cityName);
  };

  useEffect(() => {
    setInputValue(searchValue);
  }, [searchValue]);

  return (
    <ContentWrapper top>
      <InputWrapper>
        <Button left type="button" onClick={geoFunction}>
          <LordIcon
            src="https://cdn.lordicon.com/ebudphxn.json"
            trigger="hover"
            stroke="80"
            colors={{ primary: "#848484", secondary: "#66a1ee" }}
            size={32}
          />
        </Button>
        <Input
          fullWidth
          disableClearable={true}
          value={inputValue}
          clearOnBlur={false}
          noOptionsText="No favorite cities"
          options={favoritesCities}
          isOptionEqualToValue={(option, value) => true}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          onChange={(event, value: any) => {
            setSearchInputValue(value);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter the city"
              InputLabelProps={{
                sx: {
                  color: "var(--colorTertiary)",
                  display: "flex",
                  alignItems: "center",

                  [`&.${inputLabelClasses.shrink}`]: {
                    display: "none",
                    color: "var(--colorTertiary)",
                  },
                },
              }}
              variant="standard"
              margin="dense"
              size="small"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSubmit(event);
                }
              }}
            />
          )}
        />
        <Button right type="button" onClick={handleSubmit}>
          <LordIcon
            src="https://cdn.lordicon.com/msoeawqm.json"
            trigger="hover"
            stroke="80"
            colors={{ primary: "#848484", secondary: "#66a1ee" }}
            size={32}
          />
        </Button>
      </InputWrapper>
    </ContentWrapper>
  );
};
const Input = styled(Autocomplete)`
  width: 70%;
  height: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
`;
const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 30px;
  background-color: var(--colorPrimary);
`;
export const Button = styled.button<ButtonProps>`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${(props) => (props.left ? "10px" : "")};
  margin-right: ${(props) => (props.right ? "10px" : "")};
`;

export default SearchCityInput;
