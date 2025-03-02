// Inicializar mapa
const map = L.map('map').setView([-15.7938, -47.8827], 5); // Centro do Brasil
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Dados dos locais (substituir por dados reais)
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
    "Rio de Janeiro": [
        {
            "nome": "Rio Sul Shopping - CoinCloud ATM",
            "gps": "-22.9520,-43.1822",
            "endereco": "Av. Lauro Sodré, 445 - Botafogo, Rio de Janeiro - RJ, 22290-070",
            "tipo": "ATM"
        },
        {
            "nome": "BarraShopping - CoinCloud ATM",
            "gps": "-23.0000,-43.3600",
            "endereco": "Av. das Américas, 4666 - Barra da Tijuca, Rio de Janeiro - RJ, 22640-102",
            "tipo": "ATM"
        },
        {
            "nome": "NorteShopping - CoinCloud ATM",
            "gps": "-22.8870,-43.2940",
            "endereco": "Av. Dom Hélder Câmara, 5474 - Cachambi, Rio de Janeiro - RJ, 20771-004",
            "tipo": "ATM"
        }
    ],
    "Goiás": [
        {
            "nome": "Flamboyant Shopping Center - CoinCloud ATM",
            "gps": "-16.6990,-49.2560",
            "endereco": "Av. Jamel Cecílio, 3300 - Jardim Goiás, Goiânia - GO, 74810-907",
            "tipo": "ATM"
        }
    ],
    "Espírito Santo": [
        {
            "nome": "Shopping Vitória - CoinCloud ATM",
            "gps": "-20.3155,-40.3128",
            "endereco": "Av. Américo Buaiz, 200 - Enseada do Suá, Vitória - ES, 29050-902",
            "tipo": "ATM"
        }
    ],
    "Rio Grande do Sul": [
        {
            "nome": "Hospital de Rolante",
            "gps": "-29.6460,-50.5810",
            "endereco": "R. Alfredo Aluisio Siebel, 350 - Centro, Rolante - RS, 95690-000",
            "tipo": "Comércio"
        },
        {
            "nome": "Escola Infantil Brinca e Ser Feliz",
            "gps": "-29.6465,-50.5805",
            "endereco": "R. Borges de Medeiros, 123 - Centro, Rolante - RS, 95690-000",
            "tipo": "Comércio"
        },
        {
            "nome": "Drogaria Eficaz",
            "gps": "-29.6470,-50.5800",
            "endereco": "Av. Getúlio Vargas, 456 - Centro, Rolante - RS, 95690-000",
            "tipo": "Comércio"
        }
    ],
    "Ceará": [
        {
            "nome": "Projeto Bitcoin Beach Brazil",
            "gps": "-2.7933,-40.5127",
            "endereco": "Jericoacoara, Jijoca de Jericoacoara - CE",
            "tipo": "Comércio"
        }
    ],
    "Paraná": [
        {
            "nome": "Projeto Bitcoin Beach Brazil",
            "gps": "-25.4284,-49.2733",
            "endereco": "Curitiba - PR",
            "tipo": "Comércio"
        }
    ],
    "Bahia": [
        {
            "nome": "Projeto Bitcoin Beach Brazil",
            "gps": "-12.9714,-38.5014",
            "endereco": "Salvador - BA",
            "tipo": "Comércio"
        }
    ],
    "Minas Gerais": [
        {
            "nome": "Projeto Bitcoin Beach Brazil",
            "gps": "-19.9167,-43.9345",
            "endereco": "Belo Horizonte - MG",
            "tipo": "Comércio"
        }
    ],
    "Distrito Federal": [
        {
            "nome": "Projeto Bitcoin Beach Brazil",
            "gps": "-15.8267,-47.9218",
            "endereco": "Brasília - DF",
            "tipo": "Comércio"
        }
    ],
    "Santa Catarina": [
        {
            "nome": "Projeto Bitcoin Beach Brazil",
            "gps": "-27.5954,-48.5480",
            "endereco": "Florianópolis - SC",
            "tipo": "Comércio"
        }
    ],
    "Pernambuco": [
        {
            "nome": "Projeto Bitcoin Beach Brazil",
            "gps": "-8.0476,-34.8770",
            "endereco": "Recife - PE",
            "tipo": "Comércio"
        }
    ],
    "Amazonas": [
        {
            "nome": "Projeto Bitcoin Beach Brazil",
            "gps": "-3.1190,-60.0217",
            "endereco": "Manaus - AM",
            "tipo": "Comércio"
        }
    ],
    "Mato Grosso": [
        {
            "nome": "Projeto Bitcoin Beach Brazil",
            "gps": "-15.6014,-56.0979",
            "endereco": "Cuiabá - MT",
            "tipo": "Comércio"
        }
    ],
    "Pará": [
        {
            "nome": "Projeto Bitcoin Beach Brazil",
            "gps": "-1.4550,-48.5024",
            "endereco": "Belém - PA",
            "tipo": "Comércio"
        }
    ]
};

// Adicionar marcadores ao mapa
for (const estado in locations) {
    locations[estado].forEach(location => {
        const [lat, lng] = location.gps.split(',').map(parseFloat);
        const marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup(`<b>${location.nome}</b><br>${location.endereco}<br>Tipo: ${location.tipo}`);
