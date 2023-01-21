import styled from "styled-components";

type IconProps = {
  iconSrc: string;
};

const WeatherIcon = ({iconSrc}:IconProps) => {
  return <Icon src={iconSrc} alt="icon" />;
};
const Icon = styled.img`
  width: 3.5rem;
  height: 3.5rem;
`;
export default WeatherIcon;
