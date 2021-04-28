package com.cobiscorp.cobis.front.model;

import java.util.ArrayList;
import java.util.List;
import com.cobiscorp.designer.api.Property;

public class BuscarCliente {

	public static final String EN_BUSCARCIE_385 = "EN_BUSCARCIE_385";
	
	public static final String VERSION = "1.0.0";
	
	public static final String ENTITY_NAME = "BuscarCliente";
	
	
	public static final Property<String> NOMBREBUSCAR = new Property<String>("nombreBuscar", String.class, false);
	
	public static final List<Property<?>> getPks() {
		List<Property<?>> pks = new ArrayList<Property<?>>();
		return pks;
	}

}
