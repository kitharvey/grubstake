import React from 'react'
import Crawler from './Crawler'
import { useRouter } from 'next/router'
interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({}) => {
        const router = useRouter()
        return (
                <div className='relative z-10' >
                        <div className='w-full h-auto bg-white' >
                                <div className='container mx-auto px-10 py-4 flex items-center justify-between' >
                                        <h1 
                                        className='text-3xl font-black cursor-pointer hover:text-blue-800'  
                                        onClick={() => router.push({
                                                pathname: `/`,
                                        })} 
                                        >Shtonks</h1>
                                        <div className="flex items-center">
                                                {/* <label htmlFor="searchstock" className="text-black text-sm mr-3 " >Search: </label> */}
                                                <form method="GET" onSubmit={ (event: React.FormEvent<HTMLFormElement>) => event.preventDefault() }>
                                                        <div className="flex text-gray-400 border-gray-200 border-solid border focus-within:text-black focus-within:border-gray-400 bg-white rounded w-80  p-2">
                                                                <input id="searchstock" name="searchstock" className="w-full rounded text-xs font-thin focus:outline-none text-gray-900" placeholder="Search stock..." autoComplete="off"/>
                                                                <button type='submit' className="border-0 outline-none focus:outline-none">
                                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                                                </button>
                                                                
                                                        </div>
                                                </form>
                                        </div>
                                </div>
                        </div>
                        <Crawler />
                </div>
        );
}


export default Header