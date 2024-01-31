import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Completedtodos() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "30vh" }}
    >
      <Card
        style={{
          width: "800px",
          padding: "30px",
          border: "2px solid grey ",
        }}
      >
         <Card.Title>Todo's List</Card.Title>
        <Card.Body
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Row>
            {props.completedtodos.map((todo) => (
              <Col key={todo.id}>
                <div className="d-flex align-items-center">
                  <p style={{ marginRight: "10px" }}>{todo.task}</p>
                  <Button
                    variant="success"
                    style={{ marginRight: "5px" }}
                    onClick={() => completedHandler(todo.id)}
                  >
                    Completed
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteHandler(todo.id)}
                  >
                    Delete
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}