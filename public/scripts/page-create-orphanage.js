//create map
const map = L.map('mapid').setView([-19.4782699,-42.5290311], 15) // ultimo vlr = zoom

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68]
})

/**********************
//create and add maker
L.marker([-19.4782699,-42.5290311], { icon })
.addTo(map)
********************/

let marker;

//create and add maker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon 
    marker && map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map);
})



//adc o campo de fotos
function addPhotoField() {
    //pegar container de fotos #images
    const container = document.querySelector("#images")

    //pegar container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll(".new-upload")

    //realizar o clone da ultima foto adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //se o valor for vazio, não adc foto
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return 
    }

    //remove text
    input.value = "";

    //add o clone ao container de images
    container.appendChild(newFieldContainer)

}


function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll(".new-upload")

    if(fieldsContainer.length < 2){
        //limpar o valor do campo
        span.parentNode.children[0].value = "";
        return
    }

    //deleta o campo
    span.parentNode.remove();
}

//select yes or no 
function  toggleSelect(event) {
    
    //retirar a classe .active dos botoes
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active')) //dentro da foreach tem uma função

    //colocar a class active no botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar input hidden com valor seleionado
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value

}

/*
function validate(event){
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    if(lat.value == "" && lng.value == ""){
        event.preventDefault(
        alert('Favor colocar o local do orfanato')     
    }
   

}*/