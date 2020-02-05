function linkBlockDeNotas() {
    var abre = !BlocoNotas.divCont.visible();
    if (abre)
        BlocoNotas.abre();

}



// Retorna um valor nao fracionario de um numero
function processaNumero(respStr) {

    if (respStr == '') return NaN;
    var respStrSplited = respStr.split('/');

    var respostaValida = true;
    if (respStrSplited.length > 1) {

        for (var i = 0; i < respStrSplited.length; i++) {
            respStrSplited[i] = processaNumero(respStrSplited[i]);
            if (respStrSplited[i] == null) respostaValida = false;
            if (respostaValida) {
                if (i == 0) {
                    var resp = respStrSplited[i];
                } else {
                    resp = resp / respStrSplited[i];
                }

            }
        }
        if (respostaValida) return resp;
        else return NaN;
    } else {
        if (respStr.indexOf('%') > -1) {
            respStr = respStr.replace(/%/, '');
            var porcento = true;
        } else var procento = false;

        respStr = respStr.replace(/,/g, '.');
        if (!isNaN(respStr) && (respStr.length > 0)) {
            if (porcento) respStr = respStr / 100;
        } else respStr = NaN;
        return respStr;
    }

}

/******************************************************************************************************************************************************
 ****    Flash																									*******
 ******************************************************************************************************************************************************/
// Retorna o elemento do video Flash com o nome movieName
function getFlashMovie(movieName) {
    var isIE = navigator.appName.indexOf("Microsoft") != -1;
    return (isIE) ? window[movieName] : document[movieName];
}

function getResp(id) {
    return ($('SalvaLocal').Pega(nomeSoft, id) == 'undefined' ? '' : $('SalvaLocal').Pega(nomeSoft, id));
}

function setResp(id, valor) {
    $('SalvaLocal').Salva(nomeSoft, id, valor);
}

function apagaTodasResp() {
    return ($('SalvaLocal').ApagaTudo(nomeSoft));
}

function init() {
    return ($('SalvaLocal').ApagaTudo(nomeSoft));
}

function mudaValorResposta(id, value) {
    mudaImagemCertoErrado("img" + id, 0);
    respId = id.replace("Resp_", "");
    setResp(respId, value);
}
/******************************************************************************************************************************************************
 ****    																										*******
 ******************************************************************************************************************************************************/


//ALterar o estado da atividade: iniciado, finalizada
function setAtividade(nome, estado, forcar) {
    console.log("setAtividade - chamada");
    if (forcar == undefined) forcar = false;

    if (!forcar) {
        if ((getResp(nome) < estado) || getResp(nome) == '') setResp(nome, estado);
    } else setResp(nome, estado);


}