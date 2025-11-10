import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import ColorPicker from "./components/ColorPicker";
import CartApp from "./components/CartApp";
import LikeDislike from "./components/LikeDislike";
import QuizApp from "./components/QuizApp";

function App() {
  const [page, setPage] = useState("todo");

  const initialItems = [
    { id: 1, name: "laptop", price: 24000000 },
    { id: 2, name: "iphone 17", price: 27000000 },
    { id: 3, name: "iphone 17 promax", price: 67000000 },
  ];

  const colors = ["blue", "purple", "pink"];

  const quizQuestions = [
    {
      question: "React là gì?",
      answers: [
        { text: "Thư viện JS", isCorrect: true },
        { text: "Ngôn ngữ lập trình", isCorrect: false },
        { text: "Database", isCorrect: false },
        { text: "Hệ điều hành", isCorrect: false },
      ],
    },
    {
      question: "useState dùng để làm gì?",
      answers: [
        { text: "Quản lý state", isCorrect: true },
        { text: "Điều hướng router", isCorrect: false },
        { text: "Render UI", isCorrect: false },
        { text: "Tạo component", isCorrect: false },
      ],
    },
    {
      question: "Props là gì?",
      answers: [
        { text: "Thuộc tính truyền từ cha sang con", isCorrect: true },
        { text: "Biến trong component", isCorrect: false },
        { text: "Hàm xử lý sự kiện", isCorrect: false },
        { text: "Hook của React", isCorrect: false },
      ],
    },
  ];

  const renderPage = () => {
    switch (page) {
      case "todo":
        return <TodoList initialTodos={[]} />;
      case "color":
        return <ColorPicker color={colors} />;
      case "cart":
        return <CartApp initialItems={initialItems} />;
      case "like":
        return <LikeDislike />;
      case "quiz":
        return <QuizApp questions={quizQuestions} />;
      default:
        return <h2>Chọn ứng dụng từ menu</h2>;
    }
  };

  return (
    <div className="App" style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Bài thực hành 01</h1>
      <nav style={{ marginBottom: "20px" }}>
        <button onClick={() => setPage("todo")}>Todo List</button> |{" "}
        <button onClick={() => setPage("color")}>Color Picker</button> |{" "}
        <button onClick={() => setPage("cart")}>Cart App</button> |{" "}
        <button onClick={() => setPage("like")}>Like Dislike</button> |{" "}
        <button onClick={() => setPage("quiz")}>Quiz App</button>
      </nav>

      {renderPage()}
    </div>
  );
}

export default App;
