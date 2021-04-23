IF OBJECT_ID ('dbo.sp_gr3_producto') IS NOT NULL
	DROP PROCEDURE dbo.sp_gr3_producto
GO

create procedure sp_gr3_producto
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
   @i_codigo				varchar(20) = null,
   @i_nombre				varchar(20) = null,
   @i_precio				money=null

as
declare 
   @w_estado	            char(1) = 'V',
   @w_codigo	            int,
   @w_error       	        int,
   @w_return       	        int,
   @w_sp_name		        varchar(30),
   @w_pr_valido             varchar(4)
   
--select @w_sp_name = 'sp_gr3_producto'
--select * from gr3_producto
--select * from eva_producto
-----------------------------------------PRODUCTO---------------------------------
if @i_operacion = 'S'
begin
	select 
		'S_codigo'        =   pro_codigo,
		'S_nombre'        =   pro_nombre,
		'S_precio'        =   pro_precio,
		'S_estado'        =   pro_estado
	from gr3_producto 
	where  pro_estado = 'V'
	order by pro_codigo
end


if @i_operacion = 'I'
begin
	-- select @w_codigo=max(pro_secuencial) 
	-- from gr3_producto
	
	-- if @w_codigo is null
    --     print('codigo nulo')
    --     select @w_error=1720461
	--     goto ERROR_FIN
	
	-- select @w_codigo = @w_codigo + 1
	
	if exists(select 1 from gr3_producto where pro_codigo = @i_codigo)
	begin
	   select @w_error=1720461
	   goto ERROR_FIN
	end
	
	insert into gr3_producto 
		(pro_codigo,		pro_nombre,		pro_precio, pro_estado)
	values
		(@i_codigo,	@i_nombre,	@i_precio , @w_estado)
		   
end


if @i_operacion='U'
begin
  print('Actualizando')
  if @i_codigo is null
  begin
  select @w_error=1720472
	   goto ERROR_FIN
  end
    
    set @i_nombre = IIF(@i_nombre is not null, @i_nombre, (select pro_nombre from gr3_producto where pro_nombre = @i_codigo))
    set @i_precio = IIF(@i_nombre is not null, @i_precio, (select pro_precio from gr3_producto where pro_nombre = @i_codigo))

	update gr3_producto 
	set		 
			pro_nombre=			@i_nombre, 
			pro_precio=	@i_precio
	where	pro_codigo=@i_codigo

	if @@ROWCOUNT = 0
	begin
	   select @w_error=1720473
	   goto ERROR_FIN
	end

end

if @i_operacion='E'
begin
  print('Eliminando')
  
  if @i_codigo is null
  begin
    select @w_error=1720474
	goto ERROR_FIN
  end

	update gr3_producto 
	set		 
		pro_estado = 'E'
	where	pro_codigo=@i_codigo

	if @@ROWCOUNT = 0
	begin
	   select @w_error=1720475
	   goto ERROR_FIN
	end

end

if @i_operacion = 'Q'
begin
	if @i_codigo is null
    begin
    select @w_error=1720476
	   goto ERROR_FIN
    end
    
    select @w_pr_valido = pro_codigo from gr3_producto
                            where pro_codigo=@i_codigo
	
    -- validando si el producto existe
	if @w_pr_valido is null
    begin
    select @w_error=1720477
	   goto ERROR_FIN
    end
	
	select 
		'Q_codigo'= pro_codigo,
		'Q_nombre'=pro_nombre,
		'Q_precio'=pro_precio,
		'Q_estado'=pro_estado
	from gr3_producto 
	where	pro_codigo = @w_pr_valido 
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


-- sp_gr3_producto @i_operacion = 'I', @i_codigo = 'A123', @i_nombre = 'computadora', @i_precio = 20.20
-- exec sp_gr3_producto @i_operacion = 'S'
-- exec sp_gr3_producto @i_operacion = 'Q',                         @i_codigo = 'A123'

-- exec sp_gr3_producto @i_operacion = 'U', @i_codigo = 'A123', @i_nombre = 'laptop', @i_precio = 30

-- exec sp_gr3_producto @i_operacion = 'E', @i_codigo = 'A123'