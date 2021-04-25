package com.cobiscorp.cobis.front.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import com.cobiscorp.designer.api.Property;

public class RangoFechas {

	public static final String EN_RANGOFECC_812 = "EN_RANGOFECC_812";
	
	public static final String VERSION = "1.0.0";
	
	public static final String ENTITY_NAME = "RangoFechas";
	
	
	public static final Property<Date> FECHAINICIO = new Property<Date>("fechaInicio", Date.class, false);
	
	public static final Property<Date> FECHAFIN = new Property<Date>("fechaFin", Date.class, false);
	
	public static final List<Property<?>> getPks() {
		List<Property<?>> pks = new ArrayList<Property<?>>();
		return pks;
	}

}
