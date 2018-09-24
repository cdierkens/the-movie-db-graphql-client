import Layout from '../components/Layout'
import withData from '../components/Apollo'
import Movies from '../components/Movies'
import { debounce } from 'lodash'
import TextField from '@material-ui/core/TextField'

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
            <TextField 
                fullWidth={true} 
                label="Search"
                onChange={this.onQueryChange}
                placeholder="Search for a movie"
                type="text"
                value={this.state.input}
            />
            <Movies query={this.state.query}></Movies>
        </Layout>
    )
}

export default withData(MoviesPage)