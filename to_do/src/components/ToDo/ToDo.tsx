import React from 'react';
import style from "./ToDo.module.css";

type ToDoProps = {
    title: string,
    id: number,
    date: string,
    removeToDo: (id: number) => void
}

const ToDo: React.FC<ToDoProps> = ({title, id, removeToDo, date}) => {
    const removeHandler = () => {
        removeToDo(id);
    }
    return (
        <div className={style.ToDo}>
            <strong>{title}</strong>
            <br/>
            {date}
            <br/>
            <button className={style.deleteButton}
                onClick={removeHandler}>&times;</button>
        </div>
    );
};

export default ToDo;