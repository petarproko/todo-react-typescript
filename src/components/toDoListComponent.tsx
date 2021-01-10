import React, { useState } from 'react';
import ToDoListContainer from '../containers/todoListContainer';
import { ToDo } from '../types/todoType';
import getTodos from '../utils/getTodos';

const ToDoList: React.FC = () => {
    const [showForm, setShowForm] = useState(false);
    const [todos, setTodos] = useState<[ToDo]>(getTodos());
    const [editedItem, setEditedItem] = useState<ToDo | null>(null);

    const displayFrom = (event?: React.MouseEvent<HTMLButtonElement>) => {
        setShowForm(!showForm);
        setTodos(getTodos());
    };

    const deleteToDoItem = (item: ToDo) => {
        // eslint-disable-next-line no-restricted-globals
        const response = confirm("Are you sure you want to delete this item");

        if (response) {
            const filteredTodos = todos.filter((todo: ToDo) => todo.id !== item.id);

            localStorage.setItem('todos', JSON.stringify(filteredTodos));

            setTodos(getTodos());
        }
    };

    const editForm = (item: ToDo) => {
        setEditedItem(item);
    };

    const cancelEditForm = () => {
        setEditedItem(null);
        setTodos(getTodos());
    };

    return <ToDoListContainer
        todos={todos}
        showForm={showForm}
        editForm={editForm}
        editedItem={editedItem}
        displayFrom={displayFrom}
        cancelEditForm={cancelEditForm}
        deleteToDoItem={deleteToDoItem}
    />;
};

export default ToDoList;