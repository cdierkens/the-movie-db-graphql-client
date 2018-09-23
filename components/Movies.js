import Layout from '../components/Layout'
import withData from '../components/Apollo'
import { Query } from "react-apollo"
import gql from 'graphql-tag'
import Image from '../components/Image'

const MOVIES_QUERY = gql`
    query movies($query: String!) {
        movies(query: $query) {
            id
            title
            overview
            poster_path
        }
    } 
`

const Movies = (props) => (
    <Query query={MOVIES_QUERY} variables={{ query: props.query }}>
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            if (!data.movies || !data.movies.length) return "No results!";

            return (
                <div>
                    {data.movies.map(movie => (
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
                    `}</style>
                </div>
            )
        }}
    </Query>
)
  
export default Movies