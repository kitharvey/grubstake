import React from 'react'
import { NewsData } from '../interfaces';

interface NewsCardProps {
    data: NewsData
}

function trimEllip(str: string, len: number) {
    return str.length > len ? str.substring(0, len) + "..." : str;
  }


const NewsCard: React.FC<NewsCardProps> = ({data}) => {
        return (
            <a className='' rel='noreferrer' target="_blank" href={data.url}>
                <div className='group w-full h-96 flex overflow-hidden rounded-xl absolute' >
                    {/* <img src={data.image} alt={data.title} className='w-3/5 inline-flex group-hover:filter-opacity transition-all ease-in-out' loading='lazy' ></img> */}
                    <div className='w-3/5 inline-flex group-hover:filter-opacity transition-all ease-in-out' style={{
                        backgroundImage: `url(${data.image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }} />
                    <div className='w-2/5 h-auto inline-flex group-hover:filter-opacity transition-all ease-in-out' style={{
                        backgroundImage: `url(${data.image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '200%',
                        backgroundPosition: 'center',
                    }} >
                        <div className='w-full h-full backdrop-blur bg-grayGlass text-white p-10 grid grid-rows-6' >
                            <div className='row-span-5 h-full w-full' >
                                <p className='text-2xl' >{data.title}</p>
                                <p className='font-thin ' >{trimEllip(data.text, 100)}</p>
                            </div>
                            <div>
                                <p className='font-thin text-xs' >{data.publishedDate.split(' ')[0]}</p>
                                <p className='font-thin text-xs' >{data.site}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        );
}


export default NewsCard