import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const SearchBar = styled.div`
  width: 460px;
  height: 45px;
  border-radius: 25px;
  background: rgba(32, 35, 39);
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: ${(props) => (props.outLine ? "red" : "blue")}; */
  /* /* border-width: ${(props) => (props.outLine ? 1 : 2)}; */
  border: ${(props) =>
    props.outLine
      ? "1px solid rgba(29, 155, 240)"
      : "1px solid rgba(32, 35, 39, 1)"};
`;
export const SearchBarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: rgba(32, 35, 39);
  margin: 0px 20px;
  ::placeholder {
    font-size: 15px;
    font-weight: bold;
  }
`;
export const FireFilledIcon = styled(SearchOutlined)`
  color: ${(props) =>
    props.outLine ? "rgba(29, 155, 240)" : "rgba(110, 110, 125,1)"};

  font-size: 24px;
  cursor: pointer;
`;
