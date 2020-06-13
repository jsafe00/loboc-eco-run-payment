<template>
  <b-container>
    <div v-if="categories.length">
      <b-row>
        <div v-bind:key="category.index" v-for="category in categories">
          <b-col l="4">
            <b-card
              v-bind:img-src="'https://thawing-meadow-99377.herokuapp.com'+ category.image.url"
              v-bind:title="category.title"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
    
            >
              <b-card-text>{{ `${category.description}` }}</b-card-text>
              <span>
                <strong>Price: P{{ `${category.price}` }} </strong>
              </span>
              <div v-if="category.price === 500">
              <b-button @click="placeOrderFive" variant="primary">Pay</b-button>
              </div>
              <div v-else-if="category.price === 800">
                <b-button @click="placeOrderEight" variant="primary">Pay</b-button>
              </div>
              <div v-else>
                <b-button @click="placeOrderTwentyOne" variant="primary">Pay</b-button>
              </div>
            </b-card>
          </b-col>
        </div>
      </b-row>
    </div>
    <div v-else>
      <h5>Fetching categories . . .</h5>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    placeOrderFive() {
      window.FlutterwaveCheckout({
        public_key: "FLWPUBK-1f96289185db43765ec754d43127996b-X",
        tx_ref: "new-sale"+ new Date(),
        amount: "500",
        currency: "PHP",
        country: "PH",
        payment_options: "card",
        customer: {
          email: "josafebalili@gmail.com",
          phone_number: "+6391775107177",
          name: "Josafe Balili",
        },
        callback: function(data) {
          console.log(data);
        },
        onclose: function() {},
        customizations: {
          title: "PaymentHub",
          description: "Payment for selected category",
          logo: "https://thawing-meadow-99377.herokuapp.com/uploads/thumbnail_21k_7a684dca02.png",
        },
      });
    },
    placeOrderEight() {
      window.FlutterwaveCheckout({
        public_key: "FLWPUBK-1f96289185db43765ec754d43127996b-X",
        tx_ref: "new-sale"+ new Date(),
        amount: "800",
        currency: "PHP",
        country: "PH",
        payment_options: "card",
        customer: {
          email: "josafebalili@gmail.com",
          phone_number: "+6391775107177",
          name: "Josafe Balili",
        },
        callback: function(data) {
          console.log(data);
        },
        onclose: function() {},
        customizations: {
          title: "PaymentHub",
          description: "Payment for selected category",
          logo: "https://thawing-meadow-99377.herokuapp.com/uploads/thumbnail_21k_7a684dca02.png",
        },
      });
    },
    placeOrderTwentyOne() {
      window.FlutterwaveCheckout({
        public_key: "FLWPUBK-1f96289185db43765ec754d43127996b-X",
        tx_ref: "new-sale"+ new Date(),
        amount: "1500",
        currency: "PHP",
        country: "PH",
        payment_options: "card",
        customer: {
          email: "josafebalili@gmail.com",
          phone_number: "+6391775107177",
          name: "Josafe Balili",
        },
        callback: function(data) {
          console.log(data);
        },
        onclose: function() {},
        customizations: {
          title: "PaymentHub",
          description: "Payment for selected category",
          logo: "https://thawing-meadow-99377.herokuapp.com/uploads/thumbnail_21k_7a684dca02.png",
        },
      });
    },
  },
  mounted() {
    fetch("https://thawing-meadow-99377.herokuapp.com/categories")
      .then((res) => res.json())
      .then((data) => {
        this.categories = data;
      });
  },
  created() {
        const script = document.createElement("script");
        script.src = "https://checkout.flutterwave.com/v3.js";
        document.getElementsByTagName("head")[0].appendChild(script);
      },
};
</script>