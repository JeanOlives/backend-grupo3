
-- CREACION DE SP PARA CREAR SUBMENUS
IF OBJECT_ID ('sp_gr3_crear_menus') IS NOT NULL
	DROP PROCEDURE sp_gr3_crear_menus
GO

create procedure sp_gr3_crear_menus
   @i_url 						varchar(500) 	= null,
   @i_id_parent				   	int				= null,
   @i_name	   	    			varchar(100)	= null,
   @i_description				varchar(100)	= null,
   @i_rol						varchar(100)	= null,
   @i_operacion					char(1)

as
declare
   @w_id_menu			int,
   @w_id_producto		int,
   @w_id_rol	   		int

if @i_operacion = 'I'
begin
	--Verifica si tiene un menu principal
	--Si no tiene id_parent ni url es un menu principal
	if(@i_id_parent is null and @i_url is null)
	begin
		if exists(select 1 from cew_menu where me_name = @i_name)
		begin
			select @w_id_menu = me_id from cew_menu where me_name = @i_name
			delete crol from cew_menu_role crol, cew_menu cmenu where crol.mro_id_menu = cmenu.me_id and cmenu.me_id_parent = @w_id_menu
			delete from cew_menu where me_id_parent = @w_id_menu
			delete from cew_menu_role where mro_id_menu = @w_id_menu
			delete from cew_menu where me_name = @i_name
		end
	end
	--Verifica si se ingresa una url
	if(@i_url is not null)
	begin
		--Verifica si existe el menu con la url ingresada
		if exists(select 1 from cew_menu where me_url = @i_url )
		begin
			set @w_id_menu = (select me_id from cew_menu where me_url=@i_url )
	        delete from cew_menu_role where mro_id_menu = @w_id_menu
	        delete from cew_menu where me_url=@i_url
		end
	end
	--Suma 1 al ultimo menu insertado
	select @w_id_menu = max(me_id) from cew_menu
	select @w_id_menu = @w_id_menu + 1
	
	--Busca el id del producto
	select @w_id_producto = pd_producto from cl_producto where pd_descripcion = 'CLIENTES'
	
	--Inserta el menu
	insert into dbo.cew_menu 
	(me_id, 		me_id_parent, me_name, me_visible, me_url, me_order,
	me_id_cobis_product, me_option, me_description, me_version, me_container)
	values 
	(@w_id_menu, 	@i_id_parent, @i_name, 			1, @i_url , 		1,
	@w_id_producto, 			 0, @i_description, 	  NULL, 	   'CWC')
	
	--Busca el id del por el roll
	if(@i_rol is null)
	begin
		select @w_id_rol = ro_rol from ad_rol where ro_descripcion = 'SEMILLERO'
	end
	else
	begin
		select @w_id_rol =  ro_rol from ad_rol where ro_descripcion = @i_rol
	end
	--Se relaciona el menu con el rol
	insert into cew_menu_role (mro_id_menu, mro_id_role)
	values (@w_id_menu, @w_id_rol)
end
go

-- CREACION DE MENU PRINCIPAL
exec sp_gr3_crear_menus
	@i_name 						= 'MNU_GR3_FACTURA', 
	@i_description 					= 'Menu principal de factura del grupo 3', 
	@i_operacion					= 'I'
go

-- CREACION DE SUBMENUS

declare @w_id_menu int
select @w_id_menu = me_id from cew_menu where me_name = 'MNU_GR3_FACTURA'
exec sp_gr3_crear_menus
	@i_url 							= 'views/FRONT/ENDDD/T_FRONTKNVSTNQU_714/1.0.0/VC_CLIENTEDAD_206714_TASK.html?mode=2', 
	@i_id_parent 					= @w_id_menu, 
	@i_name 						= 'MNU_GR3_CLIENTES', 
	@i_description 					= 'Menu clientes del grupo 3', 
	@i_operacion					= 'I'
go

declare @w_id_menu int
select @w_id_menu = me_id from cew_menu where me_name = 'MNU_GR3_FACTURA'
exec sp_gr3_crear_menus 
	@i_url 							= 'views/FRONT/ENDDD/T_FRONTCKYWUYUY_796/1.0.0/VC_PRODUCTODL_177796_TASK.html?mode=2', 
	@i_id_parent 					= @w_id_menu, 
	@i_name 						= 'MNU_GR3_PRODUCTOS', 
	@i_description 					= 'Menu productos del grupo 3', 
	@i_operacion					= 'I'
go

declare @w_id_menu int
select @w_id_menu = me_id from cew_menu where me_name = 'MNU_GR3_FACTURA'
exec sp_gr3_crear_menus 
	@i_url 							= 'views/FRONT/ENDDD/T_FRONTTOIWYMVS_510/1.0.0/VC_FACTURACON_269510_TASK.html', 
	@i_id_parent 					= @w_id_menu, 
	@i_name 						= 'MNU_GR3_FACTURACION', 
	@i_description 					= 'Menu facturacion del grupo 3', 
	@i_operacion					= 'I'
go

declare @w_id_menu int
select @w_id_menu = me_id from cew_menu where me_name = 'MNU_GR3_FACTURA'
exec sp_gr3_crear_menus 
	@i_url 							= 'views/FRONT/RPRTS/T_FRONTXKSRGICE_229/1.0.0/VC_FACRURASLC_616229_TASK.html',
	@i_id_parent 					= @w_id_menu, 
	@i_name 						= 'MNU_GR3_REP_CLIENTE', 
	@i_description 					= 'Menu reporte clientes del grupo 3', 
	@i_operacion					= 'I'
go

declare @w_id_menu int
select @w_id_menu = me_id from cew_menu where me_name = 'MNU_GR3_FACTURA'
exec sp_gr3_crear_menus 
	@i_url 							= 'views/FRONT/RPRTS/T_FRONTRXLWDAZW_187/1.0.0/VC_FACTURASEH_703187_TASK.html', 
	@i_id_parent 					= @w_id_menu, 
	@i_name 						= 'MNU_GR3_REP_FECHAS', 
	@i_description 					= 'Menu reporte fechas del grupo 3', 
	@i_operacion					= 'I'
go