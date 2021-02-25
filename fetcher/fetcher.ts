import axios from "axios"

export const fetcher =  async (link: string) => {
    const {data} = await axios.get(`https://financialmodelingprep.com/api/v3/${link}?apikey=93cda20ae659089e470d6b3c63af17f3`)
    return data
}
// export const fetchIndex =  async () => {
//     const news = await fetcher('stock_news');     
//     const mostSearched = await fetcher('quote/AAPL,FB,GOOG,MSFT,ZNGA,NVDA,WBA,PIH');     
//     const gainers = await fetcher('gainers');     
//     const losers = await fetcher('losers');     
//     const currencies = await fetcher('quotes/forex');     
//     const crypto = await fetcher('quotes/crypto');     
//     const sectorPerformance = await fetcher('sectors-performance');    
//     console.log({
//         news,
//         mostSearched,
//         gainers,
//         losers,
//         currencies,
//         crypto,
//         sectorPerformance,
//     })
//     return {
//         news,
//         mostSearched,
//         gainers,
//         losers,
//         currencies,
//         crypto,
//         sectorPerformance,
//     }
// }
