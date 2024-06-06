import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  margin: 16px;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid #d2ab47;
  border-right: 2px solid #d2ab47;
  border-bottom: 2px solid #d2ab47;
  border-left: 4px solid #d2ab47;
  background: transparent;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
const Loader = () => (
  <div style={{ padding: "24px" }}>
    <Spinner />
  </div>
);
export default Loader;
