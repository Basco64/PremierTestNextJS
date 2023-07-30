import {v4 as uuidv4} from 'uuid'
import Link from 'next/link'

export default function blog(props) {

    return (
        <div className=' container'>
            <h1 className='text-center m-2 p-2'>Bienvenue sur le Blog.</h1>
            <p className='text-center'>Voici les articles</p>
            <div className='row g-3 mt-4'>
                {props.data.map(article => (
                    <div className="card col-12 col-md-6 col-xl-4" key={uuidv4()}>
                        <div className="card-body">
                            <h5 className="card-title">{article.title}</h5>
                            <p className="card-text">{article.body.slice(0,25) + "..."}</p>
                            <Link href={`/blog/${article.id.toString()}`}>
                            <a>Lire cet article</a>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const api = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await api.json()

    return {
        props: {
            data
        }
    }
}