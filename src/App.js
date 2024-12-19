import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import FeatureCard from './components/FeatureCard';
import RegionCard from './components/RegionCard';
import GuildCard from './components/GuildCard';
import RaceCard from './components/RaceCard';
import ClassCard from './components/ClassCard';
import ResourceCard from './components/ResourceCard';
import VideoCard from './components/VideoCard';
import BuyTheBook from './components/BuyTheBook';
import Slider from './components/Slider';

import ImageFeatureMaterials from "./resources/feature-materials@2x.png";
import ImageFeatureTime from "./resources/feature-time@2x.png";
import ImageFeatureSwords from "./resources/feature-swords@2x.png";
import ImageFeatureDice from "./resources/feature-dice@2x.png";

import ImageRegionSundessa from "./resources/region-sundessa@2x.png";
import ImageRegionMantora from "./resources/region-mantora@2x.png";
import ImageRegionTorgul from "./resources/region-torgul@2x.png";
import ImageRegionRidian from "./resources/region-ridian@2x.png";
import ImageRegionJakkar from "./resources/region-jakkar@2x.png";
import ImageRegionOlma from "./resources/region-olma@2x.png";

import ImageGuildFighter from "./resources/guild-fighter@2x.png";
import ImageGuildHunter from "./resources/guild-hunter@2x.png";
import ImageGuildMage from "./resources/guild-mage@2x.png";
import ImageGuildMerchant from "./resources/guild-merchant@2x.png";

import ImageRaceHuman from "./resources/race-human@2x.png";
import ImageRaceElf from "./resources/race-elf@2x.png";
import ImageRaceDwarf from "./resources/race-dwarf@2x.png";
import ImageRaceHalfling from "./resources/race-halfling@2x.png";
import ImageRaceHalfOgre from "./resources/race-half-ogre@2x.png";
import ImageRaceCentaur from "./resources/race-centaur@2x.png";
import ImageRaceGnome from "./resources/race-gnome@2x.png";
import ImageRaceViera from "./resources/race-viera@2x.png";
import ImageRaceHalfDrake from "./resources/race-half-drake@2x.png";
import ImageRaceFaun from "./resources/race-faun@2x.png";
import ImageRaceMemzymzi from "./resources/race-memzymzi@2x.png";
import ImageRaceRockskin from "./resources/race-rockskin@2x.png";
import ImageRaceOutlander from "./resources/race-outlander@2x.png";
import ImageRaceMerfolk from "./resources/race-merfolk@2x.png";
import ImageRaceTalpoc from "./resources/race-talpoc@2x.png";
import ImageRaceApex from "./resources/race-apex@2x.png";
import ImageRaceEmpyrean from "./resources/race-empyrean@2x.png";
import ImageRaceKhenra from "./resources/race-khenra@2x.png";
import ImageRaceDrydd from "./resources/race-drydd@2x.png";

import ImageClassAdventurer from "./resources/class-adventurer@2x.png";
import ImageClassFighter from "./resources/class-fighter@2x.png";
import ImageClassBard from "./resources/class-bard@2x.png";
import ImageClassBerserker from "./resources/class-berserker@2x.png";
import ImageClassCleric from "./resources/class-cleric@2x.png";
import ImageClassDruid from "./resources/class-druid@2x.png";
import ImageClassDuelist from "./resources/class-duelist@2x.png";
import ImageClassGuardian from "./resources/class-guardian@2x.png";
import ImageClassHunter from "./resources/class-hunter@2x.png";
import ImageClassSummoner from "./resources/class-summoner@2x.png";
import ImageClassInquisitor from "./resources/class-inquisitor@2x.png";
import ImageClassJuggler from "./resources/class-juggler@2x.png";
import ImageClassMage from "./resources/class-mage@2x.png";
import ImageClassMonk from "./resources/class-monk@2x.png";
import ImageClassReaper from "./resources/class-reaper@2x.png";
import ImageClassRogue from "./resources/class-rogue@2x.png";
import ImageClassTrickster from "./resources/class-trickster@2x.png";
import ImageClassMarksman from "./resources/class-marksman@2x.png";
import ImageClassWarlock from "./resources/class-warlock@2x.png";

import ImageResourceComingSoon from "./resources/coming-soon.png";

import ImageVideoHowToHero from "./resources/video-thumb-how-to-hero.png"
import ImageVideoHowToKarasVale from "./resources/video-thumb-how-to-karas-vale.png"
import ImageVideoHowToGuild from "./resources/video-thumb-how-to-guild.png"
import ImageVideoHowToDungeoneer from "./resources/video-thumb-how-to-dungeoneer.png"
import ImageVideoHowToCombat from "./resources/video-thumb-how-to-combat.png"
import ImageVideoHowToRoleplayRule from "./resources/video-thumb-how-to-roleplay-rule.png"


import ImageResourceCombatSheet from "./resources/blank-sheets/combat-sheet-preview.png";
import ImageResourceDungeonSheet from "./resources/blank-sheets/dungeon-sheet-preview.png";
import ImageResourceHeroSheet1Up from "./resources/blank-sheets/hero-sheet-1up-preview.png";
import ImageResourceHeroSheet2Up from "./resources/blank-sheets/hero-sheet-2up-preview.png";

import ResourceCombatSheet from "./resources/blank-sheets/order-of-eventide-combat-sheet.pdf";
import ResourceDungeonSheet from "./resources/blank-sheets/order-of-eventide-dungeon-sheet.pdf";
import ResourceHeroSheet1Up from "./resources/blank-sheets/order-of-eventide-hero-sheet-1up.pdf";
import ResourceHeroSheet2Up from "./resources/blank-sheets/order-of-eventide-hero-sheet-2up.pdf";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<main className="main">
				<div id="home" className="section">
					<div className="container">
						<h1 className="text--title mb-4 text--center">Night Falls on Valeria</h1>
						<img className="img" src={require('./resources/flavor-roleplay@2x.png')} />
					</div>
				</div>
				<div id="join" className="section">
					<div className="container">
						<div className="grid-2">
							<div className="text-wrapper max-w-md">
								<h1 className="mb-1-5">Join the Order of Eventide</h1>
								<p className="mb-1-5">
									<em>A great evil has spread across the continent of Valeria, spawning vicious monsters and terrorizing the innocent.</em>
								</p>
								<p className="mb-1-5">
									<em>Your quest, with the help of Ordermaster Tauriel, is to venture into Valeria's six regions and defeat the Master Behemoths found there. Doing so will lessen the hold darkness has over this land.</em>
								</p>
								<p className="mb-1-5">
									<em>If you are successful, you may be able to draw out the Source of Evil and end the nightmare that plagues this land. May the light be with you, heroes.</em>
								</p>
								<p className="mb-1-5">
									Order of Eventide is a pen-and-paper RPG where you create dynamic heroes, fight through dungeons full of unique enemies, find powerful equipment, and rise to vanquish the Source of Evil.
								</p>
								<a className="button" href="https://a.co/d/5Go3uvh">Buy Now</a>
							</div>
							<img className="img sm-hidden" src={require('./resources/flavor-join@2x.png')} />
						</div>
					</div>
				</div>
				<div id="features" className="section">
					<div className="container">
						<div className="grid-4">
							<FeatureCard
								src={ImageFeatureSwords}
								title="Limitless Possibilities"
								desc="Create unique heroes from 19 Races and 19 Classes. Join guilds and explore randomly generated dungeons across 6 diverse regions."
							></FeatureCard>
							<FeatureCard
								src={ImageFeatureDice}
								title="Play Your Way"
								desc="Discover powerful synergies in a simple yet deep combat system with ample opportunities to roleplay your character."
							></FeatureCard>
							<FeatureCard
								src={ImageFeatureMaterials}
								title="Easy Setup"
								desc="Play the entire game with just this book, a pencil, and two 6-sided dice. No game master required!"
							></FeatureCard>
							<FeatureCard
								src={ImageFeatureTime}
								title="1-2 hour play sessions"
								desc="While each dungeon is unique, you won't need to block off an entire day to play."
							></FeatureCard>
						</div>
					</div>
				</div>
				<div id="regions" className="section">
					<div className="container">
						<h1 className="text--center mb-1-5">
							Regions
						</h1>
						<p className="max-w-md mb-4">
							Heroes will travel through 6 regions, each with their own unique layouts, enemies, and loot.
						</p>
						<div className="grid-3">
							<RegionCard
								src={ImageRegionSundessa}
								title="Sundessa"
							></RegionCard>
							<RegionCard
								src={ImageRegionMantora}
								title="Mantora"
							></RegionCard>
							<RegionCard
								src={ImageRegionTorgul}
								title="Torgul"
							></RegionCard>
							<RegionCard
								src={ImageRegionRidian}
								title="Ridian"
							></RegionCard>
							<RegionCard
								src={ImageRegionJakkar}
								title="Jakkar"
							></RegionCard>
							<RegionCard
								src={ImageRegionOlma}
								title="Olma"
							></RegionCard>
						</div>
					</div>
				</div>
				<div id="" className="section">
					<BuyTheBook></BuyTheBook>
				</div>
				<div id="systems" className="section">
					<div className="container">
						<div className="grid-2">
							<img className="img" src={require('./resources/surge-blunder.png')} />
							<div className="text-wrapper max-w-md">
								<h1 className="mb-1-5">Surge &amp; Blunder System</h1>
								<p className="mb-3">
									The Surge & Blunder System is unique to Order of Eventide. Since the game only uses two 6-sided dice, Surges and Blunders add much more depth to what the dice can do by adding additional benefits to rolling a 6, and negative outcomes to rolling a 1.
								</p>
								<h2 className="mb-1">Surges</h2>
								<p className="mb-1">
									When a player rolls dice during a hero's attack, rolling a 6 is called a Surge. Heroes can either use a Class Ability in the moment, or bank the Surge as a Surge Charge.
								</p>
								<p className="mb-3">
									Using a Class Ability can deal extra damage, heal, steal, inflict debuffs, or any other number of effects. Banking the Surge Charge can be used later to activate powerful Racial Abilities to turn the tide of battle.
								</p>
								<h2 className="mb-1">Blunders</h2>
								<p className="mb-3">
									When a 1 is rolled during a Hero's attack, this is called a Blunder. Blunders activate an enemy's special ability that affects the heroes in a variety of ways, including dealing damage to other heroes, gaining buffs, inflicting debuffs, summoning more enemies, and more.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div id="guilds" className="section">
					<div className="container">
						<h1 className="text--center mb-1-5">
							Guilds
						</h1>
						<p className="max-w-md mb-1">
							There are 4 guilds that offer unique benefits with Guild Perks, and will recognize incredible feats with Guild Titles.
						</p>
						<p className="max-w-md mb-4">
							Each guild has their own set of values and operating methods. Guild Titles are bestowed on guildmembers who have achieved outstanding feats throughout their adventures. You don't need to be a part of the guild when you perform the feat, but you can only use the title while you're a member of that guild.
						</p>
						<div className="grid-4">
							<GuildCard
								src={ImageGuildFighter}
								title="Fighter's Guild"
								desc="These warriors dedicate their time to helping fighters push their bodies beyond normal limits. Their unusual equipment is gathered from all around the continent. The results are simultaneously unbelievable and undeniable."
							></GuildCard>
							<GuildCard
								src={ImageGuildHunter}
								title="Hunter's Guild"
								desc="These expert hunters train animal companions to gain an edge. These exotic creatures have honed their instincts to help a guild member survive and thrive in the dangerous dungeon depths."
							></GuildCard>
							<GuildCard
								src={ImageGuildMage}
								title="Mage's Guild"
								desc="These studious scholars have likely forgotten more about the Arcane Arts than you'll learn in a lifetime. They perform powerful ancient rituals on Guildmembers, which furthers their connection to the Arcane power.
								"
							></GuildCard>
							<GuildCard
								src={ImageGuildMerchant}
								title="Merchant's Guild"
								desc="Travelers and purveyors of fine wares, the Merchant's Guild is always on the lookout for strange and powerful artifacts. They will loan guild members equipment to help in various ways throughout their journey into the unknown."
							></GuildCard>
						</div>
					</div>
				</div>
				<div id="" className="section">
					<BuyTheBook></BuyTheBook>
				</div>
				<div id="enemies" className="section">
					<div className="container">
						<div className="grid-2">
							<img className="img" src={require('./resources/flavor-enemy.png')} />
							<div className="text-wrapper max-w-md">
								<h1 className="mb-1-5">Enemies</h1>
								<p className="mb-3">
									There are 3 types of enemies that roam the dungeons in Order of Eventide: Horde, Forsaken, and Behemoths. Each are dangerous in their own way.
								</p>
								<h3 className="mb-1">Horde</h3>
								<p className="mb-2">
									Horde are swarming undead creatures that attack by ambushing the party. An individual horde enemy may be weak, but a group can quickly overwhelm a party. An ancient continental war is said to have created these mutated creatures, which may be why Heroes find similar Horde in each region.
								</p>
								<h3 className="mb-1">Forsaken</h3>
								<p className="mb-2">
									Forsaken are the most common and diverse enemies. They attack in small groups with a balance of strength and numbers. Each region's Forsaken have absorbed the arcane energy unique to that region, so you will see different Forsaken in each region you travel to.
								</p>
								<h3 className="mb-1">Behemoths</h3>
								<p className="mb-2">
									Behemoths are huge monstrosities that have absorbed massive amounts of arcane energy to become tougher and stronger than a normal Forsaken. Behemoths travel alone, but can be extremely challenging if your party is unprepared.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div id="races" className="section">
					<div className="container">
						<h1 className="text--center mb-1-5">
							Races
						</h1>
						<p className="max-w-md mb-4">
							There are 19 races a hero may be born into, each with their own Racial Ability. A hero's race also determines their starting stats, such as health, attack, and defense.
						</p>
						<Slider>
							<RaceCard
								src={ImageRaceHuman}
								title="Human"
								desc="The most populous and varied of the races, humans are extremely adaptable. Their storied history is checkered by complicated relations with other races."
							></RaceCard>
							<RaceCard
								src={ImageRaceElf}
								title="Elf"
								desc="Elves are slender and dexterous in comparison to humans. They hold life as sacred and have little patience for those who upset the balance of nature. Their culture has mastered mystical medical practices that grant them unusually long life."
							></RaceCard>
							<RaceCard
								src={ImageRaceDwarf}
								title="Dwarf"
								desc="These short and sturdy mountain-dwellers have fantastic facial hair. Spending long hours in dank caverns have given them a hardy constitution. Their knowledge of gemstones is unparalleled"
							></RaceCard>
							<RaceCard
								src={ImageRaceHalfling}
								title="Halfling"
								desc="These curious little people have a fondness for small valuables, pleasant conversations, and food. Standing at about half the height of a typical human, Halflings love helping others."
							></RaceCard>
							<RaceCard
								src={ImageRaceHalfOgre}
								title="Half-Ogre"
								desc="Hulking humanoids that are rippling with muscle and excel at hand-to-hand combat. The larger the brawl, the more their rage is fueled. Their pale skin is often stained red with the blood of their enemies."
							></RaceCard>
							<RaceCard
								src={ImageRaceCentaur}
								title="Centaur"
								desc="Fierce yet loyal nomads that employ a strike-first tactic. Because of their half-human, half-horse anatomy, they are skilled in finding weaknesses in both men and monsters."
							></RaceCard>
							<RaceCard
								src={ImageRaceGnome}
								title="Gnome"
								desc="Small and mischievous, gnomes are well acquainted with magic and the elements. They are very sore about their size, so only mention it to them if you want to take a beating."
							></RaceCard>
							<RaceCard
								src={ImageRaceFaun}
								title="Faun"
								desc="While their goat-like legs allow them to easily traverse difficult terrain, they often hide their hooves with large boots or shoes. They are cunning and often find a sneaky way to get what they want."
							></RaceCard>
							<RaceCard
								src={ImageRaceHalfDrake}
								title="Half-Drake"
								desc="These dragon-kin are born by mixing pure bloodlines. They are sharp physically and mentally, and surprise their foes with attacks from all sides."
							></RaceCard>
							<RaceCard
								src={ImageRaceMemzymzi}
								title="Tiger-kin"
								desc="Agile tiger-folk with outstanding agility, and a fear of fire to match it. Tiger-kin are extremely athletic and rarely tire. When on the prowl, it's nearly impossible to detect them."
							></RaceCard>
							<RaceCard
								src={ImageRaceTalpoc}
								title="Talpoc"
								desc="These cultured lizardfolk are often reserved and cautious. However, they have an insatiable appetite for exotic histories, often dedicating years of research to ancient cultures and rituals."
							></RaceCard>
							<RaceCard
								src={ImageRaceRockskin}
								title="Rockskin"
								desc="Rockskins have been long-feared for their stony skin and hot-headed temperament. Their heat also runs deep &mdash; their cores are nearly molten. When Rockskins die, their cores go cold and they turn completely stiff."
							></RaceCard>
							<RaceCard
								src={ImageRaceOutlander}
								title="Outlander"
								desc="As their name implies, the origins of Outlanders remain unknown. These humanoids possess a special connection with Arcane forces, granting them the ability to learn any number of languages. Even so, they prefer to stay silent behind their masks."
							></RaceCard>
							<RaceCard
								src={ImageRaceApex}
								title="Apex"
								desc="An Apex's furry body is attuned to all types of physical training. What their societies lack in technological advancements, they make up for in pure athletic prowess. They are strongly empathic, yet speak in very simple sentences."
							></RaceCard>
							<RaceCard
								src={ImageRaceMerfolk}
								title="Merfolk"
								desc="These scaly humanoids are cold-blooded and feel at home in any body of water. Although they love to throw grand feasts, they can be awkward around other races."
							></RaceCard>
							<RaceCard
								src={ImageRaceViera}
								title="Sylvera"
								desc="Sylvera are slender and beautiful. They prefer to fight from a distance, rather than dirtying their hands with enemies up close. They take great pride in being Sylvera, and sometimes look down on others."
							></RaceCard>
							<RaceCard
								src={ImageRaceEmpyrean}
								title="Empyrean"
								desc="Empyrean boys and girls are granted powerful abilities by bathing in a milky liquid as part of their tribal coming-of-age ritual."
							></RaceCard>
							<RaceCard
								src={ImageRaceKhenra}
								title="Khenra"
								desc="Their sleek form and angular ears make them expert hunters. They love having their hair petted, and will often spend hours grooming each night with their mate."
							></RaceCard>
							<RaceCard
								src={ImageRaceDrydd}
								title="Drydd"
								desc="Drydd love to spend time meditating and resting their branches. Their powerful psionic abilities allow them to refresh heroes as well as cause havoc in the minds of foes."
							></RaceCard>
						</Slider>
					</div>
				</div>
				<div id="classes" className="section">
					<div className="container">
						<h1 className="text--center mb-1-5">
							Classes
						</h1>
						<p className="max-w-md mb-4">
							A hero's class determines their fighting style and role in the party. Each class has an active Class Ability as well as a Class Passive. Heroes start with a Tier 1 class, and can unlock more advanced classes over time.
						</p>
						<Slider>
							<ClassCard
								src={ImageClassFighter}
								title="Fighter"
								tier="1"
								desc="A swarthy brawler who pummels enemies face-to-face."
							/>
							<ClassCard
								src={ImageClassHunter}
								title="Hunter"
								tier="1"
								desc="An eagle-eyed ranger who excels at fighting multiple enemies at range."
							/>
							<ClassCard
								src={ImageClassMage}
								title="Mage"
								tier="1"
								desc="A versatile scholar who utilizes arcane magic for both offense and defense."
							/>
							<ClassCard
								src={ImageClassAdventurer}
								title="Adventurer"
								tier="1"
								desc="A well-traveled wanderer who can take advantage of any situation."
							/>
							<ClassCard
								src={ImageClassBerserker}
								title="Berserker"
								tier="2"
								desc="A wild warrior who forgoes defense to maximize destructive power."
							/>
							<ClassCard
								src={ImageClassGuardian}
								title="Guardian"
								tier="2"
								desc="A weathered veteran and expert in all forms of defense."
							/>
							<ClassCard
								src={ImageClassMarksman}
								title="Marksman"
								tier="2"
								desc="An expert shot with a keen eye for weak points."
							/>
							<ClassCard
								src={ImageClassRogue}
								title="Rogue"
								tier="2"
								desc="A sly scoundrel who specializes in close-quarters combat."
							/>
							<ClassCard
								src={ImageClassDruid}
								title="Druid"
								tier="2"
								desc="A seer who is at one with the arcane power present in nature."
							/>
							<ClassCard
								src={ImageClassCleric}
								title="Cleric"
								tier="2"
								desc="A servant of the Divine, called to protect and support other heroes."
							/>
							<ClassCard
								src={ImageClassInquisitor}
								title="Paladin"
								tier="3"
								desc="A divinely-empowered warrior who wields sword and light in defense of their oath."
							/>
							<ClassCard
								src={ImageClassMonk}
								title="Monk"
								tier="3"
								desc="A pious martial artist who channels arcane power for both speed and defense."
							/>
							<ClassCard
								src={ImageClassReaper}
								title="Reaper"
								tier="3"
								desc="An executioner who bargains with death itself."
							/>
							<ClassCard
								src={ImageClassDuelist}
								title="Duelist"
								tier="3"
								desc="A seasoned combatant skilled at evening the odds."
							/>
							<ClassCard
								src={ImageClassTrickster}
								title="Trickster"
								tier="3"
								desc="A quick-witted tactician with a masterful sleight of hand."
							/>
							<ClassCard
								src={ImageClassJuggler}
								title="Juggler"
								tier="3"
								desc="A dexterous cut-throat who lives on the edge of danger."
							/>
							<ClassCard
								src={ImageClassWarlock}
								title="Runeweaver"
								tier="3"
								desc="A sagacious arcanist who controls enemies."
							/>
							<ClassCard
								src={ImageClassSummoner}
								title="Summoner"
								tier="3"
								desc="A guardian of the passages between the physical and spiritual realms."
							/>
							<ClassCard
								src={ImageClassBard}
								title="Bard"
								tier="3"
								desc="A musician to the Divine who lifts others up, allowing them to push beyond their limits."
							/>
						</Slider>
					</div>
				</div>
				<div id="artwork" className="section">
					<div className="container">
						<div className="grid-2">
							<img className="img" src={require('./resources/flavor-art@2x.png')} />
							<div className="text-wrapper max-w-md">
								<h2 className="mb-1-5">Inspired by Alphonse Mucha's iconic Art Nouveau style</h2>
								<p className="mb-3">
									The artwork for Order of Eventide was generated using Midjourney AI, then edited manually for consistency and to reduce artifacts.
								</p>
								<h3 className="mb-1">Make your own artwork</h3>
								<p className="mb-1">
									You can generate your own images of heroes, enemies, and more with <a className="text-link" href="https://www.midjourney.com/" target="_blank">Midjourney</a>. We'd love to see the art you generate &mdash; send it to <a className="text-link" href="mailto:art@orderofeventide.com" target="_blank">art@orderofeventide.com</a> to strike up a conversation.
								</p>
							</div>
						</div>
					</div>
				</div>
				<BuyTheBook></BuyTheBook>
				<div id="resources" className="section">
					<div className="container">
						<h1 className="text--center mb-1-5">
							Resources
						</h1>
						<p className="text--center max-w-md mb-4">
							These resources are free to download and share.
						</p>
						<h2 className="mb-2">
							Blank Sheets
						</h2>
						<div className="grid-4 mb-6">
							<ResourceCard
								src={ImageResourceHeroSheet1Up}
								title="Blank Hero Sheet"
								link={ResourceHeroSheet1Up}
							></ResourceCard>
							<ResourceCard
								src={ImageResourceHeroSheet2Up}
								title="Blank Hero Sheet (2-up)"
								link={ResourceHeroSheet2Up}
							></ResourceCard>
							<ResourceCard
								src={ImageResourceCombatSheet}
								title="Blank Combat Sheet"
								link={ResourceCombatSheet}
							></ResourceCard>
							<ResourceCard
								src={ImageResourceDungeonSheet}
								title="Blank Dungeon Sheet"
								link={ResourceDungeonSheet}
							></ResourceCard>
						</div>
						<h2 className="mb-2">
							How-to Videos
						</h2>
						<div className="grid-4 mb-6">
							<VideoCard
								src={ImageVideoHowToHero}
								title="How to Create a Hero"
								link={"https://youtu.be/osrvZqV_2Xg"}
							></VideoCard>
							<VideoCard
								src={ImageVideoHowToKarasVale}
								title="Intro to Kara's Vale"
								link={"https://youtu.be/kK5eiSTBbuA"}
							></VideoCard>
							<VideoCard
								src={ImageVideoHowToGuild}
								title="Guild Intro"
								link={"https://youtu.be/kCAvmJeqh24"}
							></VideoCard>
							<VideoCard
								src={ImageVideoHowToDungeoneer}
								title="Dungeoneering &amp; Player Roles"
								link={"https://youtu.be/e-46ooP5BW8"}
							></VideoCard>
							<VideoCard
								src={ImageVideoHowToCombat}
								title="Combat Tutorial"
								link={"https://youtu.be/xRuBT_svLi0"}
							></VideoCard>
							<VideoCard
								src={ImageVideoHowToRoleplayRule}
								title="Roleplay Rule"
								link={"https://youtu.be/E57exaLiNko"}
							></VideoCard>
						</div>
						<h2 className="mb-2">
							Pre-made Adventures
						</h2>
						<p className="mb-4">
							Coming soon!
						</p>
						{/*
						<div className="grid-4 mb-6">
							<ResourceCard
								src={}
								title="Starter Hero 1"
								link={}
							></ResourceCard>
							<ResourceCard
								src={}
								title="Starter Hero 2"
								link={}
							></ResourceCard>
							<ResourceCard
								src={}
								title="Starter Hero 3"
								link={}
							></ResourceCard>
							<ResourceCard
								src={}
								title="Starter Hero 4"
								link={}
							></ResourceCard>
							<ResourceCard
								src={}
								title="Starter Dungeon"
								link={}
							></ResourceCard>
						</div>
						*/}
						<h2 className="mb-2">
							Endgame Activities
						</h2>
						<p className="mb-4">
							Coming soon!
						</p>
					</div>
				</div>
			</main>
			<Footer></Footer>
		</div>
	);
}

export default App;
