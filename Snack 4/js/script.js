/** 
 * Chiedere all'utente quanti elementi vuole includere nell'array.
 Generare attraverso l'API (array/integers) un array contenente N numeri compresi tra 1 e 100.
 Stampare a schermo la somma dei numeri generati.
  */

const { createApp } = Vue;

createApp({
    data() {
        return {
            amountOfNumbers: null,
            numbers: []
        }
    },

    methods: {
        //Funzione creata per provare a riempire l
        // addNumber: function (number) {
        //     this.numbers.push(number);
        //     this.amountOfNumbers = null;
        // },

        addRandomNumber: function () {
            axios.get("https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items="+this.amountOfNumbers).then( (response) => 
            {                    
                this.numbers = response.data.response
            });

            this.amountOfNumbers = null;
        }
    },

    created() {
        
        
    }
}).mount('#app')




// https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=5