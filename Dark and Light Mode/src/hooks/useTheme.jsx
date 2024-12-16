import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
	const [isDark, setDark] = useState(false);

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme) {
			setDark(storedTheme === 'dark');
		}
	}, []);

	useEffect(() => {
		const theme = isDark ? 'dark' : 'light';
		localStorage.setItem('theme', theme);
		document.documentElement.setAttribute('data-theme', theme);
	}, [isDark]);

	const toggleTheme = () => setDark((prev) => !prev);

	return (
		<ThemeContext.Provider
			value={{ theme: isDark ? 'dark' : 'light', isDark, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
