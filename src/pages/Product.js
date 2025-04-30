import { cartAdd } from "./components/Cart.js";

class Page {
	constructor() {
		this.id = null;
		this.title = 'Product page';
	}

	getId() {
		let href = location.href;
		href = href.split('/');

		if (!href || href.length == 0) return;

		return href[href.length - 1];
	}
	
	createProduct(data) {

		let productRate = this.createRate(data);

		let elem = document.createElement('div');
		elem.classList.add('product');

			let productItem = document.createElement('div');
			productItem.classList.add('product__item_left');

				let productItemImg = document.createElement('img');
				productItemImg.classList.add('product__item_img');
				productItemImg.src = `${data.image}`;
				productItemImg.alt = `${data.title}`;


			let rightItem = document.createElement('div');
			rightItem.classList.add('product__item_right')

				let productTitle = document.createElement('h1');
				productTitle.classList.add('product__title');
				productTitle.innerHTML = `${data.title}`;

				let productInfo = document.createElement('div');
				productInfo.classList.add('product__info');

					let productCat = document.createElement('span');
					productCat.classList.add('product__category');
					productCat.innerHTML = `${data.category}`;

					
					let productId = document.createElement('span');
					productId.classList.add('product__id');
					productId.innerHTML = `${data.id}`;

				let productDesc = document.createElement('div');
				productDesc.classList.add('product__desc');
				productDesc.innerHTML = `${data.description}`;

				let footerItem = document.createElement('div');
				footerItem.classList.add('product__foter');

					let productPrice = document.createElement('span');
					productPrice.classList.add('product__price');
					productPrice.innerHTML = `Price: $ ${data.price}`;

					let btnAdd = document.createElement('button');
					btnAdd.classList.add('product__btn_add');
					btnAdd.innerHTML = `Add to cart`;

		productItem.append(productItemImg);
		productInfo.append(productCat, productRate, productId);
		
		footerItem.append(productPrice, btnAdd);
		rightItem.append(productTitle, productInfo, productDesc, footerItem);
		elem.append(productItem, rightItem);

		btnAdd.addEventListener('click', () => {
			cartAdd(data.id);
		});

		return elem;
	}

	createRate(data) {
		let value = data.rating.rate;
		
		let rate = document.createElement('div');
		rate.classList.add('product__rate');
		
			let rateValue = document.createElement('span');
			rateValue.classList.add('product__rate_value');
			rateValue.textContent = `${value.toFixed(1)} (${data.rating.count})`;
			
			let starsWrapper = document.createElement('div');
			starsWrapper.classList.add('product__rate_stars');
			
				let emptyStars = document.createElement('div');
				emptyStars.classList.add('stars_empty');
				emptyStars.innerHTML = '★★★★★';
				
				let filledStars = document.createElement('div');
				filledStars.classList.add('stars_filled');
				filledStars.innerHTML = '★★★★★';
		
		let exactWidth = (value / 5) * 100;
		filledStars.style.width = `${exactWidth}%`;
		
		starsWrapper.append(emptyStars, filledStars);
		rate.append(rateValue, starsWrapper);
		
		return rate;
	}

	async getData(url) {
		await fetch(url)
		.then(response => response.json())
		.then(data => {
			this.elem.append(this.createProduct(data));
		})
	}

	create() {
		let elem = document.createElement('div');
		elem.classList.add('main__content','content');

		return elem;
	}

	init() {
		this.id = this. getId();
		this.elem = this.create();

		this.getData(`https://fakestoreapi.com/products/${this.id}`);
 

		return this.elem;
	}
}

let obj = new Page();
let elem = obj.init();
let elemTitle = obj.title;
export {elem as page, elemTitle as pageTitle};