import { useEffect, useState } from "react";
import axios from 'axios';

const BASE_URL = 'https://deckofcardsapi.com/api/deck/'

function Deck() {
  const [deck, setDeck] = useState({deck_id: ""})

  useEffect(function fetchDeckOnMount() {
    async function fetchDeck() {
      const deckResult = await axios.get(`${BASE_URL}/new/shuffle`);
      setDeck({deck_id: deckResult.deck_id});
    }
    fetchDeck();
  }, []);

  return (
    <div className="Deck">

    </div>
  );
}

export default Deck;

