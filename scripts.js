
let iniciar = document.getElementById('comecar-btn');




iniciar.addEventListener('click', () => {
    let horasElement = document.getElementById('horas');
    let minutosElement = document.getElementById('min');
    let segundosElement = document.getElementById('sec');
    
    let duration = (parseInt(horasElement.value * 60 * 60)) + (parseInt(minutosElement.value * 60)) + parseInt(segundosElement.value);
    let display = document.querySelector('#display');

   timer(duration,display);
});



const timer = (duration , display) => {
    let timer = duration;
    let horasElement, minutosElement, segundosElement;

    let interval = setInterval(() => {
        horasElement = Math.floor((timer / 60) / 60);
        minutosElement = Math.floor((timer / 60)- (horasElement * 60));
        segundosElement = Math.floor(timer % 60);

        horasElement = horasElement < 10 ? '0' + horasElement : horasElement;
        minutosElement =  minutosElement < 10 ? '0' + minutosElement : minutosElement;
        segundosElement =  segundosElement < 10 ? '0' + segundosElement : segundosElement;
        display.innerHTML = `${horasElement}:${minutosElement}:${segundosElement}`;
        
        timer-=1;
        if(timer < 0){
            display.innerHTML = "Acabou!";
            clearInterval(interval);
        }
    }, 1000);


}