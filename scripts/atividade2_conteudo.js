/*
	Padronização do ID: 
		- [['p/parte','q/questao','/item'],'_'] vai gerar um id do tipo p1_q2_1
		- [['p/parte','q/questao','/itemletra'],'_'] vai gerar um id do tipo p1_q2_a
	Palavras-chave: questao, parte, item, itemletra, subitem
	Devem ser precedidas de uma barra '/'.
	A palavra-chave subitem será usada somente em questões com mais de um campo
*/
 
var IdPadrao = [['parte/parte','q/questao','/itemletra','/subitem'],'_'];

/*
	Questoes
	
	Aqui ficam concentrados todos os conteudos das questões da atividade!
	Veja que está separado por Parte/Questão/Item
	
	ATENÇÃO: Cada tipo possui um formato de entrada característico.
*/

var Partes = ['1', '2', '3', 'C'];
var nomeSoft = 'proglinear';

var Questoes = 
[
	{ //Parte 1
		parte1_q1: //Questão 1
		{
			enunciadoGeral: 'Quais são as inequações que representam as restrições do problema além de <em>a</em>&nbsp&ge;&nbsp;0 e <em>b</em>&nbsp&ge;&nbsp;0 ?',
			itens: 
			[
				{//A
					tipo: 'generico',
					corrigir: corrige_q_1_a,
					enunciado: 'Espaço refrigerado:',
					dados: '<div id="q3_a_generica"><span class="a_esquerda antes_depois depois">a</span><div class="a_esquerda" style="margin-left:10px; margin-right:5px;"><div id="corrige_q1_a_s1"><select id="selecao_q3_a"><option value="1">≥</option><option value="2">≤</option></select></div></div><div id="corrige_q1_a_a1"><input id="q3_a1" style="width:40px; margin: 0 5px !important;"/></div><span class="a_esquerda antes_depois depois">b &nbsp +  &nbsp</span><div id="corrige_q1_a_a2"><input id="q3_a2" style="width:40px; margin: 0 5px !important;"/></div></div><br class="limpador" />',
					msgErro: 'Primeiro, você deve elaborar a inequação que representa a quantidade de espaço refrigerado e, depois, isolar o “a” (a quantidade de caminhões do tipo A).',
					msgAjuda: 'Note que a quantidade de espaço refrigerado deve ser maior ou igual a 16m³.'
					
				},
				{//B
					tipo: 'generico',
					corrigir: corrige_q_1_b,
					enunciado: ' Espaço não refrigerado:',
					dados: '<div id="q3_b_generica"><span class="a_esquerda antes_depois depois">a</span><div class="a_esquerda" style="margin-left:10px; margin-right:5px;"><div id="corrige_q1_b_s1"><select id="selecao_q3_b"><option value="1">≥</option><option value="2">≤</option></select></div></div><div id="corrige_q1_b_a1"><input id="q3_b1" style="width:40px; margin: 0 5px !important;"/></div><span class="a_esquerda antes_depois depois">b &nbsp +  &nbsp</span><div id="corrige_q1_b_a2"><input id="q3_b2" style="width:40px; margin: 0 5px !important;"/></div></div><br class="limpador" />',
					msgErro: 'Primeiro, você deve resolver a inequação que representa a quantidade de espaço não refrigerado e, depois, isolar o “a” (a quantidade de caminhões do tipo A).',
					msgAjuda: 'Note que a quantidade de espaço não refrigerado deve ser maior ou igual a 12m³.'
					
				}				
			]
		}
	},
	{//Parte 2
		parte2_q2: //Questão 2
		{
			enunciadoGeral: 'Encontre os vértices que formam a região:',
			itens: 
			[
				{//A
					tipo: 'drag',
					corrigir: corrige_q_2_a,
					enunciado: 'V<sub>1</sub>:',
					msgErro: 'Confira no quadro se essas duas retas realmente formam o vértice V<sub style="color:#FF0000;">1</sub>.',
					html: 'drag-v1'
				},
				{//B
					tipo: 'drag',
					corrigir: corrige_q_2_b,
					enunciado: 'V<sub>2</sub>:',
					msgErro: 'Confira no quadro se essas duas retas realmente formam o vértice V<sub style="color:#FF0000;">2</sub>.',
					html: 'drag-v2'
				},
				{//C
					tipo: 'drag',
					corrigir: corrige_q_2_c,
					enunciado: 'V<sub>3</sub>:',
					msgErro: 'Confira no quadro se essas duas retas realmente formam o vértice V<sub style="color:#FF0000;">3</sub>.',
					html: 'drag-v3'
				}				
			]
		}			
			
	},	
	{//Parte 3
		parte3_q3: //Questão 3
		{
			enunciadoGeral: '',
			itens: 
			[
				{//A
					tipo: 'generico',
					corrigir: corrige_q_3_a,
					enunciado: 'Qual é a função custo (em litros) do problema?',
					dados: '<div style="margin-top:20px"><span class="a_esquerda">C(a,b) = </span><div id="corrige_q3_a_a1"><input id="q3_a1" style="width:40px; margin: 0 5px !important;"/></div><span class="a_esquerda antes_depois depois">a &nbsp;</span><span class="a_esquerda">+</span><div id="corrige_q3_a_a2"><input id="q3_a2" style="width:40px; margin: 0 5px !important;"/></div><span class="a_esquerda antes_depois depois">b &nbsp;</span></div><br class="limpador" />',
					msgErro: 'Para calcular o gasto do caminhão, basta multiplicar a quantidade necessária pelo seu consumo.'
				}		
			]
		},
		parte3_q4: //Questão 4
		{
			enunciadoGeral: '',
			itens: 
			[
				{//A
					tipo: 'multipla_escolha',
					corrigir: corrige_q_4_a,
					enunciado: 'Em qual dos vértices está o menor custo?',
					dados:	[
						{value: '1', label: 'V1'},
						{value: '2', label: 'V2'},
						{value: '3', label: 'V3'}
					],
					msgErro: 'Mova o ponto do quadro até que ele fique nos vértices. Então verifique o custo.',
					msgAjuda: 'Mova o ponto para conferir os custos.'
				}
			]
		},		
		parte3_q5: //Questão 5
		{
			enunciadoGeral: 'Quantos caminhões de cada tipo serão necessários para se resolver o problema com o menor custo possível?',
			itens: 
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_5_a,
					enunciado: 'Caminhão B:',
					msgErro: 'A quantidade de caminhões do tipo B é representada pela coordenada y do ponto que você obteve na questão anterior.'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_5_b,
					enunciado: 'Caminhão A:',
					msgErro: 'A quantidade de caminhões do tipo A é representada pela coordenada x do ponto que você obteve na questão anterior.'
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
	'<strong>Problema:</strong> Uma companhia de transporte tem dois tipos de caminhões: o tipo A tem 2m<sup>3</sup> de espaço refrigerado e 3m<sup>3</sup> de espaço não refrigerado; o tipo B tem 2m<sup>3</sup> de espaço refrigerado e 1m<sup>3</sup> de não refrigerado. O cliente quer transportar produtos que necessitarão de 16m<sup>3</sup> de espaço refrigerado e 12m<sup>3</sup> de área não refrigerada. A companhia calcula que são necessários 110 litros de combustível para uma viagem com o caminhão A e 75 litros para o caminhão B. Quantas viagens deverão ser feitas de cada tipo de caminhão para que se tenha o menor custo de combustível?'
);