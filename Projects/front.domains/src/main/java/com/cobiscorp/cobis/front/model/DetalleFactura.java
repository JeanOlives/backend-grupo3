package com.cobiscorp.cobis.front.model;

import java.util.ArrayList;
import java.util.List;
import com.cobiscorp.designer.api.Property;

public class DetalleFactura {

	public static final String EN_DETALLETA_580 = "EN_DETALLETA_580";
	
	public static final String VERSION = "1.0.0";
	
	public static final String ENTITY_NAME = "DetalleFactura";
	
	
	public static final Property<Double> PRECIO = new Property<Double>("precio", Double.class, false);
	
	public static final Property<Integer> CANTIDAD = new Property<Integer>("cantidad", Integer.class, false);
	
	public static final Property<String> PRODUCTO = new Property<String>("producto", String.class, false);
	
	public static final Property<Double> SUBTOTAL = new Property<Double>("subtotal", Double.class, false);
	
	public static final Property<String> CODIGOPRODUCTO = new Property<String>("codigoProducto", String.class, false);
	
	public static final Property<Integer> CODIGOFACTURA = new Property<Integer>("codigoFactura", Integer.class, false);
	
	public static final List<Property<?>> getPks() {
		List<Property<?>> pks = new ArrayList<Property<?>>();
		return pks;
	}

}
