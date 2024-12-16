import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const navbar = () => {
	const { theme, toggleTheme } = useTheme();
	function toggleMode() {
		toggleTheme();
	}
	return (
		<div>
			<nav>
				<div className={`navbar ${theme}`}>
					<Link to='/'> Home</Link>
					<Link to='/about'> About</Link>
					<Link to='/contact'> Contact</Link>
				</div>

				<div className='mode-switch'>
					<label>
						<input
							type='checkbox'
							onChange={toggleMode}
							checked={theme === 'dark'}
						/>
						<span className='slider round' />

						{/* <span className='slider round'>
							<span className='icon sun'>☀️</span>
							<span className='icon moon'>🌙</span>
						</span> */}
					</label>
				</div>
			</nav>
		</div>
	);
};

export default navbar;
