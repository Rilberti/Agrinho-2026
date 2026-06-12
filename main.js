// --- DADOS FÁCEIS DE MUDAR ---
// Para adicionar uma cultura nova, basta adicionar um objeto aqui
const culturasData = [
    { nome: 'Soja', plant: 'Out-Nov', harvest: 'Jan-Fev' },
    { nome: 'Milho', plant: 'Set-Nov', harvest: 'Jan-Abr' },
    { nome: 'Café', plant: 'Out-Dez', harvest: 'Mai-Ago' },
    { nome: 'Feijão', plant: 'Jan-Set', harvest: 'Todos' },
    { nome: 'Algodão', plant: 'Nov-Jan', harvest: 'Jun-Jul' }
];

// Configuração inicial
document.addEventListener('DOMContentLoaded', () => {
    loadSafraCards();
});

// 1. Função para trocar as abas (Utils)
function openTool(toolId) {
    // Esconde todas as ferramentas
    const contents = document.querySelectorAll('.tool-content');
    contents.forEach(content => content.classList.remove('active'));

    // Desativa os botões
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Ativa a clicada
    document.getElementById(toolId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// 2. Calculadora de Lucro
function calcularLucro() {
    // Pega os valores do formulário
    const custo = parseFloat(document.getElementById('custo').value) || 0;
    const producao = parseFloat(document.getElementById('producao').value) || 0;
    const preco = parseFloat(document.getElementById('preco').value) || 0;

    // Cálculos

    // --- DADOS DE NOTÍCIAS (FÁCIL DE ADICIONAR) ---
const noticiasData = [
    {
        titulo: 'Clima favorece plantio de soja no Centro-Oeste',
        data: '15/10/2023',
        resumo: 'As chuvas dos últimos dias garantiram boa umidade do solo para o início do plantio.',
        // Imagem placeholder (você pode trocar por URL real)
        imagem: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=500&q=60'
    },
    {
        titulo: 'Nova linha de crédito para pequenos agricultores',
        data: '14/10/2023',
        resumo: 'Governo anuncia programa de financiamento com juros baixos para agricultura familiar.',
        imagem: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=500&q=60'
    },
    {
        titulo: 'Preço do milho sobe no mercado internacional',
        data: '12/10/2023',
        resumo: 'A alta demanda por biocombustíveis impulsiona os preços do grão para cima.',
        imagem: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=500&q=60'
    },
    {
        titulo: 'Tecnologia drone no monitoramento de lavouras',
        data: '10/10/2023',
        resumo: 'Uso de drones aumenta a eficiência na aplicação de defensivos agrícolas.',
        imagem: 'https://images.unsplash.com/photo-1495107334309-fcf258b65378?auto=format&fit=crop&w=500&q=60'
    }
];

// --- CONTROLE DAS ABAS (Já existente ou adicione se não tiver) ---
function openTool(toolId) {
    const contents = document.querySelectorAll('.tool-content');
    contents.forEach(content => content.classList.remove('active'));

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Tenta encontrar o elemento pelo ID (para abas internas)
    const target = document.getElementById(toolId);
    if (target) {
        target.classList.add('active');
    }
    
    // Atualiza o botão ativo (ajuste o seletor conforme necessário)
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// --- CARREGAR NOTÍCIAS ---
function loadNews() {
    const container = document.getElementById('news-container');
    if (!container) return;

    container.innerHTML = noticiasData.map(noticia => `
        <div class="news-card">
            <div class="news-image" style="background-image: url('${noticia.imagem}')"></div>
            <div class="news-content">
                <span class="news-date">${noticia.data}</span>
                <h3 class="news-title">${noticia.titulo}</h3>
                <p class="news-resume">${noticia.resumo}</p>
            </div>
        </div>
    `).join('');
}

// --- VALIDAÇÃO E ENVIO DO FORMULÁRIO DE CONTATO ---
const formContato = document.getElementById('form-contato');

if (formContato) {
    formContato.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o recarregamento da página

        // Pega os valores
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;

        // Simulação de envio (Aqui você integraria com backend ou serviço de email)
        alert(`Obrigado, ${nome}!\n\nSua mensagem sobre "${assunto}" foi enviada com sucesso.\n\nEntraremos em contato no email: ${email}`);

        // Limpa o formulário
        formContato.reset();
    });
}

// --- INICIALIZAÇÃO COMPLETA ---
document.addEventListener('DOMContentLoaded', () => {
    // Carrega dados existentes
    loadSafraCards(); // Função da aba anteriores
    loadNews();       // Carrega notícias
    
    // Verifica se há uma aba ativa por padrão
    const firstTab = document.querySelector('.tab-btn');
    if (firstTab) {
        firstTab.click();
    }
});

/* 
   =================================================================
   DADOS DE CULTURAS - FÁCIL DE EDITAR
   Para adicionar uma nova cultura, basta adicionar um objeto 
   novo neste array seguindo o mesmo formato.
   =================================================================
*/
const culturasData = [
    {
        nome: "Soja",
        icono: "fas fa-seedling",
        plantio: "Outubro a Novembro",
        colheita: "Janeiro a Fevereiro",
        ciclo: "110 a 120 dias",
        clima: "Quente e úmido",
        solo: "Fértil, bem drenado",
        observação: "Principal grão do Brasil. Atenção aozonebóia na fase de floração.",
        estacao: "📅 Safra de Verão"
    },
    {
        nome: "Milho",
        icono: "fas fa-leaf",
        plantio: "Setembro a Novembro",
        colheita: "Janeiro a Abril",
        ciclo: "90 a 120 dias",
        clima: "Quente",
        solo: "Fértil e rico em matéria orgânica",
        observação: "Alta demanda hídrica no florescimento. Primeira e Segunda Safra.",
        estacao: "📅 Dupla Safra"
    },
    {
        nome: "Café",
        icono: "fas fa-coffee",
        plantio: "Outubro a Dezembro",
        colheita: "Maio a Agosto",
        ciclo: "180 a 210 dias",
        clima: "Temperado (18-24°C)",
        solo: "Ácido, rico em húmus",
        observação: "Colheita manual ou mecânica. Secagem imediata pós-colheita.",
        estacao: "📅 Safra de Inverno"
    },
    {
        nome: "Feijão",
        icono: "fas fa-circle",
        plantio: "Janeiro a Setembro",
        colheita: "95 a 110 dias após plantio",
        ciclo: "95 a 110 dias",
        clima: "Temperado a quente",
        solo: "Medianamente fértil",
        observação: "Pode ser cultivado em konsórcio com milho. three safras/ano.",
        estacao: "📅 Ano Todo"
    },
    {
        nome: "Algodão",
        icono: "fas fa-cloud",
        plantio: "Novembro a Janeiro",
        colheita: "Junho a Agosto",
        ciclo: "150 a 180 dias",
        clima: "Quente e seco",
        solo: "Profundo e fértil",
        observação: "Necessita controle rigoroso de pragas. Máquina recolhedora recomendada.",
        estacao: "📅 Safra de Seca"
    },
    {
        nome: "Cana-de-Açúcar",
        icono: "fas fa-align-left",
        plantio: "Janeiro a Abril",
        colheita: "12 a 18 meses após plantio",
        ciclo: "12 a 18 meses",
        clima: "Quente",
        solo: "Fértil e profundas",
        observação: "Corte após florescimento. Pode ficar até 5 cortes no mesmo talhão.",
        estacao: "📅 Perene"
    },
    {
        nome: "Arroz",
        icono: "fas fa-water",
        plantio: "Setembro a Dezembro",
        colheita: "Janeiro a Março",
        ciclo: "120 a 150 dias",
        clima: "Quente e úmido",
        solo: "Argiloso, inundável",
        observação: "Sistema inundado ou sequeiro. Alta necessidade de água.",
        estacao: "📅 Safra de Chuva"
    },
    {
        nome: "Trigo",
        icono: "fas fa-wind",
        plantio: "Maio a Julho",
        colheita: "Setembro a Novembro",
        ciclo: "120 a 140 dias",
        clima: "Frio a Temperado",
        solo: "Fértil, bem drenado",
        observação: "Gramínea de inverno. Resistencia ao frío. Cereais de inverno.",
        estacao: "📅 Safra de Inverno"
    }
];

/* 
   =================================================================
   FUNÇÕES DO SISTEMA
   Não edite abaixo a menos que precise mudar a lógica
   =================================================================
*/

// 1. Inicialização
document.addEventListener('DOMContentLoaded', () => {
    carregarCulturas();
    carregarOpcoesFiltro();
    
    //ativa a primeira aba por padrão
    const primeiraAba = document.querySelector('.tab-btn');
    if (primeiraAba) primeiraAba.click();
});

// 2. Carregar Card de Culturas
function carregarCulturas(filtro = 'todas') {
    const container = document.getElementById('safra-container');
    if (!container) return;

    // Filtra os dados baseado na seleção
    let culturas = culturasData;
    if (filtro !== 'todas') {
        culturas = culturasData.filter(c => c.nome.toLowerCase() === filtro.toLowerCase());
    }

    // Gera o HTML
    container.innerHTML = culturas.map(cultura => `
        <div class="cultura-card">
            <div class="cultura-header">
                <h3>${cultura.nome}</h3>
                <i class="${cultura.icono} cultura-icon"></i>
            </div>
            <div class="cultura-body">
                <div class="cultura-info">
                    <strong>📅 Plantio</strong>
                    <p>${cultura.plantio}</p>
                </div>
                <div class="cultura-info">
                    <strong>🌾 Colheita</strong>
                    <p>${cultura.colheita}</p>
                </div>
                <div class="cultura-info">
                    <strong>⏱️ Ciclo</strong>
                    <p>${cultura.ciclo}</p>
                </div>
                <div class="cultura-info">
                    <strong>☁️ Clima Ideal</strong>
                    <p>${cultura.clima}</p>
                </div>
                <div class="cultura-info">
                    <strong>🌱 Solo</strong>
                    <p>${cultura.solo}</p>
                </div>
                <div class="cycle-tags">
                    <span class="cycle-tag plantio">Plantio</span>
                    <span class="cycle-tag colheita">Colheita</span>
                </div>
                <div class="season-indicator">
                    <i class="fas fa-calendar-alt"></i> ${cultura.estacao}
                </div>
            </div>
        </div>
    `).join('');
}

// 3. Carregar Opções do Filtro
function carregarOpcoesFiltro() {
    const select = document.getElementById('filter-cultura');
    if (!select) return;

    // Cria as opções baseada nos dados
    const opcoes = culturasData.map(c => 
        `<option value="${c.nome}">${c.nome}</option>`
    ).join('');

    // Insere após a opção "Todas"
    select.innerHTML = `<option value="todas">Todas as Culturas</option>${opcoes}`;
}

// 4. Função do Filtro
function filtrarCultura() {
    const select = document.getElementById('filter-cultura');
    const valor = select.value;
    carregarCulturas(valor);
}

// --- Dados do Calendário de Safra ---
const dadosSafra = [
    {
        cultura: 'soja',
        nome: 'Soja',
        fase: 'Plantio',
        periodo: 'Outubro a Novembro',
        desc: 'Janelas de planting recomendadas para evitar estresse hídrico no florescimento.'
    },
    {
        cultura: 'soja',
        nome: 'Soja',
        fase: 'Colheita',
        periodo: 'Janeiro a Fevereiro',
        desc: 'Colheita antecipada para evitar perdas por queda de grãos e chuvas.'
    },
    {
        cultura: 'milho',
        nome: 'Milho (1ª Safra)',
        fase: 'Plantio',
        periodo: 'Setembro a Novembro',
        desc: 'Semeadura em solo com boa umidade. Atenção às pragas iniciais.'
    },
    {
        cultura: 'milho',
        nome: 'Milho (1ª Safra)',
        fase: 'Colheita',
        periodo: 'Janeiro a Abril',
        desc: 'Colheita quando os grãos atingem úmidade deAround 13-14%.'
    },
    {
        cultura: 'cafe',
        nome: 'Café',
        fase: 'Colheita',
        periodo: 'Abril a Setembro',
        desc: 'Período de maturação dos grãos. pós-colheita: secagem imediata.'
    },
    {
        cultura: 'algodao',
        nome: 'Algodão',
        fase: 'Plantio',
        periodo: 'Dezembro a Janeiro',
        desc: 'Plantio após as primeiras chuvas de verão.'
    },
    {
        cultura: 'trigo',
        nome: 'Trigo',
        fase: 'Plantio',
        periodo: 'Abril a Maio',
        desc: 'Cultivo de inverno. Requer controle rigoroso de plantas daninhas.'
    }
];


// Função para Renderizar a Grade
function renderizarSafra() {
    const container = document.getElementById('safra-container');
    const filtro = document.getElementById('safra-filter').value;
    
    // Limpa o container atual
    container.innerHTML = '';

    // Filtra os dados
    const dadosFiltrados = dadosSafra.filter(item => {
        if (filtro === 'todas') return true;
        return item.cultura === filtro;
    });




    
    // Gera o HTML para cada item
    dadosFiltrados.forEach(item => {
        const card = `
            <div class="safra-card">
                <div class="card-header">
                    <h4>${item.nome}</h4>
                    <span class="badge fase">${item.fase}</span>
                </div>
                <div class="card-body">
                    <p class="periodo"><i class="far fa-calendar-alt"></i> <strong>Época:</strong> ${item.periodo}</p>
                    <p class="desc">${item.desc}</p>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

