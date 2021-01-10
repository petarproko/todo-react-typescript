import React from 'react';
import { ValidForm } from '../types/formTypes';
import { ToDo } from '../types/todoType';

type Props = {
    value: string
    validForm: ValidForm
    todo?: ToDo
    onChange(event: React.FormEvent<HTMLInputElement>): void
};

const BaseInput: React.FC<Props> = ({
    todo,
    value,
    onChange,
    validForm,
}) => {
    return <div style={{ height: !todo ? '60px' : 'unset' }}>
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Enter item you need to do"
            className={validForm.todoItem.valid ? '' : 'invalid-field'}
        />
        {!validForm.todoItem.valid &&
            <p>{validForm.todoItem.message}</p>
        }
    </div>;
};

export default BaseInput;