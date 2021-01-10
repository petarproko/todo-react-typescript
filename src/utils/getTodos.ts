import { ToDo } from '../types/todoType';

const getTodos = (): [ToDo] => {
    let savedTodos = localStorage.getItem('todos');
    let todos = [];

    if (savedTodos !== null) {
        todos = JSON.parse(savedTodos);
    }

    return todos;
};

export default getTodos;