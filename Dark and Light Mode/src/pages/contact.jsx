import { useTheme } from '../hooks/useTheme';

const Contact = () => {
	const { theme } = useTheme();

	return (
		<div className={`page ${theme}`}>
			<h1>Contact</h1>
			<p>Conact us here!</p>
		</div>
	);
};

export default Contact;
