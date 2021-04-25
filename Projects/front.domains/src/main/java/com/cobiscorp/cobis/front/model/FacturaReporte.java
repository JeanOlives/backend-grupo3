package com.cobiscorp.cobis.front.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import com.cobiscorp.designer.api.Property;

public class FacturaReporte {

	public static final String EN_FACTURAEP_851 = "EN_FACTURAEP_851";
	
	public static final String VERSION = "1.0.0";
	
	public static final String ENTITY_NAME = "FacturaReporte";
	
	
	public static final Property<Integer> CODIGO = new Property<Integer>("codigo", Integer.class, false);
	
	public static final Property<Date> FECHA = new Property<Date>("fecha", Date.class, false);
	
	public static final Property<String> APELLIDO = new Property<String>("apellido", String.class, false);
	
	public static final Property<String> MONTO = new Property<String>("monto", String.class, false);
	
	public static final Property<String> NOMBRE = new Property<String>("nombre", String.class, false);
	
	public static final List<Property<?>> getPks() {
		List<Property<?>> pks = new ArrayList<Property<?>>();
		return pks;
	}

}
