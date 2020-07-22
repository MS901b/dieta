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

var Partes = ['1', '2', '3', '4', '5'];
var nomeSoft = 'proglinear';

var Questoes = [

    { //Parte 1

        parte1_q1: //Questão 1
        {
            enunciadoGeral: 'Qual será o valor gasto pelo paciente se ele consumir as quantidades indicadas abaixo?',
            itens: [{ //A
                    tipo: 'multiplo_input_com_unidade',
                    corrigir: corrige_q_1_a,
                    enunciado: '100g de banana e 100g de abacaxi:',
                    dados: [
                        [{ antes: 'R$ ', depois: ' ' }]
                    ],
                    msgErro: 'Lembre-se que a coordenada x representa a quantidade de banana e a y a quantidade de abacaxi.',
                    msgAjuda: 'Mova o ponto até as coordenadas indicadas e observe o custo na parte superior direita do quadro ao lado.'
                },

                { //B
                    tipo: 'multiplo_input_com_unidade',
                    corrigir: corrige_q_1_b,
                    enunciado: '400g de banana e 800g de abacaxi:',
                    dados: [
                        [{ antes: 'R$ ', depois: ' ' }]
                    ],
                    msgErro: 'Lembre-se que a coordenada x representa a quantidade de banana e a y a quantidade de abacaxi.',
                    msgAjuda: 'Mova o ponto até as coordenadas indicadas e observe o custo na parte superior direita do quadro ao lado.'
                }
            ]
        },
        parte1_q2: //Questão 2
        {
            enunciadoGeral: 'Movendo o ponto, encontre e preencha abaixo uma quantidade de banana e de abacaxi que satisfaça a dieta de vitaminas e de calorias:',
            itens: [{ //A
                tipo: 'multiplo_input_com_unidade',
                corrigir: corrige_q_2_a,
                enunciado: '',
                dados: [
                    [{ antes: 'Banana: ', depois: " Kg" }],
                    [{ antes: 'Abacaxi: ', depois: " Kg" }]
                ],
                msgErro: 'Movimente o ponto azul do gráfico até que a dieta atenda 500UI de vitamina A e 0.7 mg de vitamina B.',
                msgAjuda: 'Lembre-se que a resposta deve ser dada em quilograma.'
            }]
        }
    },
    { //Parte 2
        parte2_q3: //Questão 3
        {
            enunciadoGeral: 'A inequação que exprime a quantidade de vitamina A que ele deve consumir em função da quantidade de bananas e de abacaxis é: <strong>260<em>a</em>&nbsp;+&nbsp;900<em>b</em>&nbsp;&ge;&nbsp;500</strong>',
            itens: [{ //A
                tipo: 'generico',
                corrigir: corrige_q_3_a,
                enunciado: 'represente a inequação acima isolando o "a":',
                dados: '<div id="q3_a_generica"><span class="a_esquerda antes_depois depois">a</span><div class="a_esquerda" style="margin-left:10px; margin-right:5px;"><div id="corrige_q3_a_s1"><select id="selecao_q3_a"><option value="1">≥</option><option value="2">≤</option></select></div></div><div id="corrige_q3_a_a1"><input id="q3_a1" style="width:40px; margin: 0 5px !important;"/></div><span class="a_esquerda antes_depois depois">b &nbsp +  &nbsp</span><div id="corrige_q3_a_a2"><input id="q3_a2" style="width:40px; margin: 0 5px !important;"/></div></div><br class="limpador" />',
                msgErro: 'Confira se você isolou o "a" corretamente na inequação dada no enunciado.'
            }]
        },
        parte2_q4: //Questão 4
        {
            enunciadoGeral: 'Agora, encontre a inequação relativa à condição do problema sobre:',
            itens: [{ //A
                    tipo: 'generico',
                    corrigir: corrige_q_4_a,
                    enunciado: 'o consumo mínimo diário de Vitamina B:',
                    dados: '<div id="q4_a_generica"><span class="a_esquerda antes_depois depois">a</span><div class="a_esquerda" style="margin-left:10px; margin-right:5px;"><div id="corrige_q4_a_s1"><select id="selecao_q4_a"><option value="1">≥</option><option value="2">≤</option></select></div></div><div id="corrige_q4_a_a1"><input id="q4_a1" style="width:40px; margin: 0 5px !important;"/></div><span class="a_esquerda antes_depois depois">b &nbsp +  &nbsp</span><div id="corrige_q4_a_a2"><input id="q4_a2" style="width:40px; margin: 0 5px !important;"/></div></div><br class="limpador" />',
                    msgErro: 'Lembre-se a quantidade de vitamina B deve ser maior ou igual a 0,7mg.',
                    msgAjuda: 'Primeiro, você deve resolver a inequação que representa a quantidade de vitamina B e, depois, isolar o "a" (a quantidade de abacaxis).'
                },
                { //B
                    tipo: 'generico',
                    corrigir: corrige_q_4_b,
                    enunciado: 'o consumo máximo de calorias por meio das bananas e dos abacaxis:',
                    dados: '<div id="q4_b_generica"><span class="a_esquerda antes_depois depois">a</span><div class="a_esquerda" style="margin-left:10px; margin-right:5px;"><div id="corrige_q4_b_s1"><select id="selecao_q4_b"><option value="1">≥</option><option value="2">≤</option></select></div></div><div id="corrige_q4_b_a1"><input id="q4_b1" style="width:40px; margin: 0 5px !important;"/></div><span class="a_esquerda antes_depois depois">b &nbsp +  &nbsp</span><div id="corrige_q4_b_a2"><input id="q4_b2" style="width:40px; margin: 0 5px !important;"/></div></div><br class="limpador" />',
                    msgErro: 'Lembre-se que a quantidade de calorias deve ser menor ou igual a 1000Kcal.',
                    msgAjuda: 'Primeiro, você deve resolver a inequação que representa a quantidade de vitamina B e, depois, isolar o "a" (a quantidade de abacaxis).'
                }
            ]
        },
        parte2_q5: //Questão 5
        {
            enunciadoGeral: 'Perceba que é impossível que a quantidade de frutas seja negativa. Com base nisso, assinale as restrições corretas para o problema proposto:',
            itens: [{ //A
                tipo: 'multipla_escolha',
                corrigir: corrige_q_5_a,
                enunciado: '',
                dados: [
                    { value: '1', label: 'a>0 e b>0' },
                    { value: '2', label: 'a>0 e b<0' },
                    { value: '3', label: 'a<0 e b<0' },
                    { value: '4', label: 'a<0 e b>0' }
                ],
                msgErro: 'A quantidade de frutas deve ser um número não negativo. Marque a opção que descreve isso matematicamente.'
            }]
        }

    },
    { //Parte 3
        parte3_q6: //Questão 6
        {
            enunciadoGeral: 'Arrastando as retas abaixo, forme os sistemas que fornecem os seguintes vértices:',
            itens: [{ //A
                    tipo: 'drag',
                    corrigir: corrige_q_6_a,
                    enunciado: 'V<sub>1</sub>:',
                    msgErro: 'Confira no quadro se a intersecção entre essas duas retas realmente formam o vértice V1.',
                    html: 'drag-v1'
                },
                { //B
                    tipo: 'drag',
                    corrigir: corrige_q_6_b,
                    enunciado: 'V<sub>2</sub>:',
                    msgErro: 'Confira no quadro se a intersecção entre essas duas retas realmente formam o vértice V2.',
                    html: 'drag-v2'
                },
                { //C
                    tipo: 'drag',
                    corrigir: corrige_q_6_c,
                    enunciado: 'V<sub>3</sub>:',
                    msgErro: 'Confira no quadro se a intersecção entre essas duas retas realmente formam o vértice V3.',
                    html: 'drag-v3'
                }
            ]
        }

    },
    { //Parte 4
        parte4_q7: //Questão 1
        {
            enunciadoGeral: 'Informe os valores gastos pelo paciente para cada uma das quantidades indicadas abaixo: ',
            itens: [{ //A
                    tipo: 'multiplo_input_com_unidade',
                    corrigir: corrige_q_7_a,
                    enunciado: '500g de banana e 500g de abacaxi;',
                    dados: [
                        [{ antes: 'R$ ', depois: ' ' }]
                    ],
                    msgErro: 'Mova o ponto até as coordenadas x = 0,5kg e y = 0,5kg.',
                    msgAjuda: 'Basta mover o ponto até as coordenadas que representam as quantidades de banana e de abacaxi.'
                },
                { //B
                    tipo: 'multiplo_input_com_unidade',
                    corrigir: corrige_q_7_b,
                    enunciado: '400g de banana e 850g de abacaxi;',
                    dados: [
                        [{ antes: 'R$ ', depois: ' ' }]
                    ],
                    msgErro: 'Mova o ponto até as coordenadas x = 0,4kg e y = 0,85kg.',
                    msgAjuda: 'Basta mover o ponto até as coordenadas que representam a banana e o abacaxi.'
                },
                { //C
                    tipo: 'multiplo_input_com_unidade',
                    corrigir: corrige_q_7_c,
                    enunciado: '300g de banana e 1000g de abacaxi:',
                    dados: [
                        [{ antes: 'R$ ', depois: ' ' }]
                    ],
                    msgErro: 'Mova o ponto até as coordenadas x = 0,3kg e y = 1kg.',
                    msgAjuda: 'Basta mover o ponto até as coordenadas que representam a banana e o abacaxi.'
                },
                { //D
                    tipo: 'multiplo_input_com_unidade',
                    corrigir: corrige_q_7_d,
                    enunciado: 'Quantidades representadas pelo vértice V<sub>1</sub>;',
                    dados: [
                        [{ antes: 'R$ ', depois: ' ' }]
                    ],
                    msgErro: 'Mova o ponto até o vértice V1',
                    msgAjuda: 'Basta mover o ponto até o vértice V1.'
                },
                { //E
                    tipo: 'multiplo_input_com_unidade',
                    corrigir: corrige_q_7_e,
                    enunciado: 'Quantidades representadas pelo vértice V<sub>2</sub>;',
                    dados: [
                        [{ antes: 'R$ ', depois: ' ' }]
                    ],
                    msgErro: 'Mova o ponto até o vértice V2',
                    msgAjuda: 'Basta mover o ponto até o vértice V2.'
                },
                { //F
                    tipo: 'multiplo_input_com_unidade',
                    corrigir: corrige_q_7_f,
                    enunciado: 'Quantidades representadas pelo vértice V<sub>3</sub>;',
                    dados: [
                        [{ antes: 'R$ ', depois: ' ' }]
                    ],
                    msgErro: 'Mova o ponto até o vértice V3',
                    msgAjuda: 'Basta mover o ponto até o vértice V3.'
                }
            ]
        },
        parte4_q8: //Questão 8
        {
            enunciadoGeral: 'Qual dos itens da questão anterior fornece o menor custo?',
            itens: [{ //A
                tipo: 'multipla_escolha',
                corrigir: corrige_q_8_a,
                enunciado: '',
                dados: [
                    { value: '1', label: 'item A' },
                    { value: '2', label: 'item B' },
                    { value: '3', label: 'item C' },
                    { value: '4', label: 'item D' },
                    { value: '5', label: 'item E' },
                    { value: '6', label: 'item F' }
                ],
                msgErro: 'Observe novamente a questão anterior para saber o menor valor.'
            }]
        },
        parte4_q9: //Questão 9
        {
            itens: [{ //A
                tipo: 'multipla_escolha',
                corrigir: corrige_q_9_a,
                enunciado: 'Passeando com o ponto pelo polígono, é possível encontrar um custo menor que o indicado por você na questão anterior?',
                dados: [
                    { value: '1', label: 'sim' },
                    { value: '2', label: 'não' }
                ],
                msgErro: 'Certifique-se novamente que esse ponto está no interior da região.'
            }]
        }
    },
    { //Parte 5
        parte5_q10: //Questão 10
        {
            enunciadoGeral: '',
            itens: [{ //A
                    tipo: 'generico',
                    corrigir: corrige_q_10_a,
                    enunciado: 'Sabendo que o quilograma da banana custa R$2,00 e o do abacaxi custa R$1,50, elabore abaixo a função que representa o custo da dieta em função das quantidades de banana e de abacaxi:',
                    dados: '<div style="margin-top:20px"><span class="a_esquerda">C(a,b) = </span><div id="corrige_q10_a_a1"><input id="q10_a1" style="width:40px; margin: 0 5px !important;"/></div><span class="a_esquerda antes_depois depois">a &nbsp;</span><span class="a_esquerda">+</span><div id="corrige_q10_a_a2"><input id="q10_a2" style="width:40px; margin: 0 5px !important;"/></div><span class="a_esquerda antes_depois depois">b &nbsp;</span></div><br class="limpador" />',
                    msgErro: 'Para calcular o custo da dieta, basta multiplicar, respectivamente, a quantidade comprada de a e b pelo preço.'
                },
                { //B
                    tipo: 'generico',
                    corrigir: corrige_q_10_b,
                    enunciado: 'Qual é a equação que representa as quantidade de cada fruta que resultam em um custo de R$2,00?',
                    dados: '<div style="margin-top:20px"><span class="a_esquerda">a = </span><div id="corrige_q10_b_a1"><input id="q10_b1" style="width:40px; margin: 0 5px !important;"/></div><span class="a_esquerda antes_depois depois">b &nbsp;</span><span class="a_esquerda">+</span><div id="corrige_q10_b_a2"><input id="q10_b2" style="width:40px; margin: 0 5px !important;"/></div></div><br class="limpador" />',
                    msgErro: 'Substitua o C(a,b) do item anterior pelo custo, que, no caso, é de R$ 2,00.',
                    msgAjuda: 'Escreva o "a" em função de "b".'
                }
            ]
        }
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
    '<strong>Problema:</strong>Um nutricionista receitou a um paciente com baixa taxa das vitaminas A e B, banana e abacaxi para suprir uma deficiência diária de 500 UI de vitamina A e 0,7 mg de vitamina B. Como o paciente possui uma alimentação de 2000 Kcal ao dia, é recomendável que o consumo desses dois itens não aumente o seu consumo em mais de 1000 Kcal. <br><br>A banana e o abacaxi contêm, em cada quilograma, as vitaminas A, B  e o valor calórico nas quantidades indicadas na página seguinte do bloco de notas.', [
        [{ value: ' ', largura: 6 }, { value: 'Banana', largura: 3 }, { value: 'Abacaxi', largura: 3 }], //header
        [{ value: 'Vitamina A (UI/kg)', tipo: 'texto' }, { value: '900', tipo: 'texto' }, { value: '260', tipo: 'texto' }],
        [{ value: 'Vitamina B (mg/kg)', tipo: 'texto' }, { value: '0,5', tipo: 'texto' }, { value: '0,9', tipo: 'texto' }],
        [{ value: 'Calorias (Kcal/kg)', tipo: 'texto' }, { value: '1000', tipo: 'texto' }, { value: '600', tipo: 'texto' }]
    ]

);