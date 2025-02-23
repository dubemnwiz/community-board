import '../styles/Card.css';


const Card = ({name, imgUrl, handleClick}) => {
    return (
        <div className='card'>
            <div className='image' style={{ backgroundImage: `url(${imgUrl})` }} onClick={handleClick}>
                <h2>{name}</h2>
            </div>
        </div>
    )
}

export default Card;