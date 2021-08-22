//const product = 'Socks'

// Creat Vue App
const app = Vue.createApp({
	data() {
		return {
			cart: [],
			premium: true,
		};
	},

	methods: {
		/**
		 * add new product to shopping cart
		 * @param {string} id - id of the product
		 */
		update_cart(id) {
			this.cart.push(id);
		},

		/**
		 * remove product according to product's id
		 * @param {string} id - id of the product
		 */
		remove_by_id(id) {
			const index = this.cart.indexOf(id);
			if (index > -1) {
				this.cart.splice(index, 1);
			}
		},
	},
});
