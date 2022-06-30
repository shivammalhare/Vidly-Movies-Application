import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { getMovies, getMovie, saveMovie, deleteMovie } from '../fakeMovieService';


class MovieList extends Component {

  state={
    movies: getMovies()
  };
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
  };

  // handleClick = (movie) => {
  //       const { movies } = this.state;
  //       const updatedMovies = movies.splice(movies.indexOf(movie), 1);
  //       this.setState({
  //         movies
  //       });
  //     }

  renderMovies = () =>{
    const { movies } = this.state;
    return ( 
      <Fragment>
        <p> Showing {movies.length} movies in the database</p>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

         
          {this.state.movies.map(movie => (
          <tr key={movie._id}>  
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm"> Delete</button></td>
       </tr>
    
     ))}
              
        </tbody>
      </table>
      </Fragment>


    )
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