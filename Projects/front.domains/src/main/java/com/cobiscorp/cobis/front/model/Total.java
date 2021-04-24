package com.cobiscorp.cobis.front.model;

import java.util.ArrayList;
import java.util.List;
import com.cobiscorp.designer.api.Property;

public class Total {

	public static final String EN_TOTALZFUD_518 = "EN_TOTALZFUD_518";
	
	public static final String VERSION = "1.0.0";
	
	public static final String ENTITY_NAME = "Total";
	
	
	public static final Property<Double> TOTAL = new Property<Double>("total", Double.class, false);
	
	public static final List<Property<?>> getPks() {
		List<Property<?>> pks = new ArrayList<Property<?>>();
		return pks;
	}

}
