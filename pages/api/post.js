import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    let db = (await connectDB).db('forum');
    let result = await db.collection('post').insertOne({title: req.body.title, content: req.body.content});
    res.status(200).json('저장완료');
  }
} 