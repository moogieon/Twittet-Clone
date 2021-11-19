import nodefetch from "node-fetch";
try {
  const q = "cat";
  const count = 5;
  const url = "https://api.twitter.com/1.1/search/tweets.json";
  const params = new URLSearchParams();
  params.append("q", q);
  params.append("count", count);
  nodefetch(`${url}?${params}`, {
    headers: {
      Authorization:
        "bearer AAAAAAAAAAAAAAAAAAAAAAkDVwEAAAAA8Wr%2FY7UwyFdlj1lDdn0bESMmcd4%3DxPNQgNxTdSiEJQLOYbrjbR0IfPzgYPz4DVkLTpnRJaueA5Lpep",
    },
  }).then(async (res) => console.log(await res.json()));
} catch (error) {
  console.log(error.message);
}
