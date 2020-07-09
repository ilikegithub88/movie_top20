import React, { Component } from 'react'
import axios from "axios";
import Movie from './Movie';
import {Container,Row, Col} from 'reactstrap';
import './App.css';


export default class App extends Component {
  state={
      isLoading:true, movies:[]
    }

        //axios가 느려서 천천히 실행되므로 비동기적 실행이 되기 때문에 async await 사용
        getMovies=async ()=>{
          const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
          //console.log(movies.data.data.movies); 위 코드에서 const movies=await axios.get이런 식일 때 console.log를 이렇게 작성
          console.log(movies);
          this.setState({movies:movies, isLoading:false});
        }


      componentDidMount(){
          this.getMovies();    
      }

      render() {
      return (

        <section className="Container">
         
          <Row sm="5">
            <Col sm="4"></Col>
            <Col sm="7" style={{fontSize:25, fontWeight:"bolder"}}>
              The Most Popular Movies at the website named "YTS"
            </Col>            
          </Row>
          
          <Row>
              {this.state.isLoading ? 
                    <div className="loader">
                        <span className="loader-text"> Loading... </span>
                    </div> 
                 : 
                  this.state.movies.map(function(element){
                  return <Col sm="3">
                      <Movie key={element.id}
                      title={element.title} 
                      summary={element.summary} 
                      rating={element.rating}
                      poster={element.medium_cover_image}
                      genres={element.genres}></Movie>
                      </Col>
                  })
                 
              }
          </Row>
          
        </section>
    );
  }
}