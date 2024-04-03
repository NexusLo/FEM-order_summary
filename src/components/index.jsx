import './styles.css'
import musicicon from '../assets/images/icon-music.svg'
import hero from '../assets/images/illustration-hero.svg'

export default function Landing (){
    return (
        <div className='wrapper'>
            <div className='main'>
                <div className='card'>
                    <div className='card__hero'>
                        <img src={hero} alt='hero' className='card__heroimg'/>
                    </div>
                    <h1 className='card__headtitle'>Order Summary</h1>
                    <p className='card__txt'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                    <div className='card__pricetagdiv'>
                        <div className='pricetagdiv__circleicon'>
                            <img src={musicicon} alt=' a music icon' className='pricetagdiv__icon' />
                        </div>
                        <div className='pricetagdiv__pricecol'>
                                <p className='pricecol__headtxt'>Annual Plan</p>
                                <p className='pricecol__txt'>$59.99/year</p>
                        </div>
                        <a className='pricetagdiv__change'>Change</a>
                    </div>
                    <button className='card__button'>Proceed to Payment</button>
                    <a className='card__canceltxt'>Cancel Order</a>
                </div>
            </div>
        </div>
    )
}

