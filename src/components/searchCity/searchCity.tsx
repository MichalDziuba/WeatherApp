import geoIcon from "../../assets/icons/geo.svg";
import favIcon from "../../assets/icons/star.svg";
import styled from "styled-components";
import React, { Dispatch, SetStateAction } from "react";

type SearchInputProps = {
  setSearchInputValue: Dispatch<SetStateAction<string | null>>;
  geoFunction: () => void;
};
const SearchCityInput = ({
  setSearchInputValue,
  geoFunction,
}: SearchInputProps) => {
  const setInputValue = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const input = document.getElementById("city") as HTMLInputElement;
    setSearchInputValue(input.value);
    form.reset();
  };

  return (
    <Form onSubmit={setInputValue}>
      <Button type="button" onClick={geoFunction}>
        <Icon src={geoIcon} alt="localization icon" />
      </Button>
      <Input placeholder="Enter the city" name="city" id="city" />
      <Button>
        <Icon src={favIcon} alt="star icon" />
      </Button>
    </Form>
  );
};


const Form = styled.form`
  width: 80%;
  margin-top: 2.5rem;
  display: flex;
  background-color: var(--colorPrimary);
  height: 3rem;
  align-items: center;
  justify-content: space-between;
  border-radius: 30px;
`;
const Input = styled.input`
  width: 70%;
  font-size: var(--fontMedium);
  background-color: var(--colorPrimary);
  color: var(--colorTertiary);
`;
const Icon = styled.img`
  width: 22px;
  height: 22px;
`;
const Button = styled.button`
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`;

export default SearchCityInput;
