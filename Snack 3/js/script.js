/** Creare un input che permetta all'utente di inserire un messaggio e aggiungerlo ad una conversazione (tipo whatsapp).
 Dopo averlo aggiunto chiedere all'API una frase random (attraverso random/sentence) aggiungendo anch'essa al thread,
 differenziando i messaggi utente da quelli del computer. */

const { createApp } = Vue;

createApp({
    data() {
        return {
            textMessage: '',
            messages: 
            [
                {
                    text: 'ciao',
                    user: true,
                },

                {
                    text: 'ehila, ciao',
                    user: false,
                }
            ]
            
        }
    },

    methods: {
        addMessage: function (newMessage) {
            this.messages.push(
                {
                    text: newMessage,
                    user: true,
                }
            );

            this.textMessage = "";

            setTimeout( () => {
                this.messages.push(
                {
                    text: 'ufrat t\'apposto',
                    user: false,
                });
            }, 1000);
        },
        getRandomText: function () {
            
        }
        
    },

    created() {
        
    }
}).mount('#app')
