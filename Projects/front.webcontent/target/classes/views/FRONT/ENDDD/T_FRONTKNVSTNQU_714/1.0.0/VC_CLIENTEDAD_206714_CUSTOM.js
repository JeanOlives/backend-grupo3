/* variables locales de T_FRONTKNVSTNQU_714*/

(function (root, factory) {
    factory();
} (this, function() {

    "use strict";

    /*global designerEvents, console */

        //*********** COMENTARIOS DE AYUDA **************
        //  Para imprimir mensajes en consola
        //  console.log("executeCommand");

        //  Para enviar mensaje use
        //  eventArgs.commons.messageHandler.showMessagesInformation('Ejecutando comando personalizado');

        //  Para evitar que se continue con la validación a nivel de servidor
        //  eventArgs.commons.execServer = false;

        //**********************************************************
        //  Eventos de VISUAL ATTRIBUTES
        //**********************************************************

    
        var task = designerEvents.api.clienteform;
    

    //"TaskId": "T_FRONTKNVSTNQU_714"


    	
//ClienteQuery Entity: Cliente
task.executeQuery.Q_CLIETTTN_SG94 = function(executeQueryEventArgs){
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Cliente = true;
};



}));
