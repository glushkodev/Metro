class CartWidget {
	create() {
		let elem = document.createElement('div');
		elem.classList.add('header__cart', 'cart_widget');

		let counterElem = document.createElement('span');
		counterElem.classList.add('cart_widget__count');
		counterElem.innerHTML = 0;

		let totalElem = document.createElement('span');
		totalElem.classList.add('cart_widget__total');
		totalElem.innerHTML = `$${0}`;

		let widgetItem1 = document.createElement('div');
		widgetItem1.classList.add('cart_widget__item'); 

			let widgetItemLink = document.createElement('a');
			widgetItemLink.classList.add('cart_widget__link');
			widgetItemLink.href = '/#cart/';
			widgetItemLink.innerHTML = `${counterElem.outerHTML}`;

				let widgetItemImg = document.createElement('img');
				widgetItemImg.src = 'src/images/ico_cart.png';
				widgetItemImg.alt = 'cart';

		let widgetItem2 = document.createElement('div');
		widgetItem1.classList.add('cart_widget__item');
		widgetItem2.innerHTML = `${totalElem.outerHTML}`;

		widgetItemLink.append(widgetItemImg);
		widgetItem1.append(widgetItemLink)
		elem.append(widgetItem1, widgetItem2);

		return elem;
	}

	init() {
		let elem = this.create();

		return elem;
	}
}

let cartWidget = new CartWidget().init();
export {cartWidget};