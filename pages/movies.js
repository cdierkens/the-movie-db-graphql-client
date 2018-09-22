import Layout from '../components/Layout.js'
import withData from '../components/Apollo'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

function MovieList({ data: { error, movies }}) {
    return (
        <div>
            {movies.map(movie => (
                <div className="flex">
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
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
      data,
    })
  })(MovieList)
  
export default withData(() => (
    <Layout>
       <Movies></Movies>
    </Layout>
))