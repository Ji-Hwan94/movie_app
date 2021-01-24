import React from "react";
import axios from "axios";
import Movies from "./Movies"; //state를 이용하기 위해 class component를 한다.
import "./App.css";


class App extends React.Component {
    state = {
      isLoading : true,
      movies : []
    };

getMovies = async () => {
  const {data:{data:{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"); //data 안에 있는 data 안에있는 movies를 찾기 위해 사용한 방법 / '?' 이하는 rating을 기준으로 정렬하기 위해 작성
  this.setState({ movies, isLoading : false }); // 하나의 setState에서 두개의 상태를 변경함
}; // async와 await는 componentDidMount에게 getMovies라는 function에게 조금만 시간을 달라고 요구하는 Method이다. (axios를 기다리는것)

    componentDidMount(){
      this.getMovies();
    }

    render(){
      const { isLoading, movies } = this.state;
      return (
        <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span> 
          </div>
        ) : (
        <div className= "movies">
            {movies.map(movies => (
            <Movies 
              key = {movies.id} //key는 표현되지 않지만 필수적으로 들어가야할 props 이다.
              id = {movies.id} 
              year = {movies.year} 
              title = {movies.title} 
              summary = {movies.summary} 
              poster = {movies.medium_cover_image} 
              genres = {movies.genres}
              />
              ))} 
        </div>
        )
      }
     </section> 
    );
  }  
}
   
  
  export default App;
