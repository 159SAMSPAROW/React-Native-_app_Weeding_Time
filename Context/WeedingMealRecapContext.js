import React from "react";

const WeedingMealRecapContext = React.createContext({
  selectedOptions: [],
  setSelectedOptions: () => {},
});

export default WeedingMealRecapContext;
