import Addtodosform from "@/components/Todos/Addtodosform";
import ShowtodoList from "@/components/Todos/Showtodolist";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import { MongoClient } from "mongodb";

function Homepage(props) {
  async function addTaskHandler(taskdata) {
    // console.log(taskdata)
    const response = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(taskdata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log(data);
  }

  return (
    <Fragment>
      <div className="mb-5">
        <Addtodosform ontasksubmit={addTaskHandler} />
      </div>
      <ShowtodoList  todos={props.todos}/>
    </Fragment>
  );0
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://akshaysable097:oJ6cxgSayX54WHzY@cluster0.roilqpl.mongodb.net/todos?retryWrites=true&w=majority"
  );
  const db = client.db();

  const todosdata = db.collection("todos");

  const todos = await todosdata.find({completed:false}).toArray();
  client.close();

  return {
    props: {
      todos: todos.map((todo) => ({
        task: todo.task,
        id: todo._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
