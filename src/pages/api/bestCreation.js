import creations from ''

export default (req, res) => {
  const creation = creations[Math.floor(Math.random() * creations.length)];
  res.status(200).json(creation);
};