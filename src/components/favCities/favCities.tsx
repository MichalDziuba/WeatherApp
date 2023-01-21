import styled from "styled-components";
import ButtonX from "../buttonX/buttonX";

  const CitiesList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 5px;
    overflow: hidden;
    /* margin: 0 auto; */
  `;
  const CityItem = styled.li`
    text-underline-offset: 2px;
    text-decoration: underline;
    font-size: var(--fontSmall);
    padding: 4px 10px;
    color: var(--colorPrimary);
    text-align: center;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--backgroundSecondary);
  `;
const FavCities = () => {


  return (
    <CitiesList>
  
      <CityItem>
        Warszawa <ButtonX />
      </CityItem>
      <CityItem>
        Madagaskar <ButtonX />
      </CityItem>
    </CitiesList>
  );
};
export default FavCities;
