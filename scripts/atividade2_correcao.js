/**********************************************************
					FUNCOES DE CARREGAMENTO
***********************************************************/
var iniciou_tela = false;
var iniciou_sl = false;

Event.observe(window, 'load', function() {

    BlocoNotas = new Blocao();
    iniciou_tela = true;
    runInit();
});

Event.observe(document, 'flash:SalvaLocal', function(ev) {
    setResp('atividade_2', 2); //Comecou a fazer atividade_2
    iniciou_sl = true;
    runInit();
});

function runInit() {

    if (getResp('atividade_2') != 3) {
        setResp('atividade_2', 2); //Comecou a fazer atividade_2
    }
    carregaRespostasPreenchidas();

}

function ggbOnInit() {
    var applet = document.ggbApplet;


    switch (PosicaoAtual.Parte) {
        case 1:
            // As retas
            applet.setVisible("f", true);
            applet.setVisible("g", true);
            applet.setVisible("eixo_x", true);
            applet.setVisible("eixo_y", true);

            // Os vertices
            applet.setVisible("V_1", true);
            applet.setVisible("V_2", true);
            applet.setVisible("V_3", true);

            // Os poligonos
            applet.setVisible("poligono1", true);
            applet.setVisible("poligono2", true);
            break;
        case 2:
            // As retas
            applet.setVisible("f", true);
            applet.setVisible("g", true);

            // Os vertices
            applet.setVisible("V_1", true);
            applet.setVisible("V_2", true);
            applet.setVisible("V_3", true);

            // Os poligonos
            applet.setVisible("poligono1", true);
            applet.setVisible("poligono2", true);

            // Os textos 
            applet.setVisible("txtHorizontal", true);
            applet.setVisible("txtVertical", true);
            applet.setVisible("txtCusto", true);

            // Os pontos
            applet.setVisible("I", true);
            applet.setVisible("K", true);
            applet.setVisible("J", true);

            // As retas auxiliares
            applet.setVisible("i", true);
            applet.setVisible("j", true);

            break;

    }
}

function carregaRespostasPreenchidas() {
    switch (PosicaoAtual.Parte) {

        case 0:
            $('q3_a1').value = getResp('atividade2_parte1_q1_a_11');

            Event.observe('q3_a1', 'change', function(evento) {
                setResp('atividade2_parte1_q1_a_11', $('q3_a1').value);
            });

            Event.observe('q3_a1', 'keypress', function(evento) {
                $('corrige_q1_a_a1').removeClassName('correto');
                $('corrige_q1_a_a1').removeClassName('incorreto');
                var posicao = { Parte: 0, Questao: 'parte1_q1', Item: 0 };
                PegaQuestao(posicao).nada();

            });

            Event.observe('q3_a2', 'keypress', function(evento) {
                $('corrige_q1_a_a2').removeClassName('correto');
                $('corrige_q1_a_a2').removeClassName('incorreto');
                var posicao = { Parte: 0, Questao: 'parte1_q1', Item: 0 };
                PegaQuestao(posicao).nada();
            });


            $('q3_a2').value = getResp('atividade2_parte1_q1_a_21');

            Event.observe('q3_a2', 'change', function(evento) {
                setResp('atividade2_parte1_q1_a_21', $('q3_a2').value);
            });

            $('q3_b1').value = getResp('atividade2_parte1_q1_b_11');

            Event.observe('q3_b1', 'change', function(evento) {
                setResp('atividade2_parte1_q1_b_11', $('q3_b1').value);
            });

            $('q3_b2').value = getResp('atividade2_parte1_q1_b_21');

            Event.observe('q3_b2', 'change', function(evento) {
                setResp('atividade2_parte1_q1_b_21', $('q3_b2').value);
            });

            Event.observe('q3_b1', 'keypress', function(evento) {
                $('corrige_q1_b_a1').removeClassName('correto');
                $('corrige_q1_b_a1').removeClassName('incorreto');
                var posicao = { Parte: 0, Questao: 'parte1_q1', Item: 1 };
                PegaQuestao(posicao).nada();

            });

            Event.observe('q3_b2', 'keypress', function(evento) {
                $('corrige_q1_b_a2').removeClassName('correto');
                $('corrige_q1_b_a2').removeClassName('incorreto');
                var posicao = { Parte: 0, Questao: 'parte1_q1', Item: 1 };
                PegaQuestao(posicao).nada();

            });



            $('selecao_q3_a').setValue(getResp('selecao_q3_a'));
            $('selecao_q3_b').setValue(getResp('selecao_q3_b'));


            Event.observe('selecao_q3_a', 'input:change', function(evento) {
                $('corrige_q1_a_s1').removeClassName('correto');
                $('corrige_q1_a_s1').removeClassName('incorreto');
                var posicao = { Parte: 0, Questao: 'parte1_q1', Item: 0 };
                PegaQuestao(posicao).nada();
                setResp('selecao_q3_a', $('selecao_q3_a').value);
            });


            Event.observe('selecao_q3_b', 'input:change', function(evento) {
                $('corrige_q1_b_s1').removeClassName('correto');
                $('corrige_q1_b_s1').removeClassName('incorreto');
                var posicao = { Parte: 0, Questao: 'parte1_q1', Item: 0 };
                PegaQuestao(posicao).nada();
                setResp('selecao_q3_b', $('selecao_q3_b').value);
            });




            break;

        case 2:
            $('q3_a1').value = getResp('atividade2_parte3_q3_a_11');

            Event.observe('q3_a1', 'change', function(evento) {
                setResp('atividade2_parte3_q3_a_11', $('q3_a1').value);
            });

            $('q3_a2').value = getResp('atividade2_parte3_q3_a_21');

            Event.observe('q3_a2', 'change', function(evento) {
                setResp('atividade2_parte3_q3_a_21', $('q3_a2').value);
            });

            Event.observe('q3_a1', 'keypress', function(evento) {
                $('corrige_q3_a_a1').removeClassName('correto');
                $('corrige_q3_a_a1').removeClassName('incorreto');
                var posicao = { Parte: 2, Questao: 'parte3_q3', Item: 0 };
                PegaQuestao(posicao).nada();

            });

            Event.observe('q3_a2', 'keypress', function(evento) {
                $('corrige_q3_a_a2').removeClassName('correto');
                $('corrige_q3_a_a2').removeClassName('incorreto');
                var posicao = { Parte: 2, Questao: 'parte3_q3', Item: 0 };
                PegaQuestao(posicao).nada();

            });

            $('parte3_q5_a').value = getResp('atividade2_parte3_q5_a_11');

            Event.observe('parte3_q5_a', 'change', function(evento) {
                setResp('atividade2_parte3_q5_a_11', $('parte3_q5_a').value);
            });

            $('parte3_q5_b').value = getResp('atividade2_parte3_q5_b_11');

            Event.observe('parte3_q5_b', 'change', function(evento) {
                setResp('atividade2_parte3_q5_b_11', $('parte3_q5_b').value);
            });

            if (getResp('a2_q4_option') != '') {
                $('parte3_q4_a_' + getResp('a2_q4_option')).setChecked(true);
            }

            break;
    }
}


/**********************************************************
					FUNCOES DE CORRECAO
***********************************************************/

function corrige_q_1_a() {
    var applet = document.ggbApplet;

    var sinal = $('selecao_q3_a').value;
    var b = Math.round(processaNumero($('q3_a1').value) * 100) / 100;
    var c = Math.round(processaNumero($('q3_a2').value) * 100) / 100;

    var retorno = (Math.abs(b - (-1)).toFixed(5) <= 0.01) && (Math.abs(c - 8).toFixed(5) <= 0.01) && (sinal == "1");

    $('corrige_q1_a_s1').removeClassName('correto');
    $('corrige_q1_a_s1').removeClassName('incorreto');

    $('corrige_q1_a_a1').removeClassName('correto');
    $('corrige_q1_a_a1').removeClassName('incorreto');

    $('corrige_q1_a_a2').removeClassName('correto');
    $('corrige_q1_a_a2').removeClassName('incorreto');

    (Math.abs(b - (-1)).toFixed(5) <= 0.01) ? $('corrige_q1_a_a1').addClassName('correto'): $('corrige_q1_a_a1').addClassName('incorreto');
    (Math.abs(c - 8).toFixed(5) <= 0.01) ? $('corrige_q1_a_a2').addClassName('correto'): $('corrige_q1_a_a2').addClassName('incorreto');
    (sinal == "1") ? $('corrige_q1_a_s1').addClassName('correto'): $('corrige_q1_a_s1').addClassName('incorreto');


    if (retorno) {
        applet.setVisible("poligono1", true);
        applet.setVisible("f", true);
    }

    return [retorno];
}


function corrige_q_1_b() {
    var applet = document.ggbApplet;

    var sinal = $('selecao_q3_b').value;
    var b = Math.round(processaNumero($('q3_b1').value) * 100) / 100;
    var c = Math.round(processaNumero($('q3_b2').value) * 100) / 100;

    var retorno = (Math.abs(b - (-1 / 3)).toFixed(5) <= 0.01) && (Math.abs(c - 4).toFixed(5) <= 0.01) && (sinal == "1");

    $('corrige_q1_b_s1').removeClassName('correto');
    $('corrige_q1_b_s1').removeClassName('incorreto');

    $('corrige_q1_b_a1').removeClassName('correto');
    $('corrige_q1_b_a1').removeClassName('incorreto');

    $('corrige_q1_b_a2').removeClassName('correto');
    $('corrige_q1_b_a2').removeClassName('incorreto');

    (Math.abs(b - (-1 / 3)).toFixed(5) <= 0.01) ? $('corrige_q1_b_a1').addClassName('correto'): $('corrige_q1_b_a1').addClassName('incorreto');
    (Math.abs(c - 4).toFixed(5) <= 0.01) ? $('corrige_q1_b_a2').addClassName('correto'): $('corrige_q1_b_a2').addClassName('incorreto');
    (sinal == "1") ? $('corrige_q1_b_s1').addClassName('correto'): $('corrige_q1_b_s1').addClassName('incorreto');


    if (retorno) {
        applet.setVisible("poligono2", true);
        applet.setVisible("g", true);
    }

    return [retorno];
}

function corrige_q_2_a() {
    return corrige_drag_q_2_a();
}

function corrige_q_2_b() {
    return corrige_drag_q_2_b();
}

function corrige_q_2_c() {
    return corrige_drag_q_2_c();
}

function corrige_q_3_a() {
    var retorno;

    var a = Math.round(processaNumero($('q3_a1').value) * 100) / 100;
    var b = Math.round(processaNumero($('q3_a2').value) * 100) / 100;

    retorno = (a == 110) && (b == 75);

    $('corrige_q3_a_a1').removeClassName('correto');
    $('corrige_q3_a_a1').removeClassName('incorreto');

    $('corrige_q3_a_a2').removeClassName('correto');
    $('corrige_q3_a_a2').removeClassName('incorreto');

    ((a == 110)) ? $('corrige_q3_a_a1').addClassName('correto'): $('corrige_q3_a_a1').addClassName('incorreto');
    (b == 75) ? $('corrige_q3_a_a2').addClassName('correto'): $('corrige_q3_a_a2').addClassName('incorreto');


    return [retorno];
}

function corrige_q_4_a(valor) {
    for (var i = 0; i <= valor.length; i++) {
        if (valor[i] == true) setResp('a2_q4_option', i + 1);
    }

    return [valor[0] ? false : null, valor[1] ? true : null, valor[2] ? false : null];

}

function corrige_q_5_a(valor) {
    var a = processaNumero(valor[0]);

    return [(a == 2)];
}

function corrige_q_5_b(valor) {
    var a = processaNumero(valor[0]);

    return [(a == 6)];
}


function tudoCerto() {

    if (getResp('atividade_2') != 3 && PosicaoAtual.Parte < 2) {
        setResp('atividade_2s', 2);
    }

    if (PosicaoAtual.Parte >= 2) { //Finalizou a atividade_2
        setResp('atividade_2', 3);

    }

}