/***
Chiedere all'API 10 nomi da inserire in un array di invitati.
 Una volta generata la lista chiedere all'utente di dire il proprio nome.
 Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.
*/

const { createApp } = Vue;

createApp({
    data() {
        return {
            invitedList: [],
            currentName: "",
            message: "",
            invited: false,
        }
    },

    methods: {
        getRandomInvited: function () {
            for (index = 0; index < 10; index++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/name")
                    .then((response) => {
                        const name = response.data.response;

                        this.invitedList.push(name);
                    })
            }
        },
        checkInvited: function(currentName) {
            if (this.invitedList.includes(currentName)) {
                this.message = "benvenuto"
                this.invited = true;
            } else {
                this.message = "Non sei in lista"
                this.invited = false;
            }

            this.currentName = "";
        }
    },

    created() {
        this.getRandomInvited();
    }
}).mount('#app')
