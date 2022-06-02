import React, {useState} from 'react';
import style from './ToDoForm.module.css';

type ToDoFormProps = {
    addToDo: (title: string) => void;
}

const ToDoForm: React.FC<ToDoFormProps> = ({addToDo}) => {
    const [title, setTitle] = useState<string>('');

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setTitle(event.target.value);
    }
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (title.trim()) {
            addToDo(title);
            setTitle('');
        }
    }

    return (
        <form className={style.formToDo} onSubmit={submitHandler}>
            <input
                className={style.inputToDo}
                value={title}
                onChange={inputHandler}
                placeholder="Введите заголовок"
            />
            <button type="submit">+</button>
        </form>
    );
};

export default ToDoForm;