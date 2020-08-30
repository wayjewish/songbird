const data = [
  [       
    {
      id: 1,
      name: 'Minecraft',
      species: 'Копал землю говядиной, потом её съел',
      description: 'Строительная игра жанра «песочница». Игра позволяет игрокам создавать и разрушать различные блоки и использовать предметы в трёхмерном окружении.',
      image: 'minecraft.jpg',
      audio: 'minecraft.mp3'
    },
    {
      id: 2,
      name: 'Counter-Strike: Global Offensive',
      species: 'Rush B syka blyat',
      description: 'Мультиплеерный шутер от первого лица, призванный углубить и усовершенствовать ту самую командную игровую механику «пять на пять», за которую все и полюбили Counter-Strike.',
      image: 'counter strike.jpg',
      audio: 'counter strike.mp3'
    },
    {
      id: 3,
      name: 'GTA San Andreas',
      species: '«Ah shit, here we go again»',
      description: 'Компьютерная игра из серии Grand Theft Auto в жанре 3D-шутера с элементами аркадного автосимулятора, разработанная Rockstar North. Это третья 3D-игра в серии и пятая в линейке основных проектов.',
      image: 'san andreas.jpg',
      audio: 'san andreas.mp3'
    },
    {
      id: 4,
      name: 'Mortal Kombat',
      species: 'Подожди, не бей. Я кое-что попробую',
      description: 'Серия видеоигр известна высоким уровнем насилия. Ранние игры серии были особенно известны реалистичными спрайтами из оцифрованных движений живых актёров, а также частым использованием смены палитры для создания новых персонажей.',
      image: 'mortal kombat.jpg',
      audio: 'mortal kombat.mp3'
    },
    {
      id: 5,
      name: 'Half-Life 2',
      species: 'Half-Life 3 - не дождешься',
      description: 'Научно-фантастический шутер от первого лица, разработанный Valve Corporation и выпущенный 16 ноября 2004 года после длительного пятилетнего периода развития.',
      image: 'half-life 2.jpg',
      audio: 'half-life 2.mp3'
    },
    {
      id: 6,
      name: 'S.T.A.L.K.E.R.',
      species: '«Чики-Брики и в дамки»',
      description: 'Франшиза, название вымышленной вселенной, которая создана на основе повести «Пикник на обочине» братьев Стругацких, снятого по её мотивам фильма режиссёра Андрея Тарковского «Сталкер» и реальной Чернобыльской зоны.',
      image: 'stalker.jpg',
      audio: 'stalker.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'DOOM',
      species: 'Неутолимый голод преисподней',
      description: 'Doom является одной из самых значительных и влиятельных компьютерных игр в истории индустрии; в частности, её популярность во многом определила дальнейшее развитие и распространение жанра шутеров от первого лица.',
      image: 'doom.jpg',
      audio: 'doom.mp3'
    },
    {
      id: 2,
      name: 'Metro 2033',
      species: '«Люди всегда умели убивать лучше, чем любое другое существо.»',
      description: 'Психологический хоррор от первого лица. Действия разворачиваются в будущем, в пост-апокалиптическом мире, в котором игроку предстоит взять контроль над Артемом, молодым человеком, путешествующим вместе со своим отрядом по метро и снаружи.',
      image: 'metro 2033.jpg',
      audio: 'metro 2033.mp3'
    },
    {
      id: 3,
      name: 'Max Payne',
      species: '«Снег всё падал и падал, как конфетти на празднике дьявола.»',
      description: 'Компьютерная игра, в жанре шутера от третьего лица, разработанная финской компанией Remedy Entertainment и изданная 3D Realms. Игра повествует о себе историю мести полицейского, семью которого убили наркоманы.',
      image: 'max paine.jpg',
      audio: 'max paine.mp3'
    },
    {
      id: 4,
      name: 'Battlefield 4',
      species: 'Врезался в дом, разбил дом',
      description: 'События игры разворачиваются в наше время в 2020 году. Игрок в роли сержанта Дэниела Рекера, выступающим членом разведотряда “Могильщик”, отправляется на спецоперацию в Баку, чтобы получить важную информацию от скрывающегося русского генерала.',
      image: 'battlefield 4.jpg',
      audio: 'battlefield 4.mp3'
    },
    {
      id: 5,
      name: 'Borderlands',
      species: '«Guns, guns everywhere!»',
      description: 'Действие разворачивается на малонаселенной и пустынной планете Пандора, где действует только один закон – закон оружия и силы.',
      image: 'borderlands.jpg',
      audio: 'borderlands.mp3'
    },
    {
      id: 6,
      name: 'Call of Duty Modern Warfare 2',
      species: '«Помните: ни слова по-русски»',
      description: 'Вторая часть знаменитой трилогии о современной войне из легендарной серии шутеров Call of Duty. Борьба с терроризмом продолжается, противостоять врагу предстоит в разных регионах планеты.',
      image: 'call of duty 4 MW 2.jpg',
      audio: 'call of duty 4 MW 2.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Stardew Valley',
      species: 'Помидорки или кукуруза? 🤔',
      description: 'Вам досталась старая дедушкина ферма в долине Стардью. С горстью монет в кармане и старыми инструментами в руках вы начинаете новую жизнь. Сможете ли вы превратить пустырь в цветущий сад?',
      image: 'stardew valley.jpg',
      audio: 'stardew valley.mp3'
    },
    {
      id: 2,
      name: 'Hotline Miami',
      species: '«Нравится ли тебе причинять боль другим людям?»',
      description: 'Адреналиновый боевик, полный первобытной жестокости, смертельно опасных перестрелок и крышесносящих драк. Место действия — альтернативный город Майами 1989 года, где вам предстоит вжиться в шкуру загадочного антигероя.',
      image: 'hotline miami.jpg',
      audio: 'hotline miami.mp3'
    },
    {
      id: 3,
      name: 'Undertale',
      species: 'Когда вышел из дома без разрешения',
      description: 'Игрок управляет ребёнком, который случайно упал в яму и попал в Подземелье, в большой изолированный от людей мир. В попытках вернуться домой игрок встречает множество различных существ, некоторые из которых относятся к нему враждебно.',
      image: 'undertale.jpg',
      audio: 'undertale.mp3'
    },
    {
      id: 4,
      name: 'RimWorld',
      species: 'Симулятор депрессии колонистов из-за отсутствия коврика в тронном зале',
      description: 'Компьютерная игра в жанре симулятор строительства и управления. Цель игры состоит в том, чтобы построить в предоставленных условиях колонию и выжить для того, чтобы построить корабль и улететь, закончив таким образом игру.',
      image: 'rimworld.jpg',
      audio: 'rimworld.mp3'
    },
    {
      id: 5,
      name: 'The Binding of Isaac',
      species: '«И отделил в тот день козлов пестрых и с пятнами»',
      description: 'Когда мать Исаака слышит голос Бога, требующего принесения жертвы в доказательство ее веры, Исаак бежит в подвал, но сталкивается там с толпами безумных врагов, своими потерянными братьями и сестрами, своими страхами и, наконец, с собственной матерью.',
      image: 'the binding of isaac.jpg',
      audio: 'the binding of isaac.mp3'
    },
    {
      id: 6,
      name: 'Transistor',
      species: '«Они забрали твой голос.»',
      description: 'Научно-фантастическая игра в жанре Action RPG от создателей Bastion, в которой вам предстоит путешествовать по завораживающему футуристическому городу, защищая свою жизнь при помощи невероятного оружия неизвестного происхождения.',
      image: 'transistor.jpg',
      audio: 'transistor.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Fallout 3',
      species: '«Война. Война никогда не меняется»',
      description: 'Земля превратилась в выжженную пустыню. Не было ни проигравших, ни победителей. Лишь немногим удалось спастись от губительной радиации в специальных убежищах, выстроенных незадолго до разразившейся катастрофы.',
      image: 'fallout 3.jpg',
      audio: 'fallout 3.mp3'
    },
    {
      id: 2,
      name: 'Mass Effect 3',
      species: 'Нормандия: построй свою любовь',
      description: 'Действия игры происходят в конце XXII века в галактике Млечный Путь. Сюжет продолжает историю Шепарда – капитана звёздного корабля «Нормандия». Угроза нашествия Жнецов – разумных машин, уничтожающих всё живое, стала реальностью.',
      image: 'mass effect 3.jpg',
      audio: 'mass effect 3.mp3'
    },
    {
      id: 3,
      name: 'The Witcher 3: Wild Hunt',
      species: '«Где тут дрын какой-нибудь?»',
      description: 'Заключительная часть трилогии, по мотивам серии романов «Ведьмак» польского писателя Анджея Сапковского. В центре сюжета новое вторжение Империи Нильфгаард, поиски Цири и конфликт с Дикой Охотой.',
      image: 'witcher 3.jpg',
      audio: 'witcher 3.mp3'
    },
    {
      id: 4,
      name: 'The Elder Scrolls V: Skyrim',
      species: '«Дай-ка угадаю - кто-то украл твой сладкий рулет...»',
      description: 'Одиночная ролевая компьютерная игра. Пятая часть в серии The Elder Scrolls. Действие происходит через 200 лет после событий Oblivion.',
      image: 'skyrim.jpg',
      audio: 'skyrim.mp3'
    },
    {
      id: 5,
      name: 'Deus Ex: Human Revolution',
      species: '«Я никого об этом не просил»',
      description: 'Компьютерная игра в жанре шутер от первого лица/ролевая игра, выполненная в стилистике киберпанк, разработанная компанией Eidos Montreal и выпущенная компанией Square Enix.',
      image: 'deus ex.jpg',
      audio: 'deus ex.mp3'
    },
    {
      id: 6,
      name: 'Dark Souls',
      species: 'Не доверяй сундукам',
      description: 'Видеоигра в жанре action/RPG, разработанная компанией From Software. Первоначально анонсированная как Project Dark, являет собой духовного наследника предыдущей игры от той же From Software — Demon\'s Souls.',
      image: 'dark souls.jpg',
      audio: 'dark souls.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Need for Speed Underground 2',
      species: 'Эрон дон дон',
      description: 'Сиквел одноименной игры, в которой гонщик Райан Купер соревнуется с уличной бандой Калеба, добиваясь признания и господства на улицах города. Действие переносится из Олимпик-Сити в Бейвью, напоминающий Лос-Анжелес и Лас-Вегас.',
      image: 'underground 2.jpg',
      audio: 'underground 2.mp3'
    },
    {
      id: 2,
      name: 'Need for Speed Most Wanted',
      species: '«Ты должен возглавить черный список»',
      description: 'В игре описывается драйвовая история уличного гонщика, включающая в себя как колоритных героев, так и грязные интриги наряду с предательствами и крутыми поворотами в буквальном смысле.',
      image: 'most wanted.jpg',
      audio: 'most wanted.mp3'
    },
    {
      id: 3,
      name: 'Colin McRae DiRT 2',
      species: 'Дань памяти Колину МаКрею',
      description: 'В DiRT 2 игроку предстоит соревноваться с такими знаменитыми гонщиками, как Кен Блок, Трэвис Пастрана, Дэйв Мирра, Таннер Фауст, Мохаммед бин Сулайем и другие.',
      image: 'DIRT 2.jpg',
      audio: 'DIRT 2.mp3'
    },
    {
      id: 4,
      name: 'Race Driver: GRID',
      species: 'Занимательная экскурсия в мир автоспорта',
      description: 'Race Driver: GRID – гоночный симулятор, седьмая игра в серии ToCA Race Driver. Игроку предстоит стать лидером своей собственной команды водителей, объездить Европу, Америку и даже побывать в Японии.',
      image: 'grid.jpg',
      audio: 'grid.mp3'
    },
    {
      id: 5,
      name: 'FlatOut',
      species: 'Построена на разрушении всего вокруг',
      description: 'Игра заслужила популярность не только из-за жестокого обращения к автомобилям и всему вокруг, но и из-за реалистичного вождения, грамотно воссозданной механики поворотливости автомобиля в зависимости от его веса.',
      image: 'flatout 2.jpg',
      audio: 'flatout 2.mp3'
    },
    {
      id: 6,
      name: 'Burnout Paradise',
      species: 'Не хотите ли машину всмятку?',
      description: 'Сосредотачивается на гоночных соревнованиях с акцентом на аварии и опасное вождение. Основным нововведением стало наличие открытого мира — игрок может свободно разъезжать по вымышленному городу Парадайз-Сити.',
      image: 'burnout paradise.jpg',
      audio: 'burnout paradise.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'DEATH STRANDING',
      species: 'Кодзима гений',
      description: 'Сэм Бриджес должен преодолеть мир, трансформированный Петлёй смерти. Держа в своих руках бессвязные остатки нашего будущего, он отправился в дорогу, чтобы восстановить связь между осколками мира.',
      image: 'death stranding.jpg',
      audio: 'death stranding.mp3'
    },
    {
      id: 2,
      name: 'DmC: Devil May Cry',
      species: '«Обратно в лимбо»',
      description: 'Перезапуск знаменитой франшизы. Игра представляет собой смесь жанров слэшер и приключенческого боевика с элементами платформера в плане перемещения по локациям и RPG в плане открытия новых навыков и умений.',
      image: 'dmc.jpg',
      audio: 'dmc.mp3'
    },    
    {
      id: 3,
      name: 'World of Warcraft',
      species: '«Лок\'тар огар!»',
      description: 'Массовая многопользовательская ролевая онлайн-игра, разработанная и издаваемая компанией Blizzard Entertainment. Действие World of Warcraft происходит в фэнтезийной вселенной Warcraft.',
      image: 'wow.jpg',
      audio: 'wow.mp3'
    },
    {
      id: 4,
      name: 'Sekiro: Shadows Die Twice',
      species: '«Какие шиноби? Эт че Наруто?»',
      description: 'Вы «однорукий волк», изуродованный воин-изгой, которого спасли от верной смерти. Поклявшись защищать молодого господина, вы наживаете много опасных противников, среди которых — безжалостный клан Асина.',
      image: 'sekiro.jpg',
      audio: 'sekiro.mp3'
    },
    {
      id: 5,
      name: 'Ori and the Blind Forest',
      species: '«Свет без сосуда — ничто»',
      description: 'После того, как мощный шторм запустил цепочку разрушительных событий, наш бесславный герой должен отправиться в путь, чтобы найти свое мужество и сразиться с заклятым врагом, чтобы спасти свой дом.',
      image: 'ori.jpg',
      audio: 'ori.mp3'
    },
    {
      id: 6,
      name: 'Cyberpunk 2077',
      species: '«Wake the f*** Up Samurai»',
      description: 'Cyberpunk 2077 — приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего.',
      image: 'cyberpunk.jpg',
      audio: 'cyberpunk.mp3'
    }
  ]
];

export default data;