	var codigo_do_software = "pl";
	var nome_do_software = "Como montar sua dieta";
	var tipo = "software v2.0";


	var Impressao = $H({
	    software: {
	        titulo: 'O software',
	        id: 'software',
	        arquivo: 'index.html',
	        conteudo: 'Essa é o material para ser utilizado diretamente pelos alunos.'
	    },
	    guia_professor_tela: {
	        titulo: 'Guia do Professor - Visualização em Tela',
	        id: 'guia1',
	        arquivo: 'guia/tela.pdf',
	        conteudo: 'Essa é a versão do Guia do Professor para visualiação em tela (formato PDF).'
	    },
	    guia_professor_caseiro: {
	        titulo: 'Guia do Professor - Impressão Caseira',
	        id: 'guia2',
	        arquivo: 'guia/impressao.pdf',
	        conteudo: 'Essa é a versão do Guia do Professor adequada para impressão caseira (formato PDF).'
	    }
	});
	var Visualizacao = $H({});
	var FichaTecnica = $H({

	    tema: {
	        titulo: 'Tema',
	        conteudo: 'Números e funções'
	    },
	    sinopse: {
	        titulo: 'Sinopse',
	        conteudo: 'Neste software aprenderemos a resolver alguns problemas de programação linear. Trata-se de problemas bastante úteis em diversas aplicações práticas, pois permitem determinar o valor máximo ou mínimo de funções que modelam problemas reais, por exemplo, o cálculo do menor custo possível para determinada dieta.'
	    },
	    conteudos: {
	        titulo: 'Conteúdo',
	        conteudo: 'Função aﬁm: aplicações, gráﬁcos e custos; Inequações; Interpretação geométrica de equações e inequações; Problemas de otimização.'
	    },
	    objetivos: {
	        titulo: 'Objetivos',
	        conteudo: 'Entender o que é um problema de programação linear e como resolvê-lo através da inspeção de seus vértices; Aprender como escrever restrições lineares utilizando desigualdades; Identiﬁcar graﬁcamente a solução de um problema de programação linear; Conhecer uma aplicação prática para os conceitos de função, equação e inequação aﬁns.'
	    },
	    duracao: {
	        titulo: 'Duração',
	        conteudo: 'Uma aula dupla.'
	    },
	    requisitos: {
	        titulo: 'Requisitos de software',
	        conteudo: 'Navegador moderno (Chrome 70+ ou Firefox 62+). O suporte não é garantido para dispositivos mobiles.'
	    },
	    acessibilidade: {
	        titulo: 'Restrições de acessibilidade',
	        conteudo: 'Não há suporte para navegação exclusiva via teclado e recurso nativo de alto contraste.'
	    }
	    /*,
	    		recursos: {
	    			titulo: 'Recursos relacionados',
	    			conteudo: 'Vídeo: O Crime da Rua do Gasômetro;<br />Áudio: Fraude 171;<br/>Software: Probabilidade com Urnas'
	    		}*/
	});

	var como_usar = 'Aqui você encontra três arquivos: O Software, O Guia do Professor para visualização em Tela e o Guia do Professor para impressão caseira. O Software é o material que deve ser utilizado diretamente pelos seus alunos, enquanto que o Guia do Professor traz alguns aprofundamentos teóricos e recomendações metodológicas para o uso deste material.';
	var sobre_projeto = 'M3 &ndash; Matemática MultiMídia é uma coleção de materiais didáticos disponíveis em mídias digitais para o uso do professor de matemática do ensino médio no Brasil e facilitar o ensino-aprendizagem. Composta por áudios,	experimentos, softwares e vídeos, a coleção foi desenvolvida, entre 2008 e 2010, por uma grande equipe de professores e estudantes da Unicamp e vários colaboradores, tendo contado com recursos do FNDE, do MEC e do MCT. Para maiores detalhes sobre a utilização da coleção M3&nbsp;&ndash;&nbsp;Matemática Multimídia, consulte o Guia do Professor. A versão 2.0 foi lançada em 2020, como uma medida para garantir que o software tivesse suporte aos novos sistemas.';
	var sobre_licensas = 'O Guia do Professor está licenciado sob uma licença Creative Commons, e o Software está licenciado sob uma licença GPL v. 2.';
	var link_fnde = 'http://www.fnde.gov.br/';
	var link_seed = 'http://portal.mec.gov.br/seed';
	var link_mct = 'http://www.mct.gov.br/';
	var link_mec = 'http://www.mec.gov.br/';
	var link_governo = 'http://www.brasil.gov.br/';
	var site_projeto = '​http://m3.ime.unicamp.br/portal/​';