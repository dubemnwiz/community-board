import '../styles/BigCard.css';

const BigCard = ({name, date, location, imgUrl, handleClick}) => {
    return (
        <div className='bigCard' style={{ backgroundImage: `url(${imgUrl})` }} onClick={handleClick}>
            <div className='info'>
                <h1>{name}</h1>
                <h3>{location}</h3>
                <h3>{date}</h3>
            </div>
        </div>
    )
}

export default BigCard;