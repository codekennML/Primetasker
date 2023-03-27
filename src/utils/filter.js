const data = [
  {
    id: 1,
    name: "yryryryyr",
  },
  {
    id: 2,
    name: "yddfee",
  },
  {
    id: 3,
    name: "proror",
  },
  {
    id: 4,
    name: "lelelelle",
  },
];

console.log(
  data.filter((dat, id) => {
    return id !== 3;
  })
);
