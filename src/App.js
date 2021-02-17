import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
function App() {
	return (
		<div className='App container'>
			<Header />
			<About />
			<hr className='bg-light' />
			<Skills />
			<hr className='bg-light' />
			<Projects />
			<hr className='bg-light' />
			<Contact />
		</div>
	)
}

export default App
