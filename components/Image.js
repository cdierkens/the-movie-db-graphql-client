import withData from '../components/Apollo'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const getSrc = (data, path) => `${data.config.images.base_url}${data.config.images.poster_sizes[2]}${path}`

const Image = ({ loading, error, data, path }) => {
    if (loading) {
        return <div>Loading ...</div>
    }

    if (error) {
        return <div>{error.message}</div>
    }

     return <img src={getSrc(data, path)} />
}

const CONFIG_QUERY = gql`{
    config {
        images {
            base_url
            poster_sizes
        }
    }
}`

export default graphql(CONFIG_QUERY)(Image)