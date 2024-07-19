export default function handler(req, res) {
  let current = new Date();
  res.status(200).json(current);
}