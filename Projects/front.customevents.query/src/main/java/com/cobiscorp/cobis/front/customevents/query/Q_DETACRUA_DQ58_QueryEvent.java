/*
 * Archivo: Q_DETACRUA_DQ58_QueryEvent.java
 * Fecha: 24/04/2021 14:13:33
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
 * Q_DETACRUA_DQ58_QueryEvent - DetalleFacturaQuery
 *
 */
@Component
@Service({QueryEventBuilder.class})
@Properties(value={
		@Property(name = "query.id", value = "Q_DETACRUA_DQ58"),
		@Property(name = "query.version", value = "1.0.0")
})
public class Q_DETACRUA_DQ58_QueryEvent extends QueryEventBuilder
 implements IExecuteQuery
{

	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(Q_DETACRUA_DQ58_QueryEvent.class);
	
	@Reference(name="iExecuteQueryQ_DETACRUA_DQ58",referenceInterface =IExecuteQuery.class,bind = "setiExecuteQueryQ_DETACRUA_DQ58",unbind = "unsetiExecuteQueryQ_DETACRUA_DQ58",cardinality = ReferenceCardinality.MANDATORY_UNARY,policy=ReferencePolicy.DYNAMIC,target="(&(query.version=1.0.0)(query.id=Q_DETACRUA_DQ58))")
	private IExecuteQuery iExecuteQueryQ_DETACRUA_DQ58;

	public void setiExecuteQueryQ_DETACRUA_DQ58(IExecuteQuery iExecuteQueryQ_DETACRUA_DQ58) {
		this.iExecuteQueryQ_DETACRUA_DQ58 = iExecuteQueryQ_DETACRUA_DQ58;
	}

	public void unsetiExecuteQueryQ_DETACRUA_DQ58(IExecuteQuery iExecuteQueryQ_DETACRUA_DQ58) {
		this.iExecuteQueryQ_DETACRUA_DQ58 = iExecuteQueryQ_DETACRUA_DQ58;
	}

	@Override
	public List<?> executeDataEvent(DynamicRequest arg0, IExecuteQueryEventArgs arg1) {
		List<?> lst = null;
		try {
			lst = iExecuteQueryQ_DETACRUA_DQ58.executeDataEvent(arg0, arg1);
		} catch (Exception ex) {
			arg1.setSuccess(false);
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
		return lst;
	}


	@Override
	public void configure() {
	    this.addQueryEvent("Q_DETACRUA_DQ58", this);
	}

}

