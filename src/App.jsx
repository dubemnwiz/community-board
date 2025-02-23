import './App.css';
import BigCard from './components/BigCard.jsx';
import Card from './components/Card.jsx';

const App = () => {

  const linkToSite = () => {
    window.open('https://boilerroom.tv/', '_blank');
  }

  return (
      <div className="app">
          <div className='header'><h1>new york city event board</h1></div>
          <BigCard name='Hu Dat Boiler Room' date='May 25 2025' location='New York' imgUrl='/images/boiler2.jpg' handleClick={linkToSite}/>
          <div className='cardHolder'>
            <Card name='Havana' imgUrl='/images/club1.webp' handleClick={linkToSite}/>
            <Card name='Lost Dogs' imgUrl='/images/club2.webp' handleClick={linkToSite}/>
            <Card name='Dark Horse' imgUrl='/images/club3.jpeg' handleClick={linkToSite}/>
            <Card name='Palo Salto' imgUrl='/images/club4.webp' handleClick={linkToSite}/>
          </div>
          <BigCard name='Lower East Side Boiler Room' date='May 29 2025' location='New York' imgUrl='/images/boilerRoom.jpeg' handleClick={linkToSite}/>
          <div className='cardHolder'>
            <Card name='Havana' imgUrl='/images/club1.webp' handleClick={linkToSite}/>
            <Card name='Lost Dogs' imgUrl='/images/club2.webp' handleClick={linkToSite}/>
            <Card name='Dark Horse' imgUrl='/images/club3.jpeg' handleClick={linkToSite}/>
            <Card name='Palo Salto' imgUrl='/images/club4.webp' handleClick={linkToSite}/>
          </div>
      </div>
  )
}

export default App