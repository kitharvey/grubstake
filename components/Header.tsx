import React from 'react'

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({}) => {
        return (
            <div className='header-wrapper' >
                <h1>Grubstake</h1>
                <input type='search' ></input>
            </div>
        );
}


export default Header