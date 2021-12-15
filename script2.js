// var lable=document.getElementById("firstname");

// var firstname=document.createElement('firstname')
// firstname.setAttribute('class','firstname-grey')
// lable.append(firstname)

var submitBtn = document.getElementById("submit");
var firstName = document.getElementById("firstname");
var middleName = document.getElementById("middlename");
var lastName = document.getElementById("lastname");
 
submitBtn.addEventListener("click", function(){
    console.log(firstName.value + " " + middleName.value + " " + lastname.value);
})