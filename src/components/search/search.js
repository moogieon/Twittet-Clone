import React, { useCallback, useEffect, useRef, useState } from "react";

import { SearchBar, SearchBarInput, FireFilledIcon } from "./search.styles";
export default function Search() {
  useEffect(() => {
    document.addEventListener("click", outSide);
    return () => {
      document.removeEventListener("click", outSide);
    };
  }, []);
  const [outLine, seOutLine] = useState(false);
  const outsideRef = useRef(null);
  const outSide = useCallback(({ target }) => {
    if (outsideRef && !outsideRef.current.contains(target)) {
      seOutLine(false);
    }
  });
  const onInputChange = (event) => {
    console.log("TODO: implementation to get input's value change.");
  };

  const onSearchClick = (event) => {
    event.preventDefault();
    console.log(
      "TODO: Implementation to get top 10 tweets based on the searched value.",
    );
  };
  const onClickDiv = () => {
    seOutLine(true);
  };
  console.log(outLine);

  return (
    <>
      <form>
        <SearchBar outLine={outLine} onClick={onClickDiv} ref={outsideRef}>
          <FireFilledIcon outLine={outLine} />
          <SearchBarInput
            type="text"
            name="search"
            onChange={onInputChange}
            placeholder={"Search Twitter"}
          />
        </SearchBar>
      </form>
    </>
  );
}
