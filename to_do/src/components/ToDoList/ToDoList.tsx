import React from 'react';
import ToDo from "../ToDo/ToDo";
import ToDoForm from "../ToDoForm/ToDoForm";

type ToDoListProps = {
    todos: any[],
    addToDo: (title: string) => void,
    removeToDo: (id: number) => void
}

const ToDoList: React.FC<ToDoListProps> = ({todos, addToDo, removeToDo}) => {
    return (
        <ol style={{margin: "1rem"}}>
            <ToDoForm addToDo={addToDo}/>
            {todos.length !== 0
            ? todos.map(todo =>
                    <ToDo
                        title={todo.title}
                        date={todo.date}
                        key={todo.id}
                        removeToDo={removeToDo}
                        id={todo.id}
                    />)
            : <h1>Пока нет записей</h1>}
        </ol>
    );
};

export default ToDoList;