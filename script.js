// Perguntas e respostas
const perguntas = [
    {
        pergunta: "Como você reage a conflitos?",
        opcoes: [
            { resposta: "Tomo a frente e busco resolver", tipo: "colérico" },
            { resposta: "Fico na defensiva", tipo: "melancólico" },
            { resposta: "Busco evitar o conflito", tipo: "fleumático" },
            { resposta: "Tento alegrar o ambiente", tipo: "sanguíneo" }
        ]
    },
    {
        pergunta: "Como você expressa amor?",
        opcoes: [
            { resposta: "Com palavras de afirmação", tipo: "palavras de afirmação" },
            { resposta: "Passando tempo de qualidade", tipo: "tempo de qualidade" },
            { resposta: "Dando presentes", tipo: "presentes" },
            { resposta: "Através de atos de serviço", tipo: "atos de serviço" },
            { resposta: "Com toque físico", tipo: "toque físico" }
        ]
    },
    {
        pergunta: "Como você reage a críticas?",
        opcoes: [
            { resposta: "Fico muito irritado", tipo: "Irritado" },
            { resposta: "Refletindo sobre elas", tipo: "Refletindo" },
            { resposta: "Aceito de boa", tipo: "Aceito" },
            { resposta: "Não me importo", tipo: "Não me importo" }
        ]
    },
    {
        pergunta: "Você costuma tomar decisões rapidamente?",
        opcoes: [
            { resposta: "Sim, sem pensar", tipo: "Sim, sem pensar" },
            { resposta: "Após análise cuidadosa", tipo: "Após análise" },
            { resposta: "Com ajuda de outros", tipo: "Com ajuda" },
            { resposta: "Com muita cautela", tipo: "Cautela" }
        ]
    },
    {
        pergunta: "Como você se sente em situações de alta pressão?",
        opcoes: [
            { resposta: "Mantenho a calma", tipo: "Calma" },
            { resposta: "Fico ansioso", tipo: "Ansioso" },
            { resposta: "Acredito que o trabalho em equipe é essencial", tipo: "Trabalho em equipe" },
            { resposta: "Procuro uma solução rapidamente", tipo: "Solução rápida" }
        ]
    },
    {
        pergunta: "Você prefere planejar tudo com antecedência ou ser espontâneo?",
        opcoes: [
            { resposta: "Planejo tudo", tipo: "Planejo tudo" },
            { resposta: "Gosto de um planejamento básico", tipo: "Planejamento básico" },
            { resposta: "Faço planos, mas gosto de mudar", tipo: "Gosto de mudar" },
            { resposta: "Prefiro agir conforme a situação", tipo: "Agir conforme a situação" }
        ]
    },
    {
        pergunta: "Qual das seguintes opções descreve melhor sua abordagem em projetos de grupo?",
        opcoes: [
            { resposta: "Gosto de liderar", tipo: "Liderar" },
            { resposta: "Prefiro apoiar os outros", tipo: "Apoiar" },
            { resposta: "Gosto de participar, mas não de tomar a frente", tipo: "Participar" },
            { resposta: "Aprecio trabalhar em grupos", tipo: "Trabalhar em grupos" }
        ]
    },
    {
        pergunta: "Quando você se sente mais amado?",
        opcoes: [
            { resposta: "Quando alguém elogia meu trabalho", tipo: "Elogios" },
            { resposta: "Quando passo tempo de qualidade", tipo: "Tempo de qualidade" },
            { resposta: "Quando recebo um presente significativo", tipo: "Presente significativo" },
            { resposta: "Quando alguém faz algo especial por mim", tipo: "Algo especial" },
            { resposta: "Quando sou abraçado", tipo: "Abraços" }
        ]
    },
    {
        pergunta: "Como você expressa sua gratidão?",
        opcoes: [
            { resposta: "Digo 'obrigado' de forma sincera", tipo: "Obrigado sincero" },
            { resposta: "Faço algo especial para a pessoa", tipo: "Algo especial" },
            { resposta: "Dou um presente", tipo: "Dar presente" },
            { resposta: "Ofereço meu tempo", tipo: "Oferecer tempo" },
            { resposta: "Dou um abraço caloroso", tipo: "Abraço caloroso" }
        ]
    },
    {
        pergunta: "O que você valoriza mais em relacionamentos?",
        opcoes: [
            { resposta: "Comunicação aberta", tipo: "Comunicação aberta" },
            { resposta: "Tempo de qualidade juntos", tipo: "Tempo de qualidade" },
            { resposta: "Presentes significativos", tipo: "Presentes" },
            { resposta: "Apoio nas responsabilidades", tipo: "Apoio" },
            { resposta: "Conexões físicas", tipo: "Conexões físicas" }
        ]
    },
    {
        pergunta: "Qual das seguintes atividades você se sente mais inclinado a fazer?",
        opcoes: [
            { resposta: "Organizar eventos", tipo: "Organizar eventos" },
            { resposta: "Ensinar e compartilhar conhecimento", tipo: "Ensinar" },
            { resposta: "Evangelizar", tipo: "Evangelizar" },
            { resposta: "Oferecer suporte emocional", tipo: "Suporte emocional" },
            { resposta: "Inspirar outros a liderar", tipo: "Inspirar" }
        ]
    },
    {
        pergunta: "Em que tipo de situação você se sente mais motivado a ajudar?",
        opcoes: [
            { resposta: "Quando alguém precisa de conselhos", tipo: "Conselhos" },
            { resposta: "Em momentos de celebração", tipo: "Celebração" },
            { resposta: "Durante crises", tipo: "Crises" },
            { resposta: "Quando há oportunidades de aprendizado", tipo: "Oportunidades de aprendizado" },
            { resposta: "Quando posso ajudar em causas sociais", tipo: "Causas sociais" }
        ]
    },
    {
        pergunta: "Como você se vê contribuindo para a comunidade da igreja?",
        opcoes: [
            { resposta: "Liderando grupos de estudo", tipo: "Liderando grupos" },
            { resposta: "Ajudando na organização de eventos", tipo: "Organização de eventos" },
            { resposta: "Compartilhando minha história de fé", tipo: "Compartilhar fé" },
            { resposta: "Oferecendo apoio a pessoas em necessidade", tipo: "Apoio a necessidade" },
            { resposta: "Treinando novos líderes", tipo: "Treinar líderes" }
        ]
    },
    {
        pergunta: "Você se considera mais introvertido ou extrovertido?",
        opcoes: [
            { resposta: "Introvertido", tipo: "Introvertido" },
            { resposta: "Extrovertido", tipo: "Extrovertido" },
            { resposta: "Ambos", tipo: "Ambos" },
            { resposta: "Nem um nem outro", tipo: "Nem um nem outro" }
        ]
    },
    {
        pergunta: "Você prefere trabalhar em equipe ou sozinho?",
        opcoes: [
            { resposta: "Em equipe", tipo: "Em equipe" },
            { resposta: "Sozinho", tipo: "Sozinho" },
            { resposta: "Depende da tarefa", tipo: "Depende da tarefa" },
            { resposta: "Ambos", tipo: "Ambos" }
        ]
    },
    {
        pergunta: "Como você lida com conflitos?",
        opcoes: [
            { resposta: "Enfrento diretamente", tipo: "Enfrento" },
            { resposta: "Evito confrontos", tipo: "Evito" },
            { resposta: "Busco um acordo", tipo: "Busco acordo" },
            { resposta: "Tento entender o outro lado", tipo: "Entender o outro lado" }
        ]
    },
    {
        pergunta: "Como você se sente em ambientes sociais?",
        opcoes: [
            { resposta: "Muito à vontade", tipo: "À vontade" },
            { resposta: "Prefiro observar", tipo: "Observar" },
            { resposta: "Gosto de ajudar", tipo: "Ajudar" },
            { resposta: "Sinto-me ansioso", tipo: "Ansioso" }
        ]
    },
    {
        pergunta: "Qual é sua reação quando encontra desafios?",
        opcoes: [
            { resposta: "Vejo como oportunidade", tipo: "Oportunidade" },
            { resposta: "Sinto-me inseguro", tipo: "Inseguro" },
            { resposta: "Procuro ajuda", tipo: "Procuro ajuda" },
            { resposta: "Analiso cuidadosamente", tipo: "Analiso" }
        ]
    },
    {
        pergunta: "O que te inspira a servir a Deus?",
        opcoes: [
            { resposta: "Histórias de fé", tipo: "Histórias de fé" },
            { resposta: "Apoio a pessoas em necessidade", tipo: "Apoio a necessidade" },
            { resposta: "Comunhão com outros", tipo: "Comunhão" },
            { resposta: "Estudo da Bíblia", tipo: "Estudo da bíblia" },
        
            {
                pergunta: "Qual o seu estilo de comunicação preferido?",
                opcoes: [
                    { resposta: "Conversas profundas", tipo: "Conversas profundas" },
                    { resposta: "Conversa casual", tipo: "Conversa casual" },
                    { resposta: "Comunicação escrita", tipo: "Comunicação escrita" },
                    { resposta: "Comunicação visual", tipo: "Comunicação visual" }
                ]
            },
            {
                pergunta: "Como você se sente ao enfrentar desafios?",
                opcoes: [
                    { resposta: "Vejo como oportunidades de crescimento", tipo: "Oportunidades de crescimento" },
                    { resposta: "Sinto-me desafiado, mas capaz", tipo: "Desafiado" },
                    { resposta: "Prefiro evitar desafios", tipo: "Evitar desafios" },
                    { resposta: "Busco apoio para superá-los", tipo: "Buscar apoio" }
                ]
            },
            {
                pergunta: "Qual a sua prioridade em um trabalho em equipe?",
                opcoes: [
                    { resposta: "Liderar a equipe", tipo: "Liderar" },
                    { resposta: "Apoiar outros membros", tipo: "Apoiar" },
                    { resposta: "Contribuir com ideias", tipo: "Contribuir" },
                    { resposta: "Trabalhar em silêncio", tipo: "Trabalhar em silêncio" }
                ]
            },
            {
                pergunta: "O que você acha mais importante em um relacionamento?",
                opcoes: [
                    { resposta: "Confiança mútua", tipo: "Confiança" },
                    { resposta: "Comunicação aberta", tipo: "Comunicação" },
                    { resposta: "Momentos de qualidade", tipo: "Momentos de qualidade" },
                    { resposta: "Gestos de carinho", tipo: "Gestos de carinho" }
                ]
            },
            {
                pergunta: "Qual a sua reação ao receber críticas construtivas?",
                opcoes: [
                    { resposta: "Agradeço e busco melhorar", tipo: "Agradeço" },
                    { resposta: "Sinto-me ofendido", tipo: "Ofendido" },
                    { resposta: "Reflito sobre o feedback", tipo: "Reflito" },
                    { resposta: "Ignoro", tipo: "Ignoro" }
                ]
            },
            {
                pergunta: "Qual a sua abordagem em situações de estresse?",
                opcoes: [
                    { resposta: "Mantenho a calma e busco soluções", tipo: "Mantenho a calma" },
                    { resposta: "Fico ansioso e preocupando-me", tipo: "Ansioso" },
                    { resposta: "Busco apoio de amigos", tipo: "Apoio" },
                    { resposta: "Procrastino", tipo: "Procrastino" }
                ]
            },
            {
                pergunta: "Como você se sente ao trabalhar com pessoas diferentes?",
                opcoes: [
                    { resposta: "Entusiasmado, gosto de aprender com os outros", tipo: "Entusiasmado" },
                    { resposta: "Desconfortável, prefiro o familiar", tipo: "Desconfortável" },
                    { resposta: "Aproveito a diversidade", tipo: "Diversidade" },
                    { resposta: "Me adapto facilmente", tipo: "Adapto facilmente" }
                ]
            },    
            {
                    pergunta: "Como você se sente em relação a liderar novos projetos ou iniciativas?",
                    opcoes: [
                        { resposta: "Estou sempre disposto a iniciar novos projetos", tipo: "Apóstolico" },
                        { resposta: "Prefiro trabalhar em projetos já estabelecidos", tipo: "Pastoral" },
                        { resposta: "Gosto de apoiar novas ideias, mas não liderá-las", tipo: "Mestral" },
                        { resposta: "Sou mais inclinado a apoiar projetos espirituais", tipo: "Profetico" },
                        { resposta: "Já participei de projetos abertos a pessoas, se precisar de mim eu até lidero", tipo: "Evangelista"}
                
                    ] 
                },
                {
                    pergunta: "O que mais te motiva em servir na igreja?",
                    opcoes: [
                        { resposta: "Compartilhar a fé com os outros", tipo: "Evangelista" },
                        { resposta: "Ensinar e discipular pessoas", tipo: "Mestral" },
                        { resposta: "Organizar e liderar projetos", tipo: "Apóstolico" },
                        { resposta: "Guiar as pessoas em momentos espirituais", tipo: "Pastoral" },
                        { resposta: "Receber revelações e ter discernimento espiritual", tipo: "Profetico" }
                    ]
                },
                {
                    pergunta: "Como você reage quando sente que algo está espiritualmente desalinhado?",
                    opcoes: [
                        { resposta: "Eu oro para obter discernimento sobre a situação", tipo: "Profetico" },
                        { resposta: "Eu prefiro conversar e ensinar sobre o que é correto", tipo: "Mestral" },
                        { resposta: "Eu compartilho minha fé e encorajo mudanças", tipo: "Evangelista" },
                        { resposta: "Eu lidero ações para trazer soluções", tipo: "Apóstolico" },
                        { resposta: "Eu cuido das pessoas envolvidas e ofereço apoio", tipo: "Pastoral" }
                    ]
                },
                {
                    pergunta: "Qual papel você sente que Deus te chama a desempenhar na igreja?",
                    opcoes: [
                        { resposta: "Fundar ou liderar novos projetos", tipo: "Apóstolico" },
                        { resposta: "Guiar pessoas através da oração e discernimento", tipo: "Profetico" },
                        { resposta: "Compartilhar o evangelho e trazer novas pessoas", tipo: "Evangelista" },
                        { resposta: "Ensinar e ajudar a formar novos discípulos", tipo: "Mestral" },
                        { resposta: "Cuidar e aconselhar pessoas", tipo: "Pastoral" }
                    ]
                },
                {
                    pergunta: "Quando você vê uma oportunidade de compartilhar sua fé, o que faz?",
                    opcoes: [
                        { resposta: "Fico entusiasmado e aproveito a oportunidade", tipo: "Evangelista" },
                        { resposta: "Oro para entender a melhor forma de agir", tipo: "Profetico" },
                        { resposta: "Ensino as pessoas a respeito de Cristo", tipo: "Mestral" },
                        { resposta: "Tento liderar as pessoas a participarem da igreja", tipo: "Apóstolico" },
                        { resposta: "Ofereço apoio e aconselhamento", tipo: "Pastoral" }
                    ]
                },
                {
                    pergunta: "Como você responde às novas direções espirituais ou visões?",
                    opcoes: [
                        { resposta: "Recebo e compartilho a visão", tipo: "Profetico" },
                        { resposta: "Organizo e inicio novas direções com base na visão", tipo: "Apóstolico" },
                        { resposta: "Instruo e ensino o que recebi", tipo: "Mestral" },
                        { resposta: "Encorajo os outros a entenderem e seguirem", tipo: "Evangelista" },
                        { resposta: "Ofereço suporte e cuidado aos envolvidos", tipo: "Pastoral" }
                    ]
                
                
            },
            {
                pergunta: "O que te motiva a participar de atividades da igreja?",
                opcoes: [
                    { resposta: "Oportunidade de ajudar outros", tipo: "Ajudar outros" },
                    { resposta: "Crescimento espiritual", tipo: "Crescimento espiritual" },
                    { resposta: "Fazer novos amigos", tipo: "Novos amigos" },
                    { resposta: "Participar de eventos sociais", tipo: "Eventos sociais" }
                ]
            },
            {
                pergunta: "Qual é a sua maneira preferida de aprender?",
                opcoes: [
                    { resposta: "Praticando", tipo: "Praticando" },
                    { resposta: "Lendo", tipo: "Lendo" },
                    { resposta: "Assistindo vídeos", tipo: "Assistindo vídeos" },
                    { resposta: "Ouvindo explicações", tipo: "Ouvindo explicações" }
                ]
            },
            {
                pergunta: "Como você reage a mudanças inesperadas?",
                opcoes: [
                    { resposta: "Adapto-me rapidamente", tipo: "Adapto rapidamente" },
                    { resposta: "Sinto-me desconfortável", tipo: "Desconfortável" },
                    { resposta: "Tento entender as razões", tipo: "Entender razões" },
                    { resposta: "Resisto à mudança", tipo: "Resisto" },
                ]
            }
        ]
    },
];
// Mapeamento de ministérios
const ministerios = {
    "colérico": "evangelista",
    "melancólico": "profetico",
    "fleumático": "pastoral",
    "sanguíneo": "mestral",
};

const pastores = {
    "evangelista": ["Prs Wellington", "Prs Ariane"],
    "profetico": ["Prs Francis", "Prs Ítalo", "Prs Anelir", "Prs Rony", "Prs Tatiana"],
    "pastoral": ["Prs Alan", "Prs Cristiane", "Prs José", "Prs Aline"],
    "mestral": ["Prs Natália", "Prs Carol"],
    "apóstolico": ["Prs Dorate", "Prs Luciana", "Prs Patrícia", "Prs Afonso"],
};

// Variáveis de estado
let respostasUsuario = [];
let perguntaAtual = 0;

// Função para exibir a pergunta atual
function mostrarPergunta() {
    const perguntaContainer = document.getElementById('question-container');
    const pergunta = perguntas[perguntaAtual];
    perguntaContainer.innerHTML = `<h2>${pergunta.pergunta}</h2>`;
    pergunta.opcoes.forEach((opcao) => {
        perguntaContainer.innerHTML += `
            <button class="opcao" onclick="registrarResposta('${opcao.tipo}')">${opcao.resposta}</button>
        `;
    });
}

// Função para registrar a resposta do usuário
function registrarResposta(tipo) {
    respostasUsuario.push(tipo);
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

// Função para mostrar o resultado
function mostrarResultado() {
    const resultado = determinarResultado(respostasUsuario);
    const resultadoText = `
        Seu temperamento é: <strong>${resultado.temperamento}</strong><br>
        Sua linguagem do amor é: <strong>${resultado.amor}</strong><br>
        Você será direcionado ao ministério: <strong>${resultado.ministerio}</strong><br>
        Pastor responsável: <strong>${resultado.pastores.join(", ")}</strong>
    `;
    document.getElementById('resultado-text').innerHTML = resultadoText;
    document.getElementById('resultado').classList.remove('hidden');
    document.getElementById('question-container').classList.add('hidden');
}

// Função para determinar o resultado
function determinarResultado(respostas) {
    let temperamentoCount = {
        "colérico": 0,
        "melancólico": 0,
        "fleumático": 0,
        "sanguíneo": 0
    };

    let amorCount = {
        "palavras de afirmação": 0,
        "tempo de qualidade": 0,
        "presentes": 0,
        "atos de serviço": 0,
        "toque físico": 0
    };

    // Contar as respostas
    respostas.forEach(resposta => {
        if (temperamentoCount[resposta] !== undefined) {
            temperamentoCount[resposta]++;
        }
        if (amorCount[resposta] !== undefined) {
            amorCount[resposta]++;
        }
    });

    // Definir o temperamento e linguagem do amor
    const temperamento = Object.keys(temperamentoCount).reduce((a, b) => temperamentoCount[a] > temperamentoCount[b] ? a : b);
    const amor = Object.keys(amorCount).reduce((a, b) => amorCount[a] > amorCount[b] ? a : b);

    // Definir ministério baseado no temperamento
    const ministerio = ministerios[temperamento];

    // Retornar o resultado
    return {
        temperamento,
        amor,
        ministerio,
        pastores: pastores[ministerio]
    };
}

// Função para reiniciar o questionário
document.getElementById('restart-button').onclick = function() {
    respostasUsuario = [];
    perguntaAtual = 0;
    document.getElementById('resultado').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
    mostrarPergunta();
}

// Iniciar o questionário
mostrarPergunta();
