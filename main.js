//const product = 'Socks'

// Creat Vue App
const app = Vue.createApp({
	data() {
		// Every return gonna need comma to separate
		return {
			product: "Socks",
            brand: 'Adidas Fake',
			description: "Those fake socks can be used to wear indoor",
			image: "./assets/images/socks_green.jpg",
			url: "https://www.sockshop.co.uk/cms_media/images/475x800_fitbox-kssock938.jpg",
			// make a conditional variable with boolean type
			in_stock: true,

			// For chained Conditional Logic
			inventory: 10,
			on_sale: true,
			details: ["50% cotton", "30% wool", "20% polyester"],
			variants: [
				{
					id: 2234,
					color: "green",
					image: "./assets/images/socks_green.jpg",
                    quantity: 50
				},
				{
					id: 2235,
					color: "blue",
					image: "./assets/images/socks_blue.jpg",
                    quantity: 0
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
		 * @param {string} iamge - image path to the sock's color
		 */
		update_image(image) {
			// We overide this.image value with the current image path
			this.image = image;
		},
	},

    computed:{
        title(){
            return this.brand + ' ' + this.product
        }
    }
});
