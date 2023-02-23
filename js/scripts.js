const {createApp} = Vue;

createApp({
        data(){
                return{
                       todolist :[],
                        message : "Ciao Leo",
                };
        },
        methods:{
                line(todo){
                        todo.done = !todo.done
                }
        }, 
        created(){
                axios
                .get('./api.php')
                .then((response) =>{
                        console.log(response);
                        this.todolist = response.data
                })
        }
}).mount("#app"); 