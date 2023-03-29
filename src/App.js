import "./styles.css";

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
    label: "Macha Icecream",
    type: "FLAVOUR",
    data: []
  },
  {
    id: 3,
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
  const orderIceCream = () => {
    // print console log of all icecream ordered along with its corresponding addons IF ANY

    console.log("YAY");
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={orderIceCream}>Order Icecream</button>
    </div>
  );
}
