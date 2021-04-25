IF OBJECT_ID ('sp_gr3_autorizar_sps') IS NOT NULL
	DROP PROCEDURE sp_gr3_autorizar_sps
GO
CREATE PROCEDURE sp_gr3_autorizar_sps
    @i_operacion            char(1),

    @i_nombre_sp            varchar(40) = null,
    @i_nombre_archivo       varchar(14) = null,
   
    @i_ini_rango_prod       int         = 172000,
    @i_fin_rango_prod       int         = 173000,
    @i_tipo_tr              char(1)     = 'R',
    @i_id_tr              	int         = null
    
as
declare @w_id_procedure int,
		@w_id_transaccion int,
		@w_id_producto int,
		@w_id_rol int

if exists(select 1 from ad_procedure where pd_stored_procedure = @i_nombre_sp )
begin
	set @w_id_procedure = (select pd_procedure from ad_procedure where pd_stored_procedure = @i_nombre_sp )
	delete ata from ad_tr_autorizada ata, ad_pro_transaccion apt, ad_procedure ap
	where ata.ta_transaccion = apt.pt_transaccion and apt.pt_procedure = ap.pd_procedure and ap.pd_procedure = @w_id_procedure
	
    delete from ad_pro_transaccion where pt_procedure = @w_id_procedure
    delete from ad_procedure where pd_procedure = @w_id_procedure
end

select @w_id_procedure = max(pd_procedure) from ad_procedure where pd_procedure between @i_ini_rango_prod and @i_fin_rango_prod
select @w_id_procedure = @w_id_procedure + 1

insert into ad_procedure (pd_procedure, pd_stored_procedure, pd_base_datos, pd_estado, pd_fecha_ult_mod, pd_archivo)
values (@w_id_procedure, @i_nombre_sp, 'cobis', 'V', getdate(), @i_nombre_archivo)


select @w_id_producto = pd_producto from cl_producto where pd_descripcion = 'CLIENTES'

if (@i_id_tr is null)
begin
	select @w_id_transaccion = max(pt_transaccion) from ad_pro_transaccion where pt_producto = @w_id_producto
	select @w_id_transaccion = @w_id_transaccion + 1
end
else
begin
	set @w_id_transaccion = @i_id_tr
end

insert into ad_pro_transaccion (pt_producto, pt_tipo, pt_moneda, pt_transaccion, pt_estado, pt_fecha_ult_mod, pt_procedure, pt_especial)
values (@w_id_producto, 'R', 0, @w_id_transaccion, 'V', getdate(),  @w_id_procedure, NULL)

select @w_id_rol = ro_rol from ad_rol where ro_descripcion = 'SEMILLERO'

insert into ad_tr_autorizada (ta_producto, ta_tipo, ta_moneda, ta_transaccion, ta_rol, ta_fecha_aut, ta_autorizante, ta_estado, ta_fecha_ult_mod)
values (@w_id_producto, @i_tipo_tr, 0, @w_id_transaccion, @w_id_rol, getdate(), @w_id_producto, 'V', getdate())

select * from ad_procedure where pd_stored_procedure = @i_nombre_sp
select * from ad_pro_transaccion where pt_transaccion = @w_id_transaccion
select * from ad_tr_autorizada where ta_transaccion = @w_id_transaccion

go

--------------------------------- Autorizar SPS------------------------------------------
exec sp_gr3_autorizar_sps @i_operacion = 'I', @i_nombre_sp = 'sp_gr3_cliente', @i_nombre_archivo = 'spgr3cliente.sp', @i_id_tr = 163030020
exec sp_gr3_autorizar_sps @i_operacion = 'I', @i_nombre_sp = 'sp_gr3_reporte', @i_nombre_archivo = 'spgr3reporte.sp', @i_id_tr = 163030021
exec sp_gr3_autorizar_sps @i_operacion = 'I', @i_nombre_sp = 'sp_gr3_producto', @i_nombre_archivo = 'spgr3producto.sp', @i_id_tr = 163030022 
exec sp_gr3_autorizar_sps @i_operacion = 'I', @i_nombre_sp = 'sp_gr3_factura', @i_nombre_archivo = 'spgr3facturasp', @i_id_tr = 163030023
exec sp_gr3_autorizar_sps @i_operacion = 'I', @i_nombre_sp = 'sp_gr3_reporte', @i_nombre_archivo = 'spgr3reportesp', @i_id_tr =163030030