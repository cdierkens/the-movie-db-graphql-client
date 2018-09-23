import Layout from '../components/Layout'
import withData from '../components/Apollo'
import Movies from '../components/Movies'
import { debounce } from 'lodash'

class MoviesPage extends React.Component {
    state = {
        query: "Star Wars",
        input: "Star Wars"
    }

    changeQueryDebounced = debounce((event) => {
        this.setState({
            query: event.target.value
        })
    }, 500)

    onQueryChange = (event) => {
        this.setState({
            input: event.target.value
        })
        event.persist()
        this.changeQueryDebounced(event)
    }   

    render = () => (
        <Layout>
            <input type="text" value={this.state.input} onChange={this.onQueryChange} />
            <Movies query={this.state.query}></Movies>
        </Layout>
    )
}

export default withData(MoviesPage)