/*
 * Archivo: QV_BN94_GSD54_QueryViewEvent.java
 * Fecha: 24/04/2021 14:18:51
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

package com.cobiscorp.cobis.front.customevents.queryview;

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
import com.cobiscorp.designer.api.DataEntityList;
import com.cobiscorp.designer.api.DynamicRequest;
import com.cobiscorp.designer.api.builder.QueryViewEventBuilder;
import com.cobiscorp.designer.api.customization.*;
import com.cobiscorp.designer.api.customization.arguments.*;
import com.cobiscorp.designer.api.managers.DesignerManagerException;

/**
 * Personalizacion de Eventos del Query
 *
 * QV_BN94_GSD54_QueryViewEvent - ClienteForm
 *
 */
@Component
@Service({ QueryViewEventBuilder.class })
@Properties({ @Property(name = "queryView.id", value = "QV_BN94_GSD54") })

public class CEQV_203QV_BN94_GSD54_775_QueryViewEvent extends QueryViewEventBuilder
 implements IGridRowUpdating
{
	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(CEQV_203QV_BN94_GSD54_775_QueryViewEvent.class);
    
	@Reference(name="iGridRowUpdatingQV_BN94_GSD54",referenceInterface =IGridRowUpdating.class,bind = "setiGridRowUpdatingQV_BN94_GSD54",unbind = "unsetiGridRowUpdatingQV_BN94_GSD54",cardinality = ReferenceCardinality.MANDATORY_UNARY,policy=ReferencePolicy.DYNAMIC,target="(&(queryView.id=QV_BN94_GSD54)(queryView.controlId=QV_BN94_GSD54))")
	private IGridRowUpdating iGridRowUpdatingQV_BN94_GSD54;

	public void setiGridRowUpdatingQV_BN94_GSD54(IGridRowUpdating iGridRowUpdatingQV_BN94_GSD54) {
		this.iGridRowUpdatingQV_BN94_GSD54 = iGridRowUpdatingQV_BN94_GSD54;
	}

	public void unsetiGridRowUpdatingQV_BN94_GSD54(IGridRowUpdating iGridRowUpdatingQV_BN94_GSD54) {
		this.iGridRowUpdatingQV_BN94_GSD54 = iGridRowUpdatingQV_BN94_GSD54;
	}

	@Override
	public void rowAction(DataEntity arg0, IGridRowActionEventArgs arg1) {
		try {
			iGridRowUpdatingQV_BN94_GSD54.rowAction(arg0, arg1);
		} catch (Exception ex) {
			arg1.setSuccess(false);
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
	}


	@Override
	public void configure() {
        this.addGridRowUpdating("QV_BN94_GSD54", this);
	}
}

