import { MongoClient , ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "PATCH") {

    const { id } = req.body;

    try {
      const client = await MongoClient.connect(
        "mongodb+srv://akshaysable097:oJ6cxgSayX54WHzY@cluster0.roilqpl.mongodb.net/todos?retryWrites=true&w=majority"
      );

      const db = client.db();
      const collection = db.collection("todos");

      //console.log(id)

      const filter = { _id: new ObjectId(id) }; // Assuming you're updating based on the document's _id
      const update = { $set: { completed: true } };


      const result = await collection.updateOne(filter, update);

      client.close();

      res
        .status(200)
        .json({ message: "Document updated successfully", result });
    } catch (error) {
      console.error("Error updating document:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}