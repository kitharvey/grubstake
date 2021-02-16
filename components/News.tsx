import React, {useEffect, useState} from 'react'
import newsData from '../data/news'
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import NewsCard from './NewsCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const variants = {
    enter: () => {
      return {
        zIndex: 0,
        x: 0,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: () => {
      return {
        zIndex: 0,
        x: 0,
        opacity: 0
      };
    }
  };

const News: React.FC = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, newsData.length, page);
    let timer: ReturnType<typeof setInterval> = setInterval(() => { }, 1000);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    useEffect(() => {
        clearInterval(timer)
        timer = setInterval(() => {
            setPage([page + 1, 0])
        }, 20*1000)
        return () => {
            clearInterval(timer)
        }
    }, [page])

        return (
                <div className='mt-20 h-auto w-full'>
                    <div className='w-full mx-auto h-96 relative' >
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                            key={page}
                            className='w-auto flex'
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            >
                                <NewsCard data={newsData[imageIndex]} />
                            </motion.div>
                        </AnimatePresence>
                        <div className="group cursor-pointer absolute bottom-1/2 left-0 transform translate-x-4 translate-y-1/2 transition-all hover:scale-125 active:scale-100 text-white text-4xl" onClick={() => paginate(-1)}>
                            <FontAwesomeIcon icon={faAngleLeft}/>
                        </div>
                        <div className="group cursor-pointer absolute bottom-1/2 right-0 transform -translate-x-4 translate-y-1/2 transition-all hover:scale-125 active:scale-100 text-white text-4xl" onClick={() => paginate(1)}>
                            <FontAwesomeIcon icon={faAngleRight}/>
                        </div>
                    </div>
                  
                </div>
        );
}


export default News