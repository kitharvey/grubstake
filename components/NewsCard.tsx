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
            <div className='w-full h-auto flex overflow-hidden rounded-3xl absolute' >
                <img src={data.image} alt={data.title} className='w-3/5 inline-flex' loading='lazy' ></img>
                <div className='w-2/5 h-auto inline-flex' style={{
                    backgroundImage: `url(${data.image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '200%',
                    backgroundPosition: 'center',
                }} >
                    <div className='w-full h-full backdrop-blur bg-grayGlass text-white p-10 grid grid-rows-6' >
                        <div className='row-span-4 h-full w-full overflow-ellipsis overflow-hidden block' >
                            <p className='text-2xl' >{data.title}</p>
                            <p className='font-thin ' >{trimEllip(data.text, 100)}</p>
                        </div>
                        <div>
                            <p className='font-thin text-xs' >{data.publishedDate.split(' ')[0]}</p>
                            <p className='font-thin text-xs' >{data.site}</p>
                        </div>


                        <a href={data.url}><p className='text-xs' >Read more...</p></a>
                    </div>
                </div>
            </div>
        );
}


export default NewsCard