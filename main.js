const selectStatus = document.getElementById('estado')
const estadoseleccionado = document.getElementById('')


const estadoSelect = document.getElementById('estado');
        const estadoDisplay = document.createElement('p');
        estadoSelect.addEventListener('change', function () {
            estadoDisplay.innerText= `Estado seleccionado: ${estadoSelect.value}`;
        });
        document.body.appendChild(estadoDisplay);
   
    