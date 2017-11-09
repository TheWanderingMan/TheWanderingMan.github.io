var news = id('navNews');
			var labs = id('navLabs');
			var newsP = id('navNewsP');
			var labsP = id('navLabsP');
			var newsCotent = id('box-1');
			var labsCotent = id('box-2')
			function add() {
				addClass(news, 'navShow');
				addClass(newsP, 'navBorder');
				removeClass(newsP, 'navColor');
				addClass(labsP, 'navColor')
				removeClass(labsP, 'navBorder');
				addClass(newsCotent,'navShow');
				removeClass(labsCotent,'navShow');
			}

			function remove() {
				removeClass(news, 'navShow');
			}
			bind(news, 'touchstart', add);
			bind(news, 'touchend', remove);

			function add1() {
				addClass(labs, 'navShow');
				addClass(labsP, 'navBorder');
				removeClass(newsP, 'navBorder');
				removeClass(newsP, 'navColor');
				addClass(newsP, 'navColor')
				removeClass(labsP, 'navColor');
				removeClass(newsCotent,'navShow')
				addClass(labsCotent,'navShow');
			}

			function remove1() {
				removeClass(labs, 'navShow');
			}

			bind(labs, 'touchstart', add1);
			bind(labs, 'touchend', remove1);