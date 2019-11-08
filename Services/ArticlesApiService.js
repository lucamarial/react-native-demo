import axios from "axios";

const url = `http://83.209.245.15:3000`;  // whenever we want to make api calls to localhost we have to use the ip address not the keyword `localhost` since that can result in a network error.
// const url = `https://your-heroku-address`;

export const GetArticles = async () => {
  try {
    let response = await axios.get(url + "/v1/articles");
    const articles = response.data.articles;
    return articles;
  } catch (error) {
    console.error(error);
  }
};