/*
 * Archivo: Q_CLIETTTN_SG94_QueryEvent.java
 * Fecha: 24/04/2021 14:13:34
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

package com.cobiscorp.cobis.front.customevents.query;

import java.util.List;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.ReferenceCardinality;
import org.apache.felix.scr.annotations.ReferencePolicy;
import org.apache.felix.scr.annotations.Service;

import com.cobiscorp.cobis.commons.domains.log.ILogger;
import com.cobiscorp.cobis.commons.log.LogFactory;
import com.cobiscorp.designer.api.DataEntity;
import com.cobiscorp.designer.api.DynamicRequest;
import com.cobiscorp.designer.api.builder.QueryEventBuilder;
import com.cobiscorp.designer.api.customization.*;
import com.cobiscorp.designer.api.customization.arguments.*;
import com.cobiscorp.designer.api.managers.DesignerManagerException;

/**
 * Personalizacion de Eventos del Query
 *
 * Q_CLIETTTN_SG94_QueryEvent - ClienteQuery
 *
 */
@Component
@Service({QueryEventBuilder.class})
@Properties(value={
		@Property(name = "query.id", value = "Q_CLIETTTN_SG94"),
		@Property(name = "query.version", value = "1.0.0")
})
public class Q_CLIETTTN_SG94_QueryEvent extends QueryEventBuilder
 implements IExecuteQuery
{

	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(Q_CLIETTTN_SG94_QueryEvent.class);
	
	@Reference(name="iExecuteQueryQ_CLIETTTN_SG94",referenceInterface =IExecuteQuery.class,bind = "setiExecuteQueryQ_CLIETTTN_SG94",unbind = "unsetiExecuteQueryQ_CLIETTTN_SG94",cardinality = ReferenceCardinality.MANDATORY_UNARY,policy=ReferencePolicy.DYNAMIC,target="(&(query.version=1.0.0)(query.id=Q_CLIETTTN_SG94))")
	private IExecuteQuery iExecuteQueryQ_CLIETTTN_SG94;

	public void setiExecuteQueryQ_CLIETTTN_SG94(IExecuteQuery iExecuteQueryQ_CLIETTTN_SG94) {
		this.iExecuteQueryQ_CLIETTTN_SG94 = iExecuteQueryQ_CLIETTTN_SG94;
	}

	public void unsetiExecuteQueryQ_CLIETTTN_SG94(IExecuteQuery iExecuteQueryQ_CLIETTTN_SG94) {
		this.iExecuteQueryQ_CLIETTTN_SG94 = iExecuteQueryQ_CLIETTTN_SG94;
	}

	@Override
	public List<?> executeDataEvent(DynamicRequest arg0, IExecuteQueryEventArgs arg1) {
		List<?> lst = null;
		try {
			lst = iExecuteQueryQ_CLIETTTN_SG94.executeDataEvent(arg0, arg1);
		} catch (Exception ex) {
			arg1.setSuccess(false);
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
		return lst;
	}


	@Override
	public void configure() {
	    this.addQueryEvent("Q_CLIETTTN_SG94", this);
	}

}

