import creations from "../../creations.json";

export default (req, res) => {
  res.status(200).send(creations);
};
