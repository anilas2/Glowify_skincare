// Data för olika hudtyper (Tips och Info)
const skinTips = {
    torr: {
        title: "Torr Hud",
        text: "Din hud saknar fukt och lipider. Den kan kännas stram, särskilt efter dusch, och kan flagna. Du behöver produkter som stärker barriären och låser in fukt.",
        ingredient: "Hyaluronsyra & Ceramider"
    },
    fet: {
        title: "Fet / Oljig Hud",
        text: "Din hud överproducerar talg, vilket kan leda till blankhet och tilltäppta porer. Undvik att torka ut huden (det skapar mer olja!). Fokusera på balans.",
        ingredient: "Salicylsyra (BHA) & Niacinamide"
    },
    kombinerad: {
        title: "Kombinerad Hud",
        text: "Du är oftast fet i T-zonen (panna, näsa, haka) men torr på kinderna. Du kan behöva olika produkter för olika delar av ansiktet, eller milda balanserande produkter.",
        ingredient: "Lätt gelkräm & Exfoliering"
    },
    kanslig: {
        title: "Känslig Hud",
        text: "Din hud reagerar lätt med rodnad, sveda eller klåda. Undvik starka parfymer och aktiva syror. Less is more!",
        ingredient: "Centella Asiatica & Aloe Vera"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    
    // Hämta knapparna och resultatrutan
    const buttons = document.querySelectorAll('.filter-btn');
    const resultBox = document.getElementById('tip-result');
    
    // Hämta textelementen inuti resultatrutan
    const resultTitle = document.getElementById('result-title');
    const resultText = document.getElementById('result-text');
    const resultIngredient = document.getElementById('result-ingredient');

    // Lägg till klick-lyssnare på varje knapp
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            
            // 1. Ta bort "active"-klassen från alla knappar
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // 2. Lägg till "active" på den klickade knappen
            button.classList.add('active');

            // 3. Hämta vilken hudtyp knappen representerar (från data-type attributet i HTML)
            const skinType = button.getAttribute('data-type');
            
            // 4. Hämta datan för den hudtypen från vårt objekt
            const info = skinTips[skinType];

            // 5. Uppdatera HTML-innehållet
            if (info) {
                resultTitle.textContent = info.title;
                resultText.textContent = info.text;
                resultIngredient.textContent = info.ingredient;
                
                // Visa rutan (ta bort 'hidden' klassen) med en liten animationseffekt
                resultBox.classList.remove('hidden');
                resultBox.style.animation = "none";
                resultBox.offsetHeight; /* Trigger reflow */
                resultBox.style.animation = "fadeIn 0.5s";
            }
        });
    });
});