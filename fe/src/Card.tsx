import React from 'react'

// interface props {

// }

// name, gender, origin, species 
const Card = ({person}) => {
    console.log(person);
  return (
    <div className='child' id={person.id}>
        <img className='pfp' src={person.image}></img>
        <div className='name'>
            {person.name}
        </div>
        <div className='gender'>
            {person.gender}
        </div>
        <div className='origin'>
            <div className='origin__name'>
                {person.origin.name}
            </div>
            <div className='origin__url'>
                {person.origin.url}
            </div>
        </div>
        <div className='species'>
            {person.species}
        </div>
    </div>
  )
}

export default Card