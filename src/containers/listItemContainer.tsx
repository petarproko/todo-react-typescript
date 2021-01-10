import React from 'react';
import ToDoFormComponent from '../components/toDoFormComponent';
import { ToDo } from '../types/todoType';

type Props = {
    item: ToDo,
    editedItem: ToDo | null,
    editForm(item: ToDo):void;
    cancelEditForm(): void;
    deleteToDoItem(item: ToDo): void;
};

const ListItemContainer: React.FC<Props> = ({
    item,
    editForm,
    editedItem,
    cancelEditForm,
    deleteToDoItem
}) => {
    return (
        <li key={item.id}>
            {editedItem ?
                <ToDoFormComponent todo={editedItem} cancelEditForm={cancelEditForm} /> :
                <>
                    <span>{item.todoItem}</span>
                    <span>
                        <button onClick={() => editForm(item)}>Edit</button>
                        <button
                            className="danger"
                            onClick={() => deleteToDoItem(item)}
                        >
                            Delete
                        </button>
                    </span>
                </>
            }
        </li>
    );
}

export default ListItemContainer;
