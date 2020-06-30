import styled from 'styled-components';

const P = styled.p`
  letter-spacing: 3px;
  margin-top: 0;
  text-transform: uppercase;
  white-space: pre-line;
`;

export default ({ children }) => <P>{children}</P>;
