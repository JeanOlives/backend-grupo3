/*
 * Archivo: FacturacionForm_VC_FACTURACON_269510.java
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

package com.cobiscorp.cobis.front.customevents.impl.form.onclosemodal;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.ReferenceCardinality;
import org.apache.felix.scr.annotations.Service;
import com.cobiscorp.cobis.commons.domains.log.ILogger;
import com.cobiscorp.cobis.commons.log.LogFactory;
import com.cobiscorp.designer.api.DynamicRequest;
import com.cobiscorp.designer.api.customization.IOnCloseModalEvent;
import com.cobiscorp.designer.api.customization.arguments.ICloseModalEventArgs;
import com.cobiscorp.designer.api.managers.DesignerManagerException;
import com.cobiscorp.designer.bli.api.IBLIExecutor;

@Component
@Service({ IOnCloseModalEvent.class })
@Properties({ @Property(name = "task.module", value = "FRONT"),
             @Property(name = "task.submodule", value = "ENDDD"),
             @Property(name = "task.id", value = "T_FRONTTOIWYMVS_510"),
             @Property(name = "task.version", value = "1.0.0"),
             @Property(name = "task.controlId", value = "VC_FACTURACON_269510")})

public class FacturacionForm_VC_FACTURACON_269510 implements IOnCloseModalEvent {
	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(FacturacionForm_VC_FACTURACON_269510.class);
	
	@Reference(bind ="setBliObtenerTotal",                			
			   unbind="unsetBliObtenerTotal",					
			   cardinality=ReferenceCardinality.MANDATORY_UNARY,
			   target="(bli.id=BLI8105_bli_obtenertotal)")			
	private IBLIExecutor bliObtenerTotal;      
	
	public void setBliObtenerTotal(IBLIExecutor bliObtenerTotal){
		this.bliObtenerTotal = bliObtenerTotal;
	}
	public void unsetBliObtenerTotal(IBLIExecutor bliObtenerTotal){
		this.bliObtenerTotal = null;
	}
	
	@Override
	public void onCloseModalEvent(DynamicRequest arg0, ICloseModalEventArgs arg1) {
		// TODO Auto-generated method stub
		try {
			if (logger.isDebugEnabled()) {
				logger.logDebug("Start onCloseModalEvent in FacturacionForm_VC_FACTURACON_269510");
			}
			bliObtenerTotal.execute(arg0);
		} catch (Exception ex) {
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
	}

}

