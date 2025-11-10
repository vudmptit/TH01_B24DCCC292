import { useState } from "react";

const TodoList = (props) => {
    const { initialTodos } = props;
    const [list, setList] = useState(initialTodos);
    const [input, setInput] = useState("");

    const addTodo = () => {
        if (input.trim() !== "") {
            setList([...list, input]);
            setInput("");
        }
    }

    const removeTodo = (index) => {
        const updatedList = [...list];
        updatedList.splice(index, 1);
        setList(updatedList);
    }

    return (
        <div>
            <input type="text" 
                   value={input} 
                   onChange={(e) => setInput(e.target.value)}
                   placeholder="Nhập công việc"
            />
            <button onClick={addTodo}>Thêm</button>
            <ul>
                {list.map((todo, index) => (
                    <li key={index}>{todo}{" "}
                        <button onClick={() => removeTodo(index)}>Xóa</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}   

export default TodoList;