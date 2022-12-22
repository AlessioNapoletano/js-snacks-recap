
const { createApp } = Vue;

createApp({
    data() {
        return {
            oddNumbers: [],
            evenNumbers: [],
        }
    },

    methods: {
        getRandomNumber: function () {
            axios.get("https://flynn.boolean.careers/exercises/api/random/int")
            .then((response) => {
                const number = response.data.response;

                if ( number % 2 === 0) {
                    this.oddNumbers.push(number);
                } else {
                    this.evenNumbers.push(number);
                }
            })
        }
    },

    created() {


    }
}).mount('#app')
