document.addEventListener('DOMContentLoaded', () => {
    let isAnimating = false; // Flaga blokująca kliknięcia podczas animacji

    // Inicjalizacja pierwszej karty
    const initCard = () => {
        const firstCard = document.getElementById('cart_1');
        const firstButton = document.querySelector('[data-card="1"]');
        firstCard.classList.add('selected');
        firstButton.classList.add('active');
    };
    setTimeout(initCard, 100);

    // Pobranie elementów
    const buttons = document.querySelectorAll('.nav-btn');
    const cards = document.querySelectorAll('.cart');

    // Funkcja główna
    const showCard = (cardNumber) => {
        if(isAnimating) return; // Blokada jeśli trwa animacja
        
        isAnimating = true; // Rozpoczęcie animacji
        const targetCard = document.getElementById(`cart_${cardNumber}`);
        const targetButton = document.querySelector(`[data-card="${cardNumber}"]`);

        // Animacja wyjścia
        cards.forEach(card => {
            card.classList.remove('selected');
            card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.6, 1)';
        });

        // Reset przycisków
        buttons.forEach(btn => btn.classList.remove('active'));

        // Opóźnienie dla animacji wejścia
        setTimeout(() => {
            targetCard.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            targetCard.classList.add('selected');
            targetButton.classList.add('active');
            isAnimating = false; // Odblokowanie po zakończeniu animacji
        }, 1200);
    };

    // Nasłuchiwanie kliknięć z zabezpieczeniem
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if(!isAnimating) { // Tylko jeśli nie trwa animacja
                const cardNumber = button.dataset.card;
                showCard(cardNumber);
            }
        });
    });
});