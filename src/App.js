import "./styles.css";
import { useState, useEffect } from 'react'
import IcecreamOrder from "./components/IcecreamOrder";

/*
  Custom Icecream order

  Challenge:
  You are making an website where customers can order icecream with addons. 
  Render the all flavours with checkboxes, 
  ie: 
  [] Strawberry Icecream
  [] Vanilla Icecream
  ...

  Upon checking the icecream, render ADDONS, if there are any
  ie:
  [x] Strawberry Icecream ([] Double Strawberry, [] Berry overload)
  

  Acceptance:
  On click order, print order array

  * user can choose to order multiple icecream, each icecream with its own addons
  * style does not matter


*/

const iceCreamData = [
  {
    id: 0,
    label: "Strawberry Icecream",
    type: "FLAVOUR",
    data: [
      {
        id: 0,
        label: "Double Strawberry",
        type: "ADDON"
      },
      {
        id: 1,
        label: "Berry overload",
        type: "ADDON"
      }
    ]
  },
  {
    id: 1,
    label: "Vanilla Icecream",
    type: "FLAVOUR",
    data: [
      {
        id: 0,
        label: "Sweet 10x",
        type: "ADDON"
      },
      {
        id: 1,
        label: "Splash of Bitter",
        type: "ADDON"
      }
    ]
  },
  {
    id: 2,
    label: "Chocolate Icecream",
    type: "FLAVOUR",
    data: [
      {
        id: 0,
        label: "Rainbow Sprinkles",
        type: "ADDON"
      },
      {
        id: 1,
        label: "Choco Sprinkles",
        type: "ADDON"
      }
    ]
  },
  {
    id: 3,
    label: "Matcha Icecream",
    type: "FLAVOUR",
    data: []
  },
  {
    id: 4,
    label: "Mixed Flavours",
    type: "FLAVOUR",
    data: [
      {
        id: 0,
        label: "Oreo Cookies",
        type: "ADDON"
      },
      {
        id: 1,
        label: "Vanilla Waffers",
        type: "ADDON"
      }
    ]
  }
];

export default function App() {
  const [formData, setFormData] = useState({
    id: '',
    addons: {
      id:'',
      label: '',
      type: '',
    },
    label: '',
  })

  const orderIceCream = () => {
  const[selectFlavours, setSelectFlavours] = useState([]);
  const[selectAddOns, setSelectAddOns] = useState([]);

  const handleFlavourChange = (e) => {
    const flavourId = parseInt(e.target.value);
    const isSelected = e.target.checked;
  
  if (isSelected) {
    setSelectedFlavours([...selectFlavours, flavourId]);
  } else {
    setSelectFlavours(selectFlavours.filter(id => id !== flavourId));
  }
}
// print console log of all icecream ordered along with its corresponding addons IF ANY
console.log("YAY");
};


  // console.log(formData)
  // const checkBox = (e) => {
  //   // e.preventDefault();
  //   setAddOn(true);
  //   setFormData({...formData, label:e.target.value})
  // }

  // const PageDisplay = () => {
  //   if (page===0) {
  //     return <IcecreamOrder formData={formData} setFormData={setFormData} iceCreamData={iceCreamData}/>
  //   }
  // }
  return (
<div className="App">
      <h1>Ice Cream Flavours</h1>
      <h2>{iceCreamData.map((icecream) => (
        <div key={icecream.id}>
          {icecream.label}
          <input type='checkbox'></input>
        </div>
        
      ))}</h2>
      <button onClick={orderIceCream}>Order Icecream</button>
    </div>

);
}
// <div className="App">
//   <h1>Ice Cream Order</h1>
//   <br></br>
//   <div>
//   <div className='box'> {
//   iceCreamData.map((icecream) => (
//   <div key={icecream.id}> 
//     <h3>{icecream.label}</h3>

//     <input value={icecream.label} type='checkbox' onClick={checkBox}></input>
//     <div>{icecream.data.map((test) => (
//       <>
//       <label>{test.label}</label><input type='checkbox'></input><br/>
//       </>
//     ))}</div>
    
//   </div>
// ))}</div>
//   </div>
// </div>
