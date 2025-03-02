// Inicializar mapa
const map = L.map('map').setView([-15.7938, -47.8827], 5); // Centro do Brasil
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Obter dados da API Coin ATM Radar
fetch('https://coinatmradar.com/api/v2/atms?country=BR')
    .then(response => response.json())
    .then(data => {
        // Adicionar marcadores ao mapa
        const markers = []; // Armazenar marcadores para pesquisa
        data.forEach(atm => {
            const lat = atm.lat;
            const lng = atm.lng;
            const marker = L.marker([lat, lng]).addTo(map);
            let popupContent = `<b>${atm.name}</b><br>${atm.address}`;
            if (atm.operator) {
                popupContent += `<br>Operador: ${atm.operator}`;
            }
            marker.bindPopup(popupContent);
            marker.on('click', () => showInfo(atm));
            markers.push({ atm, marker }); // Armazenar ATM e marcador
        });

        // Adicionar evento de clique ao botão de busca
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            markers.forEach(item => {
                const { atm, marker } = item;
                const match = atm.name.toLowerCase().includes(searchTerm) ||
                    atm.address.toLowerCase().includes(searchTerm) ||
                    (atm.operator && atm.operator.toLowerCase().includes(searchTerm));
                if (match) {
                    marker.addTo(map); // Exibir marcador
                } else {
                    map.removeLayer(marker); // Ocultar marcador
                }
            });
        });
    })
    .catch(error => console.error('Erro ao obter dados da API:', error));

// Exibir informações do local
function showInfo(atm) {
    const infoPanel = document.getElementById('infoPanel');
    let infoContent = `
        <h2>${atm.name}</h2>
        <p>${atm.address}</p>
    `;
    if (atm.operator) {
        infoContent += `<p>Operador: ${atm.operator}</p>`;
    }
    infoPanel.innerHTML = infoContent;
}
