import { header } from '../layouts/Header.js';
import { main, mainContainer, mainTitle } from '../layouts/Main.js';
import { footer } from '../layouts/Footer.js';
import { cartUpdate } from "./Cart.js";

class App {
	constructor() {
		this.init();
	}	

	create() {
		let elem = document.createElement('div');
		elem.classList.add('app');

		return elem;
	}

	createHead() {
		let metaCharsetElem = document.createElement('meta');
		metaCharsetElem.setAttribute('charset', 'UTF-8');

		let metaVPElem = document.createElement('meta');
		metaVPElem.setAttribute('name', 'viewport');
		metaVPElem.setAttribute('content', 'width=device-width, initial-scale=1.0');

		let titleElem = document.createElement('title');
		titleElem.textContent = 'Store App';

		let linkElem = document.createElement('link');
		linkElem.rel = 'stylesheet';
		linkElem.href = 'src/index.css';

		let linkMediaElem = document.createElement('link');
		linkMediaElem.rel = 'stylesheet';
		linkMediaElem.href = 'src/media.css';

		let linkFontElem = document.createElement('link');
		linkFontElem.rel = 'stylesheet';
		linkFontElem.href = 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap';

		return {
			charset: metaCharsetElem,
			view: metaVPElem,
			title: titleElem,
			css: linkElem,
			media: linkMediaElem,
			font: linkFontElem
		};
	}

	router() {
		let getPage = async () => {
			let page = 'Home'; 
			let hash = window.location.hash.slice(1);
			
			if (hash) {
				let [pageName] = hash.split('/');
				if (pageName) {
					page = pageName.charAt(0).toUpperCase() + pageName.slice(1);
				}
			}
	
			try {
				let module = await import(`../pages/${page}.js`);
				
				mainTitle.innerHTML = '';
				mainContainer.innerHTML = '';
				
				document.title = module.pageTitle;
				mainTitle.textContent = module.pageTitle;
				
				mainContainer.appendChild(module.page);
			} catch (error) {
				console.error('Ошибка загрузки страницы:', error);
				
				try {
					let module = await import('../pages/Home.js');
					mainTitle.innerHTML = '';
					mainContainer.innerHTML = '';
					document.title = module.pageTitle || 'Store App';
					mainTitle.textContent = module.pageTitle || 'Home';
					mainContainer.appendChild(module.page);
				} catch (fallbackError) {
					console.error('Ошибка загрузки fallback-страницы:', fallbackError);
					mainContainer.innerHTML = '<p>Ошибка загрузки страницы</p>';
				}
			}
		};

		let links = document.querySelectorAll('a[href="/"]');

		if (links) links.forEach((link) => {
			link.addEventListener('click', (e) => {
				e.preventDefault();

				history.pushState(null, null, '/'); 
				getPage();
			})
		});

		window.addEventListener('hashchange', (e) => {
			getPage();
		})

		getPage();		
	}

	async render() {
		if (!this.elem) return;

		let headElems = this.createHead();

		if (header) this.elem.append(header);
		if (main) this.elem.append(main);
		if (footer) this.elem.append(footer);

		document.head.append(headElems.charset, headElems.view, headElems.title, headElems.css, headElems.media, headElems.font);
		document.body.append(this.elem);
	}

	async init() {
		this.elem = this.create();
		await this.render();

		cartUpdate();

		this.router();
	}
}

export default new App();