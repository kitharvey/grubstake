import axios from "axios"

export async function getPosts(){
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    return data
}

export async function getStaticProps() {
    const users = await getPosts()
    return { props: { users } }
  }