export default
{
    name : "RegisterPage",
    data(){
    return {
        username : "",
        email : "",
        password : "",
        message :""
    };
},
methods:
{
    registerUser()
    {
       if(this.username && this.email && this.password)
        {
            this.message = ` User ${this.username} registered successfully`
        }
        else{
             this.message = "Please fill all fields.";
        }
    },
},
};