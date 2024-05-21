export function scrollSuave(target) {
    // Obtém o elemento alvo
    var targetElement = document.querySelector(target);
    
    // Calcula a posição do elemento alvo na página
    var targetPosition = targetElement.getBoundingClientRect().top;
    
    // Calcula a posição atual da janela
    var startPosition = window.scrollY;
    
    // Calcula a distância que deve ser percorrida
    var distance = targetPosition - startPosition;
    
    // Duração da animação (em milissegundos)
    var duration = 1000; // Ajuste conforme necessário
    
    // Função para animar a rolagem
    var startTime = null;
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var scrollAmount = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, scrollAmount);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Função de suavização de movimento
    // t = tempo decorrido, b = valor inicial, c = mudança no valor do movimento, d = duração total da animação
    function easeInOutQuad(t, b, c, d) {
        t = t / (d/2); // -> Intervalo de tempo de 0 a 2
        if (t < 1) return c / 2 * t * t + b; // Formula que começa devagar e aumenta gradualmente 
        t--; // Calculo para determinar o t = 1
        return -c / 2 * (t * (t - 2) - 1) + b; // t = 1, desalecera a animação
    };

    // Inicia a animação
    requestAnimationFrame(animation);
}


// code by chatgpt