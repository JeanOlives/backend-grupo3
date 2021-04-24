/* variables locales de T_FRONTWHPCDUTR_282*/

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

    
        var task = designerEvents.api.buscarclienteform;
    

    //"TaskId": "T_FRONTWHPCDUTR_282"


    	
//BuscarClienteQuery Entity: Cliente
task.executeQuery.Q_CLIETNTE_TM47 = function(executeQueryEventArgs){
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Cliente = true;
    const nombre = executeQueryEventArgs.commons.api.vc.model.BuscarCliente.nombreBuscar;
    executeQueryEventArgs.parameters.buscarCliente = nombre; 
    
 
};



}));
