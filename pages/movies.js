import Layout from '../components/Layout'
import withData from '../components/Apollo'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Image from '../components/Image'

function MovieList({ loading, error, data: { movies }}) {
    if (loading || !movies) {
        return <div>Loading ...</div>
    }

    if (error) {
        return <div>{error.message}</div>
    }

    return (
        <div>
            {movies.map(movie => (
                <div className="flex" key={movie.id}>
                    <div>
                        <Image path={movie.poster_path} />
                    </div>
                    <div>
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            ))}
            <style jsx>{`
                .flex {
                    display: flex;
                }

                img {
                    margin: 10px;
                }
            `}</style>
        </div>
    )
}

const starWars = gql`{
    movies(query: "Star Wars") {
        id
        title
        overview,
        poster_path
    }
}`

const Movies = graphql(starWars, {
    props: ({ data }) => ({
      data
    })
  })(MovieList)
  
export default withData(() => (
    <Layout>
       <Movies></Movies>
    </Layout>
))