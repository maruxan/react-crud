export const store = {
  getItem: (item) => JSON.parse(localStorage.getItem(item)),
  setItem: (item, value) => localStorage.setItem(item, JSON.stringify(value)),
};
