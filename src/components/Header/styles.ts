import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:15px;


  border-bottom: 1px solid rgb(67, 51, 118);

`;

export const SignInButton = styled.button`
  background-color: ${colors.background};
  border: 1px solid ${colors.button};
  color: ${colors.button};
  padding:10px 20px;
  border-radius: 12px;
  height: 45px;
`;
