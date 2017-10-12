// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBjDTtmeEuLOi38wxGz70RU1WVaU5PQ2bc",
    authDomain: "marvel-winners.firebaseapp.com",
    databaseURL: "https://marvel-winners.firebaseio.com",
    projectId: "marvel-winners",
    storageBucket: "",
    messagingSenderId: "278216602516"
  };
  firebase.initializeApp(config);

const app = {};
// character facts database
app.characters = [
	{
		id: 1009515,
		name: 'Punisher',
		facts: [
			[`My "costume" icludes a skull`],
			[`I Was Originally A Spider-Man Villan`],
			[`Superpowers: None`],
			[`My Intials are: FC`],
			[`First Appearance: Amazing Spider-Man #129 (1974)`],
			[`Group Affiliations: None`]
		],
		first: 6515,

	},
	{
		id: 1009220,
		name: 'Captain America',
		facts: [
			[`I Love Stars and Stripes`],
			[`My Best Friend is: Bucky Barnes`],
			[`Superpowers: Enhanced strength, endurance, agility, speed and reflexes`],
			[`My Initals are: SR`],
			[`First Appearance: Captain America Comics #1 (1941)`],
			[`Group Affiliations: The Avengers`]
		],
		first: 7849,
	},
	{
		id: 1009338,
		name: 'Hawkeye',
		facts: [
			[`I was a part of the Carson Carnival of Travelling Wonders`],
			[`I'm good with a bow and arrow`],
			[`Superpowers: none`],
			[`My Initals are: CB`],
			[`First Appearance: Tales of Suspense #57 (1964)`],
			[`Group Affiliations: The Avengers`]
		],
		first: 11300,
	},
	{
		id: 1009368,
		name: 'Iron Man',
		facts: [
			[`I'm loosely based on Howard Hughes`],
			[`I own Area 51`],
			[`Superpowers: none, gains super powers from costume`],
			[`My Initals are: TS`],
			[`First Appearance: Tales of Suspense #39 (1963)`],
			[`Group Affiliations: The Avengers`]
		],
		first: 11280,
	},
	{
		id: 1009351,
		name: 'Hulk',
		facts: [
			[`You don't want to see me angry`],
			[`I am a atomic physicist`],
			[`Superpowers: Superhuman strength`],
			[`My Initals are: BB`],
			[`First Appearance: Incredible Hulk #1 (1962)`],
			[`Group Affiliations: The Avengers`]
		],
		first: 8906,
	},
	{
		id: 1009610,
		name: 'Spider-Man',
		facts: [
			[`My parents were part of S.H.I.E.L.D`],
			[`I gained my powers when I was 15 years old`],
			[`Superpowers: Superhuman strength, speed, reflexes, durability, stamina, healing and agility,`],
			[`My Initals are: PP`],
			[`First Appearance: Amazing Fantasy #15 (1962)`],
			[`Group Affiliations: The Avengers`]
		],
		first: 16926,
	},
	{
		id: 1009664,
		name: 'Thor',
		facts: [
			[`I take Mjölnir to every fight`],
			[`I have a day in the week named after me`],
			[`Superpowers: Godly Stregth and Abilities, Can summon lightning`],
			[`My Initals are: TO`],
			[`First Appearance: Journey into Mystery #83 (1962)`],
			[`Group Affiliations: The Avengers`]
		],
		first: 9779,
	},
	{
		id: 1009562,
		name: 'Scarlet Witch',
		facts: [
			[`My father is Magneto`],
			[`I have a twin brother`],
			[`Superpowers: Warps Reality with mystic energy`],
			[`My Initals are: WM`],
			[`First Appearance: X-Men #4 (1964)`],
			[`Group Affiliations: The Avengers`]
		],
		first: 12488,
	},
	{
		id: 1009718,
		name: 'Wolverine',
		facts: [
			[`I was born in the 1880s`],
			[`I fought Spock... and lost`],
			[`Superpowers: animal-keen senses, powerful regenerative ability, and three retractable claws in each hand. `],
			[`My Initals are: JH`],
			[`First Appearance: Incredible Hulk #180 (1974)`],
			[`Group Affiliations: X-Men`]
		],
		first: 8991,
	},
	{
		id: 1009697,
		name: 'Vision',
		facts: [
			[`I was made by Ultron`],
			[`I am a android`],
			[`Superpowers: superhuman senses, stamina, reflexes, speed, agility, strength and analytical capabilities`],
			[`My Inital is: V`],
			[`First Appearance: Marvel Mystery Comics #13 (1940)`],
			[`Group Affiliations: Avengers`]
		],
		first: 16718,
	},
	{
		id: 1010801,
		name: 'Ant-Man',
		facts: [
			[`I can hop through dimensions`],
			[`I have a daughter, who will become a superhero`],
			[`Superpowers: Size Alteration`],
			[`My Initals are: SL`],
			[`First Appearance: Avengers, Vol. 1 #181 (1979)`],
			[`Group Affiliations: Avengers`]
		],
		first: 7043,
	},
	{
		id: 1009175,
		name: 'Beast',
		facts: [
			[`I was kidnaped by the Conquistador`],
			[`I am a geneticist`],
			[`Superpowers: superhuman strength, agility, endurance, and speed, despite his bulk.`],
			[`My Initals are: HPM`],
			[`First Appearance: X-Men #1 (1963)`],
			[`Group Affiliations: X-Men`]
		],
		first: 12413,
	},
	{
		id: 1009215,
		name: 'Luke Cage',
		facts: [
			[`Iron Fist is my Best Friend`],
			[`I got my powers when Dr. Burstein failed to recreate Captain America's super soldier serum`],
			[`Superpowers: superhuman strength and steel-hard skin`],
			[`My Initals are: LC`],
			[`First Appearance: Hero for Hire #1 (1972)`],
			[`Group Affiliations: Defenders`]
		],
		first: 24116,
	},
	{
		id: 1009187,
		name: 'Black Panther',
		facts: [
			[`I was the first black superhero in mainstream comics`],
			[`I was once married to Storm`],
			[`Superpowers: superhuman senses and physical abilities`],
			[`My Initals are: T'C`],
			[`First Appearance: Fantastic Four Vol. 1 #52 (1966)`],
			[`Group Affiliations: Fantastic Four`]
		],
		first: 13258,
	},
	{
		id: 1009262,
		name: 'Daredevil',
		facts: [
			[`I was part of the inspiration for the Teenage Mutant Ninja Turtles`],
			[`My original costume was yellow`],
			[`Superpowers: Has 4 superhuman senses`],
			[`My Initals are: MM`],
			[`First Appearance: Daredevil #1 (1964)`],
			[`Group Affiliations: Defenders`]
		],
		first: 8073,
	},
	{
		id: 1009367,
		name: 'Iron Fist',
		facts: [
			[`I gained my powers defeating a dragon`],
			[`I am a orphan`],
			[`Superpowers: harnesses chi to increase physical and mental capabilities`],
			[`My Initals are: DR`],
			[`First Appearance: Marvel Premiere #15 (1974)`],
			[`Group Affiliations: Defenders`]
		],
		first: 10201,
	},
	{
		id: 1009378,
		name: 'Jessica Jones',
		facts: [
			[`My alias used to be Jewel`],
			[`I am the first female Marvel superhero to headline my own series in the MCU`],
			[`Superpowers:  Superhuman strength`],
			[`My Initals are: JJ`],
			[`First Appearance: Alias #1 (2001)`],
			[`Group Affiliations: Defenders`]
		],
		first: 32430,
	},
	{
		id: 1009662,
		name: 'Thing',
		facts: [
			[`"It's clobberin' time!"`],
			[`Reed Richards is my closest friend`],
			[`Superpowers:  superhuman strength and durability`],
			[`My Initals are: BG`],
			[`First Appearance: Fantastic Four #1 (1961)`],
			[`Group Affiliations: Fantastic Four`]
		],
		first: 12894,

	},
	{
		id: 1009707,
		name: 'Wasp',
		facts: [
			[`I used to be a Fashion Designer and TV host`],
			[`I was married to Hank Pym`],
			[`Superpowers: Flight and Size Reduction`],
			[`My Initals are: JvD`],
			[`First Appearance: Tales to Astonish #44`],
			[`Group Affiliations: Avengers`]
		],
		first: 11387,
	},
	{
		id: 1010338,
		name: 'Captain Marvel',
		facts: [
			[`I got my powers because of an explosion caused by ancient Kree technology`],
			[`I was a servicewoman in the U.S. Air Force`],
			[`Superpowers: enhanced strength, durability and shoots energy bursts from hands`],
			[`My Initals are: CD`],
			[`First Appearance: Marvel Super-Heroes #13 (1967)`],
			[`Group Affiliations: Avengers`]
		],
		first: 15424,
	},
	{
		id: 1009189,
		name: 'Black Widow',
		facts: [
			[`I was married to a Soviet Spy`],
			[`I was born in 1928`],
			[`Superpowers: world class athlete, gymnast, acrobat, aerialist, advanced healing capabilities and resistant to aging`],
			[`My Initals are: NR`],
			[`First Appearance: Tales of Suspense #52 (1964)`],
			[`Group Affiliations: Avengers`]
		],
		first: 11295, 
	},
	{
		id: 1009356,
		name: 'Human Torch',
		facts: [
			[`Invisible Woman is my sister`],
			[`I gained my mutation from cosmic rays`],
			[`Superpowers: can cover body in fire, project fireballs or other fire objects and flying at supersonic speeds`],
			[`My Initals are: JS`],
			[`First Appearance: Fantastic Four #1 (1961)`],
			[`Group Affiliations: Fantastic Four`]
		],
		first: 12894,
	},
	{
		id: 1009343,
		name: 'Hercules',
		facts: [
			[`My father is Zeus`],
			[`I am from Greece`],
			[`Superpowers: superhuman strength`],
			[`My Inital is: H`],
			[`First Appearance: THOR ANNUAL #1`],
			[`Group Affiliations: Gods of Olympus`]
		],
		first: 52822,
	},
	{
		id: 1009629,
		name: 'Storm',
		facts: [
			[`I began life as an Egyptian Thief`],
			[`I am the first black female in mainstream comics`],
			[`Superpowers: possesses the psionic ability to manipulate weather patterns`],
			[`My Initals are: OM`],
			[`First Appearance: Giant-Size X-Men #1 (1975)`],
			[`Group Affiliations: x-men`]
		],
		first: 8797,
	},
	{
		id: 1009268,
		name: 'Deadpool',
		facts: [
			[`My real name is a joke and a play off of a DC character`],
			[`I break the 4th wall all the time`],
			[`Superpowers: extraordinary hand-to-hand combatant`],
			[`My Initals are: WW`],
			[`First Appearance: New Mutants #98 (1990)`],
			[`Group Affiliations: x-force`]
		],
		first: 10441,
	},
	{
		id: 1009417,
		name: 'Magneto',
		facts: [
			[`I have 3 children who are also superheros`],
			[`As a child I was sent to Auschwitz`],
			[`Superpowers: controls all forms of magnetism`],
			[`My Initals are: ME`],
			[`First Appearance: X-Men #1 (1963)`],
			[`Group Affiliations: x-men`]
		],
		first: 12413,
	},
	{
		id: 1009504,
		name: 'Professor X',
		facts: [
			[`I run a school`],
			[`Red Skull once stole my brain`],
			[`Superpowers: has vast psionic powers`],
			[`My Initals are: CFX`],
			[`First Appearance: X-Men #1 (1963)`],
			[`Group Affiliations: x-men`]
		],
		first: 12413,
	},
	{
		id: 1009282,
		name: 'Dr. Strange',
		facts: [
			[`I was a neurosurgeon before gaining my superpowers`],
			[`I mentored Scarlet Witch`],
			[`Superpowers: one of the most powerful sorcerers in existence`],
			[`My Initals are: SS`],
			[`First Appearance: Strange Tales #110 (1963)`],
			[`Group Affiliations: Avengers`]
		],
		first: 11029,
	},
	{
		id: 1009297,
		name: 'Falcon',
		facts: [
			[`I became Captain America in 2014`],
			[`I was the first African-American Superhero`],
			[`Superpowers: can telepathically communicate with his pet Redwing`],
			[`My Initals are: SW`],
			[`First Appearance: Captain America #117 (1969)`],
			[`Group Affiliations: Avengers`]
		],
		first: 7498,
	},
	{
		id: 1009471,
		name: 'Nick Fury',
		facts: [
			[`I fought in World War 2 with Captain America and my Howling Commandos`],
			[`I lost my eye in a grenade accident`],
			[`Superpowers: ages very slowly`],
			[`My Initals are: NF`],
			[`First Appearance: Sgt. Fury and His Howling Commandos #1 (1963)`],
			[`Group Affiliations: S.H.I.E.L.D.`]
		],
		first: 10644,
	},
	{
		id: 1010740,
		name: 'Winter Soldier',
		facts: [
			[`I am often kept in cryogenic stasis `],
			[`I once had a thing with Black Widow`],
			[`Superpowers: superhuman strength, speed, reflexes, healing, stamina, agility and semi-immortality`],
			[`My Initals are: JBB`],
			[`First Appearance: Captain America #1 (2004)`],
			[`Group Affiliations: HYDRA`]
		],
		first: 91,
	},
	{
		id: 1009524,
		name: 'Quicksilver',
		facts: [
			[`My father is Magneto`],
			[`I have a twin sister`],
			[`Superpowers: possesses superhuman speed`],
			[`My Initals are: PM`],
			[`First Appearance: X-Men #4`],
			[`Group Affiliations: Avengers`]
		],
		first: 12488,
	},
	{
		id: 1009318,
		name: 'Ghost Rider',
		facts: [
			[`I can regenerate my skull`],
			[`One of my aliases is: Spirit of Vengeance`],
			[`Superpowers: has superhuman strength and durability, as well as the ability to project and control Hellfire`],
			[`My Initals are: JB`],
			[`First Appearance: Marvel Spotlight #5 (1972)`],
			[`Group Affiliations: None`]
		],
		first: 10262,
	},
	{
		id: 1009508,
		name: 'Kitty Pride',
		facts: [
			[`Storm gave me my first code name`],
			[`I was engaged to Star-Lord`],
			[`Superpowers: expertise of the martial arts of the Japanese ninja and samurai`],
			[`My Initals are: KP`],
			[`First Appearance: X-Men #129 (1980)`],
			[`Group Affiliations: X-men`]
		],
		first: 12446,
	},
	{
		id: 1009366,
		name: 'Invisible Woman',
		facts: [
			[`My brother is Human Torch`],
			[`I gained my powers from cosmic rays`],
			[`Superpowers: can be wholly or partially invisible at will`],
			[`My Initals are: SR`],
			[`First Appearance: Fantastic Four #1 (1961)`],
			[`Group Affiliations: Fantastic Four`]
		],
		first: 12894, 
	},
	{
		id: 1009592,
		name: 'Silver Surfer',
		facts: [
			[`I am a citizen of 190 countries`],
			[`I can travel 500,000 light years in seconds`],
			[`Superpowers: wields "the power cosmic"`],
			[`My Initals are: NR`],
			[`First Appearance: Fantastic Four #48 (1966)`],
			[`Group Affiliations: Defenders`]
		],
		first: 13253,
	},
	{
		id: 1009407,
		name: 'Loki',
		facts: [
			[`When I made my debut I had red hair`],
			[`I am the son of Laufey and Farbauti`],
			[`Superpowers: magical abilities include: shape-shifting, astral projection, molecular rearrangement, eldritch energy blasts, illusion casting, levitation, telepathy, hypnosis, and teleportation.`],
			[`My Initals are: LL`],
			[`First Appearance: Journey into Mystery #85 (1962)`],
			[`Group Affiliations: Asgardians`]
		],
		first: 9781,
	},
	{
		id: 1009327,
		name: 'Jean Grey',
		facts: [
			[`I was originally called Marvel Girl`],
			[`After exposure to radiation I re-emerged as the Phoenix`],
			[`Superpowers: read minds, projects thoughts into the minds of others, initiate astral travel, and mentally stun opponents with pure psionic force.`],
			[`My Initals are: JGS`],
			[`First Appearance: X-Men #1 (1963)`],
			[`Group Affiliations: x-men`]
		],
		first: 12413,
	},
	{
		id: 1009257,
		name: 'Cyclops',
		facts: [
			[`Cable is my son`],
			[`I am widely considered to be the first X-Man`],
			[`Superpowers: projects a beam of heatless ruby-colored concussive force from his eyes`],
			[`My Initals are: SS`],
			[`First Appearance: X-Men #1 (1963)`],
			[`Group Affiliations: x-men`]
		],
		first: 12413,
	},
	{
		id: 1009472,
		name: 'Nightcrawler',
		facts: [
			[`Mystique is my mother`],
			[`I was almost a DC character`],
			[`Superpowers: teleportation`],
			[`My Initals are: KW`],
			[`First Appearance: Giant-Size X-Men #1 (1975)`],
			[`Group Affiliations: x-men`]
		],first: 8797,
	},
	{
		id: 1009583,
		name: 'She-Hulk',
		facts: [
			[`I was the leader of the A-Force`],
			[`I have a law degree`],
			[`Superpowers: possesses great strength, durability, endurance and a healing factor`],
			[`My Initals are: JW`],
			[`First Appearance: Savage She-Hulk #1 (1980)`],
			[`Group Affiliations: Avengers`]
		],
		first: 15256,
	},
	{
		id: 1010744,
		name: 'Rocket',
		facts: [
			[`I am one of the few characters that can understand what Groot is saying`],
			[`I am not human`],
			[`Superpowers: heightened sense of smell and sight`],
			[`My Initals are: RR`],
			[`First Appearance: Marvel Preview #7 (1976)`],
			[`Group Affiliations: Guardians of the Galaxy`]
		],
		first: 19779,
	},
	{
		id: 1010733,
		name: 'Star-Lord',
		facts: [
			[`I am half human, half alien`],
			[`I was engaged to Kitty Pride`],
			[`Superpowers: none, gains super powers from costume`],
			[`My Initals are: PQ`],
			[`First Appearance: Marvel Preview #4 (1976)`],
			[`Group Affiliations: Guardians of the Galaxy`]
		],
		first: 19776,
	},
	{
		id: 1010743,
		name: 'Groot',
		facts: [
			[`I am from Planet X`],
			[`I am not human and the last of my kind`],
			[`Superpowers: power to regenerate and can communicate with plant life`],
			[`My Inital is: G`],
			[`First Appearance: Tales to Astonish #13 (1960)`],
			[`Group Affiliations: Guardians of the Galaxy`]
		],
		first: 11353,
	},
	{
		id: 1009465,
		name: 'Mystique',
		facts: [
			[`I have a long running feud with Captain Marvel`],
			[`I am Nightcrawlers mother`],
			[`Superpowers: can psionically shift the atoms of her body to duplicate any humanoid of either sex`],
			[`My Initals are: RD`],
			[`First Appearance: Ms Marvel #16 (1978)`],
			[`Group Affiliations: x-men`]
		],
		first: 56131,
	},
	{
		id: 1010763,
		name: 'Gamora',
		facts: [
			[`Most of my abilities are specialized cybernetic enhancements that Thanos designed`],
			[`I am the last of my species`],
			[`Superpowers: superhuman strength and agility and accelerated healing`],
			[`My Inital is: G`],
			[`First Appearance: Strange Tales #180`],
			[`Group Affiliations: Guardians of the Galaxy`]
		],
		first: 22132,
	},
]

app.key = `4942dc56429aee1738502cc2a2ed49b4`
app.key1 = `b0ade3991248784770fbab470064c3ca`;
app.chosenCharacters = [];
app.username = '';
app.guessCount = 9;

app.startGame = () => {
	$('.start-game-submit').on('click', (e) => {
		e.preventDefault();
		const playerName = $('.player-name').val();
		if(playerName === ''){
			$('.player-name').attr('placeholder', 'Please enter your name')
		} else {
			app.username = playerName;
			app.getRandom();
			$('.hide-on-submit').css('display', 'none');
			$('.game-play').removeClass('hide-on-load');
			$('.guess-count span').text(app.guessCount);
		}
	})
}

app.getRandom = () => {
	const all = app.characters;
	const random6 = _.sample(all, 3);
	app.chosenCharacters = random6;
	app.getCharacterData();
}

app.getCharacterData = () => {
	const chosen = app.chosenCharacters;
	chosen.forEach((item) => {
		$.ajax({
			url: `https://gateway.marvel.com:443/v1/public/characters/${item.id}?apikey=${app.key}`,
			method: 'GET',
			dataType: 'json'
		}).then((res) => {
			let characterData = res.data.results[0]
			item.facts[6] = [`Number of Appearances: ${characterData.comics.available}`]
			item.image = characterData.thumbnail.path
		})
	});
	app.getFirstAppearanceData();
}
app.getFirstAppearanceData = () => {
	const chosen = []
	app.chosenCharacters.forEach((item) => {
		$.ajax({
			url: `https://gateway.marvel.com:443/v1/public/comics/${item.first}?apikey=${app.key}`,
			method: 'GTE',
			dataType: 'jsonp'
		}).then((res) => {
			const fristData = res.data.results[0];
			item.firstCover = fristData.thumbnail.path;
			chosen.push(item)
			if(chosen.length === app.chosenCharacters.length) {
				app.chosenCharacters = chosen;
				app.getBackgroundImage();
				app.parseData();
			}
		})
	});
	
}

app.getBackgroundImage = () => {
	const chosen = app.chosenCharacters;
	chosen.forEach((item, index) => {
		const number = index + 1;
		$(`.comic-backgroud-images .image-${number}`).css('background-image', `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${item.firstCover}.jpg')`);
	})
}

app.parseData = () => {
	const chosen = app.chosenCharacters;
	chosen.forEach((item, index) => {
		const number = index + 1
		const character = $(`<div class="character-card" data-id="${item.id}">`)
		const facts = $('<div>').addClass('facts');
		const chosenfacts = _.sample(item.facts, 3);
		chosenfacts.forEach((item) => {
			facts.append(`<p>${item[0]}</p>`)
		});
		const guess = $(`<input type="text" name="guess" class="guess" data-number=${number} placeholder="Your Guess" required>`).addClass(`guess-${number}`);
		const guessLabel = $('<label for="guess" class="SRT">').text('Your Guess Here');
		const guessSubmit = $(`<button class="guess-submit" data-number="${number}" data-id="${item.id}">`).addClass(`guess-submit-${number}`).text('Guess');
		const guessDiv = $('<div class="guess-container">').append(guess, guessLabel, guessSubmit);
		character.append(facts, guessDiv);
		$('.chosen-characters').append(character);
	})
	app.handleGuess();
}


app.handleGuess = function() {
	$('.guess-submit').on('click', function(e) {
		const buttonNumber = $(this).data('number');
		const characterCardId = $(this).data('id');
		const findById = _.find(app.characters, (x) => {
			const id = x.id
			if (id === characterCardId) {
				return x
			}
		})
		const characterName = findById.name.toLowerCase();
		const userGuess = $(`.guess-${buttonNumber}`).val().toLowerCase();
		if(userGuess === "") {
			$(`.guess-${buttonNumber}`).attr('placeholder', 'Guess Required');
		} else {
			app.guessCount = app.guessCount - 1;
			$('.guess-count span').text(app.guessCount);
			if(characterName === userGuess){
				app.correctAnswer(findById.id);
			} else {
				$(`.guess-${buttonNumber}`).val("");
				$(`.guess-${buttonNumber}`).attr('placeholder', 'Try Again...');
				app.checkCount();
			}
		}
		
	})
}
app.correctAnswer = (id) => {
	const currentCard = $('.chosen-characters').find(`[data-id='${id}']`);
	const findCharacter = _.find(app.characters, (x) => {
		if (x.id === id) {
			return x
		}
	});
	currentCard.empty();
	const successfulGuess = $('<p>').text('Success!!');
	const characterName = $('<p>').text(findCharacter.name);
	const characterPhoto = $('<img>').attr('src', `${findCharacter.image}.jpg`);
	const characterDiv = $('<div class="guessed-character">').append(successfulGuess, characterPhoto, characterName);
	currentCard.append(characterDiv).addClass('success').removeClass('character-card');
	app.checkCorrect();
}

app.checkCorrect = () => {
	const successfulCards = $('.chosen-characters').find(`.success`)
	if(successfulCards.length === 3){
		const dbRef = firebase.database().ref(`/winners`);
		$('.winner').removeClass('hide-until-won');
		$('.winner p span').text(app.guessCount);
		const winnerScore = Math.floor((app.guessCount / 6) * 100);
		const winnerData = {
			name: app.username,
			score: winnerScore
		}
		dbRef.push(winnerData);
		const winners = [];
		dbRef.on('value', (snapshot) => {
			const allWinners = snapshot.val();
			for(let key in allWinners){
				const winnerData = allWinners[key]
				const winner = {
					name: winnerData.name,
					score: winnerData.score,
				}
				winners.push(winner)
			}
			const winnersSort1= _.sortBy(winners, 'score');
			const winnersSorted = winnersSort1.reverse();
			if (winnersSorted.length >= 6) {
				const first6 = _.first(winnersSorted, [6])
				first6.forEach((x)=> {
					const name = $('<p>').addClass('name').text(x.name);
					const score = $('<p>').addClass('score').text(x.score);
					const winner = $('<div>').addClass('winner-data').append(name, score)
					$('.leader-board').append(winner)
				})
			} else {
				winnersSorted.forEach((x)=> {
				const name = $('<p>').addClass('name').text(x.name);
				const score = $('<p>').addClass('score').text(x.score);
				const winner = $('<div>').addClass('winner-data').append(name, score)
				$('.leader-board').append(winner)
			})
			}
			
		})
		
	}
}

app.checkCount = () => {
	if(app.guessCount === 0) {
		$('.loser').removeClass('hide-until-lost');
		const ids = []
		
		const losingCardIds = $(`.character-card`).map(function() {
			const id = $(this).data('id');
			ids.push(id)
		});
		
		ids.forEach((id) => {
			const findById = _.find(app.characters, (x) => {
				const characterId = x.id
				if (id === characterId) {
					return x
				}
			})
			const image = $('<img>').attr('src', `${findById.image}.jpg`);
			const name = $('<p>').text(findById.name)
			const unguessedDiv = $('<div>').append(image, name);
			$('.loser-missed').append(unguessedDiv);
		})
	}
}

app.init = () => {
	app.startGame();
}

$(() => {
	app.init();
})
