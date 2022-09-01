
const app = new Vue({
  el: '#root',
  data: {
    randomMail : [],
  },
  mounted(){
    for (let i = 0; i < 10; i++) {
      axios
      .get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((response) => {
        
        const mail = response.data.response
        this.randomMail.push(mail)
      })
      // serve un arrow function altrimenti il this non funziona
      
      
    }
    
  },
  methods: {},
 
})

