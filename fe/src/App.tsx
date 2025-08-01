import { useEffect, useState } from 'react'
import './App.css'
import Card from './Card';

function App() {
  // const [count, setCount] = useState(0);
  const [info, setInfo] = useState();
  const [triggerId, setTriggerId] = useState(18);
  const [persons, setPersons] = useState([]);
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character');

  const targetDiv = document.getElementById('18');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.target.id === triggerId.toString() && entry.isIntersecting) {
            console.log('Div with ID 18 is visible!');
            setTriggerId(triggerId+20);
            
          }
      });
  }, {
      root: document.querySelector('.your-scrolling-container-class'),
      threshold: 0.5
  });

  if(targetDiv)  observer.observe(targetDiv);

  useEffect(() => {
    const res = fetch(url);
    setUrl(url)
    res.then(response => response.json())
      .then(dt => {
        setInfo(dt.info);
        setPersons(dt.results);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <div className='parent'>
        {persons.map((person) => {
          return (
            <div className='horizontal' key={person.id}>
              <Card person={person} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
