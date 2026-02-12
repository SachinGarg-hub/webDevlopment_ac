let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let input = document.querySelector('input');
btn.addEventListener('click', function () {
    let item = document.createElement('li');
    item.innerText = input.value;

    let delbtn = document.createElement('button');
    delbtn.innerText = "Delete";
    delbtn.addEventListener('click', function () {
        ul.removeChild(item);
    });
    item.appendChild(delbtn);

    ul.appendChild(item);
    input.value = "";
});