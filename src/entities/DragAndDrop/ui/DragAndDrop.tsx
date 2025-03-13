import  { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { classNames } from '@/helpers/classNames/classNames';
import cls from './DragAndDrop.module.scss';

interface DragAndDropProps {
    className?: string;
}

// Тип для задачи
type Todo = {
    id: number;
    text: string;
    column: string;
};

// Компонент отдельной задачи
const TodoItem = ({ todo }: { todo: Todo; moveTodo: (id: number, column: string) => void }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'TODO',
        item: { id: todo.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            className={classNames(cls.todoItem, { [cls.dragging]: isDragging })}
        >
            {todo.text}
        </div>
    );
};

// Компонент колонки
const Column = ({ title, todos, moveTodo }: { title: string; todos: Todo[]; moveTodo: (id: number, column: string) => void }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'TODO',
        drop: (item: { id: number }) => moveTodo(item.id, title),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(), // Явно собираем состояние isOver
        }),
    }));

    return (
        <div ref={drop} className={classNames(cls.column, { [cls.hovered]: isOver }, [])}>
            <h2 className={cls.columnTitle}>{title}</h2>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} moveTodo={moveTodo} />
            ))}
        </div>
    );
};

export const DragAndDrop = (props: DragAndDropProps) => {
    const { className = '' } = props;

    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: 'Задача 1', column: 'К делам' },
        { id: 2, text: 'Задача 2', column: 'К делам' },
        { id: 3, text: 'Задача 3', column: 'Выполнено' },
    ]);

    const moveTodo = (id: number, newColumn: string) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, column: newColumn } : todo
            )
        );
    };

    const todoColumn = todos.filter((todo) => todo.column === 'К делам');
    const doneColumn = todos.filter((todo) => todo.column === 'Выполнено');

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={classNames(cls.DragAndDrop, {}, [className])}>
                <Column title="К делам" todos={todoColumn} moveTodo={moveTodo} />
                <Column title="Выполнено" todos={doneColumn} moveTodo={moveTodo} />
            </div>
        </DndProvider>
    );
};
