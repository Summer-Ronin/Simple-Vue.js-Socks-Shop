app.component("product-display", {
	props: {
		premium: {
			type: Boolean,
			required: true,
		},
	},

	template:
		/*html*/
		`
    <!-- Product display place -->
    <div class="product-display">
        <!-- Product container -->
        <div class="product-container">
            <div class="product-image">
                <!-- image goes here -->
                <!--Vue binding image src to img tag-->
                <a href="">
                    <img
                        :class="{'out-of-stock-img': !in_stock}"
                        v-bind:src="image"
                        alt=""
                    />
                </a>
                <!--For shorthanded V-bind, we simply reduce v-bind and keep the ":"
                    And you can do the same with url, just but the v-bind: or : in front of any href, src
                    anything that you want to bind things to
                -->
                <!-- <img :src="image" alt="" /> -->
            </div>

            <!-- Product info place -->
            <div class="product-info">
                <h1>{{title}}</h1>
                <p>{{description}}</p>
                <!--
                    However, we can use v-show to show the tag in our Dev-tool but with property of
                    display: none and v-show works just like the v-if but show it not turning it 
                    into a comment 
                -->
                <!-- <p v-show="in_stock">In Stock</p> -->

                <!--
                    Using v-if: to conditionally decide when to display the p tag
                    Vue will simply turn the tag into a comment if return type is false
                    To me, I think v-if and v-else are more friendly to use, why? Everyone loves if-else thing :)
                -->
                <!-- <p v-if="in_stock">In Stock</p>
                <p v-else="in_stock">Out of stock</p> -->

                <p v-if="in_stock > 10">In stock</p>
                <p v-else-if="in_stock <= 10 && in_stock > 0">
                    Almost sold out! Hurry up
                </p>
                <p v-else>Out of stock</p>

                <p>Shipping: {{ shipping }}</p>
                <product-details></product-details>
            
                <p v-if="on_sale">On Sale!!!</p>

                <!--
                    Variant colors, now we add mouse-over event 
                    How this gonna work? @mouseover will call the function update_image 
                    -> override the this.image with variant.image

                    Remember that backgroundColor is a js property and you wanna use css binding, add in the ""
                    for background-color
                -->
                <div
                    v-for="(variant, index) in variants"
                    :key="variant.id"
                    @mouseover="update_variant(index)"
                    class="color-circle"
                    :style="{'background-color': variant.color}"
                ></div>

                <ul>
                    <li v-for="size in sizes">{{size}}</li>
                </ul>

                <!--
                    Add to cart button place. To use v-on shorthand, just replace it with @
                    <button class="button" @click="add_to_cart">Add to Cart</button>    
                -->
                <button
                    class="button"
                    @click="add_to_cart"
                    :disabled="!in_stock"
                    :class="{ disabledButton: !in_stock }"
                >
                    Add to Cart
                </button>

                <!--Remove item from cart place-->
                <button
                    class="button"
                    v-on:click="remove_from_cart"
                    :disabled="!in_stock"
                    :class="{ disabledButton: !in_stock }"
                >
                    Remove item
                </button>
            </div>
        </div>
        <review-form style="text-align: center;"></review-form>
    </div>
    `,
	data() {
		// Every return gonna need comma to separate
		return {
			url: "https://www.sockshop.co.uk/cms_media/images/475x800_fitbox-kssock938.jpg",
			// make a conditional variable with boolean type

			// For chained Conditional Logic
			inventory: 10,
			on_sale: true,
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
            this.$emit('add_to_cart', this.variants[this.selectedVariant].id)
		},

		/**
		 * -1 down from cart value to increase it up when user click remove item to cart button
		 */
		remove_from_cart() {
			this.$emit('remove_from_cart', this.variants[this.selectedVariant].id)
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

			return brand + " " + product;
		},

		description() {
			return this.variants[this.selectedVariant].description;
		},

		shipping() {
			if (this.premium) {
				return "Free";
			}
			return 2.99;
		},
	},
});
