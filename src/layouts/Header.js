import { nav } from './Nav.js';
import { cartWidget } from '../components/CartWidget.js';

class Header {
	create() {
		let elem = document.createElement('header');
		elem.classList.add('header');

		let elemContainer = document.createElement('div');
		elemContainer.classList.add('container');

		elem.append(elemContainer);

		return [elem, elemContainer];
	}

	createLogo() {
		let elem = document.createElement('div');
		elem.classList.add('header__logo');

		let link = document.createElement('a');
		link.href = "/";

			let logoImg = document.createElement('img');
			logoImg.src = "/images/logo_black.png";
			logoImg.alt = "logo";

		link.append(logoImg);
		elem.append(link);
		return elem;
	}

	init() {
		let elems = this.create();

		let logoElem = this.createLogo();

		if (logoElem) elems[1].append(logoElem);
		if (nav) elems[1].append(nav);
		if (cartWidget) elems[1].append(cartWidget);

		return elems[0];
	}
}

let header = new Header().init();
export {header};