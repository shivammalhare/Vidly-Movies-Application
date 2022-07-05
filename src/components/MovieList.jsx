import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { getMovies, getMovie, saveMovie, deleteMovie } from '../fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import { getGenres } from '../fakeGenreService';

class MovieList extends Component {

  state={
    movies: getMovies(),
    genres:[],
    pageSize : 4,           
    currentPage:1 //current page is 1 because we start from page 1

  };

  componentDidMount() {
    this.setState({genres: getGenres()});
  }
  render() {
        return <div>
          {
            this.state.movies.length === 0
              ? <p>There are no movies in the database</p>
              : this.renderMovies()
          }
        </div>;
      }

  handleDelete = (movie) => {
    console.log(movie);
    const movies = this.state.movies.filter(m=> m._id !== movie._id); // filter out the movie that is being deleted
    this.setState({movies});
  }

  handlePageChange = (page) =>{
    this.setState({currentPage: page});
  };

  handleGenreSelect = (genre) => {
    this.setState({selectedGenre: genre, currentPage: 1});
  };


  handleLike =(movie)=>{
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({movies});
    
  };
  // handleClick = (movie) => {
  //       const { movies } = this.state;
  //       const updatedMovies = movies.splice(movies.indexOf(movie), 1);
  //       this.setState({
  //         movies
  //       });
  //     }

  renderMovies = () =>{
   
    const count =this.state.movies.length;
    const { pageSize, currentPage,selectedGenre ,movies:allmovies} = this.state;

    const filtered = selectedGenre 
    ? allmovies.filter(m=> m.genre._id === selectedGenre._id) 
    : allmovies;


    const movies = paginate(filtered, currentPage, pageSize);
    


    return ( 
      <div className='row' style={{marginTop: 25}}>
        <div className='col-3'>
        <ListGroup items={this.state.genres}  
       selectedItem={this.state.selectedGenre}
        onItemSelect ={this.handleGenreSelect}
        />
        </div>
          <div className="col">

            
        
        <h2> Showing {filtered.length} movies in the database</h2>
      <div className="">
        
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th>Like</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

         
          {movies.map(movie => (
            <tr key={movie._id}>  
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td><Like liked ={movie.liked} onClick ={ () =>this.handleLike(movie)}/></td>
            <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm"> Delete</button></td>
       </tr>
    
    ))}
              
        </tbody>
      </table>
      <Pagination  itemsCount={filtered.length} 
      pageSize={pageSize}
      currentPage ={currentPage}
      onPageChange ={this.handlePageChange}/>
      </div>
      </div>


      </div>
    );
  }
}

export default MovieList;



































// import React, { Component, Fragment } from 'react';
// import { getMovies, getMovie, saveMovie, deleteMovie } from '../fakeMovieService';

// class MovieList extends Component {
//   state = {
//     movies: getMovies(),
//   };

//   render() {
//     return <div>
//       {
//         this.state.movies.length === 0
//           ? <p>There are no movies in the database</p>
//           : this.renderMovies()
//       }
//     </div>;
//   }

//   handleClick = (movie) => {
//     const { movies } = this.state;
//     const updatedMovies = movies.splice(movies.indexOf(movie), 1);
//     this.setState({
//       movies
//     });
//   }

//   renderMovies = () => {
//     return (
//       <Fragment>
//         <p>Showing {this.state.movies.length} movies in the database.</p>
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">Title</th>
//               <th scope="col">Genre</th>
//               <th scope="col">Stock</th>
//               <th scope="col">Rate</th>
//               <th scope="col"></th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.movies.map(movie => <tr key={movie._id}>
//               <th scope="row">{movie.title}</th>
//               <td>{movie.genre.name}</td>
//               <td>{movie.numberInStock}</td>
//               <td>{movie.dailyRentalRate}</td>
//               <td>
//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => this.handleClick(movie)}>
//                   Delete
//               </button>
//               </td>
//             </tr>)}
//           </tbody>
//         </table>
//       </Fragment>
//     );
//   }

// }

// export default MovieList