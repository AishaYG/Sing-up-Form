var getData = () => {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("number").value;
    var place = document.getElementById("dropdown").value;
    var contact = document["sing-up"].contact.value;
    var lenguage = [];
        for (let i = 0; i < document["sing-up"].lenguage.length; i++) {
            if (document["sing-up"].lenguage[i].checked) {
                lenguage.push(document["sing-up"].lenguage[i].value);
            }
        }        
    var comment = document.getElementById("comment").value
    console.log(name);
    console.log(email);
    console.log(age);
    console.log(place);
    console.log(contact)
    console.log(lenguage);
    console.log(comment);
}

