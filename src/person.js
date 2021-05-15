const isAdult = (x) => x >= 18;

const canDrink = (y) => {
  if (y >= 25) {
    return "Can drink legally.";
  } else {
    return "Not so soon son!"
  }
}

const isSeniorCitizen = (z) => z >= 65;

export { isAdult, canDrink, isSeniorCitizen as default };