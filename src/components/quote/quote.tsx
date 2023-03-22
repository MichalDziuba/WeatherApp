import { nanoid } from "nanoid";
import styled from "styled-components";
import { ContentWrapper } from "../contentWrapper/contentWrapper";
const Quote = () => {
  const text =
    "Who cares about the clouds when we're together? Just sing a song and bring the sunny weather.";
  const author = "Dale Evans";
  return (
    <QuoteWrapper
      key={nanoid()}
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw" }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Text>{text}</Text>
      <Author>{author}</Author>
    </QuoteWrapper>
  );
};
const QuoteWrapper = styled(ContentWrapper)`
  width: 80%;
  display: flex;
  color: var(--colorPrimary);
  flex-direction: column;
  text-align: right;
  align-items: unset;
  margin-bottom: 1.2rem;
  
`;
const Text = styled.p`
  font-style: italic;
  font-size: var(--fontMedium);
`;
const Author = styled.p`
  font-size: var(--fontLarge);
  font-style: oblique;
`;
export default Quote;
