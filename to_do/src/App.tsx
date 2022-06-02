import React, {useState} from 'react';
import ToDoList from "./components/ToDoList/ToDoList";
import {IToDo} from "./interfaces";

const App: React.FC = () => {
    const [todos, setTodos] = useState<IToDo[]>([]);

    const removeToDo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const addToDo = (title: string) => {
        const now = new Date();
        let date = now.toLocaleString('default', {month: 'short'}) + '-'
            + now.getDate() + "   " +  now.getHours() + ":" + now.getMinutes();
        setTodos(prev => [
            {title: title, id: Date.now(), date: date}
            , ...prev]);
    }

    return (
        <div>
            <ToDoList
                todos={todos}
                addToDo={addToDo}
                removeToDo={removeToDo}
            />
        </div>
    );
}

export default App;
