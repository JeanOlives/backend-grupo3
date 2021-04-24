//Designer Generator v 7.2.0 - SPR 2020-24 4/12/2020
var designerEvents = designerEvents || {};
designerEvents.api = designerEvents.api || {};
designerEvents.api.facturacionform = designerEvents.api.facturacionform || designer.dsgEvents();

function VC_FACTURACON_269510(cobisMainModule) {
    cobisMainModule.controllerProvider.register("VC_FACTURACON_269510_MAIN_CTRL", ["$scope", "breadcrumbs",

    function($scope, breadcrumbs) {
        $scope.breadcrumbs = breadcrumbs;
    }]);
    cobisMainModule.controllerProvider.register("VC_FACTURACON_269510_CTRL", ["cobisMessage", cobis.modules.CONTAINER + ".preferencesService", "dsgnrUtils", "designer", "$scope", "$location", "$document", "$parse", "$filter", "$modal", "$q", "$compile", "$timeout", "$translate",

    function(cobisMessage, preferencesService, dsgnrUtils, designer, $scope, $location, $document, $parse, $filter, $modal, $q, $compile, $timeout, $translate) {
        $scope.designer = designer;
        $scope.validatorOptions = validatorOptions;
        $scope.vc = designer.initViewContainer({
            moduleId: "FRONT",
            subModuleId: "ENDDD",
            taskId: "T_FRONTTOIWYMVS_510",
            taskVersion: "1.0.0",
            viewContainerId: "VC_FACTURACON_269510",
            hasCloseModalEvent: false,
            serverEvents: true
        },
            "${contextPath}/resources/FRONT/ENDDD/T_FRONTTOIWYMVS_510",
        designerEvents.api.facturacionform,
        $scope.rowData);
        $scope.kendo = kendo;
        //Lectura de Preferencias Visuales del Usuario, si no existen se aplican unas por default
        $scope.currencySymbol = kendo.cultures.current.numberFormat.currency.symbol;
        if (preferencesService.getGlobalization(cobis.constant.CURRENCY_SYMBOL)) {
            $scope.currencySymbol = preferencesService.getGlobalization(cobis.constant.CURRENCY_SYMBOL);
        }
        if (preferencesService.getGlobalization(cobis.constant.DATE_FORMAT)) {
            $scope.dateFormat = preferencesService.getGlobalization(cobis.constant.DATE_FORMAT);
        } else {
            $scope.dateFormat = 'yyyy/MM/dd';
        }
        if (preferencesService.getGlobalization(cobis.constant.DATE_FORMAT_PLACEHOLDER)) {
            $scope.dateFormatPlaceholder = preferencesService.getGlobalization(cobis.constant.DATE_FORMAT_PLACEHOLDER);
        } else {
            $scope.dateFormatPlaceholder = $scope.dateFormat;
        }
        $scope.vc.routeProvider = cobisMainModule.routeProvider;
        if (!$scope.vc.loaded) {
            var page = {
                hasTemporaryDataSupport: false,
                hasInitDataSupport: false,
                hasChangeInitDataSupport: false,
                hasSearchRenderEvent: false,
                ejecTemporaryData: false,
                ejecInitData: false,
                ejecChangeInitData: false,
                ejecSearchRenderEvent: false,
                hasTemporaryData: false,
                hasInitData: false,
                hasChangeInitData: false,
                hasCRUDSupport: false,
                vcName: 'VC_FACTURACON_269510'
            };
            if (typeof designer.constants.cobisPatterns !== 'undefined' && typeof designer.constants.cobisPatterns.formType !== 'undefined') {
                $scope.vc.cobisPattern = designer.constants.cobisPatterns.formType.NONE;
                $scope.vc.isConsolidateView = ($scope.vc.cobisPattern === designer.constants.cobisPatterns.formType.CONSOLIDATE_VIEW);
            } else {
                //CobisPattern no definido en framework de Designer como constante. Actualizar Framework
                $scope.vc.cobisPattern = 0;
                $scope.vc.isConsolidateView = false;
            }
            if (($scope.vc.isModal($scope) || $scope.isDesignerInclude || $scope.isDesignerDetail) && angular.isDefined($scope.queryParameters)) {
                $scope.vc.pk = $scope.queryParameters.pk;
                $scope.vc.mode = parseInt($scope.queryParameters.mode || designer.constants.mode.Insert);
            } else {
                $scope.vc.pk = $location.search().pk;
                $scope.vc.mode = parseInt($location.search().mode || designer.constants.mode.Insert);
            }
            $scope.vc.args.pk = $scope.vc.pk;
            $scope.vc.args.mode = $scope.vc.mode;
            if (cobis.userContext.getValue(cobis.constant.USER_NAME)) {
                $scope.vc.args.user = cobis.userContext.getValue(cobis.constant.USER_NAME);
            } else {
                $scope.vc.args.user = "UserOutContainer";
            }
            $scope.vc.customDialogParameters = $scope.customDialogParameters;
            $scope.vc.args.channel = $location.search().channel;
            $scope.vc.metadata = {
                taskPk: {
                    moduleId: 'FRONT',
                    subModuleId: 'ENDDD',
                    taskId: 'T_FRONTTOIWYMVS_510',
                    version: '1.0.0',
                    user: $scope.vc.args.user
                },
                entityNames: {
                    Cliente: "Cliente",
                    DetalleFactura: "DetalleFactura",
                    Factura: "Factura",
                    Total: "Total"
                },
                entities: {
                    Cliente: {
                        direccion: 'AT13_DIRECCNN736',
                        cedula: 'AT20_CEDULADQ736',
                        telefono: 'AT26_TELEFONN736',
                        nombre: 'AT62_NOMBREBT736',
                        apellido: 'AT63_APELLIDO736',
                        estado: 'AT91_ESTADOCH736',
                        _pks: [],
                        _entityId: 'EN_CLIENTESS_736',
                        _entityVersion: '1.0.0',
                        _transient: false
                    },
                    DetalleFactura: {
                        precio: 'AT41_PRECIOIZ580',
                        cantidad: 'AT58_CANTIDAD580',
                        producto: 'AT58_PRODUCOO580',
                        subtotal: 'AT74_SUBTOTAA580',
                        codigoProducto: 'AT75_CODIGOOU580',
                        _pks: [],
                        _entityId: 'EN_DETALLETA_580',
                        _entityVersion: '1.0.0',
                        _transient: false
                    },
                    Factura: {
                        total: 'AT13_TOTALYIW191',
                        codigo: 'AT53_CODIGOKY191',
                        fecha: 'AT55_FECHAMUC191',
                        _pks: [],
                        _entityId: 'EN_FACTURARY_191',
                        _entityVersion: '1.0.0',
                        _transient: false
                    },
                    Total: {
                        total: 'AT49_TOTALMKI518',
                        _pks: [],
                        _entityId: 'EN_TOTALZFUD_518',
                        _entityVersion: '1.0.0',
                        _transient: false
                    }
                },
                relations: []
            };
            $scope.vc.queryProperties = {};
            $scope.vc.queryProperties.Q_DETACRUA_DQ58 = {
                autoCrud: false
            };
            $scope.vc.getRequestQuery_Q_DETACRUA_DQ58 = function() {
                var parametersAux = {};
                if ($.isEmptyObject($scope.vc.queries.Q_DETACRUA_DQ58_filters)) {
                    parametersAux = {};
                } else {
                    var filters = $scope.vc.queries.Q_DETACRUA_DQ58_filters;
                    parametersAux = {};
                }
                return {
                    mainEntityPk: {
                        entityId: 'EN_DETALLETA_580',
                        version: '1.0.0'
                    },
                    queryPk: {
                        queryId: 'Q_DETACRUA_DQ58',
                        version: '1.0.0'
                    },
                    parameters: parametersAux,
                    filters: {},
                    updateParameters: function() {}
                }
            };
            $scope.vc.queries.Q_DETACRUA_DQ58_filters = {};
            var defaultValues = {
                Cliente: {},
                DetalleFactura: {},
                Factura: {},
                Total: {}
            };
            $scope.vc.channelDefaultValues = function(entityName, attributeName, valueIfNotExist) {
                var channel = $scope.vc.args.channel;
                for (var en in defaultValues) {
                    if (defaultValues.hasOwnProperty(en) && en === entityName) {
                        for (var att in defaultValues[en]) {
                            if (defaultValues[en].hasOwnProperty(att) && att === attributeName) {
                                for (var ch in defaultValues[en][att]) {
                                    if (defaultValues[en][att].hasOwnProperty(ch) && ch === channel) {
                                        return defaultValues[en][att][ch];
                                    }
                                }
                            }
                        }
                    }
                }
                if (typeof valueIfNotExist !== "undefined") {
                    return valueIfNotExist;
                } else {
                    return null;
                }
            };
            $scope.vc.temporarySave = function() {
                var modelo = $scope.vc.cleanData($scope.vc.model);
                var data = {
                    model: modelo,
                    trackers: $scope.vc.trackers,
                    temporaryStorePK: $scope.vc.metadata.taskPk
                };
                $scope.vc.execute("temporarySave", VC_FACTURACON_269510, data, function() {});
            };
            $scope.vc.temporaryRead = function() {
                if (page.hasTemporaryDataSupport) {
                    var data = {
                        model: $scope.vc.model,
                        temporaryStorePK: $scope.vc.metadata.taskPk
                    };
                    return $scope.vc.executeService("readTemporaryData", VC_FACTURACON_269510, data).then(

                    function(response) {
                        var result = $scope.vc.processTemporaryResponse(response);
                        if (result) {
                            $scope.vc.execute("deleteTemporaryData", VC_FACTURACON_269510, data, function() {});
                            $scope.vc.crud.addTrackers($scope.vc.model);
                        }
                        page.hasTemporaryData = result;
                        page.ejecTemporaryData = response.success;
                        return page;
                    });
                } else {
                    page.ejecTemporaryData = false;
                    page.hasTemporaryData = false;
                    return page;
                }
            };
            $scope.vc.viewState.keyDown = function(e) {
                dsgnrUtils.container.validateOnEnter(e, $scope.vc);
            };
            $scope.vc.viewState.VC_FACTURACON_269510 = {
                style: []
            };
            $scope.vc.model.Factura = {
                total: $scope.vc.channelDefaultValues("Factura", "total"),
                codigo: $scope.vc.channelDefaultValues("Factura", "codigo"),
                fecha: $scope.vc.channelDefaultValues("Factura", "fecha")
            };
            //ViewState - Group: Group2414
            $scope.vc.createViewState({
                id: "G_FACTURANNO_419877",
                hasId: true,
                componentStyle: [],
                label: 'Group2414',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            $scope.vc.createViewState({
                id: "VA_VASIMPLELABELLL_911877",
                componentStyle: [],
                label: "FRONT.LBL_FRONT_FACTURACI_83396",
                validationCode: 0,
                readOnly: designer.constants.mode.None,
                enabled: designer.constants.mode.None,
                visible: designer.constants.mode.All
            });
            //ViewState - Entity: Factura, Attribute: codigo
            $scope.vc.createViewState({
                id: "VA_9098ZVOCBNFLHDM_538877",
                componentStyle: [],
                label: "FRONT.LBL_FRONT_CDIGOFATR_14554",
                format: "n0",
                decimals: 0,
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            $scope.vc.createViewState({
                id: "VA_VABUTTONECLWLDA_512877",
                componentStyle: [],
                label: "FRONT.LBL_FRONT_NUEVOTDIK_19628",
                validationCode: 0,
                readOnly: designer.constants.mode.None,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            $scope.vc.createViewState({
                id: "VA_VABUTTONFKUAKJO_460877",
                componentStyle: [],
                label: "FRONT.LBL_FRONT_CLIENTEXY_41489",
                validationCode: 0,
                readOnly: designer.constants.mode.None,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            $scope.vc.model.Cliente = {
                direccion: $scope.vc.channelDefaultValues("Cliente", "direccion"),
                cedula: $scope.vc.channelDefaultValues("Cliente", "cedula"),
                telefono: $scope.vc.channelDefaultValues("Cliente", "telefono"),
                nombre: $scope.vc.channelDefaultValues("Cliente", "nombre"),
                apellido: $scope.vc.channelDefaultValues("Cliente", "apellido"),
                estado: $scope.vc.channelDefaultValues("Cliente", "estado")
            };
            //ViewState - Group: Group1714
            $scope.vc.createViewState({
                id: "G_FACTURAONI_214877",
                hasId: true,
                componentStyle: [],
                label: 'Group1714',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            $scope.vc.createViewState({
                id: "VA_VASIMPLELABELLL_224877",
                componentStyle: [],
                label: "FRONT.LBL_FRONT_DATOSDENE_66940",
                validationCode: 0,
                readOnly: designer.constants.mode.None,
                enabled: designer.constants.mode.None,
                visible: designer.constants.mode.All
            });
            //ViewState - Entity: Cliente, Attribute: cedula
            $scope.vc.createViewState({
                id: "VA_CEDULAAOODUCQIF_652877",
                componentStyle: [],
                label: "FRONT.LBL_FRONT_CEDULAAGM_72503",
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Entity: Cliente, Attribute: nombre
            $scope.vc.createViewState({
                id: "VA_NOMBREBLCSYJWIC_187877",
                componentStyle: [],
                label: "FRONT.LBL_FRONT_NOMBRELFH_69371",
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Entity: Cliente, Attribute: apellido
            $scope.vc.createViewState({
                id: "VA_APELLIDOIXYFWET_935877",
                componentStyle: [],
                label: "FRONT.LBL_FRONT_APELLIDOO_35370",
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Entity: Cliente, Attribute: telefono
            $scope.vc.createViewState({
                id: "VA_TELEFONOCOJFPZS_194877",
                componentStyle: [],
                label: "FRONT.LBL_FRONT_TELEFONOO_37989",
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Entity: Cliente, Attribute: direccion
            $scope.vc.createViewState({
                id: "VA_DIRECCIONYLRJFW_445877",
                componentStyle: [],
                label: "FRONT.LBL_FRONT_DIRECCINO_77453",
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Group: Group2464
            $scope.vc.createViewState({
                id: "G_FACTURACOC_923877",
                hasId: true,
                componentStyle: [],
                label: 'Group2464',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            $scope.vc.createViewState({
                id: "VA_VASIMPLELABELLL_643877",
                componentStyle: [],
                label: "FRONT.LBL_FRONT_DETALLERF_85678",
                validationCode: 0,
                readOnly: designer.constants.mode.None,
                enabled: designer.constants.mode.None,
                visible: designer.constants.mode.All
            });
            //ViewState - Group: Group2898
            $scope.vc.createViewState({
                id: "G_FACTURACOO_644877",
                hasId: true,
                componentStyle: [],
                label: 'Group2898',
                enabled: designer.constants.mode.Insert + designer.constants.mode.Query,
                visible: designer.constants.mode.Insert + designer.constants.mode.Query
            });
            $scope.vc.types.DetalleFactura = kendo.data.Model.define({
                id: "dsgnrId",
                fields: {
                    dsgnrId: {
                        type: "string"
                    },
                    trackId: {
                        type: "string"
                    },
                    codigoProducto: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("DetalleFactura", "codigoProducto", '')
                    },
                    producto: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("DetalleFactura", "producto", '')
                    },
                    precio: {
                        type: "number",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("DetalleFactura", "precio", 0)
                    },
                    cantidad: {
                        type: "number",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("DetalleFactura", "cantidad", 0)
                    },
                    subtotal: {
                        type: "number",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("DetalleFactura", "subtotal", 0)
                    }
                }
            });
            $scope.vc.model.DetalleFactura = new kendo.data.DataSource({
                transport: {
                    read: function(options) {
                        var promise = false;
                        var isRefresh = (angular.isDefined(options.data) && angular.isDefined(options.data.refresh));
                        if (isRefresh || !designer.enums.hasFlag(designer.constants.mode.Insert, $scope.vc.mode)) {
                            var queryId = 'Q_DETACRUA_DQ58';
                            var queryRequest = $scope.vc.getRequestQuery_Q_DETACRUA_DQ58();
                            if (queryId && queryRequest) {
                                var queryLoaded = queryRequest.loaded;
                                if (angular.isUndefined(queryLoaded) || isRefresh === true) {
                                    queryRequest.loaded = true;
                                    queryRequest.updateParameters();
                                    promise = true;
                                    $scope.vc.executeQuery(
                                        'QV_OZ58_ZJI21',
                                    queryRequest,
                                    queryRequest.mainEntityPk.entityId,
                                    true,

                                    function(response) {
                                        if (response.success) {
                                            var result = response.data['RESULT' + queryId];
                                            if (angular.isUndefined(result)) {
                                                result = [];
                                            }
                                            if (angular.isDefined(result) && angular.isArray(result)) {
                                                options.success(result);
                                            } else {
                                                options.success([]);
                                            }
                                        } else {
                                            options.error([]);
                                        }
                                    }, (function() {
                                        var queryOptions = options.data;
                                        var queryView = {
                                            'allowPaging': false,
                                            'pageSize': 0
                                        };

                                        function config(queryOptions, queryView) {
                                            var result = undefined;
                                            if (queryView.allowPaging === true) {
                                                result = {};
                                                if (angular.isDefined(queryOptions.appendRecords) && queryOptions.appendRecords === true) {
                                                    result.appendRecords = true;
                                                }
                                                result.pageSize = queryView.pageSize;
                                            }
                                            return result;
                                        }
                                        return config(queryOptions, queryView);
                                    }()));
                                }
                            }
                        }
                        if (promise === false) {
                            options.error({
                                xhr: {}
                            });
                        }
                    },
                    create: function(options) {
                        var model = options.data;
                        model.dsgnrId = designer.utils.uuid();
                        options.success(model);
                    },
                    update: function(options) {
                        var model = options.data;
                        options.success(model);
                    },
                    destroy: function(options) {
                        var model = options.data;
                        options.success(model);
                    }
                },
                schema: {
                    model: $scope.vc.types.DetalleFactura
                },
                aggregate: [],
                error: function(e) {
                    if (e.xhr.message && e.xhr.message === 'DeletingError') {
                        $("#QV_OZ58_ZJI21").data("kendoExtGrid").cancelChanges();
                    }
                }
            });
            $scope.vc.queries.Q_DETACRUA_DQ58 = $scope.vc.model.DetalleFactura;
            $scope.vc.trackers.DetalleFactura = new $scope.vc.crud.DataSourceTracker(
            $scope.vc.metadata.entities.DetalleFactura);
            $scope.vc.model.DetalleFactura.bind('change', function(e) {
                $scope.vc.trackers.DetalleFactura.track(e);
            });
            $scope.vc.grids.QV_OZ58_ZJI21 = {};
            $scope.vc.grids.QV_OZ58_ZJI21.queryId = 'Q_DETACRUA_DQ58';
            $scope.vc.viewState.QV_OZ58_ZJI21 = {
                style: []
            };
            $scope.vc.viewState.QV_OZ58_ZJI21.column = {};
            $scope.vc.grids.QV_OZ58_ZJI21.editable = {
                mode: 'inline',
                confirmation: false
            };
            $scope.vc.grids.QV_OZ58_ZJI21.events = {
                customRowClick: function(e, controlId, entity, idGrid, commandName) {
                    var grid = $scope.vc.getElementGrid(idGrid);
                    var dataItem = grid.dataItem($(e.currentTarget).closest("tr"));
                    var args = {
                        rowData: dataItem,
                        rowIndex: grid.dataSource.indexOf(dataItem),
                        nameEntityGrid: entity,
                        refreshData: false,
                        stopPropagation: false,
                        commandName: commandName
                    };
                    $scope.vc.executeGridRowCommand(controlId, args);
                    if (args.refreshData) {
                        grid.refresh();
                    }
                    if (args.stopPropagation) {
                        e.stopImmediatePropagation();
                        e.stopPropagation();
                    }
                },
                cancel: function(e) {
                    $scope.vc.trackers.DetalleFactura.cancelTrackedChanges(e.model);
                },
                edit: function(e) {
                    $scope.vc.grids.QV_OZ58_ZJI21.selectedRow = e.model;
                    var commandCell = $scope.vc.getCommandCellData(e.container);
                    var titleUpdate = $filter('translate')('DSGNR.SYS_DSGNR_LBLACEPT0_00007');
                    var titleCancel = $filter('translate')('DSGNR.SYS_DSGNR_LBLCANCEL_00006');
                    commandCell.html("<a class='btn btn-default k-grid-update cb-row-image-button' onmousedown='this.focus()' title='" + titleUpdate + "' href='#'><span class='fa fa-check-circle'></span></a><a class='btn btn-default k-grid-cancel cb-row-image-button' title='" + titleCancel + "' href='#'><span class='fa fa-times-circle'></span></a>");
                    $scope.vc.validateForm();
                },
                dataBound: function(e) {
                    var index;
                    var grid = e.sender;
                    $scope.vc.gridDataBound("QV_OZ58_ZJI21", false, grid);
                    $scope.vc.hideShowColumns("QV_OZ58_ZJI21", grid);
                    var dataView = null;
                    dataView = this.dataSource.view();
                    var styleName, iStyle;
                    for (var i = 0; i < dataView.length; i++) {
                        if (typeof $scope.vc.viewState.QV_OZ58_ZJI21.rows[dataView[i].uid] != "undefined") {
                            for (iStyle = 0; iStyle < $scope.vc.viewState.QV_OZ58_ZJI21.rows[dataView[i].uid].style.length; iStyle++) {
                                styleName = $scope.vc.viewState.QV_OZ58_ZJI21.rows[dataView[i].uid].style[iStyle];
                                if ($("#QV_OZ58_ZJI21 tbody").find("tr[data-uid=" + dataView[i].uid + "]").hasClass(styleName) === false) {
                                    $("#QV_OZ58_ZJI21 tbody").find("tr[data-uid=" + dataView[i].uid + "]").addClass(styleName);
                                }
                            }
                        }
                    }
                }
            };
            //Comandos de registros del Grid
            $scope.vc.grids.QV_OZ58_ZJI21.columns = [];
            //Registros de fila del Grid
            $scope.vc.viewState.QV_OZ58_ZJI21.rows = [];
            //Controles de edicion en linea del Grid
            $scope.vc.viewState.QV_OZ58_ZJI21.column.codigoProducto = {
                title: 'FRONT.LBL_FRONT_CDIGOOXUL_89461',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXGWC_784877',
                element: []
            };
            $scope.vc.grids.QV_OZ58_ZJI21.AT75_CODIGOOU580 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_OZ58_ZJI21.column.codigoProducto.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXGWC_784877",
                        'data-validation-code': "{{vc.viewState.QV_OZ58_ZJI21.column.codigoProducto.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_OZ58_ZJI21.column.codigoProducto.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_OZ58_ZJI21.column.producto = {
                title: 'producto',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXSOF_551877',
                element: []
            };
            $scope.vc.grids.QV_OZ58_ZJI21.AT58_PRODUCOO580 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_OZ58_ZJI21.column.producto.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXSOF_551877",
                        'data-validation-code': "{{vc.viewState.QV_OZ58_ZJI21.column.producto.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_OZ58_ZJI21.column.producto.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_OZ58_ZJI21.column.precio = {
                title: 'precio',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                format: "n",
                decimals: kendo.cultures.current.numberFormat.decimals,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXRGA_180877',
                element: []
            };
            $scope.vc.grids.QV_OZ58_ZJI21.AT41_PRECIOIZ580 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_OZ58_ZJI21.column.precio.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXRGA_180877",
                        'data-validation-code': "{{vc.viewState.QV_OZ58_ZJI21.column.precio.validationCode}}",
                        'kendo-numeric-text-box': "",
                        'datatypes-Limit': "N",
                        'k-spinners': "false",
                        'k-step': "0",
                        'k-format': "vc.viewState.QV_OZ58_ZJI21.column.precio.format",
                        'k-decimals': "vc.viewState.QV_OZ58_ZJI21.column.precio.decimals",
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_OZ58_ZJI21.column.precio.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_OZ58_ZJI21.column.cantidad = {
                title: 'cantidad',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                format: "n0",
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXBYZ_530877',
                element: []
            };
            $scope.vc.grids.QV_OZ58_ZJI21.AT58_CANTIDAD580 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_OZ58_ZJI21.column.cantidad.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXBYZ_530877",
                        'data-validation-code': "{{vc.viewState.QV_OZ58_ZJI21.column.cantidad.validationCode}}",
                        'kendo-numeric-text-box': "",
                        'datatypes-Limit': "N",
                        'k-spinners': "false",
                        'k-step': "0",
                        'k-format': "vc.viewState.QV_OZ58_ZJI21.column.cantidad.format",
                        'k-decimals': "vc.viewState.QV_OZ58_ZJI21.column.cantidad.decimals",
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_OZ58_ZJI21.column.cantidad.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_OZ58_ZJI21.column.subtotal = {
                title: 'subtotal',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                format: "n",
                decimals: kendo.cultures.current.numberFormat.decimals,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXFIT_741877',
                element: []
            };
            $scope.vc.grids.QV_OZ58_ZJI21.AT74_SUBTOTAA580 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_OZ58_ZJI21.column.subtotal.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXFIT_741877",
                        'data-validation-code': "{{vc.viewState.QV_OZ58_ZJI21.column.subtotal.validationCode}}",
                        'kendo-numeric-text-box': "",
                        'datatypes-Limit': "N",
                        'k-spinners': "false",
                        'k-step': "0",
                        'k-format': "vc.viewState.QV_OZ58_ZJI21.column.subtotal.format",
                        'k-decimals': "vc.viewState.QV_OZ58_ZJI21.column.subtotal.decimals",
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_OZ58_ZJI21.column.subtotal.style"
                    });
                    textInput.appendTo(container);
                }
            };
            //Creacion de columnas del Grid
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_OZ58_ZJI21.columns.push({
                    field: 'codigoProducto',
                    title: '{{vc.viewState.QV_OZ58_ZJI21.column.codigoProducto.title|translate:vc.viewState.QV_OZ58_ZJI21.column.codigoProducto.titleArgs}}',
                    width: $scope.vc.viewState.QV_OZ58_ZJI21.column.codigoProducto.width,
                    format: $scope.vc.viewState.QV_OZ58_ZJI21.column.codigoProducto.format,
                    editor: $scope.vc.grids.QV_OZ58_ZJI21.AT75_CODIGOOU580.control,
                    template: "<span ng-class='vc.viewState.QV_OZ58_ZJI21.column.codigoProducto.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.codigoProducto, \"QV_OZ58_ZJI21\", \"codigoProducto\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_OZ58_ZJI21.column.codigoProducto.style",
                        "title": "{{vc.viewState.QV_OZ58_ZJI21.column.codigoProducto.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_OZ58_ZJI21.column.codigoProducto.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_OZ58_ZJI21.columns.push({
                    field: 'producto',
                    title: '{{vc.viewState.QV_OZ58_ZJI21.column.producto.title|translate:vc.viewState.QV_OZ58_ZJI21.column.producto.titleArgs}}',
                    width: $scope.vc.viewState.QV_OZ58_ZJI21.column.producto.width,
                    format: $scope.vc.viewState.QV_OZ58_ZJI21.column.producto.format,
                    editor: $scope.vc.grids.QV_OZ58_ZJI21.AT58_PRODUCOO580.control,
                    template: "<span ng-class='vc.viewState.QV_OZ58_ZJI21.column.producto.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.producto, \"QV_OZ58_ZJI21\", \"producto\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_OZ58_ZJI21.column.producto.style",
                        "title": "{{vc.viewState.QV_OZ58_ZJI21.column.producto.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_OZ58_ZJI21.column.producto.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_OZ58_ZJI21.columns.push({
                    field: 'precio',
                    title: '{{vc.viewState.QV_OZ58_ZJI21.column.precio.title|translate:vc.viewState.QV_OZ58_ZJI21.column.precio.titleArgs}}',
                    width: $scope.vc.viewState.QV_OZ58_ZJI21.column.precio.width,
                    format: $scope.vc.viewState.QV_OZ58_ZJI21.column.precio.format,
                    editor: $scope.vc.grids.QV_OZ58_ZJI21.AT41_PRECIOIZ580.control,
                    template: "<span ng-class='vc.viewState.QV_OZ58_ZJI21.column.precio.element[dataItem.dsgnrId].style' ng-bind='(vc.getStringColumnFormat)?vc.getStringColumnFormat(dataItem.precio, \"QV_OZ58_ZJI21\", \"precio\"):kendo.toString(#=precio#, vc.viewState.QV_OZ58_ZJI21.column.precio.format)'></span>",
                    attributes: {
                        "class": "text-right",
                        "ng-class": "vc.viewState.QV_OZ58_ZJI21.column.precio.style",
                        "title": "{{vc.viewState.QV_OZ58_ZJI21.column.precio.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_OZ58_ZJI21.column.precio.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_OZ58_ZJI21.columns.push({
                    field: 'cantidad',
                    title: '{{vc.viewState.QV_OZ58_ZJI21.column.cantidad.title|translate:vc.viewState.QV_OZ58_ZJI21.column.cantidad.titleArgs}}',
                    width: $scope.vc.viewState.QV_OZ58_ZJI21.column.cantidad.width,
                    format: $scope.vc.viewState.QV_OZ58_ZJI21.column.cantidad.format,
                    editor: $scope.vc.grids.QV_OZ58_ZJI21.AT58_CANTIDAD580.control,
                    template: "<span ng-class='vc.viewState.QV_OZ58_ZJI21.column.cantidad.element[dataItem.dsgnrId].style' ng-bind='(vc.getStringColumnFormat)?vc.getStringColumnFormat(dataItem.cantidad, \"QV_OZ58_ZJI21\", \"cantidad\"):kendo.toString(#=cantidad#, vc.viewState.QV_OZ58_ZJI21.column.cantidad.format)'></span>",
                    attributes: {
                        "class": "text-right",
                        "ng-class": "vc.viewState.QV_OZ58_ZJI21.column.cantidad.style",
                        "title": "{{vc.viewState.QV_OZ58_ZJI21.column.cantidad.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_OZ58_ZJI21.column.cantidad.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_OZ58_ZJI21.columns.push({
                    field: 'subtotal',
                    title: '{{vc.viewState.QV_OZ58_ZJI21.column.subtotal.title|translate:vc.viewState.QV_OZ58_ZJI21.column.subtotal.titleArgs}}',
                    width: $scope.vc.viewState.QV_OZ58_ZJI21.column.subtotal.width,
                    format: $scope.vc.viewState.QV_OZ58_ZJI21.column.subtotal.format,
                    editor: $scope.vc.grids.QV_OZ58_ZJI21.AT74_SUBTOTAA580.control,
                    template: "<span ng-class='vc.viewState.QV_OZ58_ZJI21.column.subtotal.element[dataItem.dsgnrId].style' ng-bind='(vc.getStringColumnFormat)?vc.getStringColumnFormat(dataItem.subtotal, \"QV_OZ58_ZJI21\", \"subtotal\"):kendo.toString(#=subtotal#, vc.viewState.QV_OZ58_ZJI21.column.subtotal.format)'></span>",
                    attributes: {
                        "class": "text-right",
                        "ng-class": "vc.viewState.QV_OZ58_ZJI21.column.subtotal.style",
                        "title": "{{vc.viewState.QV_OZ58_ZJI21.column.subtotal.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_OZ58_ZJI21.column.subtotal.hidden
                });
            }
            $scope.vc.viewState.QV_OZ58_ZJI21.column.edit = {
                element: []
            };
            $scope.vc.viewState.QV_OZ58_ZJI21.column["delete"] = {
                element: []
            };
            $scope.vc.viewState.QV_OZ58_ZJI21.column.cmdEdition = {};
            $scope.vc.viewState.QV_OZ58_ZJI21.column.cmdEdition.hidden = (!designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode)) ? false : true;
            $scope.vc.grids.QV_OZ58_ZJI21.columns.push({
                field: 'cmdEdition',
                title: ' ',
                command: [{
                    name: "edit",
                    text: "{{'DSGNR.SYS_DSGNR_LBLEDIT00_00005'|translate}}",
                    cssMap: "{'btn': true, 'btn-default': true, 'cb-row-image-button': true" + ", 'k-grid-edit': !vc.viewState.G_FACTURACOO_644877.disabled}",
                    template: "<a ng-class='vc.getCssClass(\"edit\", " + "vc.viewState.QV_OZ58_ZJI21.column.edit.element[dataItem.uid].style, #:cssMap#, vc.viewState.QV_OZ58_ZJI21.column.edit.element[dataItem.dsgnrId].style)' " + "title=\"{{'DSGNR.SYS_DSGNR_LBLEDIT00_00005'|translate}}\" " + "ng-disabled = (vc.viewState.G_FACTURACOO_644877.disabled==true?true:false) " + "href='\\#'>" + "<span class='fa fa-pencil'></span>" + "</a>"
                }, {
                    name: "destroy",
                    text: "{{'DSGNR.SYS_DSGNR_LBLDELETE_00008'|translate}}",
                    cssMap: "{'btn': true, 'btn-default': true, 'cb-row-image-button': true" + ", 'k-grid-delete': !vc.viewState.G_FACTURACOO_644877.disabled}",
                    template: "<a ng-class='vc.getCssClass(\"destroy\", " + "vc.viewState.QV_OZ58_ZJI21.column.delete.element[dataItem.uid].style, #:cssMap#, vc.viewState.QV_OZ58_ZJI21.column.delete.element[dataItem.dsgnrId].style)' " + "title=\"{{'DSGNR.SYS_DSGNR_LBLDELETE_00008'|translate}}\" " + "ng-disabled = (vc.viewState.G_FACTURACOO_644877.disabled==true?true:false) " + ">" + "<span class='fa fa-times'></span>" + "</a>"
                }],
                attributes: {
                    "class": "btn-toolbar"
                },
                hidden: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode) === true ? true : $scope.vc.viewState.QV_OZ58_ZJI21.column.cmdEdition.hidden,
                width: Number(sessionStorage.columnSize) || 100
            });
            $scope.vc.viewState.QV_OZ58_ZJI21.toolbar = {
                create: {
                    visible: !designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode)
                }
            }
            $scope.vc.grids.QV_OZ58_ZJI21.toolbar = [{
                "name": "create",
                "text": "",
                "template": "<button class = 'btn btn-default k-grid-add cb-grid-button' " + "ng-if = 'vc.viewState.QV_OZ58_ZJI21.toolbar.create.visible' " + "ng-disabled = 'vc.viewState.G_FACTURACOO_644877.disabled?true:false'" + "title = \"{{'DSGNR.SYS_DSGNR_LBLNEW000_00013'|translate}}\" >" + "<span class='fa fa-plus'></span>{{'DSGNR.SYS_DSGNR_LBLNEW000_00013'|translate}}</button>"
            }];
            $scope.vc.model.Total = {
                total: $scope.vc.channelDefaultValues("Total", "total")
            };
            //ViewState - Group: Group1507
            $scope.vc.createViewState({
                id: "G_FACTURAOON_319877",
                hasId: true,
                componentStyle: [],
                label: 'Group1507',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            $scope.vc.createViewState({
                id: "Spacer2435",
                componentStyle: [],
                label: '',
                validationCode: 0,
                readOnly: designer.constants.mode.None,
                enabled: designer.constants.mode.None,
                visible: designer.constants.mode.All
            });
            $scope.vc.createViewState({
                id: "VA_VASIMPLELABELLL_600877",
                componentStyle: [],
                label: "FRONT.LBL_FRONT_TOTALRYZQ_31973",
                validationCode: 0,
                readOnly: designer.constants.mode.None,
                enabled: designer.constants.mode.None,
                visible: designer.constants.mode.All
            });
            //ViewState - Entity: Total, Attribute: total
            $scope.vc.createViewState({
                id: "VA_TOTALSFPVSWKJPJ_572877",
                componentStyle: [],
                label: '',
                format: "n",
                decimals: kendo.cultures.current.numberFormat.decimals,
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //watch tmpModel - Entity: Total, Attribute: total
            $scope.$watch('vc.model.Total.total', function(newValue, oldValue) {
                if (newValue !== oldValue) {
                    if (angular.isDefined($scope.vc.tmpModel.Total)) {
                        $scope.vc.tmpModel.Total.total = newValue;
                    } else {
                        $scope.vc.tmpModel.Total = {
                            total: newValue
                        };
                    }
                }
            });
            $scope.vc.createViewState({
                id: "Spacer2594",
                componentStyle: [],
                label: '',
                validationCode: 0,
                readOnly: designer.constants.mode.None,
                enabled: designer.constants.mode.None,
                visible: designer.constants.mode.All
            });
            $scope.vc.createViewState({
                id: "VA_VABUTTONIDSLUTO_896877",
                componentStyle: [],
                label: "FRONT.LBL_FRONT_GENERARTC_97717",
                validationCode: 0,
                readOnly: designer.constants.mode.None,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Command: Accept
            $scope.vc.createViewState({
                id: "T_FRONTTOIWYMVS_510_ACCEPT",
                componentStyle: [],
                label: 'Accept',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Command: Cancel
            $scope.vc.createViewState({
                id: "T_FRONTTOIWYMVS_510_CANCEL",
                componentStyle: [],
                label: 'Cancel',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            if ($scope.vc.parentVc) {
                $scope.vc.afterOpenGridDialog();
            }
        }
        $scope.isInvalid = function(form, field) {
            if (!field) {
                return false;
            }
            var submitted = $scope.vc.submitted[form.$name];
            return ((submitted || field.$dirty) && field.$invalid);
        };
        $scope._initPage_CRUDExecuteQueryEntities = function(page) {
            if (!designer.enums.hasFlag(designer.constants.mode.Insert, $scope.vc.mode)) {
                if (page.hasTemporaryDataSupport && page.ejecTemporaryData && !page.hasTemporaryData) {
                    return $scope.vc.CRUDExecuteQueryEntities(page);
                } else if (page.hasCRUDSupport) {
                    return $scope.vc.CRUDExecuteQueryEntities(page);
                } else {
                    return page;
                }
            } else {
                return page;
            }
        };
        $scope._initPage_InitializeTrackers = function(page) {
            $scope.vc.addChangeEvents($scope);
            $scope.vc.crud.addTrackers($scope.vc.model);
            return page;
        };
        $scope._initPage_ChangeInitData = function(page) {
            return $scope.vc.changeInitData(page, $scope.vc);
        };
        $scope._initPage_ProcessRender = function(page) {
            if (page.hasSearchRenderEvent) {
                $scope.vc.render('VC_FACTURACON_269510');
            }
            return page;
        };
        if ($scope.vc.isModal($scope) || $scope.vc.isDetailGrid($scope) || $scope.isDesignerInclude) {
            //para ventanas modales se usa ng-include con onload
            $scope.runLifeCycle = function() {
                var threadLifeCycle = $scope.vc.lifeCycle.prepareThread(page);
                if (threadLifeCycle) {
                    if (!$scope.isDesignerInclude) {
                        cobis.showMessageWindow.loading(true, "none");
                    }
                    $scope.vc.lifeCycle.run(page, threadLifeCycle, $scope);
                    cobis.showMessageWindow.loading(false);
                }
            };
        } else {
            //con ngView no funciona el $document.ready se cambia por $viewContentLoaded
            $scope.$on('$viewContentLoaded', function() {
                if ($scope.vc.loaded) {
                    //Si se esta regresando de otra pantalla
                    $scope.vc.addAfterInitDataFlags($scope);
                    $scope.vc.addChangeEvents($scope);
                    if (($scope.vc.hasOnCloseModalEvent && angular.isDefined($scope.vc.dialogParameters.autoSync) && $scope.vc.dialogParameters.autoSync === false) && ($scope.vc.dialogResponse || $scope.vc.customDialogResponse)) {
                        $scope.vc.onCloseModalEvent();
                    }
                    if ($scope.vc.dialogResponse || $scope.vc.customDialogResponse) {
                        $scope.vc.afterCloseGridDialog();
                    }
                    cobis.showMessageWindow.loading(false);
                } else {
                    //Si es la primera vez que se ejecuta la pantalla
                    var threadLifeCycle = $scope.vc.lifeCycle.prepareThread(page);
                    if (threadLifeCycle) {
                        $scope.vc.lifeCycle.run(page, threadLifeCycle, $scope);
                        cobis.showMessageWindow.loading(false);
                    }
                }
            });
        }
    }]);
}
if (typeof cobisMainModule === "undefined") {
    var cobisMainModule = cobis.createModule("VC_FACTURACON_269510", ["ngResource", "ngRoute", "kendo.directives", "ui.bootstrap", "oc.lazyLoad", "pascalprecht.translate", cobis.modules.CONTAINER, "designerModule"], ["DSGNR", "FRONT"]);
    cobisMainModule.config(["$controllerProvider", "$compileProvider", "$filterProvider", "$locationProvider", "$routeProvider", "$provide", "$translateProvider", "$translatePartialLoaderProvider", "$ocLazyLoadProvider",

    function($controllerProvider, $compileProvider, $filterProvider, $locationProvider, $routeProvider, $provide, $translateProvider, $translatePartialLoaderProvider, $ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            asyncLoader: $script
        });
        $locationProvider.html5Mode(true);
        cobisMainModule.controllerProvider = $controllerProvider;
        cobisMainModule.compileProvider = $compileProvider;
        cobisMainModule.routeProvider = $routeProvider;
        cobisMainModule.filterProvider = $filterProvider;
        cobisMainModule.provide = $provide;
        var culture = cobis.userContext.getValue(cobis.constant.CULTURE);
        $routeProvider.when("/VC_FACTURACON_269510", {
            templateUrl: "VC_FACTURACON_269510_FORM.html",
            controller: "VC_FACTURACON_269510_CTRL",
            label: "FacturacionForm",
            resolve: {
                i18n: function($translatePartialLoader, $translate) {
                    cobis.showMessageWindow.customLoading(true);
                    $translatePartialLoader.addPart('DSGNR');
                    $translatePartialLoader.addPart('FRONT');
                    return $translate.use(cobis.userContext.getValue(cobis.constant.CULTURE)).then(function() {
                        return $translate.refresh().then(function() {
                            cobis.showMessageWindow.customLoading(false);
                        });
                    });
                }
            }
        }).otherwise({
            redirectTo: function(routeParams, path, search) {
                return "/VC_FACTURACON_269510?" + $.param(search);
            }
        });
        VC_FACTURACON_269510(cobisMainModule);
    }]);
} else {
    VC_FACTURACON_269510(cobisMainModule);
}