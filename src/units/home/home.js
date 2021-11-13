import React, { useEffect } from "react";
import Search from "../../components/search/search";
import Tweet from "../../components/tweet/tweet";
import axios from "axios";
import { TwitterOutlined } from "@ant-design/icons";
import { Wrapper, LefBody, RightBody, RightHead } from "./home.styles";

export default function Home() {
  const Twitter = require("twitter-v2");
  const client = new Twitter({
    consumer_key: "EoJOLMWI5N0k7FETGRNqkV2KL",
    consumer_secret: "Z85OkbXavlgPIrFqkbITF345W0tM9Djz9Vo0Qykw8Hg5nHF3uh",
    access_token_key: "1458701767257255936-fHBfi2YPB04Tp8NKRvUILGal62HcXN",
    access_token_secret: "Dwy0lSY4JRSHRywne70P8yy4NFcq8f1NWo4DI1sL1sK8I",
  });
  useEffect(() => {
    async function getData() {
      // try {
      // const { q, count } = this.state;
      // const q = "cat";
      // const count = 5;
      // const url = "https://api.twitter.com/1.1/search/tweets.json";
      // const params = new URLSearchParams();
      // params.append("q", q);
      // params.append("count", count);
      // await fetch(`${url}?${params}`, {
      //   headers: {
      //     Authorization:
      //       "bearer AAAAAAAAAAAAAAAAAAAAAAkDVwEAAAAA8Wr%2FY7UwyFdlj1lDdn0bESMmcd4%3DxPNQgNxTdSiEJQLOYbrjbR0IfPzgYPz4DVkLTpnRJaueA5Lpep",
      //   },
      // }).then((res) => console.log(res.json()));
      // response = await response.json();
      // const res = await axios.get(
      //   "https://api.twitter.com/2/tweets/search/stream?tweet.fields=created_at&expansions=author_id&user.fields=created_at",
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAADi8VgEAAAAAsGzb5kStzLoCI3IQgnwjxdrSxzA%3DodZoF1nVHW6YKOJ1YxWHPvByuIKQLKCaj7caei48TWKhB3AjWZ`,
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
  const { data } = client.get("search/tweets", {
    q: "#cat",
    count: 5,
  });
  console.log(data);
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
