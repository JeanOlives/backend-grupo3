/*
 * Archivo: VA_VABUTTONECLWLDA_512877.java
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
import com.cobiscorp.cobis.front.model.Factura;
import com.cobiscorp.designer.api.DataEntity;
import com.cobiscorp.designer.api.DataEntityList;
import com.cobiscorp.designer.api.DynamicRequest;
import com.cobiscorp.designer.api.customization.IExecuteCommand;
import com.cobiscorp.designer.api.customization.arguments.IExecuteCommandEventArgs;
import com.cobiscorp.designer.api.managers.DesignerManagerException;
import com.cobiscorp.designer.bli.api.IBLIExecutor;

@Component
@Service({ IExecuteCommand.class })
@Properties(value={
		@Property(name = "view.id", value = "VW_FACTURACIN_877"),
		@Property(name = "view.version", value = "1.0.0"),
		@Property(name = "view.controlId", value = "VA_VABUTTONECLWLDA_512877")})

public class VA_VABUTTONECLWLDA_512877 implements IExecuteCommand {
	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(VA_VABUTTONECLWLDA_512877.class);
	
	@Reference(bind="setBliReservarFactura" , 
			unbind="unsetBliReservarFactura",
			cardinality = ReferenceCardinality.MANDATORY_UNARY,
			target = "(bli.id=BLI8374_bli_reservarfactura)")
	private IBLIExecutor bliReservarFactura;
	
	
	private void setBliReservarFactura(IBLIExecutor bliMostrarProductos){
		this.bliReservarFactura = bliMostrarProductos;
	}
	
	private void unsetBliReservarFactura(IBLIExecutor bliMostrarProductos){
		this.bliReservarFactura = null;
	}
	
	
	@Override
	public void executeCommand(DynamicRequest arg0, IExecuteCommandEventArgs arg1) {
		// TODO Auto-generated method stub
		try {
			if (logger.isDebugEnabled()) {
				logger.logDebug("Start executeCommand in VA_VABUTTONECLWLDA_512877");
			}
			
			bliReservarFactura.execute(arg0);
			DataEntity factura = arg0.getEntity(Factura.ENTITY_NAME);
			Integer codigo_cf = factura.get(Factura.CODIGO);
			
			logger.logDebug("codigo factura:" + codigo_cf);
			
		} catch (Exception ex) {
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
	}

}

