class Nav {
	create() {
		let elem = document.createElement('nav');
		elem.classList.add('header__nav','nav');

		let navList = document.createElement('ul');
		navList.classList.add('nav__list');

			let navItem1 = document.createElement('li');
			navItem1.className = 'nav__item';

				let navLink1 = document.createElement('a');
				navLink1.className = 'nav__link';
				navLink1.href = '/';
				navLink1.textContent = 'Home';
	
			let navItem2 = document.createElement('li');
			navItem2.className = 'nav__item';

				let navLink2 = document.createElement('a');
				navLink2.className = 'nav__link';
				navLink2.href = '/#catalog/';
				navLink2.textContent = 'Shop';

			let navItem3 = document.createElement('li');
			navItem3.className = 'nav__item';

				let navLink3 = document.createElement('a');
				navLink3.className = 'nav__link';
				navLink3.href = '/#contacts/';
				navLink3.textContent = 'Contacts';

		navItem3.append(navLink3);
		navItem2.append(navLink2);
		navItem1.append(navLink1);
		navList.append(navItem1, navItem2, navItem3);
		elem.append(navList);

		return elem;
	}

	init() {
		let elem = this.create();

		return elem;
	}
}

let nav = new Nav().init();
export {nav};