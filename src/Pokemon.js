import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Pokemon() {

    const { id } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`
      fetch(url)
      .then(response => response.json())
      .then(data => setDetails(data));
    }, []);

    return (
      <>
        <p>Inofrmation for {details.name}</p>
      </>
    );
  }