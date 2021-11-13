import React from "react";
import {
  Wrapper,
  LefBody,
  RightBody,
  NameText,
  ContentsText,
  Label,
} from "./tweet.styles";
export default function Tweet({ data }) {
  const onClick = (event) => {
    console.log("TODO: Implementation to visit the tweet on Twitter.");
  };

  return (
    <>
      <Wrapper>
        <LefBody></LefBody>
        <RightBody>
          <NameText>123</NameText>
          <ContentsText>123</ContentsText>
          <Label></Label>
        </RightBody>
      </Wrapper>
    </>
  );
}
