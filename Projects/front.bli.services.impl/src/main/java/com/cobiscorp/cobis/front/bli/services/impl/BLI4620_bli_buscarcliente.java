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

import com.cobiscorp.cobis.front.model.BuscarCliente;
import com.cobiscorp.cobis.front.model.Cliente;

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
  @Property(name = "bli.id", value = "BLI4620_bli_buscarcliente")
})
public class BLI4620_bli_buscarcliente implements IBLIExecutor {
  private static final ILogger logger = LogFactory.getLogger(BLI4620_bli_buscarcliente.class);

  public void execute(DynamicRequest dynamicRequest) {
    Mapper mapper = null;
    try {
      DataEntity row = BLIUtils.getRowDataEntity(dynamicRequest);
      List<Object> outListEntities = new ArrayList<Object>();
      DataEntity rowBuscarCliente;
      if (row != null && BuscarCliente.ENTITY_NAME.equals(row.getEntityName())) {
        rowBuscarCliente = row;
      } else {
        rowBuscarCliente = BLIUtils.getDataEntity(dynamicRequest, BuscarCliente.ENTITY_NAME);
        if (rowBuscarCliente == null) {
          throw new DesignerRuntimeException("No existe entidad " + BuscarCliente.ENTITY_NAME);
        }
      }

      String wnombreBuscar = rowBuscarCliente.get(BuscarCliente.NOMBREBUSCAR);

      if (logger.isDebugEnabled()) {
        logger.logDebug("inputParameters: " + " NOMBREBUSCAR: " + wnombreBuscar);
      }

      mapper = MapperManager.get(Mapper.class);
      mapper.addInputParameter("@t_trn", SqlType.INT, "163030020");
      mapper.addInputParameter("@i_operacion", SqlType.CHAR, "Q");

      if (wnombreBuscar != null){
        mapper.addInputParameter("@i_nombre", SqlType.VARCHAR, BLIUtils.convertToType(wnombreBuscar, String.class));
      }
      mapper.addOutputParameter("@o_codigo", SqlType.INT, "0");
      ExecutorSP executorSP = new ExecutorSP(mapper);
      MapperResult mapperSp1 = new MapperResult();
      mapperSp1.addMapper(Cliente.CEDULA, 1);
      mapperSp1.addMapper(Cliente.NOMBRE, 2);
      mapperSp1.addMapper(Cliente.APELLIDO, 3);
      mapperSp1.addMapper(Cliente.DIRECCION, 4);
      mapperSp1.addMapper(Cliente.TELEFONO, 5);
      boolean ret = mapper.execute(".cobis.sp_gr3_cliente");
      int retCode = mapper.returnCode();
      if (ret && (retCode == 0)) {
        if (mapper.getResults().size() >= 1) {
          Result rs1 = mapper.getResults().get(0);
          DataEntityList del1 = new DataEntityList();
          for (int i = 1; i <= rs1.getRowsNumber(); i++) {
            DataEntity de = new DataEntity();
            de = executorSP.entityMapping(rs1, i, mapperSp1);
            del1.add(de);
          }
          dynamicRequest.setEntityList(Cliente.ENTITY_NAME, del1);
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
