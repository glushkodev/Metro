class Page {
	constructor() {
		this.title = 'Contacts page';
	}

	create() {
		let elem = document.createElement('div');
		elem.classList.add('main__content','content');

		let contacts = document.createElement('div');
		contacts.classList.add('contacts');

		let contactsHeader = document.createElement('div');
			contactsHeader.classList.add('contacts__header');

			let contactsHeaderTitle = document.createElement('h2');
				contactsHeaderTitle.classList.add('contacts__header_title');
				contactsHeaderTitle.textContent = `Contact us`;

				let contactsHeaderDesc = document.createElement('p');
				contactsHeaderDesc.classList.add('contacts__header_desc');
				contactsHeaderDesc.textContent = `Welcome to Metro – your trusted online shopping destination! We’re here to provide you with high-quality products, exceptional service, and a seamless shopping experience. If you have any questions, feedback, or need assistance, don’t hesitate to reach out.`;

			let contactsMain = document.createElement('div');
			contactsMain.classList.add('contacts__main');

				let contactsMainLeft = document.createElement('div');
				contactsMainLeft.classList.add('contacts__main_left');

					let contactsMainLeftAdr = document.createElement('div');
					contactsMainLeftAdr.classList.add('contacts__main_left_item');
						let contactsMainLeftAdrIco = document.createElement('img');
						contactsMainLeftAdrIco.classList.add('contacts__main_left_item_img');
						contactsMainLeftAdrIco.src = `src/images/ico_location.svg`;
						contactsMainLeftAdrIco.alt = `ico_location`;

						let contactsMainLeftAdrTitle = document.createElement('span');
						contactsMainLeftAdrTitle.classList.add('contacts__main_left_item_title');
						contactsMainLeftAdrTitle.textContent = `Address`;

						let contactsMainLeftAdrLink = document.createElement('a');
						contactsMainLeftAdrLink.classList.add('contacts__main_left_item_link');
						contactsMainLeftAdrLink.target = "blank";
						contactsMainLeftAdrLink.href = `https://maps.google.com/`;
						contactsMainLeftAdrLink.textContent = `123 Retail Street, Suite 101, New York, NY 10001, USA`;

					let contactsMainLeftEmail = document.createElement('div');
					contactsMainLeftEmail.classList.add('contacts__main_left_item');

						let contactsMainLeftEmailIco = document.createElement('img');
						contactsMainLeftEmailIco.classList.add('contacts__main_left_item_img');
						contactsMainLeftEmailIco.src = `src/images/ico_letter.svg`;
						contactsMainLeftEmailIco.alt = `ico_letter`;

						let contactsMainLeftEmailTitle = document.createElement('span');
						contactsMainLeftEmailTitle.classList.add('contacts__main_left_item_title');
						contactsMainLeftEmailTitle.textContent = `Email`;

						let contactsMainLeftEmailLink = document.createElement('a');
						contactsMainLeftEmailLink.classList.add('contacts__main_left_item_link');
						contactsMainLeftEmailLink.href = `mailto:support@metro.com,biz@metro.com`;
						contactsMainLeftEmailLink.textContent = `support@metro.com, biz@metro.com`;

					let contactsMainLeftPhone = document.createElement('div');
					contactsMainLeftPhone.classList.add('contacts__main_left_item');

						let contactsMainLeftPhoneIco = document.createElement('img');
						contactsMainLeftPhoneIco.classList.add('contacts__main_left_item_img');
						contactsMainLeftPhoneIco.src = `src/images/ico_phone.svg`;
						contactsMainLeftPhoneIco.alt = `ico_phone`;

						let contactsMainLeftPhoneTitle = document.createElement('span');
						contactsMainLeftPhoneTitle.classList.add('contacts__main_left_item_title');
						contactsMainLeftPhoneTitle.textContent = `Call us`;

						let contactsMainLeftPhoneLink = document.createElement('a');
						contactsMainLeftPhoneLink.classList.add('contacts__main_left_item_link');
						contactsMainLeftPhoneLink.href = `tel:1 (234) 567-891, 1 (234) 987-654`;
						contactsMainLeftPhoneLink.textContent = `1 (234) 567-891, 1 (234) 987-654`;

					let contactsMainLeftText = document.createElement('div');
					contactsMainLeftText.classList.add('contacts__main_left_item');

						let contactsMainLeftTextIco = document.createElement('img');
						contactsMainLeftTextIco.classList.add('contacts__main_left_item_img');
						contactsMainLeftTextIco.src = `src/images/ico_contact.svg`;
						contactsMainLeftTextIco.alt = `ico_contact`;

						let contactsMainLeftTextTitle = document.createElement('span');
						contactsMainLeftTextTitle.classList.add('contacts__main_left_item_title');
						contactsMainLeftTextTitle.textContent = `Contact us`;

						let contactsMainLeftTextDesc = document.createElement('div');
						contactsMainLeftTextDesc.classList.add('contacts__main_left_item_text');
						contactsMainLeftTextDesc.textContent = `Contact us for a quote, help out or join the team.`;

				let contactsMainMap = document.createElement('div');
				contactsMainMap.classList.add('contacts__main_map');
				contactsMainMap.innerHTML = `
				<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d96715.64015078463!2d-73.93836576791607!3d40.754023549820396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sby!4v1746000578152!5m2!1sru!2sby" width="100%;" height="450px;"></iframe>
				`

		contactsMainLeftText.append(contactsMainLeftTextIco, contactsMainLeftTextTitle, contactsMainLeftTextDesc);
		contactsMainLeftPhone.append(contactsMainLeftPhoneIco, contactsMainLeftPhoneTitle, contactsMainLeftPhoneLink)
		contactsMainLeftEmail.append(contactsMainLeftEmailIco, contactsMainLeftEmailTitle, contactsMainLeftEmailLink)	
		contactsMainLeftAdr.append(contactsMainLeftAdrIco, contactsMainLeftAdrTitle, contactsMainLeftAdrLink);
		contactsMainLeft.append(contactsMainLeftAdr, contactsMainLeftEmail, contactsMainLeftPhone, contactsMainLeftText);
		contactsMain.append(contactsMainLeft, contactsMainMap);
		contactsHeader.append(contactsHeaderTitle, contactsHeaderDesc);
		contacts.append(contactsHeader, contactsMain);

		elem.append(contacts);

		return elem;
	}

	init() {
		let elem = this.create();

		return elem;
	}
}

let obj = new Page();
let elem = obj.init();
let elemTitle = obj.title;
export {elem as page, elemTitle as pageTitle};