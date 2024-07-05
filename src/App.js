import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<Header></Header>
			<main className="main">
				<div className="section">
					<div className="container">
						<h1 className="text--title">Step into a world of wonder...</h1>
						<img className="img" src="/resources/feature-roleplay.png" />
					</div>
				</div>
			</main>
			<Footer></Footer>
		</div>
	);
}

export default App;
