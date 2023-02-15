import { useEffect, useState } from "react";
import styled from "styled-components";
import { ContentWrapper } from "../contentWrapper/contentWrapper";
import { LordIcon } from "../lordIcon/lordIcon";
import { motion, AnimatePresence } from "framer-motion";
import ArrowButton from "../arrowButton/arrowButton";

type FavCitiesProps = {
  favCities: string[] | null;
  deleteCity: (city: string) => void;
  searchCity: (city: string) => void;
  isDay: boolean;
};

const FavCities = ({
  favCities,
  deleteCity,
  searchCity,
  isDay,
}: FavCitiesProps) => {
  //states
  const [cities, setCities] = useState<string[] | null>(favCities);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(false);

  const checkArrowVisibility = () => {
    const el = document.getElementById("cityList");
    if (el) {
      setShowLeftArrow(el.scrollLeft > 0);
      setShowRightArrow(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      checkArrowVisibility();
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    checkArrowVisibility();
    setCities(favCities);
  }, [favCities]);

  const scroll = (direction: "right" | "left") => {
    const el = document.getElementById("cityList");
    if (el) {
      if (direction === "left") {
        el.scrollLeft += -150;
      } else {
        el.scrollLeft += 150;
      }
    }
  };


  return (
    <FavWrapper
      // initial={{ opacity: 0, scale: 0.5 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{
      //   default: {
      //     duration: 0.3,
      //     ease: [0, 0.71, 0.2, 1.01],
      //   },
      //   scale: {
      //     type: "spring",
      //     damping: 5,
      //     stiffness: 100,
      //     restDelta: 0.001,
      //   },
      // }}
    >
      <ArrowButton
        direction="left"
        fn={scroll}
        isDay={isDay}
        isVisible={showLeftArrow}
      />
      <CitiesList id="cityList">
        <AnimatePresence>
          {cities &&
            cities.map((e, index) => (
              <CityItem
                key={index}
                initial={{ opacity: 0, y: -150 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 150 }}
                transition={{ duration: 0.8 }}
              >
                <CityName onClick={() => searchCity(e)}>{e}</CityName>
                <DeleteButton onClick={() => deleteCity(e)}>
                  <LordIcon
                    src="https://cdn.lordicon.com/kfzfxczd.json"
                    trigger="morph"
                    stroke="80"
                    colors={{ primary: "#848484" }}
                    size={20}
                  />
                </DeleteButton>
              </CityItem>
            ))}
        </AnimatePresence>
      </CitiesList>

      <ArrowButton
        direction="right"
        fn={scroll}
        isDay={isDay}
        isVisible={showRightArrow}
      />
    </FavWrapper>
  );
};
const FavWrapper = styled(ContentWrapper)`
  width: 98%;
  transition: all 1s ease-in-out;
`;

const CitiesList = styled(motion.ul)`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  min-height: 2rem;
  flex-wrap: nowrap;
  padding: 0;
  overflow-x: auto;
  transition: all 1s ease-in-out;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    background-color: transparent;
    height: 0;
  }
`;
const CityItem = styled(motion.li)`
  padding: 3px 8px;
  border-radius: 20px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: var(--backgroundSecondary);
`;

const CityName = styled.button`
  text-underline-offset: 2px;
  text-decoration: underline;
  font-size: var(--fontSmall);
  color: var(--colorPrimary);
  inline-size: max-content;
`;
const DeleteButton = styled.button`
  background: none;
  width: fit-content;
  height: fit-content;
`;
export default FavCities;
