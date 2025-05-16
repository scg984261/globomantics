function addHouse() {
  const house = {
    id: 6,
    address: "32 Valley Way, New York",
    country: "USA",
    price: 1000000,
  };

  const addHouseUrl = 'https://localhost:4000/house';

  fetch(addHouseUrl, {
    method: 'POST',
    body: JSON.stringify(house),
    headers: {
      "Content-type": "application/json"
    }
  }).then((response) => response.json())
  .then(json => console.log(json));
}

const AddHouseButton = () => {
  return (
    <>
      <button className="btn btn-primary" onClick={addHouse}>Add House</button>
    </>
  )
};

export default AddHouseButton;
