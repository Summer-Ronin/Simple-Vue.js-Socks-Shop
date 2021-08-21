app.component("product-details", {
	props: {
		details: {
			type: Array,
			required: true,
		},
	},

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
});
