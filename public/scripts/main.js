'use strict';

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var app = {};
// character facts database
app.characters = [{
	id: 1009515,
	name: 'Punisher',
	facts: [['My Height is: 6\'1'], ['I am Male'], ['Superpowers: None'], ['My Intials are: FC'], ['First Appearance: Amazing Spider-Man #129 (1974)'], ['Group Affiliations: None']],
	first: 6515

}, {
	id: 1009220,
	name: 'Captian America',
	facts: [['My Height is: 6\'2'], ['I am Male'], ['Superpowers: Enhanced strength, endurance, agility, speed and reflexes'], ['My Initals are: SR'], ['First Appearance: Captain America Comics #1 (1941)'], ['Group Affiliations: The Avengers']],
	first: 7849
}, {
	id: 1009338,
	name: 'Hawkeye',
	facts: [['My Height is: 6\'3'], ['I am Male'], ['Superpowers: none'], ['My Initals are: CB'], ['First Appearance: Tales of Suspense #57 (1964)'], ['Group Affiliations: The Avengers']],
	first: 11300
}, {
	id: 1009368,
	name: 'Iron Man',
	facts: [['My Height is: 6\'1, 6\'6 suited up'], ['I am Male'], ['Superpowers: none, gains super powers from costume'], ['My Initals are: TS'], ['First Appearance: Tales of Suspense #39 (1963)'], ['Group Affiliations: The Avengers']],
	first: 11280
}, {
	id: 1009351,
	name: 'Hulk',
	facts: [['My Height is: 5\'9 to 8\''], ['I am Male'], ['Superpowers: Superhuman strength'], ['My Initals are: BB'], ['First Appearance: Incredible Hulk #1 (1962)'], ['Group Affiliations: The Avengers']],
	first: 8906
}, {
	id: 1009610,
	name: 'Spider-Man',
	facts: [['My Height is: 5\'10'], ['I am Male'], ['Superpowers: Superhuman strength, speed, reflexes, durability, stamina, healing and agility,'], ['My Initals are: PP'], ['First Appearance: Amazing Fantasy #15 (1962)'], ['Group Affiliations: The Avengers']],
	first: 16926
}, {
	id: 1009664,
	name: 'Thor',
	facts: [['My Height is: 6\'6'], ['I am Male'], ['Superpowers: Godly Stregth and Abilities, Can summon lightning'], ['My Initals are: TO'], ['First Appearance: Journey into Mystery #83 (1962)'], ['Group Affiliations: The Avengers']],
	first: 9779
}, {
	id: 1009562,
	name: 'Scarlet Witch',
	facts: [['My Height is: 5\'7'], ['I am Female'], ['Superpowers: Warps Reality with mystic energy'], ['My Initals are: WM'], ['First Appearance: X-Men #4 (1964)'], ['Group Affiliations: The Avengers']],
	first: 12488
}, {
	id: 1009718,
	name: 'Wolverine',
	facts: [['My Height is: 5\'3'], ['I am Male'], ['Superpowers: animal-keen senses, powerful regenerative ability, and three retractable claws in each hand. '], ['My Initals are: JH'], ['First Appearance: Incredible Hulk #180 (1974)'], ['Group Affiliations: X-Men']],
	first: 8991
}, {
	id: 1009697,
	name: 'Vision',
	facts: [['My Height is: 5\'3'], ['I am a android'], ['Superpowers: superhuman senses, stamina, reflexes, speed, agility, strength and analytical capabilities'], ['My Inital is: V'], ['First Appearance: Marvel Mystery Comics #13 (1940)'], ['Group Affiliations: Avengers']],
	first: 16718
}, {
	id: 1010801,
	name: 'Ant-Man',
	facts: [['My Height is: 6\''], ['I am male'], ['Superpowers: Size Alteration'], ['My Initals are: SL'], ['First Appearance: Avengers, Vol. 1 #181 (1979)'], ['Group Affiliations: Avengers']],
	first: 7043
}, {
	id: 1009175,
	name: 'Beast',
	facts: [['My Height is: 5\'11'], ['I am male'], ['Superpowers: superhuman strength, agility, endurance, and speed, despite his bulk.'], ['My Initals are: HPM'], ['First Appearance: X-Men #1 (1963)'], ['Group Affiliations: X-Men']],
	first: 12413
}, {
	id: 1009215,
	name: 'Luke Cage',
	facts: [['My Height is: 6\'6'], ['I am male'], ['Superpowers: superhuman strength and steel-hard skin'], ['My Initals are: LC'], ['First Appearance: Hero for Hire #1 (1972)'], ['Group Affiliations: Defenders']],
	first: 24116
}, {
	id: 1009187,
	name: 'Black Panther',
	facts: [['My Height is: 6\''], ['I am male'], ['Superpowers: superhuman senses and physical abilities'], ['My Initals are: T\'C'], ['First Appearance: Fantastic Four Vol. 1 #52 (1966)'], ['Group Affiliations: Fantastic Four']],
	first: 13258
}, {
	id: 1009262,
	name: 'Daredevil',
	facts: [['My Height is: 6\''], ['I am male'], ['Superpowers: Has 4 superhuman senses'], ['My Initals are: MM'], ['First Appearance: Daredevil #1 (1964)'], ['Group Affiliations: Defenders']],
	first: 8073
}, {
	id: 1009367,
	name: 'Iron Fist',
	facts: [['My Height is: 5\'11'], ['I am male'], ['Superpowers: harnesses chi to increase physical and mental capabilities'], ['My Initals are: DR'], ['First Appearance: Marvel Premiere #15 (1974)'], ['Group Affiliations: Defenders']],
	first: 10201
}, {
	id: 1009378,
	name: 'Jessica Jones',
	facts: [['My Height is: 5\'7'], ['I am female'], ['Superpowers:  Superhuman strength'], ['My Initals are: JJ'], ['First Appearance: Alias #1 (2001)'], ['Group Affiliations: Defenders']],
	first: 32430
}, {
	id: 1009662,
	name: 'Thing',
	facts: [['My Height is: 6\''], ['I am male'], ['Superpowers:  superhuman strength and durability'], ['My Initals are: BG'], ['First Appearance: Fantastic Four #1 (1961)'], ['Group Affiliations: Fantastic Four']],
	first: 12894

}, {
	id: 1009707,
	name: 'Wasp',
	facts: [['My Height is: 5\'4'], ['I am female'], ['Superpowers: Flight and Size Reduction'], ['My Initals are: JD'], ['First Appearance: Tales to Astonish #44'], ['Group Affiliations: Avengers']],
	first: 11387
}, {
	id: 1010338,
	name: 'Captain Marvel',
	facts: [['My Height is: 5\'11'], ['I am female'], ['Superpowers: enhanced strength, durability and shoots energy bursts from hands'], ['My Initals are: CD'], ['First Appearance: Marvel Super-Heroes #13 (1967)'], ['Group Affiliations: Avengers']],
	first: 15424
}, (_ref = {
	id: 1009189,
	name: 'Black Widow'
}, _defineProperty(_ref, 'name', 'Captain Marvel'), _defineProperty(_ref, 'facts', [['My Height is: 5\'7'], ['I am female'], ['Superpowers: world class athlete, gymnast, acrobat, aerialist, advanced healing capabilities and resistant to aging'], ['My Initals are: NR'], ['First Appearance: Tales of Suspense #52 (1964)'], ['Group Affiliations: Avengers']]), _defineProperty(_ref, 'first', 11295), _ref), {
	id: 1009356,
	name: 'Human Torch',
	facts: [['My Height is: 5\'10'], ['I am male'], ['Superpowers: can cover body in fire, project fireballs or other fire objects and flying at supersonic speeds'], ['My Initals are: JS'], ['First Appearance: Fantastic Four #1 (1961)'], ['Group Affiliations: Fantastic Four']],
	first: 12894
}, {
	id: 1009343,
	name: 'Hercules',
	facts: [['My Height is: 6\'5'], ['I am male'], ['Superpowers: superhuman strength'], ['My Inital is: H'], ['First Appearance: THOR ANNUAL #1'], ['Group Affiliations: Olympians']],
	first: 52822
}, {
	id: 1009629,
	name: 'Storm',
	facts: [['My Height is: 5\'11'], ['I am female'], ['Superpowers: possesses the psionic ability to manipulate weather patterns'], ['My Initals are: OM'], ['First Appearance: Giant-Size X-Men #1 (1975)'], ['Group Affiliations: x-men']],
	first: 8797
}, {
	id: 1009268,
	name: 'Deadpool',
	facts: [['My Height is: 6\'2'], ['I am male'], ['Superpowers: extraordinary hand-to-hand combatant'], ['My Initals are: WW'], ['First Appearance: New Mutants #98 (1990)'], ['Group Affiliations: x-force']],
	first: 10441
}, {
	id: 1009417,
	name: 'Magneto',
	facts: [['My Height is: 6\'2'], ['I am male'], ['Superpowers: controls all forms of magnetism'], ['My Initals are: ME'], ['First Appearance: X-Men #1 (1963)'], ['Group Affiliations: x-men']],
	first: 12413
}, {
	id: 1009504,
	name: 'Professor X',
	facts: [['My Height is: 6\''], ['I am male'], ['Superpowers: has vast psionic powers'], ['My Initals are: CFX'], ['First Appearance: X-Men #1 (1963)'], ['Group Affiliations: x-men']],
	first: 12413
}, {
	id: 1009282,
	name: 'Dr. Strange',
	facts: [['My Height is: 6\'2'], ['I am male'], ['Superpowers: one of the most powerful sorcerers in existence'], ['My Initals are: SS'], ['First Appearance: Strange Tales #110 (1963)'], ['Group Affiliations: Avengers']],
	first: 11029
}, {
	id: 1009297,
	name: 'Falcon',
	facts: [['My Height is: 6\'2'], ['I am male'], ['Superpowers: can telepathically communicate with his pet Redwing'], ['My Initals are: SW'], ['First Appearance: Captain America #117 (1969)'], ['Group Affiliations: Avengers']],
	first: 7498
}, {
	id: 1009471,
	name: 'Nick Fury',
	facts: [['My Height is: 6\'1'], ['I am male'], ['Superpowers: ages very slowly'], ['My Initals are: NF'], ['First Appearance: Sgt. Fury and His Howling Commandos #1 (1963)'], ['Group Affiliations: S.H.I.E.L.D.']],
	first: 10644
}, {
	id: 1010740,
	name: 'Winter Soldier',
	facts: [['My Height is: 5\'9'], ['I am male'], ['Superpowers: superhuman strength, speed, reflexes, healing, stamina, agility and semi-immortality'], ['My Initals are: JBB'], ['First Appearance: Captain America #1 (2004)'], ['Group Affiliations: HYDRA']],
	first: 91
}, {
	id: 1009524,
	name: 'Quicksilver',
	facts: [['My Height is: 6\''], ['I am male'], ['Superpowers: possesses superhuman speed'], ['My Initals are: PM'], ['First Appearance: X-Men #4'], ['Group Affiliations: Avengers']],
	first: 12488
}, {
	id: 1009318,
	name: 'Ghost Rider',
	facts: [['My Height is: 5\'10'], ['I am male'], ['Superpowers: has superhuman strength and durability, as well as the ability to project and control Hellfire'], ['My Initals are: JB'], ['First Appearance: Marvel Spotlight #5 (1972)'], ['Group Affiliations: None']],
	first: 10262
}, {
	id: 1009508,
	name: 'Kitty Pride',
	facts: [['My Height is: 5\'6'], ['I am female'], ['Superpowers: expertise of the martial arts of the Japanese ninja and samurai'], ['My Initals are: KP'], ['First Appearance: X-Men #129 (1980)'], ['Group Affiliations: X-men']],
	first: 12446
}, {
	id: 1009366,
	name: 'Invisible Woman',
	facts: [['My Height is: 5\'6'], ['I am female'], ['Superpowers: can be wholly or partially invisible at will'], ['My Initals are: SR'], ['First Appearance: Fantastic Four #1 (1961)'], ['Group Affiliations: Fantastic Four']],
	first: 12894
}, {
	id: 1009592,
	name: 'Silver Surfer',
	facts: [['My Height is: 6\'4'], ['I am male'], ['Superpowers: wields "the power cosmic"'], ['My Initals are: NR'], ['First Appearance: Fantastic Four #48 (1966)'], ['Group Affiliations: Defenders']],
	first: 13253
}, {
	id: 1009407,
	name: 'Loki',
	facts: [['My Height is: 6\'4'], ['I am male'], ['Superpowers: magical abilities include: shape-shifting, astral projection, molecular rearrangement, eldritch energy blasts, illusion casting, levitation, telepathy, hypnosis, and teleportation.'], ['My Initals are: LL'], ['First Appearance: Journey into Mystery #85 (1962)'], ['Group Affiliations: Asgardians']],
	first: 9781
}, {
	id: 1009327,
	name: 'Jean Grey',
	facts: [['My Height is: 5\'6'], ['I am female'], ['Superpowers: read minds, projects thoughts into the minds of others, initiate astral travel, and mentally stun opponents with pure psionic force.'], ['My Initals are: JGS'], ['First Appearance: X-Men #1 (1963)'], ['Group Affiliations: x-men']],
	first: 12413
}, {
	id: 1009257,
	name: 'Cyclops',
	facts: [['My Height is: 6\'3'], ['I am male'], ['Superpowers: projects a beam of heatless ruby-colored concussive force from his eyes'], ['My Initals are: SS'], ['First Appearance: X-Men #1 (1963)'], ['Group Affiliations: x-men']],
	first: 12413
}, {
	id: 1009472,
	name: 'Nightcrawler',
	facts: [['My Height is: 5\'9'], ['I am male'], ['Superpowers: teleportation'], ['My Initals are: KW'], ['First Appearance: Giant-Size X-Men #1 (1975)'], ['Group Affiliations: x-men']], first: 8797
}, {
	id: 1009583,
	name: 'She-Hulk',
	facts: [['My Height is: 5\'10 to 6\'7'], ['I am female'], ['Superpowers: possesses great strength, durability, endurance and a healing factor'], ['My Initals are: JW'], ['First Appearance: Savage She-Hulk #1 (1980)'], ['Group Affiliations: Avengers']],
	first: 15256
}, {
	id: 1010744,
	name: 'Rocket',
	facts: [['My Height is: 4\''], ['I am not human'], ['Superpowers: heightened sense of smell and sight'], ['My Initals are: RR'], ['First Appearance: Marvel Preview #7 (1976)'], ['Group Affiliations: Guardians of the Galaxy']],
	first: 19779
}, {
	id: 1010733,
	name: 'Star-Lord',
	facts: [['My Height is: 6\'2'], ['I am male'], ['Superpowers: none, gains super powers from costume'], ['My Initals are: PQ'], ['First Appearance: Marvel Preview #4 (1976)'], ['Group Affiliations: Guardians of the Galaxy']],
	first: 19776
}, {
	id: 1010743,
	name: 'Groot',
	facts: [['My Height is: variable'], ['I am not human'], ['Superpowers: power to regenerate and can communicate with plant life'], ['My Inital is: G'], ['First Appearance: Tales to Astonish #13 (1960)'], ['Group Affiliations: Guardians of the Galaxy']],
	first: 11353
}, {
	id: 1009465,
	name: 'Mystique',
	facts: [['My Height is: 5\'10'], ['I am female'], ['Superpowers: can psionically shift the atoms of her body to duplicate any humanoid of either sex'], ['My Initals are: RD'], ['First Appearance: Ms Marvel #16 (1978)'], ['Group Affiliations: x-men']],
	first: 10294
}, {
	id: 1010763,
	name: 'Gamora',
	facts: [['My Height is: 6\''], ['I am female'], ['Superpowers: superhuman strength and agility and accelerated healing'], ['My Inital is: G'], ['First Appearance: Strange Tales #180'], ['Group Affiliations: Guardians of the Galaxy']],
	first: 22132
}];

app.key = '4942dc56429aee1738502cc2a2ed49b4';
app.key1 = 'b0ade3991248784770fbab470064c3ca';
app.chosenCharacters = [];
app.username = '';
app.guessCount = 9;

app.startGame = function () {
	$('.start-game-submit').on('click', function (e) {
		e.preventDefault();
		var playerName = $('.player-name').val();
		if (playerName === '') {
			alert('Please enter your name to play');
		} else {
			app.username = playerName;
			app.getRandom();
			$('.hide-on-submit').css('display', 'none');
			$('.game-play').removeClass('hide-on-load');
			$('.guess-count span').text(app.guessCount);
		}
	});
};

app.getRandom = function () {
	var all = app.characters;
	var random6 = _.sample(all, 3);
	app.chosenCharacters = random6;
	app.getCharacterData();
};

app.getCharacterData = function () {
	var chosen = app.chosenCharacters;
	chosen.forEach(function (item) {
		$.ajax({
			url: 'https://gateway.marvel.com:443/v1/public/characters/' + item.id + '?apikey=' + app.key,
			method: 'GET',
			dataType: 'json'
		}).then(function (res) {
			var characterData = res.data.results[0];
			item.facts[6] = ['Number of Appearances: ' + characterData.comics.available];
			item.image = characterData.thumbnail.path;
		});
	});
	app.getFirstAppearanceData();
};
app.getFirstAppearanceData = function () {
	var chosen = [];
	app.chosenCharacters.forEach(function (item) {
		$.ajax({
			url: 'https://gateway.marvel.com:443/v1/public/comics/' + item.first + '?apikey=' + app.key,
			method: 'GTE',
			dataType: 'jsonp'
		}).then(function (res) {
			var fristData = res.data.results[0];
			item.firstCover = fristData.thumbnail.path;
			chosen.push(item);
			if (chosen.length === app.chosenCharacters.length) {
				app.chosenCharacters = chosen;
				app.getBackgroundImage();
				app.parseData();
			}
		});
	});
};

app.getBackgroundImage = function () {
	var chosen = app.chosenCharacters;
	chosen.forEach(function (item, index) {
		var number = index + 1;
		$('.comic-backgroud-images .image-' + number).css('background-image', 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(\'' + item.firstCover + '.jpg\')');
	});
};

app.parseData = function () {
	var chosen = app.chosenCharacters;
	chosen.forEach(function (item, index) {
		var number = index + 1;
		var character = $('<div class="character-card" data-id="' + item.id + '">');
		var facts = $('<div>').addClass('facts');
		var chosenfacts = _.sample(item.facts, 3);
		chosenfacts.forEach(function (item) {
			facts.append('<p>' + item[0] + '</p>');
		});
		var guess = $('<input type="text" name="guess" class="guess" data-number=' + number + ' placeholder="Your Guess" required>').addClass('guess-' + number);
		var guessLabel = $('<label for="guess" class="SRT">').text('Your Guess Here');
		var guessSubmit = $('<button class="guess-submit" data-number="' + number + '">').addClass('guess-submit-' + number).text('Guess');
		character.append(facts, guess, guessLabel, guessSubmit);
		$('.chosen-characters').append(character);
	});
	app.handleGuess();
};

app.handleGuess = function () {
	$('.guess-submit').on('click', function (e) {
		app.guessCount = app.guessCount - 1;
		$('.guess-count span').text(app.guessCount);
		var buttonNumber = $(this).data('number');
		var characterCardId = $(this).parent().data('id');
		var findById = _.find(app.characters, function (x) {
			var id = x.id;
			if (id === characterCardId) {
				return x;
			}
		});
		var characterName = findById.name.toLowerCase();
		var userGuess = $('.guess-' + buttonNumber).val().toLowerCase();
		if (characterName === userGuess) {
			app.correctAnswer(characterCardId);
		} else {
			$('.guess-' + buttonNumber).val("");
			$('.guess-' + buttonNumber).attr('placeholder', 'Try Again...');
			app.checkCount();
		}
	});
};
app.correctAnswer = function (id) {
	var currentCard = $('.chosen-characters').find('[data-id=\'' + id + '\']');
	var findCharacter = _.find(app.characters, function (x) {
		if (x.id === id) {
			return x;
		}
	});
	currentCard.empty();
	var successfulGuess = $('<p>').text('Success!!');
	var characterName = $('<p>').text(findCharacter.name);
	var characterPhoto = $('<img>').attr('src', findCharacter.image + '.jpg');
	var characterDiv = $('<div class="guessed-character">').append(successfulGuess, characterPhoto, characterName);
	currentCard.append(characterDiv).addClass('success');
	app.checkCorrect();
};

app.checkCorrect = function () {
	var successfulCards = $('.chosen-characters').find('.success');
	if (successfulCards.length === 3) {
		$('.winner').removeClass('hide-until-won');
	}
};

app.checkCount = function () {
	if (app.guessCount === 0) {
		$('.loser').removeClass('hide-until-lost');
	}
};

app.init = function () {
	app.startGame();
};

$(function () {
	app.init();
});