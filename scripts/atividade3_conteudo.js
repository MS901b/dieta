/*
	Padronização do ID: 
		- [['p/parte','q/questao','/item'],'_'] vai gerar um id do tipo p1_q2_1
		- [['p/parte','q/questao','/itemletra'],'_'] vai gerar um id do tipo p1_q2_a
	Palavras-chave: questao, parte, item, itemletra, subitem
	Devem ser precedidas de uma barra '/'.
	A palavra-chave subitem será usada somente em questões com mais de um campo
*/

var IdPadrao = [
    ['parte/parte', 'q/questao', '/itemletra', '/subitem'], '_'
];

/*
	Questoes
	
	Aqui ficam concentrados todos os conteudos das questões da atividade!
	Veja que está separado por Parte/Questão/Item
	
	ATENÇÃO: Cada tipo possui um formato de entrada característico.
*/

var Partes = ['1', '2', '3', 'C'];
var nomeSoft = 'proglinear';

var Questoes = [{ //Parte 1
        parte1_q1: //Questão 1
        {
            enunciadoGeral: 'Quais são as inequações que representam as restrições do problema além de <em>a</em>&nbsp&ge;&nbsp;0 e <em>b</em>&nbsp&ge;&nbsp;0 ?',
            itens: [{ //A
                    tipo: 'generico',
                    corrigir: corrige_q_1_a,
                    enunciado: 'Limitação financeira:',
                    dados: '<div id="q3_a_generica"><span class="a_esquerda antes_depois depois">a</span><div class="a_esquerda" style="margin-left:10px; margin-right:5px;"><div id="corrige_q1_a_s1"><select id="selecao_q3_a"><option value="1">≥</option><option value="2">≤</option></select></div></div><div id="corrige_q1_a_a1"><input id="q3_a1" style="width:40px; margin: 0 5px !important;"/></div><span class="a_esquerda antes_depois depois">b &nbsp +  &nbsp</span><div id="corrige_q1_a_a2"><input id="q3_a2" style="width:40px; margin: 0 5px !important;"/></div></div><br class="limpador" />',
                    msgErro: 'Primeiro, você deve resolver a inequação que representa o gasto do governo e, depois, isolar o "a" (a quantidade de casas do tipo A).',
                    msgAjuda: 'Lembre-se de quanto cada casa custa e de que o governo pode gastar, no máximo, R$2.000.000,00.'

                },
                { //B
                    tipo: 'generico',
                    corrigir: corrige_q_1_b,
                    enunciado: 'Demanda da casa A:',
                    dados: '<div id="q3_b_generica"><span class="a_esquerda antes_depois depois">a</span><div class="a_esquerda" style="margin-left:10px; margin-right:5px;"><div id="corrige_q1_b_s1"><select id="selecao_q3_b"><option value="1">≥</option><option value="2">≤</option></select></div></div><div id="corrige_q1_b_a1"><input id="q3_b1" style="width:40px; margin: 0 5px !important;"/></div></div><br class="limpador" />',
                    msgErro: 'Lembre-se que deve haver pelo menos 60 casas do tipo A.'
                },
                { //C
                    tipo: 'generico',
                    corrigir: corrige_q_1_c,
                    enunciado: 'Demanda da casa B:',
                    dados: '<div id="q3_c_generica"><span class="a_esquerda antes_depois depois">b</span><div class="a_esquerda" style="margin-left:10px; margin-right:5px;"><div id="corrige_q1_c_s1"><select id="selecao_q3_c"><option value="1">≥</option><option value="2">≤</option></select></div></div><div id="corrige_q1_c_a1"><input id="q3_c1" style="width:40px; margin: 0 5px !important;"/></div></div><br class="limpador" />',
                    msgErro: 'Lembre-se que deve haver pelo menos 80 casas do tipo B.'

                }
            ]
        }
    },
    { //Parte 2
        parte2_q2: //Questão 2
        {
            enunciadoGeral: 'Agora, você encontrará os vértices que formam a região:',
            itens: [{ //A
                    tipo: 'drag',
                    corrigir: corrige_q_2_a,
                    enunciado: 'V<sub>1</sub>:',
                    msgErro: 'Confira no quadro se essas duas retas realmente formam o vértice V<sub style="color:#FF0000;">1</sub>',
                    html: 'drag-v1'
                },
                { //B
                    tipo: 'drag',
                    corrigir: corrige_q_2_b,
                    enunciado: 'V<sub>2</sub>:',
                    msgErro: 'Confira no quadro se essas duas retas realmente formam o vértice V<sub style="color:#FF0000;">2</sub>.',
                    html: 'drag-v2'
                },
                { //C
                    tipo: 'drag',
                    corrigir: corrige_q_2_c,
                    enunciado: 'V<sub>3</sub>:',
                    msgErro: 'Confira no quadro se essas duas retas realmente formam o vértice V<sub style="color:#FF0000;">3</sub>.',
                    html: 'drag-v3'
                }
            ]
        }

    },
    { //Parte 3
        parte3_q3: //Questão 3
        {
            enunciado: '',
            itens: [{ //A
                tipo: 'generico',
                corrigir: corrige_q_3_a,
                enunciado: 'Qual é a função custo do problema? (A função custo de um problema é a função que se deseja maximizar ou minimizar). ',
                dados: '<div style="margin-top:20px"><span class="a_esquerda">C(a,b) = </span><div id="corrige_q3_a_a1"><input id="q3_a1" style="width:40px; margin: 0 5px !important;"/></div><span class="a_esquerda antes_depois depois">a &nbsp;</span><span class="a_esquerda">+</span><div id="corrige_q3_a_a2"><input id="q3_a2" style="width:40px; margin: 0 5px !important;"/></div><span class="a_esquerda antes_depois depois">b &nbsp;</span></div><br class="limpador" />',
                msgAjuda: 'Nesse problema a função custo, que deseja-se maximizar, é a quantidade de pessoas abrigadas.',
                msgErro: 'Lembre-se que o objetivo é maximizar o número de pessoas abrigadas, e que a casa A abriga 6, e a casa B abriga 4 pessoas.'
            }]
        },
        parte3_q4: //Questão 4
        {
            enunciado: '',
            itens: [{ //A
                tipo: 'multipla_escolha',
                corrigir: corrige_q_4_a,
                enunciado: 'Mova o ponto sobre o gráfico e responda: em qual dos vértices está o maior número de pessoas atendidas?',
                dados: [
                    { value: '1', label: 'V&#8321;' },
                    { value: '2', label: 'V&#8322;' },
                    { value: '3', label: 'V&#8323;' }
                ],
                msgErro: 'Mova o ponto do quadro até que ele fique nos vértices. Depois, verifique o número de pessoas abrigadas (no topo do plano à direita).',
                msgAjuda: 'Mova o ponto para conferir o número de pessoas abrigadas.'
            }]
        },
        parte3_q5: //Questão 5
        {
            enunciadoGeral: 'De acordo com o gráfico, quantas casas de cada tipo devem ser construídas de modo a abrigar o maior número de pessoas possível?',
            itens: [{ //A
                    tipo: 'input',
                    corrigir: corrige_q_5_a,
                    enunciado: 'Casa A:',
                    msgErro: 'A quantidade de casas do tipo A é representada pela coordenada y do ponto que você obteve na questão anterior.'
                },
                { //B
                    tipo: 'input',
                    corrigir: corrige_q_5_b,
                    enunciado: 'Casa B:',
                    msgErro: 'A quantidade de casas do tipo B é representada pela coordenada x do ponto que você obteve na questão anterior.'
                }
            ]
        }
    },
    {

    }
]

/*
	Bloco de Notas
	
	Nesse Array ficam os dados que aparecem no Bloquinho de notas.
	Se você for na linha 35 do exemplo_correcao.js verá que está sendo criada uma instância
	de "Blocao", uma classe de bloco de notas que permite tabelas no conteúdo. Se não for
	usar tabelas no Software, altere para "Bloco". Ambas classes utilizam a variavel global
	MeuBloco para preencher o seu conteúdo.
*/

var MeuBloco = new Array(
    '<strong>Problema:</strong> O governo realizou uma pesquisa para saber quantas casas populares deveria construir em certa cidade. Com base na pesquisa obteve a seguinte tabela:', [
        [{ value: ' ', largura: 6 }, { value: 'Tipos de casa A', largura: 5 }, { value: 'Tipos de casa B', largura: 5 }], //header
        [{ value: 'Número de pessoas que abriga', tipo: 'texto' }, { value: '6', tipo: 'texto' }, { value: '4', tipo: 'texto' }],
        [{ value: 'Custo de construção (milhares de reais)', tipo: 'texto' }, { value: '12', tipo: 'texto' }, { value: '10', tipo: 'texto' }],
        [{ value: 'Demanda (nº de famílias que solicitaram)', tipo: 'texto' }, { value: '60', tipo: 'texto' }, { value: '80', tipo: 'texto' }]
    ]

);