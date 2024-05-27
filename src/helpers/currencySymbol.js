const currencySymbol = (currency) => {
  if (currency === "usd") return "$";

  if (currency === "eur") return "€";

  if (currency === "jpy") return "¥";
};

export { currencySymbol };
