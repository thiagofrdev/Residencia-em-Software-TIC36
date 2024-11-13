function lightActive(light) {
    // Reseta todas as luzes para as cores inativas
    document.getElementById('light-red').style.backgroundColor = '#4a0109';
    document.getElementById('light-yellow').style.backgroundColor = '#4a3a01';
    document.getElementById('light-green').style.backgroundColor = '#014a18';

    // Aplica a cor ativa na luz clicada
    if (light.id === 'light-red') {
        light.style.backgroundColor = '#de1818';
    } else if (light.id === 'light-yellow') {
        light.style.backgroundColor = '#ded718';
    } else if (light.id === 'light-green') {
        light.style.backgroundColor = '#18de29';
    }
}