import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "./request";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="COMEDIAS NETFLIX"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title="Comedias Amazon"
        fetchUrl={requests.fetchAmazonPrime}
        isLargeRow
      />
      <Row title="Comedias HBO" fetchUrl={requests.fetchHbo} isLargeRow />
      <Row title="Comedias #0" fetchUrl={requests.fetchMovistar} />
      <Row title="Comedias Telecinco" fetchUrl={requests.fetchTelecinco} />
      <Row title="Comedias Antena 3" fetchUrl={requests.fetchAntenaTres} />
      <Row title="Comedias La Sexta" fetchUrl={requests.fetchLaSexta} />
    </div>
  );
}

export default App;
