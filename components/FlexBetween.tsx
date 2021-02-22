import React from 'react'

type FlexBetweenProps = {
    category: string;
    details: React.ReactNode;
};

const FlexBetween: React.FC<FlexBetweenProps> = ({category, details}) => {
    return (
        <div className="w-full grid grid-cols-2 gap-x-1">
            <p className="text-sm p-3" >{category}:</p>
            <div className="text-xs font-thin p-3" >
                {details}
            </div>
        </div>
    )
} 



export default FlexBetween