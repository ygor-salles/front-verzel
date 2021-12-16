import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  border-bottom: 1px solid rgb(67, 51, 118);
`;

export const SignInButton = styled.button`
  background-color: ${colors.background};
  border: 1px solid ${colors.button};
  color: ${colors.button};
  margin: 0px 5px;
  padding: 10px 15px;
  border-radius: 12px;
  height: 45px;
  transition: 0.3s ease;
  &:hover {
    background-color: ${colors.button};
    color: ${colors.color};
  }
`;

export const ActionButton = styled.button`
  background-color: ${colors.background};
  border: none;
  color: ${colors.button};
  margin: 0px 5px;
  padding: 10px 15px;
  border-radius: 12px;
  height: 45px;
  transition: 0.3s ease;
  &:hover {
    background-color: ${colors.button};
    color: ${colors.color};
  }
`;
