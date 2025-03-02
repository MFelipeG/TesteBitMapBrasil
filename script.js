// Inicializar mapa
const map = L.map('map').setView([-15.7938, -47.8827], 5); // Centro do Brasil
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Dados dos locais
const locations = {
    "São Paulo": [
        {
            "nome": "Mooca Plaza Shopping - CoinCloud ATM",
            "gps": "-23.561414,-46.655881",
            "endereco": "R. Cap. Pacheco e Chaves, 313 - Vila Prudente, São Paulo - SP, 03126-000",
            "tipo": "ATM"
        },
        {
            "nome": "Shopping Metrô Boulevard Tatuapé - CoinCloud ATM",
            "gps": "-23.5362,-46.5788",
            "endereco": "R. Gonçalves Crespo, 78 - Tatuapé, São Paulo - SP, 03326-000",
            "tipo": "ATM"
        },
        {
            "nome": "Raposo Shopping - CoinCloud ATM",
            "gps": "-23.5920,-46.7694",
            "endereco": "Rod. Raposo Tavares, Km 14,5 - Jardim Boa Vista, São Paulo - SP, 05576-100",
            "tipo": "ATM"
        },
        {
            "nome": "Calvin Klein - Loja",
            "gps": "-23.561414,-46.655881",
            "endereco": "Av. Paulista, 1230 - Bela Vista, São Paulo - SP, 01310-100",
            "tipo": "Comércio"
        }
    ],
    // ... (outros estados)
};

// Adicionar marcadores ao mapa
for (const estado in locations) {
    locations[estado].forEach(location => {
        const [lat, lng] = location.gps.split(',').map(parseFloat);
        const marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup(`<b>${location.nome}</b><br>${location.endereco}<br>Tipo: ${location.tipo}`);
        marker.on('click', () => showInfo(location)); // Adicionado evento de clique
    });
}

// Exibir informações do local
function showInfo(location) {
    const infoPanel = document.getElementById('infoPanel');
    infoPanel.innerHTML = `
        <h2>${location.nome}</h2>
        <p>${location.endereco}</p>
        <p>Tipo: ${location.tipo}</p>
        <button onclick="getDirections('${location.gps}')">Como chegar</button>
        <button onclick="addToFavorites('${location.gps}')">Adicionar aos favoritos</button>
    `;
}

// Obter rotas (integração com Google Maps ou Waze)
function getDirections(gps) {
    // Implementar lógica de rotas
    alert('Funcionalidade "Como chegar" em desenvolvimento.');
}

// Adicionar aos favoritos
function addToFavorites(gps) {
    // Implementar lógica de favoritos
    alert('Funcionalidade "Adicionar aos favoritos" em desenvolvimento.');
}
