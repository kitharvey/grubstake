import React, {useEffect, useState} from 'react'
import newsData from '../data/news'
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import NewsCard from './NewsCard';

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

    // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
    // then wrap that within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
    const imageIndex = wrap(0, newsData.length, page);
  
    const paginate = (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    };

    useEffect(() => {
        console.log({page, direction})
    }, [page, direction])

        return (
                <div className='mt-20'>
                    <div className='w-3/4 mx-auto relative' >
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
                    </div>
                    <div className="next" onClick={() => paginate(1)}>
                        {"‣"}
                    </div>
                    <div className="prev" onClick={() => paginate(-1)}>
                        {"‣"}
                    </div>
                </div>
        );
}


export default News