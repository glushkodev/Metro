import { cartGet, cartRemove, cartUpdate } from "/Metro/src/components/Cart.js";

class Page {
	constructor() {
		this.title = 'Cart page';
		this.storageKey = 'cartQuantities';
		this.widgetCountKey = 'cartTotalCount';
	}

	create() {
		let elem = document.createElement('div');
		elem.classList.add('main__content','content');

		return elem;
	}

	createProducts(data) {
		let total = 0;
		let totalCount = 0;

		let elem = document.createElement('div');
		elem.classList.add('cart');

		let savedQuantities = JSON.parse(localStorage.getItem(this.storageKey)) || {};

		let listHeader = document.createElement('div');
		listHeader.classList.add('cart__header');
			let listHeaderNumb = document.createElement('div');
			listHeaderNumb.classList.add('cart__header_numb');
			listHeaderNumb.textContent = '№';

			let listHeaderArticle = document.createElement('div');
			listHeaderArticle.classList.add('cart__header_article');
			listHeaderArticle.textContent = 'Article';

			let listHeaderName = document.createElement('div');
			listHeaderName.classList.add('cart__header_name');
			listHeaderName.textContent = 'Product';

			let listHeaderDel = document.createElement('div');
			listHeaderDel.classList.add('cart__header_del');
			listHeaderDel.textContent = 'Delete';

			let listHeaderCount = document.createElement('div');
			listHeaderCount.classList.add('cart__header_count');
			listHeaderCount.textContent = 'Count';
			
			let listHeaderPrice = document.createElement('div');
			listHeaderPrice.classList.add('cart__header_price');
			listHeaderPrice.textContent = 'Price';

			let listHeaderCost = document.createElement('div');
			listHeaderCost.classList.add('cart__header_cost');
			listHeaderCost.textContent = 'Cost';


		let listElem = document.createElement('ul');
		listElem.classList.add('cart__list');

		data.forEach((item, index) => {
			let quantity = savedQuantities[item.id] || 1;
            totalCount += quantity;

            let totalItem = quantity * item.price;
            totalItem = totalItem.toFixed(2);
            total += +totalItem;

			let liElem = document.createElement('li');
			liElem.classList.add('cart__item');

			let cartNubmer = document.createElement('div');
			cartNubmer.classList.add('cart__number');
			cartNubmer.innerHTML = `${index + 1}`;

			let cartId = document.createElement('div');
			cartId.classList.add('cart__id');
			cartId.innerHTML = `${item.id}`;

			let cartImg = document.createElement('div');
			cartImg.classList.add('cart__image');

				let itemImg = document.createElement('img');
				itemImg.classList.add('cart__image_img');
				itemImg.src = `${item.image}`;
				itemImg.alt = `${item.title}`;
			
			let cartTitle = document.createElement('div');
			cartTitle.classList.add('cart__title');

				let cartLink = document.createElement('a');
				cartLink.classList.add('cart__link');
				cartLink.href = `/#product/${item.id}`;
				cartLink.innerHTML = `${item.title}`;

			let cartDel = document.createElement('div');
			cartDel.classList.add('cart__delete');
				
			let cartDelBtn = document.createElement('button');
			cartDelBtn.classList.add('cart__delete_btn');

			cartDelBtn.addEventListener("click", () => {
				cartRemove(item.id);
		
				this.updateCart();
			  });

				let cartDelImg = document.createElement('img');
				cartDelImg.classList.add('cart__delete_img');
				cartDelImg.src = `/Metro/src/images/ico_delete.svg`;
				cartDelImg.alt = `ico-delete`;

			let cartQuantity = document.createElement('div');
			cartQuantity.classList.add('cart__quantity');

				let cartQuantityInput = document.createElement('input');
				cartQuantityInput.classList.add('cart__quantity_input');
				cartQuantityInput.type = 'number';
				cartQuantityInput.min = '1';
				cartQuantityInput.max = '99';
				cartQuantityInput.value = quantity;

				cartQuantityInput.addEventListener("change", () => {
					let quantityUpdate = parseInt(cartQuantityInput.value);
					let totalItemUpdate = (quantityUpdate * item.price).toFixed(2);
					
					cartTotal.innerHTML = `$${totalItemUpdate}`;
					
					let quantities = JSON.parse(localStorage.getItem(this.storageKey)) || {};
					quantities[item.id] = quantityUpdate;
					localStorage.setItem(this.storageKey, JSON.stringify(quantities));
	
					this.updateTotalPrice();
					this.updateWidgetCount(); 
				});

			let cartPrice = document.createElement('div');
			cartPrice.classList.add('cart__price');
			cartPrice.innerHTML = `${item.price}`;

			let cartTotal= document.createElement('div');
			cartTotal.classList.add('cart__total');
			cartTotal.innerHTML = `${totalItem}`;

			cartImg.append(itemImg);
			cartTitle.append(cartLink);
			cartQuantity.append(cartQuantityInput);
			cartDel.append(cartDelBtn);
			cartDelBtn.append(cartDelImg);
			liElem.append(cartNubmer, cartId, cartImg, cartTitle, cartDel, cartQuantity, cartPrice, cartTotal);

			listElem.append(liElem);
		});

		localStorage.setItem(this.widgetCountKey, totalCount.toString());
        this.updateWidgetCount();

		listHeader.append(listHeaderNumb,listHeaderArticle, listHeaderName, listHeaderDel, listHeaderCount, listHeaderPrice, listHeaderCost);

		let elemTotal = document.createElement('div');
		elemTotal.classList.add('cart__total', 'total');

		elemTotal.innerHTML = `Total: $ ${total.toFixed(2)}`;

		elem.append(listHeader, listElem, elemTotal);
		return elem;
	}

	updateWidgetCount() {
        let totalCount = 0;
        let savedQuantities = JSON.parse(localStorage.getItem(this.storageKey)) || {};
        
        for (let id in savedQuantities) {
            totalCount += savedQuantities[id];
        }

        localStorage.setItem(this.widgetCountKey, totalCount.toString());
        
        let widgetCountElem = document.querySelector('.cart_widget__count');
        if (widgetCountElem) {
            widgetCountElem.textContent = totalCount;
        }
    }

	updateTotalPrice() {
		let total = 0;
		let items = this.elem.querySelectorAll('.cart__item');
		let totalElem = document.querySelector('.cart_widget__total');
		
		items.forEach(item => {
			let price = parseFloat(item.querySelector('.cart__price').textContent);
			let quantity = parseInt(item.querySelector('.cart__quantity_input').value);
			total += price * quantity;
		});
		
		let elemTotal = this.elem.querySelector('.total');
		elemTotal.innerHTML = `Total: $ ${total.toFixed(2)}`;
		totalElem.innerHTML = `$ ${total.toFixed(2)}`;

		localStorage.setItem('cartTotal', total.toFixed(2));
	}

	async updateCart() {
		let data = await cartGet();
		//При удалении товара обновляем localStorage
		let savedQuantities = JSON.parse(localStorage.getItem(this.storageKey)) || {};
        
        // Удаляем сохраненные количества для товаров, которых больше нет в корзине
        let currentIds = data.map(item => item.id);
        let updatedQuantities = {};
        
        for (let id in savedQuantities) {
            if (currentIds.includes(id)) {
                updatedQuantities[id] = savedQuantities[id];
            }
        }
        
        localStorage.setItem(this.storageKey, JSON.stringify(updatedQuantities));

		this.elem.innerHTML = "";
		this.elem.append(this.createProducts(data));
		this.updateTotalPrice();
	}

	init() {
		this.elem = this.create();

		cartGet()
		.then(data => {
			this.elem.append(this.createProducts(data));
		});

		return this.elem;
	}
}

let obj = new Page();
let elem = obj.init();
let elemTitle = obj.title;
export {elem as page, elemTitle as pageTitle};