module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text:
      "Bend the Knee",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Developer"
    }
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "Hello..!! I am Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regnant of the Seven Kingdoms, Breaker of Chains and Mother of Dragons",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Developer"
    }
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "This is a system message.",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    system: true
  }
];
