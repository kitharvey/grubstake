import React from 'react'

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({}) => {
        return (
            <div className='w-full h-auto bg-gray-200' >
                    <div className='container mx-auto px-10 py-4 flex items-center justify-between' >
                        <h1 className='text-3xl font-black' >grub&#183;stake</h1>
                        <input type='search' ></input>
                    </div>

            </div>
        );
}


export default Header