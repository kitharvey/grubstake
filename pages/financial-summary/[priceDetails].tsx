import { useRouter } from "next/router"
import React from "react"
import { SyncLoader } from "react-spinners"
import useSWR from "swr"
import PriceChart from "../../components/PriceChart"
import PriceDetailCard from "../../components/PriceDetailCard"
import fetcher from "../../fetcher/fetcher"

const PriceDetails: React.FC = () => {
  const router = useRouter()
  const { priceDetails } = router.query
  const { data: priceData } = useSWR(`quote/${priceDetails}`, fetcher)
  const { data: chartData } = useSWR(`historical-price-full/${priceDetails}`, fetcher)
  if (!priceData || !chartData) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <SyncLoader color="#2563EB" size={5} margin={2} />
      </div>
    )
  }
  return (
    <div className="container mx-auto px-2 py-10 ">
      <h1 className="font-black">
        {priceDetails}&nbsp;&nbsp;&nbsp;
        <span className="text-sm">
          {priceData[0].name ? priceData[0].name : priceData[0].companyName}
        </span>{" "}
      </h1>
      <div className="mt-10 flex flex-col md:flex-row">
        <PriceDetailCard priceData={priceData} />
        <PriceChart chartData={chartData} />
      </div>
    </div>
  )
}

export default PriceDetails
