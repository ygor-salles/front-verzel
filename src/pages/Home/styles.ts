import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  padding: 0px 10px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Title = styled.h1`
  color: ${colors.color};
  font-size: 2rem;
  margin-top: 30px;
  margin-left: 40px;
`;
export const SubTitle = styled.h2`
  color: ${colors.subtitles};
  font-size: 1.2rem;
  margin-top: 20px;
  margin-left: 40px;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;
