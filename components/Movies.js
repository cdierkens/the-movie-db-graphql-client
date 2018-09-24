import { Query } from "react-apollo"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import css from 'styled-jsx/css'
import gql from 'graphql-tag'
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Message from '../components/Message'
import { withStyles } from '@material-ui/core/styles';

const MOVIES_QUERY = gql`
    query movies($query: String!) {
        movies(query: $query) {
            id
            title
            overview
            poster_path
        }
        config {
            images {
                base_url
                poster_sizes
            }
        }
    }
`

const { className, styles } = css.resolve`
  .card-wrapper { 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .card {
    flex: 0 1 250px;
    margin: 20px;
    position: relative;
    padding-bottom: 20px;
  }

  .modal {
    width: 400px;
    padding: 32px;
    position: absolute;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .button {
    position: absolute;
    bottom: 10px;
    left: 10px;
    width: calc(100% - 20px);
  }
`

const getSrc = (data, movie) => `${data.config.images.base_url}${data.config.images.poster_sizes[3]}${movie.poster_path}`

class Movies extends React.Component {
    state = {
        movieElement: null,
        overview: null
    }

    onMovieOverviewOpen = (movie) => {
        this.setState({ 
            movie: movie
        });
    };
    
    onMovieOverviewClose = () => {
        this.setState({ 
            movie: null
        });
    };
      
    render = () => {
        const showOverview = Boolean(this.state.movieElement)

        return (<Query query={MOVIES_QUERY} variables={{ query: this.props.query }}>
            {({ loading, error, data }) => {
                if (loading) {
                    return (<Message message="Loading..." variant="info" />)
                }
    
                if (error) {
                    return (<Message message={error.message} variant="error" />)
                } 
    
                if (!data.movies || !data.movies.length) {
                    return (<Message message="No results!" variant="error" />)
                }
    
                return (
                    <div className={`${className} card-wrapper`}>
                        {data.movies.map(movie => (
                            <Slide direction="left" in={!loading} unmountOnExit key={movie.id}>
                                <Card className={`${className} card`}>
                                    {(movie.poster_path) ? <CardMedia
                                            component="img"
                                            height="auto"
                                            image={getSrc(data, movie)}
                                            title={movie.title}
                                            /> : ""}
                                    <CardContent className={`${className} card-content`}>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            {movie.title}
                                        </Typography>
                                        <Button 
                                            color="primary"
                                            onClick={() => this.onMovieOverviewOpen(movie)}
                                            className={`${className} button`}
                                        >
                                            View Overview
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Slide>
                        ))}
                        <Modal
                            aria-labelledby="movie-overview"
                            aria-describedby="movie-description"
                            open={Boolean(this.state.movie)}
                            onClose={this.onMovieOverviewClose}
                            >
                                {this.state.movie ?
                                    <div className={`${className} modal`}>
                                        <Typography variant="title" id="movie-overview">
                                            {this.state.movie.title}
                                        </Typography>
                                        <Typography variant="subheading" id="movie-description">
                                            {this.state.movie.overview}
                                        </Typography>
                                    </div>
                                : null} 
                        </Modal>
                        {styles}
                    </div>
                )
            }}
        </Query>)
    }
    
}
  
export default Movies