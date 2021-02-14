import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from '../components/Header'
import Posts, { PostsProps } from '../components/Posts';

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })



const index: React.FC<PostsProps> = ({users}) => {
        return (
            <QueryClientProvider client={queryClient}>
                <div>
                    <Header />
                    <Posts users={users} />
                </div>
            </QueryClientProvider>
        );
}


export default index