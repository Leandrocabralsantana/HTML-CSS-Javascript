window.onload {
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
var name = document.getElementById('nameInput').value;
if(!regName.test(name)){
    alert('Invalid name given.');
}else{
    alert('Valid name given.');
}
}