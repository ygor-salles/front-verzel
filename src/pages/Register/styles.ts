import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  background-color: ${colors.background};
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: 400px;
  padding: 20px;
  border-radius: 4px;
`;

export const Input = styled.input`
  width: auto;
  padding: 0px 15px;
  height: 45px;

  outline: none;
  border: none;
  border-radius: 4px;

  margin: 10px 0px;
`;

export const SubmitButton = styled.button`
  height: 45px;
  background-color: ${colors.details};
  border: 1px;
  outline: none;
  transition: 0.3s ease;
  border-radius: 4px;

  &:hover {
    background-color: transparent;
    border: 1px solid ${colors.details};
    color: ${colors.details};
  }
`;

export const Title = styled.h1`
  color: #fff;
  margin: 30px 0px;
`;
