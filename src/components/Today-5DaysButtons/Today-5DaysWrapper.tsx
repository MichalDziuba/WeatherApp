import {  useState } from "react";
import styled from "styled-components";
import Button from "./button";

 const ButtonsWrapper = styled.div`
   margin-top: 2rem;
   width: 90%;
   display: flex;
   align-items: center;
   justify-content: space-around;
 `;

const Today5DaysButtons = () => {
 
    const [isActive, setActive] = useState(false);


  return (
    <ButtonsWrapper>
      <Button text="today" />
      <Button  text="5 days" />
    </ButtonsWrapper>
  );
};
export default Today5DaysButtons;
