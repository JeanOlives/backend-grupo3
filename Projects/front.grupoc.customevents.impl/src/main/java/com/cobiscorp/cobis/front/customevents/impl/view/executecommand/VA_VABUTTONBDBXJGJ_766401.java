/*
 * Archivo: VA_VABUTTONBDBXJGJ_766401.java
 *
 * Esta aplicacion es parte de los paquetes bancarios propiedad de COBISCORP.
 * Su uso no autorizado queda expresamente prohibido asi como cualquier
 * alteracion o agregado hecho por alguno de sus usuarios sin el debido
 * consentimiento por escrito de COBISCORP.
 * Este programa esta protegido por la ley de derechos de autor y por las
 * convenciones internacionales de propiedad intelectual. Su uso no
 * autorizado dara derecho a COBISCORP para obtener ordenes de secuestro
 * o retencion y para perseguir penalmente a los autores de cualquier infraccion.
 */

package com.cobiscorp.cobis.front.customevents.impl.view.executecommand;

import java.util.Map;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.ReferenceCardinality;
import org.apache.felix.scr.annotations.Service;
import com.cobiscorp.cobis.commons.domains.log.ILogger;
import com.cobiscorp.cobis.commons.log.LogFactory;
import com.cobiscorp.cobis.front.model.DetalleFactura;
import com.cobiscorp.designer.api.DataEntity;
import com.cobiscorp.designer.api.DynamicRequest;
import com.cobiscorp.designer.api.customization.IExecuteCommand;
import com.cobiscorp.designer.api.customization.arguments.IExecuteCommandEventArgs;
import com.cobiscorp.designer.api.managers.DesignerManagerException;
import com.cobiscorp.designer.bli.api.IBLIExecutor;

@Component
@Service({ IExecuteCommand.class })
@Properties(value={
		@Property(name = "view.id", value = "VW_BUSCARPROT_401"),
		@Property(name = "view.version", value = "1.0.0"),
		@Property(name = "view.controlId", value = "VA_VABUTTONBDBXJGJ_766401")})

public class VA_VABUTTONBDBXJGJ_766401 implements IExecuteCommand {
	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(VA_VABUTTONBDBXJGJ_766401.class);
	
	@Reference(bind="setBliIngresarDetalle" , 
			unbind="unsetBliIngresarDetalle",
			cardinality = ReferenceCardinality.MANDATORY_UNARY,
			target = "(bli.id=BLI6208_bli_ingresardetalle)")
	private IBLIExecutor bliIngresarDetalle;
	
	
	private void setBliIngresarDetalle(IBLIExecutor bliIngresarDetalle){
		this.bliIngresarDetalle = bliIngresarDetalle;
	}
	
	private void unsetBliIngresarDetalle(IBLIExecutor bliIngresarDetalle){
		this.bliIngresarDetalle = null;
	}



	@Override
	public void executeCommand(DynamicRequest arg0, IExecuteCommandEventArgs arg1) {
		// TODO Auto-generated method stub
		try {
			if (logger.isDebugEnabled()) {
				logger.logDebug("Start executeCommand in VA_VABUTTONBDBXJGJ_766401");
			}
			logger.logDebug("Hasta aqui todo bien");
			Map<String,Object> data = arg0.getData();
			String codigoFactura = (String) (data.get("codigoDeFactura"));
			logger.logDebug("Codigo Factura: " + codigoFactura);
			
			bliIngresarDetalle.execute(arg0);
			logger.logDebug("Se Ejecuta la BLI INGRESAR DETALLE");
		} catch (Exception ex) {
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
	}

}

