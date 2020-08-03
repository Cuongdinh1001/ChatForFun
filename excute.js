function check() {
    var x = document.getElementById("login");
    character = x.value.charAt(0);
    if (!isNaN(character * 1) || character == character.toLowerCase()){
        alert('Tên đang nhập phải bắt đầu bằng 1 chữ in hoa');
    }
}