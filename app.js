// creating a new object called app and connecting to vue CDN
const app = Vue.createApp({

    //template: '<h1> Hello {{firstName}} </h1>',

    // data is a function that returns an object
    data(){
        return{
            firstName: 'John',
            lastName: 'Doe',
            email: 'John@gmail.com',
            gender: 'male',
            // using random user api
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },

    // used for method in index.html
    methods: {
        //this is for "v-on:click", which will get a new user
        async getUser(){
            const res = await fetch ('https://randomuser.me/api')
            const { results } = await res.json()
            this.firstName = results[0].name.first;
            this.lastName = results[0].name.last;
            this.email = results[0].email;
            this.gender = results[0].gender;
            this.picture = results[0].picture.large;
        },
    },
})

// mounting app to div in index.html with selector id of app
app.mount('#app')