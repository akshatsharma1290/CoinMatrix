export default function GetData({ perpage, page }) {
  const fetchData = async () => {
    const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perpage}&page=${page}&sparkline=false`;
    try {
      const response = await fetch(api);
      if (!response.ok) {
        console.log(response);
        throw new Error("Error");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return fetchData();
}
