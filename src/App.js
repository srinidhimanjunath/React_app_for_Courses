import React from "react";
import Coursesales from "./coursesales";
import "./App.css";

function App() {
  var courses = [
    { name: "Front end dev", price: 2000 },
    { name: "Backend dev", price: 5000 },
    { name: " Full Course PHP", price: 1000 },
    { name: "mongoDb", price: 2000 },
    { name: "React Js", price: 2500 },
    { name: "NodeJs", price: 3000 },
  ];
  return (
    <div className="App">
      <Coursesales items={courses} />
    </div>
  );
}

export default App;
