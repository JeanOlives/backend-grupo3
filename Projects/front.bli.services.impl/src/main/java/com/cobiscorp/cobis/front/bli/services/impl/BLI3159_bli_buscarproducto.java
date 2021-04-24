package com.cobiscorp.cobis.front.bli.services.impl;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Service;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import com.cobiscorp.cobis.cwc.context.MapperManager;
import com.cobiscorp.cobis.cwc.kernel.sp.dto.MapperResult;
import com.cobiscorp.cobis.cwc.kernel.sp.impl.ExecutorSP;

import com.cobiscorp.cobis.front.model.Producto;

import com.cobiscorp.designer.api.DataEntity;
import com.cobiscorp.designer.api.DataEntityList;
import com.cobiscorp.designer.api.DynamicRequest;
import com.cobiscorp.designer.bli.util.BLIUtils;
import com.cobiscorp.designer.bli.api.IBLIExecutor;
import com.cobiscorp.designer.exception.DesignerRuntimeException;
import com.cobiscorp.designer.bli.manager.BliManagerException;
import com.cobiscorp.cobis.cwc.server.information.ServerParamUtil;
import com.cobiscorp.cobis.commons.domains.log.ILogger;
import com.cobiscorp.cobis.commons.log.LogFactory;
import com.cobiscorp.ecobis.map.Mapper;
import com.cobiscorp.ecobis.map.dto.Result;
import com.cobiscorp.ecobis.map.enums.SqlType;

@Component
@Service({ IBLIExecutor.class })
@Properties({
  @Property(name = "task.module", value = "FRONT"),
  @Property(name = "bli.id", value = "BLI3159_bli_buscarproducto")
})
public class BLI3159_bli_buscarproducto implements IBLIExecutor {
  private static final ILogger logger = LogFactory.getLogger(BLI3159_bli_buscarproducto.class);

  public void execute(DynamicRequest dynamicRequest) {
    Mapper mapper = null;
    try {
      DataEntity row = BLIUtils.getRowDataEntity(dynamicRequest);
      List<Object> outListEntities = new ArrayList<Object>();
      DataEntity rowProducto;
      if (row != null && Producto.ENTITY_NAME.equals(row.getEntityName())) {
        rowProducto = row;
      } else {
        rowProducto = BLIUtils.getDataEntity(dynamicRequest, Producto.ENTITY_NAME);
        if (rowProducto == null) {
          throw new DesignerRuntimeException("No existe entidad " + Producto.ENTITY_NAME);
        }
      }

      String wcodigo = rowProducto.get(Producto.CODIGO);

      if (logger.isDebugEnabled()) {
        logger.logDebug("inputParameters: " + " CODIGO: " + wcodigo);
      }

      mapper = MapperManager.get(Mapper.class);
      mapper.addInputParameter("@t_trn", SqlType.INT, "163030022");
      mapper.addInputParameter("@i_operacion", SqlType.CHAR, "Q");

      if (wcodigo != null){
        mapper.addInputParameter("@i_codigo", SqlType.VARCHAR, BLIUtils.convertToType(wcodigo, String.class));
      }
      ExecutorSP executorSP = new ExecutorSP(mapper);
      MapperResult mapperSp1 = new MapperResult();
      mapperSp1.addMapper(Producto.CODIGO, 1);
      mapperSp1.addMapper(Producto.NOMBRE, 2);
      mapperSp1.addMapper(Producto.PRECIO, 3);
      mapperSp1.addMapper(Producto.ESTADO, 4);
      boolean ret = mapper.execute(".cobis.sp_gr3_producto");
      int retCode = mapper.returnCode();
      if (ret && (retCode == 0)) {
        if (mapper.getResults().size() >= 1) {
          Result rs1 = mapper.getResults().get(0);
          DataEntity de = executorSP.entityMapping(rs1, 1, mapperSp1);
		  DataEntity result = dynamicRequest.getEntity(Producto.ENTITY_NAME);          
			        result.set(Producto.CODIGO,de.get(Producto.CODIGO));
			        result.set(Producto.NOMBRE,de.get(Producto.NOMBRE));
			        result.set(Producto.PRECIO,de.get(Producto.PRECIO));
			        result.set(Producto.ESTADO,de.get(Producto.ESTADO));
          dynamicRequest.setEntity(Producto.ENTITY_NAME, result);
        }




        if (logger.isDebugEnabled()) {
          logger.logDebug("returnCode: " + retCode);
        }
      } else {
        BliManagerException.handleMapperException(mapper);
      }
    } catch (Exception ex) {
      BliManagerException.handleBliException(ex);
    } finally {
      if (mapper != null)
        mapper.check();
    }
  }

}
