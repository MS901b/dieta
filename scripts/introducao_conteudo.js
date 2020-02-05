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
var Partes = null;
var nomeSoft = 'exemplo';
var Questoes = null;

/*
	Bloco de Notas
	
	Nesse Array ficam os dados que aparecem no Bloquinho de notas.
	Se você for na linha 35 do exemplo_correcao.js verá que está sendo criada uma instância
	de "Blocao", uma classe de bloco de notas que permite tabelas no conteúdo. Se não for
	usar tabelas no Software, altere para "Bloco". Ambas classes utilizam a variavel global
	MeuBloco para preencher o seu conteúdo.
*/

var MeuBloco = new Array(
	'Eu fiz uma marcação estranha no valor inicial da <em>questão 3<\/em>, no item C. E agora tenho que escrever um texto longo pra ver o quanto esse bloquinho suporta os textos que aparecerão aqui!',
	[
		[{value: 'Esse', largura: 3},	{value: 'Mais esse', largura: 3},	{value: 'É igual a', largura: 4}],	//header
		[{value: '4', tipo: 'texto'},	{value: '2', tipo: 'texto'},		{value: '6', tipo: 'texto'}],
		[{value: '14', tipo: 'texto'},	{value: '25', tipo: 'texto'},		{value: '39', tipo: 'texto'}],
		[{value: '11', tipo: 'texto'},	{value: '23', tipo: 'texto'},		{value: '34', tipo: 'texto'}],
		[{value: '556', tipo: 'texto'},	{value: '32', tipo: 'texto'},		{value: '<em>588<\/em>', tipo: 'texto'}]
	],
	'Me deu vontade de escrever qualquer coisa aqui, só pra eu poder ler depois e recuperar ler depois e recuperar',
	'Por fim, teste 1 2 3, testando, sommmmm, soooommmmm. Teste som.',
	'Me deu vontade de escrever qualquer coisa aqui, só pra eu poder ler depois e recuperar',
	'Lorem ipsum dolor sit amet, egestas congue turpis ut fermentum placerat sagittis, etiam condimentum taciti purus nulla est nec.',
	'Condimentum magna inceptos odio proin mauris, sem et magnam ante. Imperdiet ante est, eu ultrices quam dapibus elementum, magna tellus.',
	'Elit elit quis sed.',
	'Orci felis ac est, at pede nec etiam, augue metus fusce. Etiam orci sem est lorem, sit pede viverra et mus nulla, eu ultricies sit, a cras, velit eget nulla.',
	'Eu donec eget pede ac suscipit natoque, interdum sit. Nec sed eleifend eget sed, suscipit ac taciti id ac. Vel dictum. Officia diam hac cum, eget aliquet sed ante pharetra.'
);


Event.observe(window, 'load', function(){
	BlocoNotas = new Blocao();

});