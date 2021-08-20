//const product = 'Socks'

// Creat Vue App
const app = Vue.createApp({
	data() {
		// Every return gonna need comma to separate
		return {
			product: "Socks",
			description: "Hello World socks",
			image: "./assets/images/socks_green.jpg",
			url: "https://www.sockshop.co.uk/cms_media/images/475x800_fitbox-kssock938.jpg",
			// make a conditional variable with boolean type
			//in_stock: true

			// For chained Conditional Logic
			inventory: 10,
			on_sale: true,
			details: ["50% cotton", "30% wool", "20% polyester"],
			variants: [
				{ id: 2234, color: "green" },
				{ id: 2235, color: "blue" },
			],
			sizes: ["S", "M", "L", "XL"],
            cart: 0
		};
	},
});
