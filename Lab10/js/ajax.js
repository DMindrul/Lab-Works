const requestURL = 'https://usersdogs.dmytrominochkin.cloud/dogs';
const baseSrc = 'https://usersdogs.dmytrominochkin.cloud';
let body = $('body').get(0);

let counter = 0;
// ajax
$.ajax(requestURL,{
    success: function(data){

        data.forEach(element => {
            listing.insertAdjacentHTML("beforeend",
                `<div class="row bg-2 gy-5 mx-auto px-0 rounding h-75" onclick="display(this)" value="${counter}">
                <div class="col-4 open_modal m-0 p-4">
                <div style="background-image:url(${baseSrc}${element.dogImage});" class="square rounding"></div>
                </div>
            <div class="col-8 align-self-center my-0">
                <h1>${element.title}</h1>
                <h5>${element.sex}</h5>
            </div>
            </div>`);
            counter++;
        });
    }
});

function display(elm) {
    let fetched = elm.getAttribute('value');
    $.ajax(requestURL,{
        success: function(data){
            $('#link')[0].style = 'background-image:url('+ baseSrc + data[fetched].dogImage +');';
            $('#name')[0].innerHTML = data[fetched].title;
            $('#sex')[0].innerHTML = data[fetched].sex;
            $('#age')[0].innerHTML = data[fetched].age;
            $('#description')[0].innerHTML = data[fetched].description;
            modal.classList.add('modal_vis');
            body.classList.add('body_block');

        }
    });
}

close_modal.onclick = function() {
    modal.classList.remove('modal_vis');
    body.classList.remove('body_block');
};