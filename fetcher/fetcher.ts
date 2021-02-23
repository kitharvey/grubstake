import axios from "axios"

export const fetcher =  async (link: string) => {
    const {data} = await axios.get(`https://financialmodelingprep.com/api/v3/${link}?apikey=93cda20ae659089e470d6b3c63af17f3`)
    return data
}
