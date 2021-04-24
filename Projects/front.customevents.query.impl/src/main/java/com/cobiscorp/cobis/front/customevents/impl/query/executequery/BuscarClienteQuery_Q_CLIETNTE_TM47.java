/*
 * Archivo: BuscarClienteQuery_Q_CLIETNTE_TM47.java
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

package com.cobiscorp.cobis.front.customevents.impl.query.executequery;

import java.util.List;
import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.ReferenceCardinality;
import org.apache.felix.scr.annotations.Service;
import com.cobiscorp.cobis.commons.domains.log.ILogger;
import com.cobiscorp.cobis.commons.log.LogFactory;
import com.cobiscorp.cobis.front.model.Cliente;
import com.cobiscorp.designer.api.DynamicRequest;
import com.cobiscorp.designer.api.customization.IExecuteQuery;
import com.cobiscorp.designer.api.customization.arguments.IExecuteQueryEventArgs;
import com.cobiscorp.designer.api.managers.DesignerManagerException;
import com.cobiscorp.designer.bli.api.IBLIExecutor;

@Component
@Service({ IExecuteQuery.class })
@Properties(value={
		@Property(name = "query.id", value = "Q_CLIETNTE_TM47"),
		@Property(name = "query.version", value = "1.0.0")})

public class BuscarClienteQuery_Q_CLIETNTE_TM47 implements IExecuteQuery {
	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(BuscarClienteQuery_Q_CLIETNTE_TM47.class);
	
	@Reference(bind="setBliBuscarCliente" , 
			unbind="unsetBliBuscarCliente",
			cardinality = ReferenceCardinality.MANDATORY_UNARY,
			target = "(bli.id=BLI4620_bli_buscarcliente)")
	private IBLIExecutor bliBuscarCliente;
	
	private void setBliBuscarCliente(IBLIExecutor bliBuscarCliente){
		this.bliBuscarCliente = bliBuscarCliente;
	}
	
	private void unsetBliBuscarCliente(IBLIExecutor bliBuscarCliente){
		this.bliBuscarCliente = null;
	}

	@Override
	public List<?> executeDataEvent(DynamicRequest arg0, IExecuteQueryEventArgs arg1) {
		// TODO Auto-generated method stub
		try {
			if (logger.isDebugEnabled()) {
				logger.logDebug("Start executeDataEvent in BuscarClienteQuery_Q_CLIETNTE_TM47");
				logger.logDebug("GRUPO3 ejecutando BLI... ");
			}
			bliBuscarCliente.execute(arg0);
			logger.logDebug("GRUPO3 termina ejecucion de BLI... ");
		} catch (Exception ex) {
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
		return arg0.getEntityList(Cliente.ENTITY_NAME).getDataList();
	}

}

