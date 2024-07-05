import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FeatureCard from './components/FeatureCard';
import RegionCard from './components/RegionCard';

import ImageFeatureMaterials from "./resources/feature-materials.png";
import ImageFeatureTime from "./resources/feature-time.png";
import ImageFeaturePlayers from "./resources/feature-players.png";
import ImageFeatureDice from "./resources/feature-dice.png";

import ImageRegionAlzim from "./resources/region-alzim.png";
import ImageRegionMantora from "./resources/region-mantora.png";
import ImageRegionInkulur from "./resources/region-inkulur.png";
import ImageRegionValeria from "./resources/region-valeria.png";
import ImageRegionJatagar from "./resources/region-jatagar.png";
import ImageRegionOlma from "./resources/region-olma.png";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<main className="main">
				<div className="section">
					<div className="container">
						<h1 className="text--title mb-4 text--center">Step into a world of wonder...</h1>
						<img className="img" src={require('./resources/feature-roleplay.png')} />
					</div>
				</div>
				<div className="section">
					<div className="container">
						<div className="grid-2">
							<div className="text-wrapper">
								<h1 className="mb-1">Join the Order of Eventide</h1>
								<p className="mb-1">Order of Eventide is a pen-and-paper RPG where you create dynamic heroes, fight through dungeons full of unique enemies, find powerful equipment, and rise to vanquish the Source of Evil.</p>
								<a className="button">Buy Now</a>
							</div>
							<img className="img" src={require('./resources/flavor-dungeoneer.png')} />
						</div>
					</div>
				</div>
				<div className="section">
					<div className="container">
						<div className="grid-4">
							<FeatureCard
								src={ImageFeatureMaterials}
								title="No game master required"
								desc="Everyone involved can enjoy playing the game, rather than keeping track of stats."
							></FeatureCard>
							<FeatureCard
								src={ImageFeatureTime}
								title="45-90min play sessions"
								desc="While each dungeon is unique, you won’t need to block off an entire day to play."
							></FeatureCard>
							<FeatureCard
								src={ImageFeaturePlayers}
								title="1-4 Players"
								desc="Experienced players can control multiple characters, so Order of Eventide can be enjoyed solo or with up to 3 friends."
							></FeatureCard>
							<FeatureCard
								src={ImageFeatureDice}
								title="Two 6-sided dice"
								desc="Play the entire game with just two d6 dice. A set of role-playing dice can be helpful, but they’re not required."
							></FeatureCard>
						</div>
					</div>
				</div>
				<div className="section">
					<div className="container">
						<h1 className="text--center mb-2">
							Regions
						</h1>
						<p className="mb-4">
							Heroes will travel through 6 regions, each with their own unique layouts, enemies, and loot.
						</p>
						<div className="grid-3">
							<RegionCard
								src={ImageRegionAlzim}
								title="Alzim"
							></RegionCard>
							<RegionCard
								src={ImageRegionMantora}
								title="Mantora"
							></RegionCard>
							<RegionCard
								src={ImageRegionInkulur}
								title="Inkulur"
							></RegionCard>
							<RegionCard
								src={ImageRegionValeria}
								title="Valeria"
							></RegionCard>
							<RegionCard
								src={ImageRegionJatagar}
								title="Jatagar"
							></RegionCard>
							<RegionCard
								src={ImageRegionOlma}
								title="Olma"
							></RegionCard>
						</div>
					</div>
				</div>
				<div className="section">
					<div className="container">

					</div>
				</div>
				<div className="section">
					<div className="container">

					</div>
				</div>
			</main>
			<Footer></Footer>
		</div>
	);
}

export default App;
