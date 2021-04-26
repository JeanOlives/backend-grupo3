IF OBJECT_ID ('dbo.sp_gr3_factura') IS NOT NULL
	DROP PROCEDURE dbo.sp_gr3_factura
GO

create procedure sp_gr3_factura
   @s_srv                   varchar(30) = null,
   @s_ssn                   int         = null,
   @s_date                  datetime    = null,
   @s_ofi                   smallint    = null,
   @s_user                  varchar(30) = null,
   @s_rol		            smallint    = null,
   @s_term		            varchar(10) = null,
   @t_file		            varchar(14) = null,
   @t_trn		   	        int			= null,
   @t_debug              	char(1)     = 'N',
   @t_from               	varchar(32) = null,
   @i_operacion	   	        char(1),
   @i_cedula				varchar(10)	= null,
   @i_total					money		= null,
   @i_subtotal				money		= null,
   @i_cf_codigo				int			= null,
   @i_df_codigo				int			= null,
   @i_cantidad				int			= null,
   @i_pro_codigo			varchar(100)= null,			
   @o_codigo              	int      	= null out

as
declare
   @w_codigo		int,
   @w_error       	int,
   @w_return       	int,
   @w_sp_name		varchar(30)
   

select @w_sp_name = 'sp_gr3_factura'


if @i_operacion = 'N'
begin
	
	if @i_cedula is null
	begin
		select @w_error = 1720592
		goto ERROR_FIN
	end
	
	insert into gr3_factura_cabecera
		(cf_fecha,	cf_total,	cli_cedula)
		values
		(getdate(),		0,		@i_cedula)
		
	select @o_codigo = (select max(cf_codigo) from gr3_factura_cabecera)
		
end


if @i_operacion = 'U'
begin
	
	if @i_cf_codigo is null
	begin
		-- error:ingrese codigo
		select @w_error = 1720661
		goto ERROR_FIN
	end
	
	update gr3_factura_cabecera
		set cf_total = @i_total,
			cli_cedula = @i_cedula
	where cf_codigo = @i_cf_codigo
	
	if @@rowcount != 0
		select @o_codigo = @i_cf_codigo
	else
		select @o_codigo = 0
	
end



if @i_operacion = 'A'
begin
	
	if @i_cantidad is null
	begin
		select @w_error = 1720592
		goto ERROR_FIN
	end
	
	
	if @i_subtotal is null
	begin
		select @w_error = 1720369
		goto ERROR_FIN
	end
	
	if @i_cf_codigo is null
	begin
		select @w_error = 1720369
		goto ERROR_FIN
	end
	
	if @i_pro_codigo is null
	begin
		select @w_error = 1720369
		goto ERROR_FIN
	end
	
	insert into gr3_factura_detalle
		(df_cantidad, df_subtotal, cf_codigo, 	pro_codigo)
		values
		(@i_cantidad, @i_subtotal, @i_cf_codigo,@i_pro_codigo)
	
end


if @i_operacion = 'D'
begin
	if @i_df_codigo is null
	begin
		select @w_error = 1720369
		goto ERROR_FIN
	end
	
	delete from gr3_factura_detalle 
	where df_codigo =  @i_df_codigo
end

if @i_operacion = 'C'
begin
	if @i_df_codigo is null
	begin
		select @w_error = 1720369
		goto ERROR_FIN
	end
	
	delete from gr3_factura_detalle 
	where df_codigo =  @i_cf_codigo
	
	delete from gr3_factura_cabecera
	where cf_codigo =  @i_cf_codigo
end


if @i_operacion = 'S'
begin
	select
		'codigoProducto'	= pr.pro_codigo,
		'producto'				  = pr.pro_nombre,
		'precio'					 = pr.pro_nombre,
		'cantidad'				   = fd.df_cantidad,
		'subtotal'					= fd.df_subtotal
		from
		   gr3_factura_detalle as fd 
		   join 
		   gr3_producto as pr
		   on(pr.pro_codigo= fd.pro_codigo)
		where
			 fd.df_codigo = @i_cf_codigo
end

return 0

ERROR_FIN:
begin
   exec cobis..sp_cerror
   @t_debug  = @t_debug,
   @t_file   = @t_file,
   @t_from   = @w_sp_name,				
   @i_num    = @w_error 
end
return @w_error


GO

