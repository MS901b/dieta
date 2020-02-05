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
    setResp('atividade_1', 2); //Comecou a fazer atividade_1
    iniciou_sl = true;
    runInit();
});

function runInit() {

    if (getResp('atividade_1') != 3) {
        setResp('atividade_1', 2); //Comecou a fazer atividade_1
    }
    carregaRespostasPreenchidas();
}

function ggbOnInit() {
    var applet = document.ggbApplet;


    switch (PosicaoAtual.Parte) {
        case 0:
            applet.evalCommand('restricao_geral = false');
            break;

        case 1:
            applet.evalCommand('restricao1 = false');
            applet.evalCommand('restricao2 = false');
            applet.evalCommand('restricao3 = false');

            break;

        case 2:
            // As retas
            applet.setVisible("f", true);
            applet.setVisible("g", true);
            applet.setVisible("i", true);

            // Os vertices
            applet.setVisible("D", true);
            applet.setVisible("E", true);
            applet.setVisible("F", true);

            // Os poligonos
            applet.setVisible("poligono1", true);
            applet.setVisible("poligono2", true);
            applet.setVisible("poligono3", true);
            applet.setVisible("poligono5", true);

            applet.registerObjectUpdateListener("A", "aproximaPontos");

        case 3:
            // As retas
            applet.setVisible("f", true);
            applet.setVisible("g", true);
            applet.setVisible("i", true);

            // Os vertices
            applet.setVisible("D", true);
            applet.setVisible("E", true);
            applet.setVisible("F", true);

            // Os poligonos
            applet.setVisible("poligono1", true);
            applet.setVisible("poligono2", true);
            applet.setVisible("poligono3", true);
            applet.setVisible("poligono5", true);

            applet.registerObjectUpdateListener("A", "aproximaPontos");
            break;

        case 4:

            Event.observe('q10_a1', 'keypress', function(evento) {
                $('corrige_q10_a_a1').removeClassName('correto');
                $('corrige_q10_a_a1').removeClassName('incorreto');
                var posicao = { Parte: 4, Questao: 'parte5_q10', Item: 0 };
                PegaQuestao(posicao).nada();
            });

            Event.observe('q10_a2', 'keypress', function(evento) {
                $('corrige_q10_a_a2').removeClassName('correto');
                $('corrige_q10_a_a2').removeClassName('incorreto');
                var posicao = { Parte: 4, Questao: 'parte5_q10', Item: 0 };
                PegaQuestao(posicao).nada();
            });

            Event.observe('q10_b1', 'keypress', function(evento) {
                $('corrige_q10_b_a1').removeClassName('correto');
                $('corrige_q10_b_a1').removeClassName('incorreto');
                var posicao = { Parte: 4, Questao: 'parte5_q10', Item: 1 };
                PegaQuestao(posicao).nada();
            });

            Event.observe('q10_b2', 'keypress', function(evento) {
                $('corrige_q10_b_a2').removeClassName('correto');
                $('corrige_q10_b_a2').removeClassName('incorreto');
                var posicao = { Parte: 4, Questao: 'parte5_q10', Item: 1 };
                PegaQuestao(posicao).nada();
            });




            // As retas
            applet.setVisible("f", true);
            applet.setVisible("g", true);
            applet.setVisible("i", true);

            // Os vertices
            applet.setVisible("D", true);
            applet.setVisible("E", true);
            applet.setVisible("F", true);

            // Os poligonos
            applet.setVisible("poligono1", true);
            applet.setVisible("poligono2", true);
            applet.setVisible("poligono3", true);
            applet.setVisible("poligono5", true);

            // Esconde os desnecessarios
            applet.setVisible("txtValores", false);
            applet.setVisible("txtLabels", false);
            applet.registerObjectUpdateListener("A", "aproximaPontos");
            break;
    }
}

function aproximaPontos(obj) {
    var applet = document.ggbApplet;

    applet.unregisterObjectUpdateListener("A");

    var a = { x: applet.getXcoord(obj), y: applet.getYcoord(obj) };
    var v1 = { x: 0.142857142857143, y: 1.428571428571429 };
    var v2 = { x: 0.394117647058824, y: 0.558823529411765 };
    var v3 = { x: 0.80, y: 0.333333333333333 };

    if (distEuclid(a, v1) <= 0.04) {
        applet.setCoords(obj, v1.x, v1.y);
    } else if (distEuclid(a, v2) <= 0.04) {
        applet.setCoords(obj, v2.x, v2.y);
    } else if (distEuclid(a, v3) <= 0.04) {
        applet.setCoords(obj, v3.x, v3.y);
    }

    applet.registerObjectUpdateListener("A", "aproximaPontos");
}

function distEuclid(a, b) {
    var aux = Math.pow((a.x - b.x), 2) + Math.pow((a.y - b.y), 2);
    var result = Math.sqrt(aux);

    return result;
}

function carregaRespostasPreenchidas() {
    switch (PosicaoAtual.Parte) {
        case 0:

            $('parte1_q1_a_11').value = getResp('atividade1_parte1_q1_a_11');
            $('parte1_q1_b_11').value = getResp('atividade1_parte1_q1_b_11');
            $('parte1_q2_a_11').value = getResp('atividade1_parte1_q2_a_11');
            $('parte1_q2_a_21').value = getResp('atividade1_parte1_q2_a_21');


            Event.observe('parte1_q1_a_11', 'change', function(evento) {
                setResp('atividade1_parte1_q1_a_11', $('parte1_q1_a_11').value);
            });

            Event.observe('parte1_q1_b_11', 'change', function(evento) {
                setResp('atividade1_parte1_q1_b_11', $('parte1_q1_b_11').value);
            });

            Event.observe('parte1_q2_a_11', 'change', function(evento) {
                setResp('atividade1_parte1_q2_a_11', $('parte1_q2_a_11').value);
            });

            Event.observe('parte1_q2_a_21', 'change', function(evento) {
                setResp('atividade1_parte1_q2_a_21', $('parte1_q2_a_21').value);

            });


            break;
        case 1:
            $('q3_a1').value = getResp('atividade1_parte2_q3_a_11');
            $('q3_a2').value = getResp('atividade1_parte2_q3_a_21');

            Event.observe('q3_a1', 'change', function(evento) {
                setResp('atividade1_parte2_q3_a_11', $('q3_a1').value);
            });

            Event.observe('q3_a2', 'change', function(evento) {
                setResp('atividade1_parte2_q3_a_21', $('q3_a2').value);
            });


            $('selecao_q3_a').setValue(getResp('select_q_3_a1'));

            $('q4_a1').value = getResp('atividade1_parte2_q4_a_11');
            $('q4_a2').value = getResp('atividade1_parte2_q4_a_21');

            Event.observe('q4_a1', 'change', function(evento) {
                setResp('atividade1_parte2_q4_a_11', $('q4_a1').value);
            });

            Event.observe('q4_a2', 'change', function(evento) {
                setResp('atividade1_parte2_q4_a_21', $('q4_a2').value);
            });

            $('q4_b1').value = getResp('atividade1_parte2_q4_b_11');
            $('q4_b2').value = getResp('atividade1_parte2_q4_b_21');

            Event.observe('q4_b1', 'change', function(evento) {
                setResp('atividade1_parte2_q4_b_11', $('q4_b1').value);
            });

            Event.observe('q4_b2', 'change', function(evento) {
                setResp('atividade1_parte2_q4_b_21', $('q4_b2').value);

            });

            $('selecao_q4_a').setValue(getResp('select_q_4_a1'));
            $('selecao_q4_b').setValue(getResp('select_q_4_b1'));

            if (getResp('a1_q5_option') != 'undefined') {
                if (getResp('a1_q5_option') != '')
                    $('parte2_q5_a_' + getResp('a1_q5_option')).setChecked(true);
            }


            Event.observe('selecao_q3_a', 'input:change', function(evento) {
                $('corrige_q3_a_s1').removeClassName('correto');
                $('corrige_q3_a_s1').removeClassName('incorreto');
                setResp('select_q_3_a1', $('selecao_q3_a').value);
                var posicao = { Parte: 1, Questao: 'parte2_q3', Item: 0 };
                PegaQuestao(posicao).nada();
            });

            Event.observe('selecao_q4_a', 'input:change', function(evento) {
                $('corrige_q4_a_s1').removeClassName('correto');
                $('corrige_q4_a_s1').removeClassName('incorreto');
                var posicao = { Parte: 1, Questao: 'parte2_q4', Item: 0 };
                PegaQuestao(posicao).nada();
                setResp('select_q_4_a1', $('selecao_q4_a').value);
            });

            Event.observe('selecao_q4_b', 'input:change', function(evento) {
                $('corrige_q4_b_s1').removeClassName('correto');
                $('corrige_q4_b_s1').removeClassName('incorreto');
                var posicao = { Parte: 1, Questao: 'parte2_q4', Item: 1 };
                PegaQuestao(posicao).nada();
                setResp('select_q_4_b1', $('selecao_q4_b').value);

            });

            Event.observe('q3_a1', 'keypress', function(evento) {
                $('corrige_q3_a_a1').removeClassName('correto');
                $('corrige_q3_a_a1').removeClassName('incorreto');
                var posicao = { Parte: 1, Questao: 'parte2_q3', Item: 0 };
                PegaQuestao(posicao).nada();

            });

            Event.observe('q3_a2', 'keypress', function(evento) {
                $('corrige_q3_a_a2').removeClassName('correto');
                $('corrige_q3_a_a2').removeClassName('incorreto');
                var posicao = { Parte: 1, Questao: 'parte2_q3', Item: 0 };
                PegaQuestao(posicao).nada();

            });

            Event.observe('q4_a1', 'keypress', function(evento) {
                $('corrige_q4_a_a1').removeClassName('correto');
                $('corrige_q4_a_a1').removeClassName('incorreto');
                var posicao = { Parte: 1, Questao: 'parte2_q4', Item: 0 };
                PegaQuestao(posicao).nada();

            });

            Event.observe('q4_a2', 'keypress', function(evento) {
                $('corrige_q4_a_a2').removeClassName('correto');
                $('corrige_q4_a_a2').removeClassName('incorreto');
                var posicao = { Parte: 1, Questao: 'parte2_q4', Item: 0 };
                PegaQuestao(posicao).nada();

            });

            Event.observe('q4_b1', 'keypress', function(evento) {
                $('corrige_q4_b_a1').removeClassName('correto');
                $('corrige_q4_b_a1').removeClassName('incorreto');
                var posicao = { Parte: 1, Questao: 'parte2_q4', Item: 1 };
                PegaQuestao(posicao).nada();

            });

            Event.observe('q4_b2', 'keypress', function(evento) {
                $('corrige_q4_b_a2').removeClassName('correto');
                $('corrige_q4_b_a2').removeClassName('incorreto');
                var posicao = { Parte: 1, Questao: 'parte2_q4', Item: 1 };
                PegaQuestao(posicao).nada();

            });



            break;
        case 3:
            $('parte4_q7_a_11').value = getResp('atividade1_parte4_q7_a_11');

            Event.observe('parte4_q7_a_11', 'change', function(evento) {
                setResp('atividade1_parte4_q7_a_11', $('parte4_q7_a_11').value);
            });

            $('parte4_q7_b_11').value = getResp('atividade1_parte4_q7_b_11');

            Event.observe('parte4_q7_b_11', 'change', function(evento) {
                setResp('atividade1_parte4_q7_b_11', $('parte4_q7_b_11').value);
            });

            $('parte4_q7_c_11').value = getResp('atividade1_parte4_q7_c_11');

            Event.observe('parte4_q7_c_11', 'change', function(evento) {
                setResp('atividade1_parte4_q7_c_11', $('parte4_q7_c_11').value);
            });

            $('parte4_q7_d_11').value = getResp('atividade1_parte4_q7_d_11');

            Event.observe('parte4_q7_d_11', 'change', function(evento) {
                setResp('atividade1_parte4_q7_d_11', $('parte4_q7_d_11').value);
            });

            $('parte4_q7_e_11').value = getResp('atividade1_parte4_q7_e_11');

            Event.observe('parte4_q7_e_11', 'change', function(evento) {
                setResp('atividade1_parte4_q7_e_11', $('parte4_q7_e_11').value);
            });

            $('parte4_q7_f_11').value = getResp('atividade1_parte4_q7_f_11');

            Event.observe('parte4_q7_f_11', 'change', function(evento) {
                setResp('atividade1_parte4_q7_f_11', $('parte4_q7_f_11').value);
            });

            if (getResp('a1_q8_option') != '') {
                if (getResp('a1_q8_option') != '')
                    $('parte4_q8_a_' + getResp('a1_q8_option')).setChecked(true);
            }

            if (getResp('a1_q9_option') != '') {
                if (getResp('a1_q9_option') != '')
                    $('parte4_q9_a_' + getResp('a1_q9_option')).setChecked(true);
            }

            break;

        case 4:
            $('q10_a1').value = getResp('atividade1_parte5_q10_a_11');

            Event.observe('q10_a1', 'change', function(evento) {
                setResp('atividade1_parte5_q10_a_11', $('q10_a1').value);
            });

            $('q10_a2').value = getResp('atividade1_parte5_q10_a_21');

            Event.observe('q10_a2', 'change', function(evento) {
                setResp('atividade1_parte5_q10_a_21', $('q10_a2').value);
            });

            $('q10_b1').value = getResp('atividade1_parte5_q10_b_11');

            Event.observe('q10_b1', 'change', function(evento) {
                setResp('atividade1_parte5_q10_b_11', $('q10_b1').value);
            });

            $('q10_b2').value = getResp('atividade1_parte5_q10_b_21');

            Event.observe('q10_b2', 'change', function(evento) {
                setResp('atividade1_parte5_q10_b_21', $('q10_b2').value);
            });
            break;


    }
}

function tudoCerto() {

    if (getResp('atividade_1') != 3 && PosicaoAtual.Parte != 4) {
        setResp('atividade_1', 2);
    }

    if (PosicaoAtual.Parte == 4) { //Finalizou a atividade_1
        setResp('atividade_1', 3);

    }
}

/**********************************************************
					FUNCOES DE CORRECAO
***********************************************************/

function corrige_q_1_a(valor) {
    var a = processaNumero(valor[0]);
    var retorno;

    retorno = Math.abs(a - 0.35).toFixed(5) <= 0.01;
    return [retorno];
}

function corrige_q_1_b(valor) {
    var a = processaNumero(valor[0]);
    var retorno;

    retorno = Math.abs(a - 2.00).toFixed(5) <= 0.01;
    return [retorno];
}

function corrige_q_2_a(valor) {
    var banana = processaNumero(valor[0]);
    var abacaxi = processaNumero(valor[1]);

    var vitA = 900 * banana + 260 * abacaxi;
    var vitB = 0.5 * banana + 0.9 * abacaxi;

    var calorias = 1000 * banana + 600 * abacaxi;

    var msgVitA = '';
    var msgVitB = '';
    var msgCal = '';

    var vitAOK = (vitA >= 500);
    if (!vitAOK) msgVitA = 'A quantidade de vitamina A não é a recomendada para o paciente. ';

    var vitBOK = (vitB >= 0.7);
    if (!vitBOK) msgVitB = 'A quantidade de vitamina B não é a recomendada para o paciente. ';

    var calOK = (calorias <= 1000.0);
    if (!calOK) msgCal = 'A quantidade de calorias do paciente está acima da recomendada. ';

    var retorno = (vitAOK && vitBOK && calOK);
    if (!retorno) {
        var a = PegaQuestao({ Parte: 0, Questao: 'parte1_q2', Item: 0 });
        var b = a.MsgErro.divCont;
        var p = b.firstDescendant();
        p.update(msgVitA + msgVitB + msgCal + 'Retorne ao problema e confira esses valores.');
    }



    return [retorno, retorno];
}

function corrige_q_3_a() {
    var applet = document.ggbApplet;

    var sinal = $('selecao_q3_a').value;
    var b = Math.round(processaNumero($('q3_a1').value) * 100) / 100;
    var c = Math.round(processaNumero($('q3_a2').value) * 100) / 100;

    $('corrige_q3_a_s1').removeClassName('correto');
    $('corrige_q3_a_s1').removeClassName('incorreto');

    $('corrige_q3_a_a1').removeClassName('correto');
    $('corrige_q3_a_a1').removeClassName('incorreto');

    $('corrige_q3_a_a2').removeClassName('correto');
    $('corrige_q3_a_a2').removeClassName('incorreto');

    (Math.abs(b - (-900 / 260)).toFixed(5) <= 0.01) ? $('corrige_q3_a_a1').addClassName('correto'): $('corrige_q3_a_a1').addClassName('incorreto');
    (Math.abs(c - 500 / 260).toFixed(5) <= 0.01) ? $('corrige_q3_a_a2').addClassName('correto'): $('corrige_q3_a_a2').addClassName('incorreto');
    (sinal == "1") ? $('corrige_q3_a_s1').addClassName('correto'): $('corrige_q3_a_s1').addClassName('incorreto');

    var retorno = (Math.abs(b - (-900 / 260)).toFixed(5) <= 0.01) && (Math.abs(c - 500 / 260).toFixed(5) <= 0.01) && (sinal == "1");

    if (retorno) {
        applet.setVisible("poligono2", true);
        applet.setVisible("f", true);
    }

    return [retorno];
}

function corrige_q_4_a() {
    var applet = document.ggbApplet;

    var sinal = $('selecao_q4_a').value;
    var b = Math.round(processaNumero($('q4_a1').value) * 1000) / 1000;
    var c = Math.round(processaNumero($('q4_a2').value) * 1000) / 1000;

    $('corrige_q4_a_s1').removeClassName('correto');
    $('corrige_q4_a_s1').removeClassName('incorreto');

    $('corrige_q4_a_a1').removeClassName('correto');
    $('corrige_q4_a_a1').removeClassName('incorreto');

    $('corrige_q4_a_a2').removeClassName('correto');
    $('corrige_q4_a_a2').removeClassName('incorreto');


    var retorno = (Math.abs(b - (-0.5 / 0.9)).toFixed(5) <= 0.01) && (Math.abs(c - 0.7 / 0.9).toFixed(5) <= 0.01) && (sinal == "1");

    (Math.abs(b - (-0.5 / 0.9)).toFixed(5) <= 0.01) ? $('corrige_q4_a_a1').addClassName('correto'): $('corrige_q4_a_a1').addClassName('incorreto');
    (Math.abs(c - 0.7 / 0.9).toFixed(5) <= 0.01) ? $('corrige_q4_a_a2').addClassName('correto'): $('corrige_q4_a_a2').addClassName('incorreto');
    (sinal == "1") ? $('corrige_q4_a_s1').addClassName('correto'): $('corrige_q4_a_s1').addClassName('incorreto');


    if (retorno) {
        applet.setVisible("poligono1", true);
        applet.setVisible("g", true);
    }

    return [retorno];
}

function corrige_q_4_b() {
    var applet = document.ggbApplet;

    var sinal = $('selecao_q4_b').value;
    var b = Math.round(processaNumero($('q4_b1').value) * 1000) / 1000;
    var c = Math.round(processaNumero($('q4_b2').value) * 1000) / 1000;

    var retorno = (Math.abs(b - (-10 / 6)).toFixed(5) <= 0.01) && (Math.abs(c - 10 / 6).toFixed(5) <= 0.01) && (sinal == "2");

    $('corrige_q4_b_s1').removeClassName('correto');
    $('corrige_q4_b_s1').removeClassName('incorreto');

    $('corrige_q4_b_a1').removeClassName('correto');
    $('corrige_q4_b_a1').removeClassName('incorreto');

    $('corrige_q4_b_a2').removeClassName('correto');
    $('corrige_q4_b_a2').removeClassName('incorreto');

    (Math.abs(b - (-10 / 6)).toFixed(5) <= 0.01) ? $('corrige_q4_b_a1').addClassName('correto'): $('corrige_q4_b_a1').addClassName('incorreto');
    (Math.abs(c - 10 / 6).toFixed(5) <= 0.01) ? $('corrige_q4_b_a2').addClassName('correto'): $('corrige_q4_b_a2').addClassName('incorreto');
    (sinal == "2") ? $('corrige_q4_b_s1').addClassName('correto'): $('corrige_q4_b_s1').addClassName('incorreto');


    if (retorno) {
        applet.setVisible("poligono3", true);
        applet.setVisible("i", true);
    }

    return [retorno];
}

function corrige_q_5_a(valor) {
    var applet = document.ggbApplet;
    var certo = valor[0];

    if (certo) {
        applet.setVisible("poligono5", true);
    }

    for (var i = 0; i <= valor.length; i++) {
        if (valor[i] == true) setResp('a1_q5_option', i + 1);
    }

    return [valor[0] ? true : null, valor[1] ? false : null, valor[2] ? false : null, valor[3] ? false : null];

}

function corrige_q_6_a(valor) {
    return corrige_drag_q_6_a();
}


function corrige_q_6_b(valor) {
    return corrige_drag_q_6_b();
}


function corrige_q_6_c(valor) {
    return corrige_drag_q_6_c();
}

function corrige_q_7_a(valor) {
    var a = Math.round(processaNumero(valor[0]) * 100) / 100;
    var retorno;

    retorno = (Math.abs(a - 1.75).toFixed(5) <= 0.01);
    return [retorno];
}

function corrige_q_7_b(valor) {
    var a = Math.round(processaNumero(valor[0]) * 100) / 100;
    var retorno;

    retorno = (Math.abs(a - 2.08).toFixed(5) <= 0.01);
    return [retorno];
}

function corrige_q_7_c(valor) {
    var a = Math.round(processaNumero(valor[0]) * 100) / 100;
    var retorno;

    retorno = (Math.abs(a - 2.10).toFixed(5) <= 0.01);
    return [retorno];
}

function corrige_q_7_d(valor) {
    var a = Math.round(processaNumero(valor[0]) * 1000) / 1000;
    var retorno;

    retorno = (Math.abs(a - 2.43).toFixed(5) <= 0.01);
    return [retorno];


}

function corrige_q_7_e(valor) {
    var a = Math.round(processaNumero(valor[0]) * 1000) / 1000;
    var retorno;

    retorno = (Math.abs(a - 1.62).toFixed(5) <= 0.01);
    return [retorno];

}

function corrige_q_7_f(valor) {
    var a = Math.round(processaNumero(valor[0]) * 1000) / 1000;
    var retorno;

    retorno = (Math.abs(a - 2.11).toFixed(5) <= 0.01);
    return [retorno];
}

function corrige_q_8_a(valor) {
    for (var i = 0; i <= valor.length; i++) {
        if (valor[i] == true) setResp('a1_q8_option', i + 1);
    }

    return [valor[0] ? false : null, valor[1] ? false : null, valor[2] ? false : null, valor[3] ? false : null, valor[4] ? true : null, valor[5] ? false : null];
}

function corrige_q_9_a(valor) {
    for (var i = 0; i <= valor.length; i++) {
        if (valor[i] == true) setResp('a1_q9_option', i + 1);
    }
    return [valor[0] ? false : null, valor[1] ? true : null];
}

function corrige_q_10_a() {
    var retorno;

    var a = Math.round(processaNumero($('q10_a1').value) * 100) / 100;
    var b = Math.round(processaNumero($('q10_a2').value) * 100) / 100;

    retorno = (Math.abs(a - 1.5).toFixed(5) <= 0.01) && (Math.abs(b - 2).toFixed(5) <= 0.01);

    $('corrige_q10_a_a1').removeClassName('correto');
    $('corrige_q10_a_a1').removeClassName('incorreto');

    $('corrige_q10_a_a2').removeClassName('correto');
    $('corrige_q10_a_a2').removeClassName('incorreto');

    (Math.abs(a - 1.5).toFixed(5) <= 0.01) ? $('corrige_q10_a_a1').addClassName('correto'): $('corrige_q10_a_a1').addClassName('incorreto');
    (Math.abs(b - 2).toFixed(5) <= 0.01) ? $('corrige_q10_a_a2').addClassName('correto'): $('corrige_q10_a_a2').addClassName('incorreto');

    return [retorno];
}

function corrige_q_10_b() {
    var applet = document.ggbApplet;
    var retorno;

    var b = Math.round(processaNumero($('q10_b1').value) * 100) / 100;
    var c = Math.round(processaNumero($('q10_b2').value) * 100) / 100;

    retorno = (Math.abs(b - (-2 / 1.5)).toFixed(5) <= 0.01) && (Math.abs(c - 2 / 1.5).toFixed(5) <= 0.01);

    $('corrige_q10_b_a1').removeClassName('correto');
    $('corrige_q10_b_a1').removeClassName('incorreto');

    $('corrige_q10_b_a2').removeClassName('correto');
    $('corrige_q10_b_a2').removeClassName('incorreto');

    (Math.abs(b - (-2 / 1.5)).toFixed(5) <= 0.01) ? $('corrige_q10_b_a1').addClassName('correto'): $('corrige_q10_b_a1').addClassName('incorreto');
    (Math.abs(c - 2 / 1.5).toFixed(5) <= 0.01) ? $('corrige_q10_b_a2').addClassName('correto'): $('corrige_q10_b_a2').addClassName('incorreto');


    if (retorno) {

        // Objetos auxiliares
        applet.setVisible("txtCustoMovel", true);
        applet.setVisible("custo", true);
        applet.setVisible("t", true);
    }

    return [retorno];
}