/*
 * Archivo: VA_VABUTTONZZNRUDQ_359207.java
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

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.ReferenceCardinality;
import org.apache.felix.scr.annotations.Service;
import com.cobiscorp.cobis.commons.domains.log.ILogger;
import com.cobiscorp.cobis.commons.log.LogFactory;
import com.cobiscorp.designer.api.DynamicRequest;
import com.cobiscorp.designer.api.customization.IExecuteCommand;
import com.cobiscorp.designer.api.customization.arguments.IExecuteCommandEventArgs;
import com.cobiscorp.designer.api.managers.DesignerManagerException;
import com.cobiscorp.designer.bli.api.IBLIExecutor;

@Component
@Service({ IExecuteCommand.class })
@Properties(value={
		@Property(name = "view.id", value = "VW_INGRESARRR_207"),
		@Property(name = "view.version", value = "1.0.0"),
		@Property(name = "view.controlId", value = "VA_VABUTTONZZNRUDQ_359207")})

public class VA_VABUTTONZZNRUDQ_359207 implements IExecuteCommand {
	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(VA_VABUTTONZZNRUDQ_359207.class);

	@Reference(bind="setBliInsertarProducto" , 
			unbind="unsetBliInsertarProducto",
			cardinality = ReferenceCardinality.MANDATORY_UNARY,
			target = "(bli.id=BLI6230_bli_insertarproducto)")
	private IBLIExecutor bliInsertarProducto;
	
	private void setBliInsertarProducto(IBLIExecutor bliInsertarProducto){
		this.bliInsertarProducto = bliInsertarProducto;
	}
	
	private void unsetBliInsertarProducto(IBLIExecutor bliInsertarProducto){
		this.bliInsertarProducto = null;
	}
	
	@Override
	public void executeCommand(DynamicRequest arg0, IExecuteCommandEventArgs arg1) {
		// TODO Auto-generated method stub
		try {
			if (logger.isDebugEnabled()) {
				logger.logDebug("Start executeCommand in VA_VABUTTONMUBVPNK_896230");
				logger.logDebug("DMP ejecutando BLI... ");
			}
			bliInsertarProducto.execute(arg0);
			logger.logDebug("DMP termina ejecucion de BLI... ");
		
		} catch (Exception ex) {
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
	}

}

