import { Query } from "react-apollo";
import gql from 'graphql-tag'

const getSrc = (data, path) => `${data.config.images.base_url}${data.config.images.poster_sizes[2]}${path}`

const CONFIG_QUERY = gql`{
    config {
        images {
            base_url
            poster_sizes
        }
    }
}`

const Image = ({ path }) => (
    <Query query={CONFIG_QUERY}>
        {({ loading, error, data }) => {
            if (loading) return "Loading..."
            if (error) return `Error! ${error.message}`
            
            return (
                <React.Fragment>
                    <img src={getSrc(data, path)} />
                    <style jsx>{`
                    img {
                        margin 10px;
                    }
                    `}</style>
                </React.Fragment>
            )
        }}
    </Query>
)

export default Image