import React, { useState } from 'react';
import ToDoFormContaner from '../containers/toDoFormContainer';
import { ToDo } from '../types/todoType';
import getTodos from '../utils/getTodos';
import { ValidForm } from './../types/formTypes';

type Props = {
    todo?: ToDo
    cancelEditForm?: () => void
    displayFrom?: (event?: React.MouseEvent<HTMLButtonElement>) => void
}

const ToDoFormComponent: React.FC<Props> = ({
    todo,
    displayFrom,
    cancelEditForm,
}) => {
    const initialFormValues: ToDo = todo || {
        id: 0,
        todoItem: ''
    };

    const initialValidFormState: ValidForm = {
        todoItem: {
            valid: true,
            message: ''
        }
    };

    const [form, setForm] = useState<ToDo>(initialFormValues);
    const [validForm, setValidForm] = useState<ValidForm>(initialValidFormState);

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validateForm(form.todoItem)) {
            return;
        }

        let todos = getTodos();

        if (!todo) {
            todos.push({
                todoItem: form.todoItem,
                id: generateUniqueId(todos),
            });
        } else {
            const savedToDoIndex = todos.findIndex((savedTodo: ToDo) => savedTodo.id === todo.id);

            if (savedToDoIndex !== -1) {
                todos[savedToDoIndex] = form;
            }
        }

        localStorage.setItem('todos', JSON.stringify(todos));

        setForm(initialFormValues);

        displayFrom && displayFrom();

        cancelEditForm && cancelEditForm();
    };

    const generateUniqueId = (todos: [ToDo]): number => {
        let generatedId = Math.floor(Math.random() * 99999);
        const idExists = todos.findIndex((value: ToDo) => value.id === generatedId);

        if (idExists === -1) {
            return generatedId;
        }

        return generateUniqueId(todos);
    };

    const validateFormField = (value: string) => {
        const field = {
            valid: value.length !== 0,
            message: 'Field is mandatory'
        }

        return field;
    };

    const validateForm = (value: string): boolean => {
        const todoItemValid = validateFormField(value);

        setValidForm({
            todoItem: {
                ...todoItemValid
            }
        });

        return todoItemValid.valid;
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        validateForm(value);

        setForm({
            ...form,
            todoItem: value
        });
    };

    return <ToDoFormContaner
        form={form}
        todo={todo}
        onChange={onChange}
        validForm={validForm}
        submitForm={submitForm}
        cancelEditForm={cancelEditForm}
    />;
}

export default ToDoFormComponent;
