import styled from "styled-components";
import { CodeToIcon } from "../../helpers/weatherCodeConvertToIcon";

type IconProps = {
  code: number;
  isDay: boolean;
};

const WeatherIcon = ({ code, isDay }: IconProps) => {
  const iconSrc = CodeToIcon({code,isDay});
  return <Icon src={iconSrc} alt="icon" />;
};
const Icon = styled.img`
  width: 3.5rem;
  height: 3.5rem;
`;
export default WeatherIcon;
