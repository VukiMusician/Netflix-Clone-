import React from 'react'
import '../styles/homepage.scss';
import Row from '../components/Row';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import requests from '../requests';


const HomePage = () => {
  return ( 
    <div>
      <Nav />
      <Banner />
      <Row 
      tittle="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals} 
      isLargeRow={true}
      />
      <Row tittle="Trending NOw" fetchUrl={requests.fetchTopRated} />
      <Row tittle="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row tittle="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row tittle="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row tittle="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row tittle="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row tittle="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomePage