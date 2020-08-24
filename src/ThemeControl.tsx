import React from 'react';

interface IThemeControl {
    theme: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const ThemeControl = ({ theme, onChange }: IThemeControl) => (
    <div>
        <h3>What theme would you like to display?</h3>
        <div>
            <select onChange={onChange} name='theme' value={theme}>
                <option value='light'>Light</option>
                <option value='dark'>Dark</option>
            </select>
        </div>
    </div>
);

export default ThemeControl;
