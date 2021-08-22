app.component("product-details", {
	/**
	 * You will need to use details as prop when you dont load detials as a local data like I do here and catch it in
     * <product-details :details="details"></product-details>
	 * Or just it be 
	 */

	// props: {
	// 	details: {
	// 		type: Array,
	// 		required: true,
	// 	},
	// },

	template:
		/*html*/
		`
        <!--
            Now to display product details, we use for loop and in Vue, we have v-for
        -->
        <ul>
            <li v-for="detail in details">{{detail}}</li>
        </ul>
        `,

	data() {
		return {
			details: ["50% cotton", "30% wool", "20% polyester"],
		};
	},
});
