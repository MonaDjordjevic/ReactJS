import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
function Cards() {
    return (
        <div className='cards'>
            <h1>Main actors</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src="actors/Thomas-Shelby.jpg"
                            text="Cillian Murphy - Inception, Dunkirk, Batman Begins, 28 Days Later, Intermission,..."
                            label="Thomas Shelby"
                            path='/services'
                        />
                        <CardItem
                            src="actors/Polly_Gray.jpg"
                            text="Helen McCrory - Harry Potter,Loving Vincent,Hugo, The Queen, Becoming Jane,..."
                            label="Polly Gray"
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src="actors/Arthur-Shelby.jpg"
                            text="Paul Anderson - Legend, The Revenant, 24 Hours To Live, Robin Hood,..."
                            label="Arthur Shelby"
                            path='/services'
                        />
                        <CardItem
                            src="actors/Ada-Shelby.jpg"
                            text="Sophie Rundle - Gentleman Jack,The Nest, Bodyguard, Merlin,..."
                            label="Ada Shelby"
                            path='/services'
                        />
                        <CardItem
                            src="actors/John-Shelby.jpg"
                            text="Joe Cole - Offender, Gangs of London, A Prayer Before Dawn, The Falling,..."
                            label="John Shelby"
                            path='/services'
                        />


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
