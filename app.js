const questoes = document.querySelectorAll(".pergunta");

questoes.forEach((questao) =>
    questao.addEventListener('click', () => {
        if(questao.parentNode.classList.contains('active')) {
            questao.parentNode.classList.toggle('active');
        } else {
            questoes.forEach((questao) => 
            questao.parentNode.classList.remove('active'));
            questao.parentNode.classList.add('active');
        }
    })
)