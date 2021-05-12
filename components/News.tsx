import React, {useEffect, useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import NewsCard from './NewsCard';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import { NewsData } from '../interfaces/interfaces';
const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface NewsProps{
  newsData: NewsData[]
}

const News: React.FC<NewsProps> = ({newsData}) => {
    const [[page, direction], setPage] = useState([0, 1]);
    const imageIndex = wrap(0, newsData.length, page);
    
    let timer: ReturnType<typeof setInterval> = setInterval(() => { }, 1000);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    useEffect(() => {
        clearInterval(timer)
        timer = setInterval(() => {
            setPage([page + 1, direction])
        }, 20*1000)
        return () => {
            clearInterval(timer)
        }
    }, [page, direction])

        return (
                <div className='h-auto w-full'>
                    <div className='w-full mx-auto h-96 relative rounded-xl' >
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                            key={page}
                            className='absolute w-full h-full flex items-center justify-center'
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            whileHover={{
                              cursor:'grab'
                            }}
                            whileTap={{
                              cursor:'grabbing'
                            }}
                            transition={{
                              x: { type: "spring", stiffness: 300, damping: 30 },
                              opacity: { duration: 0.2 }
                              }}
                              drag="x"
                              dragConstraints={{ left: 0, right: 0 }}
                              dragElastic={1}
                              onDragEnd={(event: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }) => {
                              console.log(event)
                              const swipe = swipePower(offset.x, velocity.x);
                  
                              if (swipe < -swipeConfidenceThreshold) {
                                  paginate(1);
                              } else if (swipe > swipeConfidenceThreshold) {
                                  paginate(-1);
                              }
                              }}
                            >
                                <NewsCard data={newsData[imageIndex]} />
                            </motion.div>
                        </AnimatePresence>
                        <div className="cursor-pointer absolute bottom-1/2 hidden md:block left-0 transform translate-x-4 translate-y-1/2 transition-all hover:text-blue-800 text-4xl z-10" onClick={() => paginate(-1)}>
                            <FaAngleLeft />
                        </div>
                        <div className="cursor-pointer absolute bottom-1/2 hidden md:block right-0 transform -translate-x-4 translate-y-1/2 transition-all hover:text-blue-800 text-4xl z-10" onClick={() => paginate(1)}>
                            <FaAngleRight />
                        </div>
                    </div>
                  
                </div>
        );
}


export default News