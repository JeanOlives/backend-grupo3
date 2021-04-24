use cobis 
go


if exists(select 1 from sysobjects where name='sp_gr3_cliente')
	drop procedure sp_gr3_cliente
go

create procedure sp_gr3_cliente
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
   @i_nombre				varchar(100)= null,
   @i_apellido				varchar(100)= null,
   @i_direccion				varchar(200)= null,
   @i_telefono				varchar(10)	= null,
   @i_estado				char(1)		= null,
   @o_codigo              	int      	= null out

as
declare
   @w_codigo		int,
   @w_error       	int,
   @w_return       	int,
   @w_sp_name		varchar(30)
   

select @w_sp_name = 'sp_gr3_cliente'


if @i_operacion = 'S'
begin
	begin
	select 
		'cedula'	=cli_cedula, 
   		'nombre' 	=cli_nombre, 
   		'apellido'	=cli_apellido, 
   		'direccion'	=cli_direccion, 
   		'telefono'	=cli_telefono
	from gr3_cliente 
	where  cli_estado = 'V'
	order by cli_cedula
end

if @i_operacion = 'I'
begin
	
	if @i_cedula is null
	begin
		select @w_error = 1720592
		goto ERROR_FIN
	end
	
	if exists (select 1 from gr3_cliente where cli_cedula = @i_cedula)
	begin
		select @w_error = 1720380
		goto ERROR_FIN
	end
	
	if @i_nombre is null
	begin
		select @w_error = 1720369
		goto ERROR_FIN
	end
	
	if @i_apellido is null
	begin
		select @w_error = 1720369
		goto ERROR_FIN
	end
	
	insert into gr3_cliente
		(cli_cedula,	cli_nombre,		cli_apellido,	cli_direccion,	cli_telefono,	cli_estado)
		values
		(@i_cedula,		@i_nombre,		@i_apellido,	@i_direccion,	@i_telefono,	'V')
		
end


if @i_operacion = 'U'
begin
	
	if @i_cedula is null
	begin
		select @w_error = 1720592
		goto ERROR_FIN
	end
	
	
	if @i_nombre is null
	begin
		select @w_error = 1720369
		goto ERROR_FIN
	end
	
	if @i_apellido is null
	begin
		select @w_error = 1720369
		goto ERROR_FIN
	end
	
	update gr3_cliente
		set
			cli_nombre 		= @i_nombre,
			cli_apellido 	= @i_apellido,
			cli_direccion 	= @i_direccion,
			cli_telefono 	= @i_telefono
		where
			cli_cedula 		= @i_cedula
 
end 

if @i_operacion = 'D'
begin
	
	if @i_cedula is null
	begin
		select @w_error = 1720592
		goto ERROR_FIN
	end
	
	update gr3_cliente
		set 	
			cli_estado = 'E'
		where	
	   		cli_cedula = @i_cedula
end

if @i_operacion = 'A'
begin
	
	if @i_cedula is null
	begin
		select @w_error = 1720592
		goto ERROR_FIN
	end
	
	update gr3_cliente
		set 	
			cli_estado = 'V'
		where	
	   		cli_cedula = @i_cedula
end

if @i_operacion = 'Q'
begin
 	if @i_nombre is null
    begin
      select @w_error =  1720494 
      goto ERROR_FIN
	end

   select
   		'cedula'	=cli_cedula, 
   		'nombre' 	=cli_nombre, 
   		'apellido'	=cli_apellido, 
   		'direccion'	=cli_direccion, 
   		'telefono'	=cli_telefono
   	from
   		gr3_cliente
   	where (lower(cli_nombre) like '%'+lower(@i_nombre)+'%')
   	
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







