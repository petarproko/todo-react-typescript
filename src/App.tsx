import React, { useEffect, useState } from 'react';
import ToDoList from './components/toDoListComponent';
import './styles/main.scss';

type Props = {
    rootElement: HTMLElement | null
}

const App: React.FC<Props> = ({ rootElement }) => {
    const [theme, setTheme] = useState<null | string>(localStorage.getItem('theme'))

    useEffect(() => {
        updateTheme(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updateTheme = (onPageLoad?: boolean) => {
        if (!rootElement) {
            return;
        }

        let tempTheme = theme === 'dark' ? 'light' : 'dark';

        if (onPageLoad) {
            tempTheme = theme || 'dark'; 
        }

        rootElement.className = tempTheme;
        localStorage.setItem('theme', tempTheme);

        setTheme(tempTheme);
    };

    return <>
        <div className="dark-light-mode-check">
            <input type="checkbox" id="switch" onChange={() => updateTheme()} checked={theme && theme === 'dark' ? false : true} />
            <label htmlFor="switch" />
        </div>
        <ToDoList />
    </>
}

export default App;
