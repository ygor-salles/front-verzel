import styled from "styled-components";
import { colors } from "../../../../styles/colors";

export const Container = styled.div``;

export const Table = styled.table`
  width: 100%;
  border: none;
`;
export const Tr = styled.tr`
  height: 50px;
  text-align: center;
  color: #fff;
`;
export const Th = styled.th``;
export const Td = styled.td`
  padding: 20px;
  border-radius: 4px;
`;

export const OptionButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0px 30px;
  margin-top: 10px;

  button {
    padding: 10px;
    width: 120px;
    border-radius: 4px;
    background-color: ${colors.details};
    border-radius: 4px;
    outline: none;
    border: 1px solid ${colors.details};
    transition: 0.2s ease;
    &:hover {
      background-color: ${colors.background};
      color: ${colors.details};
    }
  }
`;
