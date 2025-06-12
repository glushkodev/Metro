class Page {
	constructor() {
		this.title = 'Home page';
	}

	create() {
		let elem = document.createElement('div');
		elem.classList.add('main__content','content');

		let home = document.createElement('div');
		home.classList.add('home');

			let homeTitle = document.createElement('h2');
			homeTitle.classList.add('home__title');
			homeTitle.textContent = 'Welcome to Metro – Your Ultimate Shopping Destination';

			let homeDesc = document.createElement('p');
			homeDesc.classList.add('home__descr');
			homeDesc.textContent = `At Metro, we believe shopping should be effortless, enjoyable, and tailored just for you. Whether you're searching for the latest trends, everyday essentials, or unique finds, our curated collection offers something special for everyone. With a focus on quality, affordability, and fast delivery, we’re here to redefine your online shopping experience.`;

			let homeAdv = document.createElement('div');
			homeAdv.classList.add('home__adv');

				let homeAdvHeader = document.createElement('div');
				homeAdvHeader.classList.add('home__adv_header');
				
					let homeAdvHeaderTop = document.createElement('h3');
					homeAdvHeaderTop.classList.add('home__adv_header_top');
					homeAdvHeaderTop.textContent = 'Advantages';
					
					let homeAdvHeaderTitle = document.createElement('h3');
					homeAdvHeaderTitle.classList.add('home__adv_header_title');
					homeAdvHeaderTitle.textContent = 'Why Choose Metro?';

					let homeAdvHeaderDescr = document.createElement('p');
					homeAdvHeaderDescr.classList.add('home__adv_header_descr');
					homeAdvHeaderDescr.textContent = `At Metro, we’ve reimagined online shopping to make it effortless, personalized, and truly rewarding. We take pride in our carefully curated selection — every product in our catalog is handpicked for quality, style, and value. Whether you’re upgrading your wardrobe, tech setup, or home decor, you’ll find thoughtfully designed items that blend functionality with aesthetics. Our partnerships with trusted brands and emerging designers ensure fresh arrivals and exclusive pieces you won’t find elsewhere. Speed and reliability are at our core. With optimized logistics, your orders are processed within hours and delivered via flexible options: same-day courier service in major cities, doorstep delivery with real-time tracking, or easy pickup from our network of secure lockers. Plus, our no-hassle returns make every purchase risk-free. Shopping with us is safe and transparent.`;
				
				let homeAdvBtm = document.createElement('div');
				homeAdvBtm.classList.add('home__adv_btm');

					let homeAdvBtmItem1 = document.createElement('div');
					homeAdvBtmItem1.classList.add('home__adv_btm_item');

						let homeAdvBtmItemImg1 = document.createElement('img');
						homeAdvBtmItemImg1.classList.add('home__adv_btm_item_img');
						homeAdvBtmItemImg1.src = `/images/home_selection.png`;
						homeAdvBtmItemImg1.alt = `ico_selection`;

						let homeAdvBtmItemTitle1 = document.createElement('div');
						homeAdvBtmItemTitle1.classList.add('home__adv_btm_item_title');
						homeAdvBtmItemTitle1.textContent = `Wide Selection`;

						let homeAdvBtmItemText1 = document.createElement('div');
						homeAdvBtmItemText1.classList.add('home__adv_btm_item_text');
						homeAdvBtmItemText1.textContent = `Explore thousands of products across fashion, electronics, home goods, and more—all in one place`;

					let homeAdvBtmItem2 = document.createElement('div');
					homeAdvBtmItem2.classList.add('home__adv_btm_item');

						let homeAdvBtmItemImg2 = document.createElement('img');
						homeAdvBtmItemImg2.classList.add('home__adv_btm_item_img');
						homeAdvBtmItemImg2.src = `/images/home_secure.png`;
						homeAdvBtmItemImg2.alt = `ico_secure`;

						let homeAdvBtmItemTitle2 = document.createElement('div');
						homeAdvBtmItemTitle2.classList.add('home__adv_btm_item_title');
						homeAdvBtmItemTitle2.textContent = `Secure Shopping`;

						let homeAdvBtmItemText2 = document.createElement('div');
						homeAdvBtmItemText2.classList.add('home__adv_btm_item_text');
						homeAdvBtmItemText2.textContent = `Shop with confidence thanks to our 100% secure payment system and buyer protection policies`;
		
					let homeAdvBtmItem3 = document.createElement('div');
					homeAdvBtmItem3.classList.add('home__adv_btm_item');

						let homeAdvBtmItemImg3 = document.createElement('img');
						homeAdvBtmItemImg3.classList.add('home__adv_btm_item_img');
						homeAdvBtmItemImg3.src = `/images/home_rocket.png`;
						homeAdvBtmItemImg3.alt = `ico_rocket`;

						let homeAdvBtmItemTitle3 = document.createElement('div');
						homeAdvBtmItemTitle3.classList.add('home__adv_btm_item_title');
						homeAdvBtmItemTitle3.textContent = `Fast & Reliable Delivery`;

						let homeAdvBtmItemText3 = document.createElement('div');
						homeAdvBtmItemText3.classList.add('home__adv_btm_item_text');
						homeAdvBtmItemText3.textContent = `Get your orders delivered to your doorstep in record time`;	

					let homeAdvBtmItem4 = document.createElement('div');
					homeAdvBtmItem4.classList.add('home__adv_btm_item');

						let homeAdvBtmItemImg4 = document.createElement('img');
						homeAdvBtmItemImg4.classList.add('home__adv_btm_item_img');
						homeAdvBtmItemImg4.src = `/images/home_exclusive.png`;
						homeAdvBtmItemImg4.alt = `ico_exclusive`;

						let homeAdvBtmItemTitle4 = document.createElement('div');
						homeAdvBtmItemTitle4.classList.add('home__adv_btm_item_title');
						homeAdvBtmItemTitle4.textContent = `Exclusive Deals`;

						let homeAdvBtmItemText4 = document.createElement('div');
						homeAdvBtmItemText4.classList.add('home__adv_btm_item_text');
						homeAdvBtmItemText4.textContent = `Enjoy member-only discounts, seasonal sales, and early access to new arrivals`;

		homeAdvBtmItem4.append(homeAdvBtmItemImg4, homeAdvBtmItemTitle4, homeAdvBtmItemText4);
		homeAdvBtmItem3.append(homeAdvBtmItemImg3, homeAdvBtmItemTitle3, homeAdvBtmItemText3);
		homeAdvBtmItem2.append(homeAdvBtmItemImg2, homeAdvBtmItemTitle2, homeAdvBtmItemText2);
		homeAdvBtmItem1.append(homeAdvBtmItemImg1, homeAdvBtmItemTitle1, homeAdvBtmItemText1);
		homeAdvBtm.append(homeAdvBtmItem1, homeAdvBtmItem2, homeAdvBtmItem3, homeAdvBtmItem4);
		homeAdvHeader.append(homeAdvHeaderTop, homeAdvHeaderTitle, homeAdvHeaderDescr);
		homeAdv.append(homeAdvHeader, homeAdvBtm);
		home.append(homeTitle, homeDesc, homeAdv);
		elem.append(home);

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