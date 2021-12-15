import styled from "styled-components";
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
  margin-top: 5px;
  margin-left: 40px;
`;
