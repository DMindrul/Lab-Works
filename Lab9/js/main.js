const requestURL = 'https://usersdogs.dmytrominochkin.cloud/dogs';
const baseSrc = 'https://usersdogs.dmytrominochkin.cloud';
const xhr = new XMLHttpRequest();
let close_modal = document.getElementById('close_modal');
let body = document.getElementsByTagName('body')[0];
let counter = 0;

xhr.open('GET', requestURL);
    xhr.responseType = 'json';
    xhr.onload = () =>{
    if(xhr.status >= 400){
         console.error(xhr.response)
     }
    else{
        let kost = xhr.response;
        kost.forEach(element => {
            listing.insertAdjacentHTML("beforeend",
            `<div class="row bg-2 gy-5 mx-auto px-0 rounding h-75" onclick="display(this)" value="${counter}">
                <div class="col-4 open_modal m-0 p-4">
                <div style="background-image:url(${baseSrc}${element.dogImage});" class="square rounding">
                </div>
                </div>
            <div class="col-8 align-self-center my-0">
                <h1>${element.title}</h1>
                <h5>${element.sex}</h5>
            </div>
            </div>`);
            counter++;
        });
    }
}
    
xhr.send();

function display(elm) {
    let fetched = elm.getAttribute('value');
    xhr.open('GET', requestURL);
    xhr.responseType = 'json';
    xhr.onload = () =>{
    if(xhr.status >= 400){
         console.error(xhr.response)
     }
    else{
    document.getElementById("link").style = 'background-image:url('+ baseSrc + xhr.response[fetched].dogImage +');';
    document.getElementById("name").innerHTML = xhr.response[fetched].title;
    document.getElementById("sex").innerHTML = xhr.response[fetched].sex;
    document.getElementById("age").innerHTML = xhr.response[fetched].age;
    document.getElementById("description").innerHTML = xhr.response[fetched].description;
    modal.classList.add('modal_vis');
    body.classList.add('body_block');
    }
    }
    xhr.send();
}

close_modal.onclick = function() {
    modal.classList.remove('modal_vis');
    body.classList.remove('body_block');
};