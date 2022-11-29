import { useEffect, useState } from "react";
import axios from 'axios';

const BASE_URL = 'https://deckofcardsapi.com/api/deck'

function Deck() {
  const [deck, setDeck] = useState({deck_id: ""})
  const [card, setCard] = useState({code: "", image: ""})
  const [empty, setEmpty] = useState(false)
  console.log("Deck", deck, card)

  useEffect(function fetchDeckOnMount() {
    async function fetchDeck() {
      const deckResult = await axios.get(`${BASE_URL}/new/shuffle`);
      console.log(deckResult)
      setDeck({deck_id: deckResult.data.deck_id});
    }
    fetchDeck();
  }, []);

  async function drawCard() {
    try{
      const cardResult = await axios.get(`${BASE_URL}/${deck.deck_id}/draw`);
      console.log(cardResult);
      setCard({
        code: cardResult.data.cards[0].code,
        image: cardResult.data.cards[0].image,
      })
    } catch(error) {
      console.log(error)
      setEmpty(true)
    }
  }

  return (
    <div className="Deck">
      <button onClick={(drawCard)}>
        Draw Card!
      </button>
      <img src={card.image} alt={card.code} />
      {empty ? <p>Error: No cards remaining!</p> : null}
    </div>
  );
}

export default Deck;

