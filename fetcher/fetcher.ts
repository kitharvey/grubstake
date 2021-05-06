import axios from "axios"


export const fetcher =  async (link: string) => {
    const {data} = await axios.get(`https://financialmodelingprep.com/api/v3/${link}?apikey=${process.env.NEXT_PUBLIC_API_KEY}`)
    return data
}