let cloths = document.getElementById("cloths");
let review = document.getElementById("review");
let Contact = document.getElementById("Contact");

cloths.addEventListener("click",function(){
    cloths.style.color="red";
    Review.style.color="green";
    Contact.style.color="blue";
})
Review.addEventListener("click",function(){
    cloths.style.color="purple";
    Review.style.color="green";
    Contact.style.color="purple";
})
Contact.addEventListener("click",function(){
    cloths.style.color="red";
    Review.style.color="red";
    Contact.style.color="blue";
})


let login = document.getElementById("login");
login.addEventListener("click",function(){
     let loginPage=document.querySelector(".loginPage").style.display="block";
    })

    let loged = document.getElementById("loged");
    
    loged.addEventListener("click",function(){
        let email = document.getElementById("email");
        let pass = document.getElementById("pass");

        if(email.value == "" || pass.value ==""){
            alert("please Enter Email password")
        }
        else{
            alert("You loged In");
            document.querySelector(".loginPage").style.display="none";
        }
    })

    let submit = document.getElementById("submit");
    submit.addEventListener("click", function () {
        console.log("Aa");
        let name = document.getElementById("name");
        let Mobile = document.getElementById("Mobile");
        // console.log(name.value);
        if (name.value == "" || Mobile == "") {
            alert("please Enter Name and Mobile");
        } else {
            alert("Thanks for connecting");
        }
    
    });
    

