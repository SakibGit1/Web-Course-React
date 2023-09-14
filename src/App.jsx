import './App.css'
import { useEffect, useState } from 'react';
import Card from './Component/Cards-container/Card';
import List from './Component/List/List';

function App() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCards(data))
  }, [])

  const [getCard, setGetCard] = useState([])
  const [cost, setCost] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const [remainging, setRemaining] = useState(20)
    
    const handleBtn = (card)=>{
      let count = card.credit
      let tp = card.price
        const newCard = [...getCard, card];
        const isExist = getCard.find(item=> item.id===card.id)
        if(isExist){
          return alert("already have this")
        }else{
          getCard.forEach(card=>{
            count = count + card.credit
            tp = tp + card.price
          })
          const remaining = 20 - count ;
          if(count>20){
            return alert('You do not have enough credit')
          } else{
            setRemaining(remaining)
            setCost(count)
            setTotalCost(tp)
          setGetCard(newCard)
          }

        }

        // console.log(newCard);
    }

  return (
    <>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-2xl font-bold text-center my-10'>Course Registration</h2>
        <div className='flex gap-10  '>
          <div className='w-2/3 grid md:grid-cols-3 gap-4 px-4'>
            

            {cards.map(card=> <Card handleBtn={handleBtn} key={card.id} card={card}></Card>)}

          </div>

          <div className='w-1/3'> 
          <List getCard={getCard} cost={cost} remainging={remainging} totalCost={totalCost} ></List>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
