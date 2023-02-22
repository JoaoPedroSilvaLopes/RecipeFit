import styled from 'styled-components';

/* eslint-disable-next-line */
export interface WebProps {}

const StyledWeb = styled.div`
  color: pink;
`;

export function Web(props: WebProps) {
  return (
    <StyledWeb>
      <h1>Welcome to Web!</h1>
    </StyledWeb>
  );
}

export default Web;
