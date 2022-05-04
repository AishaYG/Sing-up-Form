const url = "http://localhost:3000/users"

var data_user = {
    name: "",
    email: "",
    age: 0,
    place: "",
    contact: "",
    lenguage: [],
    comment: ""
};
var getData = () => {
    data_user.name = document.getElementById("name").value;;
    data_user.email = document.getElementById("email").value;
    data_user.age = document.getElementById("number").value;
    data_user.place = document.getElementById("dropdown").value;
   data_user.contact = document["sing-up"].contact.value;
    for (let i = 0; i < document["sing-up"].lenguage.length; i++) {
        if (document["sing-up"].lenguage[i].checked) {
            data_user.lenguage.push(document["sing-up"].lenguage[i].value);
        }
    }        
    data_user.comment = document.getElementById("comment").value
}
var pushData = () => {
    getData();
    
    axios.post(url, data_user)
}