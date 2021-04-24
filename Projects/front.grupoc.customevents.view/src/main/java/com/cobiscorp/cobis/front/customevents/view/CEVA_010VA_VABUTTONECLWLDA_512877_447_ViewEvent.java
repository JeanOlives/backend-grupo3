/*
 * Archivo: VW_FACTURACIN_877_ViewEvent.java
 * Fecha: 24/04/2021 14:19:11
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

package com.cobiscorp.cobis.front.customevents.view;

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
import com.cobiscorp.designer.api.builder.ViewEventBuilder;
import com.cobiscorp.designer.api.customization.*;
import com.cobiscorp.designer.api.customization.arguments.*;
import com.cobiscorp.designer.api.managers.DesignerManagerException;

/**
 * Personalizacion de Eventos del Formulario
 *
 * VW_FACTURACIN_877_ViewEvent - View of FacturacionForm
 *
 */
@Component
@Service({ViewEventBuilder.class})
@Properties(value={
		@Property(name = "view.id", value = "VW_FACTURACIN_877"),
		@Property(name = "view.version", value = "1.0.0")
})
public class CEVA_010VA_VABUTTONECLWLDA_512877_447_ViewEvent extends ViewEventBuilder
 implements IExecuteCommand
{
	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(CEVA_010VA_VABUTTONECLWLDA_512877_447_ViewEvent.class);
    
	@Reference(name="iExecuteCommandVA_VABUTTONECLWLDA_512877",referenceInterface =IExecuteCommand.class,bind = "setiExecuteCommandVA_VABUTTONECLWLDA_512877",unbind = "unsetiExecuteCommandVA_VABUTTONECLWLDA_512877",cardinality = ReferenceCardinality.MANDATORY_UNARY,policy=ReferencePolicy.DYNAMIC,target="(&(view.id=VW_FACTURACIN_877)(view.version=1.0.0)(view.controlId=VA_VABUTTONECLWLDA_512877))")
	private IExecuteCommand iExecuteCommandVA_VABUTTONECLWLDA_512877;

	public void setiExecuteCommandVA_VABUTTONECLWLDA_512877(IExecuteCommand iExecuteCommandVA_VABUTTONECLWLDA_512877) {
		this.iExecuteCommandVA_VABUTTONECLWLDA_512877 = iExecuteCommandVA_VABUTTONECLWLDA_512877;
	}

	public void unsetiExecuteCommandVA_VABUTTONECLWLDA_512877(IExecuteCommand iExecuteCommandVA_VABUTTONECLWLDA_512877) {
		this.iExecuteCommandVA_VABUTTONECLWLDA_512877 = iExecuteCommandVA_VABUTTONECLWLDA_512877;
	}

	@Override
	public void executeCommand(DynamicRequest arg0, IExecuteCommandEventArgs arg1) {
		try {
			iExecuteCommandVA_VABUTTONECLWLDA_512877.executeCommand(arg0, arg1);
		} catch (Exception ex) {
			arg1.setSuccess(false);
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
	}


	@Override
	public void configure() {
        this.addExecuteCommandEvent("VA_VABUTTONECLWLDA_512877", this);
	}

}

