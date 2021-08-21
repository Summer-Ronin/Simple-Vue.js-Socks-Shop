//const product = 'Socks'

// Creat Vue App
const app = Vue.createApp({
	data() {
		// Every return gonna need comma to separate
		return {
			url: "https://www.sockshop.co.uk/cms_media/images/475x800_fitbox-kssock938.jpg",
			// make a conditional variable with boolean type

			// For chained Conditional Logic
			inventory: 10,
			on_sale: true,
			details: ["50% cotton", "30% wool", "20% polyester"],
			selectedVariant: 0,
			variants: [
				// variant 0
				{
					id: 2234,
					color: "green",
					image: "./assets/images/socks_green.jpg",
					quantity: 50,
					product: "Socks",
					brand: "Adidas Fake",
                    description: "Those fake socks can be used to wear indoor",
				},
				// variant 1
				{
					id: 2235,
					color: "blue",
					image: "./assets/images/socks_blue.jpg",
					quantity: 0,
					product: "Socks",
					brand: "Nike Fake",
                    description: "Those fake socks can not be used for nothing",
				},
			],
			sizes: ["S", "M", "L", "XL"],
			cart: 0,

			// Style binding using Objects, call this style wherever you want to in html
			// sock_styles:{
			//     'background-color': 'red',
			// }
		};
	},

	methods: {
		/**
		 * +1 up to cart value to increase it up when user click add to cart button
		 */
		add_to_cart() {
			this.cart += 1;
		},

		/**
		 * -1 down from cart value to increase it up when user click remove item to cart button
		 */
		remove_from_cart() {
			if (this.cart == 0) {
				this.cart = this.cart;
			} else {
				this.cart -= 1;
			}
		},

		/**
		 * Return image of according color
		 * @param {string} index - image path to the sock's color
		 */
		update_variant(index) {
			// We overide this.image value with the current image path
			this.selectedVariant = index;
		},
	},

	computed: {
		image() {
			return this.variants[this.selectedVariant].image;
		},

		in_stock() {
			return this.variants[this.selectedVariant].quantity;
		},

		// to return title of each type of sock
		title() {
            var brand = this.variants[this.selectedVariant].brand;
            var product = this.variants[this.selectedVariant].product;
			
            return brand + ' ' + product
		},

        description() {
            return this.variants[this.selectedVariant].description;
		}
	},
});
