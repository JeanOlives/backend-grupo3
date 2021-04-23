
if object_id ('gr3_factura_detalle') is not null
	drop table gr3_factura_detalle
go

if object_id ('gr3_factura_cabecera') is not null
	drop table gr3_factura_cabecera
go

if object_id ('gr3_producto') is not null
	drop table gr3_producto
go

if object_id ('gr3_cliente') is not null
	drop table gr3_cliente
go

create table gr3_cliente
	(
		cli_cedula   	varchar(10) primary key not null,
		cli_nombre   	varchar(100) not null,
		cli_apellido 	varchar(100) not null,
		cli_direccion 	varchar(200),
		cli_telefono 	varchar(10),
		cli_estado   	char(1) not null
	)
go

create table gr3_producto
	(
		pro_codigo   		varchar(100) primary key not null,
		pro_nombre   		varchar(100) not null,
		pro_precio         	money not null,
		pro_estado         	char(1) not null
	)
go

create table gr3_factura_cabecera
	(
		cf_codigo 		int primary key identity (1,1),
		cf_fecha   		datetime not null,
		cf_total   		money not null,
		cli_cedula      	varchar(10),
		foreign key (cli_cedula) references gr3_cliente(cli_cedula)
	)
go

create table gr3_factura_detalle
	(
		df_codigo 			int primary key identity (1,1),
		df_cantidad	   		int not null,
		df_subtotal  			money not null,
		cf_codigo			int not null,
		pro_codigo			varchar(100) not null,
		foreign key (cf_codigo) references gr3_factura_cabecera(cf_codigo),
		foreign key (pro_codigo) references gr3_producto(pro_codigo)
	)
go