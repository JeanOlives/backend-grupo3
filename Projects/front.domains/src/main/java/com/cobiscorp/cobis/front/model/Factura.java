package com.cobiscorp.cobis.front.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import com.cobiscorp.designer.api.Property;

public class Factura {

	public static final String EN_FACTURARY_191 = "EN_FACTURARY_191";
	
	public static final String VERSION = "1.0.0";
	
	public static final String ENTITY_NAME = "Factura";
	
	
	public static final Property<Double> TOTAL = new Property<Double>("total", Double.class, false);
	
	public static final Property<Integer> CODIGO = new Property<Integer>("codigo", Integer.class, false);
	
	public static final Property<Date> FECHA = new Property<Date>("fecha", Date.class, false);
	
	public static final List<Property<?>> getPks() {
		List<Property<?>> pks = new ArrayList<Property<?>>();
		return pks;
	}

}
