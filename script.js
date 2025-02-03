function saveName() {
    const userName = document.getElementById('userName').value;
    if (userName.trim() === "") {
        alert("Por favor, escribe tu nombre.");
        return;
    }

    document.getElementById('nameFormContainer').style.display = 'none';
    document.getElementById('envelopeContainer').style.display = 'flex';

    // Guardar el nombre en el mensaje del cupón
    document.getElementById('couponMessage').innerText = `Cupón válido para un café☕ o un helado 🍦 🙈, ${userName}`;
}

document.getElementById('envelope').addEventListener('click', function() {
    const envelope = document.getElementById('envelope');
    const couponContainer = document.getElementById('couponContainer');
    
    envelope.style.transform = 'rotateX(180deg)';
    envelope.querySelector('.flap').style.transform = 'rotateX(-180deg)';
    
    setTimeout(() => {
        couponContainer.style.display = 'flex';
        envelope.style.display = 'none';
    }, 500);
});

function resetEnvelope() {
    const envelope = document.getElementById('envelope');
    const couponContainer = document.getElementById('couponContainer');
    
    couponContainer.style.display = 'none';
    envelope.style.display = 'flex';
    envelope.style.transform = 'rotateX(0deg)';
    envelope.querySelector('.flap').style.transform = 'rotateX(0deg)';
}
