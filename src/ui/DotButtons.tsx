import styled from "styled-components";
import { Dispatch, SetStateAction } from "react";

type DotButnType = {
  handleClick: Dispatch<SetStateAction<string>>,
  nutriScore: string,
};

function DotButtons({ handleClick, nutriScore }: DotButnType) {
  return (
    <StyledUl>
      <li
        className={`btn btn-success ${nutriScore === "A" ? "active" : ""}`}
        onClick={() => handleClick("A")}
      ></li>
      <li
        className={`btn btn-warning ${nutriScore === "C" ? "active" : ""}`}
        onClick={() => handleClick("C")}
      ></li>
      <li
        className={`btn btn-danger ${nutriScore === "E" ? "active" : ""}`}
        onClick={() => handleClick("E")}
      ></li>
    </StyledUl>
  );
}

export default DotButtons;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0 10px;
  & li {
    padding: 0px;
    margin: 5px;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    cursor: pointer;
    border: 2px solid white;
    &.active {
      border: 2px solid lightgrey;
    }
  }
`;
