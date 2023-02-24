const {createApp} = Vue;

createApp({
        data(){
                return{
                       todolist :[],
                       newLing:{
                        taskName : "",
                        done : false
                       },                
                };
        },
        methods:{
                line(todo){
                        todo.done = !todo.done
                },
                addTask(){
                        axios
                        .post('./create.php',{
                                task : this.newLing
                        },
                        {headers:{"Content-Type": "multipart/form-data"}}
                        )
                        .then((response) =>{
                                console.log(response);
                                this.todolist = response.data.todolist;
                                this.newLing.taskName ="";

                        });


                     
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