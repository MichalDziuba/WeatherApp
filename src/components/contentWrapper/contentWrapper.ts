
import styled from "styled-components";

type ContentWrapperProps = {
  bottom?: boolean;
  top?: boolean;
  isChartOpen?: boolean;
}

export const ContentWrapper = styled.div<ContentWrapperProps>`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--colorPrimary);
  margin-top: ${(props) => (props.top ? "1rem" : "")};
  margin-bottom: ${(props) => (props.bottom ? "1rem" : "")};
`;
