import Banner from './components/Banner';
import HouseList from './components/HouseList';
import House from './components/House';
import './App.css';
import { useState } from 'react';

function App() {
  const [selectedHouse, setSelectedHouse] = useState();
  return (
    <>
      <Banner>
        <div>Providing houses all over the world!</div>
      </Banner>
      {selectedHouse ? <House house={selectedHouse} /> : <HouseList selectHouse={setSelectedHouse} /> }
    </>
  )
}

export default App
