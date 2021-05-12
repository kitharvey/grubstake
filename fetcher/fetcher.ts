import axios from "axios"

export default async function fetcher(link: string) {
  const { data } = await axios.get(
    `https://financialmodelingprep.com/api/v3/${link}?apikey=${process.env.NEXT_PUBLIC_API_KEY}`
  )
  return data
}
