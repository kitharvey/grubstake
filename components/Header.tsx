import React from 'react'

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({}) => {
        return (
            <div className='w-full h-10 flex items-center justify-between px-10 bg-gray-400' >
                    <h1>grub&#183;stake</h1>
                    <input type='search' ></input>
            </div>
        );
}


export default Header