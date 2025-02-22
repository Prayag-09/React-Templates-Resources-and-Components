import { useTheme } from '../hooks/useTheme';

const About = () => {
	const { theme } = useTheme();

	return (
		<div className={`page ${theme}`}>
			<h1>About Page</h1>
			<p>Learn more about us here!</p>
		</div>
	);
};

export default About;
