import React from 'react'
import newsData from '../data/news'
import { NewsData } from '../interfaces';
// import Link from 'next/link'

function trimEllip(str: string, len: number) {
    return str.length > len ? str.substring(0, len) + "..." : str;
  }

const News: React.FC = () => {
        return (
                <div className='w-full' >
                    {newsData.map( (data: NewsData, index) => {
                        return (
                            <div key={index} className='w-full h-96 flex overflow-hidden rounded-3xl' >
                                <img src={data.image} alt={data.title} className='w-3/5' loading='lazy' ></img>
                                <div className='w-2/5 h-full' style={{
                                    backgroundImage: `url(${data.image})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '200%',
                                    backgroundPosition: 'center',
                                }} >
                                    <div className='w-full h-full backdrop-blur bg-grayGlass text-white p-10 grid grid-rows-6' >
                                        <div className='row-span-4 h-full w-full overflow-ellipsis overflow-hidden block' >
                                            <p className='text-2xl' >{data.title}</p>
                                            <p className='font-thin ' >{trimEllip(data.text, 150)}</p>
                                        </div>
                                        <div>
                                            <p className='font-thin text-xs' >{data.publishedDate.split(' ')[0]}</p>
                                            <p className='font-thin text-xs' >{data.site}</p>
                                        </div>


                                        <a href={data.url}><p className='text-xs' >Read more...</p></a>
                                    </div>
                                </div>
                            </div>
                        ) 
                    } )}
                </div>
        );
}


export default News