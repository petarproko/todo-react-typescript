import React from 'react';
import ToDoFormComponent from '../components/toDoFormComponent';
import { ToDo } from '../types/todoType';
import { ReactComponent as SvgIcon } from './../assets/icons/checklist-icon.svg';
import ListItemContainer from './listItemContainer';

type Props = {
    todos: [ToDo]
    showForm: boolean
    editedItem: ToDo | null
    cancelEditForm(): void
    editForm(item: ToDo): void
    deleteToDoItem(item: ToDo): void
    displayFrom(event?: React.MouseEvent<HTMLButtonElement>): void
}

const ToDoListContainer: React.FC<Props> = ({
    todos,
    showForm,
    editForm,
    editedItem,
    displayFrom,
    deleteToDoItem,
    cancelEditForm,
}) => {
    return (
        <div className='todo-list-container'>
            <div className='title-icon'>
                <SvgIcon />
            </div>
            <div>
                <h2>To do list</h2>
                <button onClick={displayFrom}>{showForm ? 'Hide' : 'Show'} create Form</button>
            </div>
            {showForm && <ToDoFormComponent displayFrom={displayFrom} />}
            <div className="list">
                <ul>
                    {todos.length > 0 ?
                        todos.map((todo: ToDo) => {
                            return (
                                <ListItemContainer
                                    item={todo}
                                    key={todo.id}
                                    editForm={editForm}
                                    deleteToDoItem={deleteToDoItem}
                                    cancelEditForm={cancelEditForm}
                                    editedItem={editedItem && editedItem.id === todo.id ? editedItem : null}
                                />
                            );
                        })
                        : null
                    }
                </ul>
            </div>
        </div>
    );
};

export default ToDoListContainer;