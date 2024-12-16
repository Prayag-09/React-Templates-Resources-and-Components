import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from './hooks/useTheme';
import './App.css';


import Navbar from './components/navbar';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';

const App = () => {
	return (
		<ThemeProvider>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
};

export default App;
