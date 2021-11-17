import React, { useEffect, useState } from "react";
import Search from "../../components/search/search";
import Tweet from "../../components/tweet/tweet";
import axios from "axios";

import { TwitterOutlined } from "@ant-design/icons";
import { Wrapper, LefBody, RightBody, RightHead } from "./home.styles";
// var Twitter = require("twitter");
// const Twitter = require("twitter-v2");

export default function Home() {
  const [item, setItem] = useState([]);
  // const T = new Twitter({
  //   consumer_key: "EoJOLMWI5N0k7FETGRNqkV2KL",
  //   consumer_secret: "Z85OkbXavlgPIrFqkbITF345W0tM9Djz9Vo0Qykw8Hg5nHF3uh",
  //   access_token_key: "1458701767257255936-fHBfi2YPB04Tp8NKRvUILGal62HcXN",
  //   access_token_secret: "Dwy0lSY4JRSHRywne70P8yy4NFcq8f1NWo4DI1sL1sK8I",
  // });
  useEffect(() => {
    async function getData(params) {
      // if (error) {
      //   console.log("Error: ", error.message);
      // } else {
      //   console.log(tweets);
      //   console.log(response);
      // }
      // T.get("search/tweets", { q: "#cat", count: 10 });
      // try {
      // const { q, count } = this.state;
      // const q = "cat";
      // const count = 5;
      // const url = "https://api.twitter.com/2/search/tweets.json";
      // const params = new URLSearchParams();
      // params.append("q", q);
      // params.append("count", count);
      // await axios(`${url}?${params}`, {
      //   headers: {
      //     Authorization:
      //       "bearer AAAAAAAAAAAAAAAAAAAAAAkDVwEAAAAA8Wr%2FY7UwyFdlj1lDdn0bESMmcd4%3DxPNQgNxTdSiEJQLOYbrjbR0IfPzgYPz4DVkLTpnRJaueA5Lpep",
      //   },
      // }).then((res) => setItem(res.json()));
      // response = await response.json();
      // const res = await axios.get(
      //   "https://coursera-twitter-api.herokuapp.com/tweets",
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAADi8VgEAAAAAL6PG0WubOpuhQbLTQNNIqflUziw%3DuVx9qmwE84zpL9Gv1hEKgZHad4P0wmWyMSjpjupR4W3nAH6M98`,
      //     },
      //   },
      // );
      // console.log("??", res.data);
      // } catch (error) {
      //   console.log(error.message);
      // }
    }

    getData();
  }, []);
  console.log("데이터", item);
  const [tweetsList, updateTweetsList] = React.useState([]);
  const [inputValue, updateInputValue] = React.useState("");

  return (
    <Wrapper>
      <LefBody>
        <TwitterOutlined style={{ fontSize: 35 }} />
      </LefBody>
      <RightBody>
        <RightHead>
          <Search />
        </RightHead>
        <Tweet />
        {/* <div className="tweet-list">
          {tweetsList.map((data, index) => (
            <Tweet data={data} />
          ))}
        </div>
        {tweetsList.length === 0 && (
          <div className="tweet-list-empty">{"Tweet List is empty :("}</div>
        )} */}
      </RightBody>
    </Wrapper>
  );
}
