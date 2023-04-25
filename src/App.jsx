import "./styles.css";
import React, { useState } from 'react'
import orderIceCream from "./orderIceCream,jsx";


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

// const orderIceCream = () => {
// // print console log of all icecream ordered along with its corresponding addons IF ANY
// console.log("YAY");
// };
  //we want to render ice cream flavors with checkboxes
  //onchange - manage the state in which flavours are being selected
  //ternary options for flavours selected, if flavours !== true ? null : show addons
    //upon selection - we want to then render the addons for respective flavours
  // when our selections are complete, we want to print our completed order

  //current iteration flavour addons state is not being managed independently; 
    //when a flavour is selected and addons are exposed, although not all addons are selected
    //depending on the order of its selection, addon states are acting as one
    //i.e. strawberry addon1 a[x] b[] - vanilla addon2 a[] b[x] 
    //will return addon selections a & b for both flavours

  const App = () => {
    const [selectIceCreams, setSelectIceCreams] = useState([]);
    const [selectAddOns, setSelectAddOns] = useState({});

    const handleIceCreamChange = (e, icecreamId) => {
      if (e.target.checked) {
        setSelectIceCreams([...selectIceCreams, icecreamId]);
      } else {
        setSelectIceCreams(selectIceCreams.filter(id => id !== icecreamId));
      }
    }

    const handleAddonChange = (e, icecreamId, addonsId) => {
      const newAddons = {...selectAddOns};
      if (e.target.checked) {
        if(!newAddons[icecreamId]) {
          newAddons[icecreamId] = []
        }
        newAddons[icecreamId] = [...newAddons[icecreamId], addonsId];
      } else {
        if(newAddons[icecreamId]) {
          newAddons[icecreamId] = newAddons[icecreamId].filter(id => id !== addonsId)
        }
      }
      setSelectAddOns(newAddons);
    }
    //check for addons to be rendered
    const isFlavourChecked = (icecreamId) => {
      return selectIceCreams.includes(icecreamId);
    }

    //check for addons
    // const isAddOnChecked = (icecreamId, addonsId) => {
    //   return selectAddOns[icecreamId] && selectAddOns[icecreamId].includes(addonsId);
    // }

    // const orderIceCream = () => {
    //   const selectedOrder = selectIceCreams.map(icecreamId => {
    //     const icecream = iceCreamData.find(item => item.id === icecreamId);
    //     const addonsForIcecream = icecream.data
    //       .filter((addon) => isAddOnChecked(icecreamId, addon.id))
    //       .map(addon => addon.label);
    //     return {
    //       icecream: icecream.label,
    //       addons: addonsForIcecream
    //     }
    //   });
    //   console.log('Ice Cream Order:');
    //   selectedOrder.forEach(order => console.log(`${order.icecream} addons: ${order.addons.length > 0 ? order.addons.join(', ') : 'none'}`));
    // }

    // <orderIceCream/>

      return (
        <div className="App">
        <h1>Ice Cream Flavours</h1>
          <div>
            {iceCreamData.map((icecream) => (
            <div key={icecream.id}>
          <h2>
            <label>
              <input 
              type='checkbox' 
              name='icecream' 
              value={icecream.id} 
              onChange={(e) => handleIceCreamChange(e, icecream.id)}
              />
              {icecream.label}
              </label>
              </h2>
              <div className={isFlavourChecked(icecream.id) ? 'show-addons' : 'hide-addons'}>
              {icecream.data.map((addons) => 
              <div key={addons.id}>
                <label>
                  <input 
                  type='checkbox' 
                  name='addons' 
                  value={addons.id} 
                  onChange={(e) => handleAddonChange(e, icecream.id, addons.id)}
                  />
                  {addons.label}
                </label>
              </div>
              )}
            </div>
          </div>
          ))}
          <br></br>
          </div>
          <button onClick={<orderIceCream/>}>Order Icecream</button>
        </div>
      )
    }

export default App;
