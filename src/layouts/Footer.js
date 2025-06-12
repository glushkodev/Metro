class Footer {
	create() {
		let elem = document.createElement('footer');
		elem.classList.add('footer');

		let elemContainer = document.createElement('div');
		elemContainer.classList.add('container');

		elem.append(elemContainer);

		return [elem, elemContainer];
	}

	createLogo() {
		let elem = document.createElement('div');
		elem.classList.add('footer__logo');

		let link = document.createElement('a');
		link.href = "/";

			let img = document.createElement('img');
			img.src = "/images/logo_black.png";
			img.alt = "#";

		link.appendChild(img);
		elem.appendChild(link);

		return elem;
	}

	createContacts() {
		let elem = document.createElement('ul');
		elem.classList.add('footer__contacts');

		let contactsItem1 = document.createElement('li');
		contactsItem1.classList.add('footer__contacts_item');

			let contactsItemImg1 = document.createElement('img');
			contactsItemImg1.classList.add('footer__contacts_ico');
			contactsItemImg1.src = "/images/ico_location.svg";
			contactsItemImg1.alt = "location";

			let contactsItemLink1 = document.createElement('a');
			contactsItemLink1.classList.add("footer__contacts_link");
			contactsItemLink1.target = "_blank";
			contactsItemLink1.href = "https://maps.google.com/";
			contactsItemLink1.textContent = "59 Street, Newyork City, Rose Town, 05 Rive House";

		let contactsItem2 = document.createElement('li');
		contactsItem2.classList.add('footer__contacts_item');

			let contactsItemImg2 = document.createElement('img');
			contactsItemImg2.classList.add('footer__contacts_ico');
			contactsItemImg2.src = "/images/ico_phone.svg";
			contactsItemImg2.alt = "phone";

			let contactsItemLink2 = document.createElement('a');
			contactsItemLink2.classList.add("footer__contacts_link");
			contactsItemLink2.href = "tel:1234567890";
			contactsItemLink2.textContent = "+123 456 7890";

		let contactsItem3 = document.createElement('li');
		contactsItem3.classList.add('footer__contacts_item');

			let contactsItemImg3 = document.createElement('img');
			contactsItemImg3.classList.add('footer__contacts_ico');
			contactsItemImg3.src = "/images/ico_letter.svg";
			contactsItemImg3.alt = "letter";

			let contactsItemLink3 = document.createElement('a');
			contactsItemLink3.classList.add("footer__contacts_link");
			contactsItemLink3.href = "mailto:info@example.com";
			contactsItemLink3.textContent = "info@metro.com";

	contactsItem3.append(contactsItemImg3, contactsItemLink3);
	contactsItem2.append(contactsItemImg2, contactsItemLink2);
	contactsItem1.append(contactsItemImg1, contactsItemLink1);
	elem.append(contactsItem1, contactsItem2, contactsItem3);

		return elem;
	}

	init() {
		let elems = this.create();

		let logoElem = this.createLogo();
		let contactsElem = this.createContacts();

		if (logoElem) elems[1].append(logoElem);
		if (contactsElem) elems[1].append(contactsElem);

		return elems[0];
	}
}

let footer = new Footer().init();
export {footer};