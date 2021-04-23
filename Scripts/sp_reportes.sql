use cobis 
go


if exists(select 1 from sysobjects where name='sp_gr3_reporte')
	drop procedure sp_gr3_reporte
go

create procedure sp_gr3_reporte
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
   @i_fecha_ini				datetime	= null,
   @i_fecha_fin				datetime	= null,
   @o_codigo              	int      	= null out

as
declare
   @w_codigo		int,
   @w_error       	int,
   @w_return       	int,
   @w_sp_name		varchar(30)
   

select @w_sp_name = 'sp_gr3_reporte'

if @i_operacion = 'C'
begin
	
	if @i_cedula is null
	begin
		select @w_error = 1720592
		goto ERROR_FIN
	end
	
	select
		'numeroFactura' = cf.cf_codigo,
		'nombre'		= cli.cli_nombre,
		'apellido'		= cli.cli_apellido,
		'fecha'			= cf.cf_fecha,
		'total'			= cf.cf_total
		from
		   gr3_cliente as cli 
		   join 
		   gr3_factura_cabecera as cf
		   on(cli.cli_cedula = cf.cli_cedula)
		where
			 cli.cli_cedula = @i_cedula
	
end

if @i_operacion = 'F'
begin
	
	if @i_fecha_ini is null
	begin
		select @w_error = 1720599
		goto ERROR_FIN
	end
	
	if @i_fecha_fin is null
	begin
		select @w_error = 1720601
		goto ERROR_FIN
	end
	
	select
		'numeroFactura' = cf.cf_codigo,
		'nombre'		= cli.cli_nombre,
		'apellido'		= cli.cli_apellido,
		'fecha'			= cf.cf_fecha,
		'total'			= cf.cf_total
		from
		   gr3_cliente as cli 
		   inner join 
		   gr3_factura_cabecera as cf
		   on(cli.cli_cedula = cf.cli_cedula)
		where
			cf_fecha between @i_fecha_ini and @i_fecha_fin 
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



