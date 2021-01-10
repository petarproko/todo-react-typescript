import React from 'react';
import { Form, ValidForm } from '../types/formTypes';
import { ToDo } from '../types/todoType';
import BaseInput from '../utils/baseInput';

type Props = {
    form: Form
    todo?: ToDo
    validForm: ValidForm
    cancelEditForm?: () => void
    submitForm(event: React.FormEvent<HTMLFormElement>): void
    onChange(event: React.ChangeEvent<HTMLInputElement>): void
};

const ToDoFormContaner: React.FC<Props> = ({
    form,
    todo,
    onChange,
    validForm,
    submitForm,
    cancelEditForm
}) => {
    return <form onSubmit={submitForm} noValidate={true}>
        <BaseInput
            todo={todo}
            onChange={onChange}
            validForm={validForm}
            value={form.todoItem}
        />

        <button>Submit</button>

        {todo && <button onClick={cancelEditForm}>Cancel</button>}
    </form>;
}

export default ToDoFormContaner;
