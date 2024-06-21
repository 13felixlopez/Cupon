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
