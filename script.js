const mario = document.querySelector('.mario'); //CONSTANTE PARA O MARIO
const pipe = document.querySelector('.pipe'); //CONSTANTE PARA O CANO

const jump = () => { //INICIO ESTRUTURA DO PULO
   mario.classList.add('jump');

   setTimeout(() => {

    mario.classList.remove('jump');

   }, 500);
} //FIM DA ESTRUTURA DO PULO

const loop = setInterval(() => { //INICIO DA ESTRUTURA DO ENCERRAMENTO DO JOGO

const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
   
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

       pipe.style.animation = 'none';
       pipe.style.left = `${pipePosition}px`;

       mario.style.animation = 'none';
       mario.style.bottom = `${marioPosition}px`;

       mario.src = './game-over.png';
       mario.style.width = '75px';
       mario.style.marginLeft = '50px';

       clearInterval(loop);

    }

}, 10); //FIM DA ESTRUTURA DO ENCERRAMENTO DO JOGO

document.addEventListener('keydown', jump); //COMANDO PARA PULAR