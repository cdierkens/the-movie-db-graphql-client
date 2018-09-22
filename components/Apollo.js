import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

const config = {
  link: new HttpLink({
    uri: 'https://movie-database-graphql.herokuapp.com/graphql'
  })
}

export default withData(config)