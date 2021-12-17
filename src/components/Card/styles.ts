import styled from "styled-components";
import { colors } from "../../styles/colors";

type ContainerProps = {
  active: boolean
}

export const Container = styled.div<ContainerProps>`
  border: 1px solid ${colors.details};
  width: 100%;
  max-width: 380px;
  height: ${(props) => (props.active ? "100%" : "120px")};
  min-height: 120px;
  padding: 0px 10px;
  border-radius: 16px;
  margin: 10px;
  display: flex;
  align-items: center;
`;

export const Content = styled.div``;

type TitleProps = {
  size?: number;
  color?: string;
};
export const Title = styled.h1<TitleProps>`
  color: ${(props) => (props.color ? props.color : colors.details)};
  font-size: ${(props) => (props.size ? props.size + "px" : "16px")};
`;

export const Icon = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 20px;
`;

