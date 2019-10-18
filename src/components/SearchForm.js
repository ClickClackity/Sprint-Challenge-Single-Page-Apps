import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
    const {searchCb} = props;
    const [searchCharacter, setSearchCharacter] = useState("");
    const [lastChar, setLastChar] = useLocalStorage('name', 'Rick')

    const changes = event => {
      setSearchCharacter(event.target.value);
      setLastChar(event.target.value);
    };

    useEffect(() => {
      searchCb(searchCharacter);
    }, [searchCharacter, searchCb])
 
  return (
    <section className="search-form">
      <label htmlFor="character-search">Character Search: </label>
      <input id="character-search" type="text" name="character_name" autoComplete="off" placeholder="Search For A Character" value={lastChar} onChange={changes} />
    </section>
  );
}


function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}