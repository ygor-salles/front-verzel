import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  border: 1px solid ${colors.details};
  width: 100%;
  height: 120px;
  padding: 0px 10px;
  border-radius: 16px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div``;

export const Title = styled.h1`
  color: ${colors.details};
`;
export const Icon = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${colors.background};
`;
export const Progress = styled.div`
  width: 50px;
`;
