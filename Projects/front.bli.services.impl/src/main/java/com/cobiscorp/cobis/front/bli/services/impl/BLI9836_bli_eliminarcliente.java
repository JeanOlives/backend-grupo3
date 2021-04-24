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
  @Property(name = "bli.id", value = "BLI9836_bli_eliminarcliente")
})
public class BLI9836_bli_eliminarcliente implements IBLIExecutor {
  private static final ILogger logger = LogFactory.getLogger(BLI9836_bli_eliminarcliente.class);

  public void execute(DynamicRequest dynamicRequest) {
    Mapper mapper = null;
    try {
      DataEntity row = BLIUtils.getRowDataEntity(dynamicRequest);
      List<Object> outListEntities = new ArrayList<Object>();
      DataEntity rowCliente;
      if (row != null && Cliente.ENTITY_NAME.equals(row.getEntityName())) {
        rowCliente = row;
      } else {
        rowCliente = BLIUtils.getDataEntity(dynamicRequest, Cliente.ENTITY_NAME);
        if (rowCliente == null) {
          throw new DesignerRuntimeException("No existe entidad " + Cliente.ENTITY_NAME);
        }
      }

      String wcedula = rowCliente.get(Cliente.CEDULA);

      if (logger.isDebugEnabled()) {
        logger.logDebug("inputParameters: " + " CEDULA: " + wcedula);
      }

      mapper = MapperManager.get(Mapper.class);
      mapper.addInputParameter("@t_trn", SqlType.INT, "163030020");
      mapper.addInputParameter("@i_operacion", SqlType.CHAR, "D");

      if (wcedula != null){
        mapper.addInputParameter("@i_cedula", SqlType.VARCHAR, BLIUtils.convertToType(wcedula, String.class));
      }
      boolean ret = mapper.execute(".cobis.sp_gr3_cliente");
      int retCode = mapper.returnCode();
      if (ret && (retCode == 0)) {




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