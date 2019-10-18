import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Container, Row } from "reactstrap";
import SearchForm from "./SearchForm";



export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacters(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const searchCb = value => {
    setFilter(value);
  };

  if (!characters.results) {
    return (
      <div>
        <h2>Still fetching data</h2>
      </div>
    );
  }

  return (
    <section className="character-list">
      <SearchForm searchCb={searchCb} />
      <h2>Characters</h2>
      <Container className="cont">
        <Row className="conts">
            {characters.results.map((character, index) => {
              if (character.name.toLowerCase().includes(filter.toLowerCase())) {
                return <CharacterCard key={index} {...character} />;
              } else {
                return false;
              }
            })}
        </Row>
      </Container>
    </section>
  );
}
