import axios from 'axios';

//const url = 'https://newsapi.org/v2/everything?q=Apple&from=2022-04-29&sortBy=popularity&apiKey=a33b418fcf8747e0af63342ede078bde';
const url = 'https://newsapi.org/v2/everything';
const apiKeys = {
  1: 'a33b418fcf8747e0af63342ede078bde',
  2: '8b4a6567fd564ea690b1aeb33bda7216',
};

const getNews = (items, apiKeyNumber) => {
	//return axios.get(`${url}?q=${items}&apiKey=${apiKeys[apiKeyNumber]}`,headers: {"Access-Control-Allow-Origin": "*"}
	//).then((res) => res.data.articles);

	return [{"source":{"id":"wired","name":"Wired"},"author":"Lily Hay Newman","title":"Blockchains Have a ‘Bridge’ Problem, and Hackers Know It","description":"Blockchain bridges are a crucial piece of the cryptocurrency ecosystem, which makes them prime targets for attacks.","url":"https://www.wired.com/story/blockchain-network-bridge-hacks/","urlToImage":"https://media.wired.com/photos/62479107eced5c4c5a96ba8b/191:100/w_1280,c_limit/Blockchain-Bridge-Gear-841324400.jpg","publishedAt":"2022-04-03T11:00:00Z","content":"This week, the cryptocurrency network Ronin disclosed a breach in which attackers made off with $540 million worth of Ethereum and USDC stablecoin. The incident, which is one of the biggest heists in… [+3084 chars]"}];
};

export { getNews };
