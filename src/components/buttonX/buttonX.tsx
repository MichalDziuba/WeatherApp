import styled from "styled-components";
import Xsvg from "../../assets/icons/X.svg";


  const ButtonDelete = styled.button`
    background: none;
    fill: var(--colorTertiary);
    fill: red;
    & img {
      fill: red;
    }
  `;
const ButtonX = () => {


  return (
    <ButtonDelete>
      <img src={Xsvg} />
    </ButtonDelete>
  );
};
export default ButtonX;