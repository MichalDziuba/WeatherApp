// import geoIcon from "../../assets/icons/geo.svg";
// import favIcon from "../../assets/icons/star.svg";
// import searchIcon from "../../assets/icons/search.gif";
// import styled from "styled-components";
// import React, { Dispatch, SetStateAction, useState } from "react";
// import { ContentWrapper } from "../contentWrapper/contentWrapper";
// import { LordIcon } from "../lordIcon/lordIcon";
// // import { addToFav } from "../../helpers/useLocalStorage";
// // import useLocalStorage from "../../helpers/useLocalStorage";

// type SearchInputProps = {
//   setSearchInputValue: Dispatch<SetStateAction<string | null>>;
//   geoFunction: () => void;
//   favCities: string[];
// };
// type ButtonProps= {
//   left?: boolean;
//   right?: boolean;
// }
// const SearchCityInput = ({
//   setSearchInputValue,
//   geoFunction,
//   favCities,
// }: SearchInputProps) => {
//   const [inputValue, setInputValue] = useState("");

//   const handleSubmit = (e: React.SyntheticEvent) => {
//     e.preventDefault();
//     const form = e.currentTarget as HTMLFormElement;
//     const input = document.getElementById("city") as HTMLInputElement;
//     setInputValue(input.value);
//     setSearchInputValue(inputValue);
//   };
//   const handleInputChange = (e: React.SyntheticEvent) => {
//     const input = e.currentTarget as HTMLInputElement;
//     setInputValue(input.value);
//   };
//   const handleClearInput = () => {
//     setInputValue("");
//   };

//   return (
//     <ContentWrapper>
//       <Form onSubmit={handleSubmit}>
//         <Button left type="button" onClick={geoFunction}>
//           <LordIcon
//             src="https://cdn.lordicon.com/ebudphxn.json"
//             trigger="hover"
//             stroke="80"
//             colors={{ primary: "#848484", secondary: "#66a1ee" }}
//             size={32}
//           />

//           {/* <Icon src={geoIcon} alt="localization icon" /> */}
//         </Button>
//         <Input
//           placeholder="Enter the city"
//           name="city"
//           id="city"
//           value={inputValue}
//           onChange={handleInputChange}
//           onClick={handleClearInput}
//         />
//         {/* <Button>
//           <Icon src={favIcon} alt="star icon" onClick={addCityToFavorites} />
//         </Button> */}
//         <Button right type="submit">
//           <LordIcon
//             src="https://cdn.lordicon.com/msoeawqm.json"
//             trigger="hover"
//             stroke="80"
//             colors={{ primary: "#848484", secondary: "#66a1ee" }}
//             size={32}
//           />
//         </Button>
//       </Form>
//     </ContentWrapper>
//   );
// };

// const Form = styled.form`
//   width: 90%;
//   display: flex;
//   background-color: var(--colorPrimary);
//   height: 3rem;
//   align-items: center;
//   justify-content: space-between;
//   border-radius: 30px;
// `;
// const Input = styled.input`
//   width: 70%;
//   font-size: var(--fontMedium);
//   background-color: var(--colorPrimary);
//   color: var(--colorTertiary);
// `;
// const Icon = styled.img`
//   width: 22px;
//   height: 22px;
// `;
// const Button = styled.button<ButtonProps>`
//   width: fit-content;
//   height: fit-content;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-left: ${(props) => (props.left ? "10px" : "")};
//   margin-right: ${(props) => (props.right ? "10px" : "")};
// `;

// export default SearchCityInput;

import styled from "styled-components";
import React, { Dispatch, SetStateAction, useState } from "react";
import { ContentWrapper } from "../contentWrapper/contentWrapper";
import { LordIcon } from "../lordIcon/lordIcon";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { inputLabelClasses } from "@mui/material/InputLabel";
type SearchInputProps = {
  setSearchInputValue: Dispatch<SetStateAction<string | null>>;
  geoFunction: () => void;
  favCities: string[];
};
type ButtonProps = {
  left?: boolean;
  right?: boolean;
};
const SearchCityInput = ({
  setSearchInputValue,
  geoFunction,
  favCities,
}: SearchInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSearchInputValue(inputValue);
  };

  return (
    <ContentWrapper top >
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
          noOptionsText="No favorite cities"
          options={favCities}
          isOptionEqualToValue={(option, value) => true}
          disableClearable={true}
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
// const SearchWrapper = styled(ContentWrapper)`
//   margin-top: 2rem;
// `;
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
const Button = styled.button<ButtonProps>`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${(props) => (props.left ? "10px" : "")};
  margin-right: ${(props) => (props.right ? "10px" : "")};
`;

export default SearchCityInput;
