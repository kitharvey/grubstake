import { InferGetStaticPropsType } from 'next';
import React from 'react'
import { useQuery } from 'react-query';
import { getPosts, getStaticProps } from '../pages/api/fetchData';

export interface PostsProps {
    users:  InferGetStaticPropsType<typeof getStaticProps> | any
}

const Posts: React.FC<PostsProps> = ({users}) => {
    const { data } = useQuery('posts', getPosts, { initialData: users })
    console.log(data)
        return (
                <div className='w-full flex items-center justify-between animate-ticker' >
                    {data && data.map( (user: any) => <div className='px-10' key={user.id} >{user.username}</div> )}
                </div>
        );
}


export default Posts