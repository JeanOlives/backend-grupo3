//Designer Generator v 7.2.0 - SPR 2020-24 4/12/2020
var designerEvents = designerEvents || {};
designerEvents.api = designerEvents.api || {};
designerEvents.api.clienteform = designerEvents.api.clienteform || designer.dsgEvents();

function VC_CLIENTEDAD_206714(cobisMainModule) {
    cobisMainModule.controllerProvider.register("VC_CLIENTEDAD_206714_MAIN_CTRL", ["$scope", "breadcrumbs",

    function($scope, breadcrumbs) {
        $scope.breadcrumbs = breadcrumbs;
    }]);
    cobisMainModule.controllerProvider.register("VC_CLIENTEDAD_206714_CTRL", ["cobisMessage", cobis.modules.CONTAINER + ".preferencesService", "dsgnrUtils", "designer", "$scope", "$location", "$document", "$parse", "$filter", "$modal", "$q", "$compile", "$timeout", "$translate",

    function(cobisMessage, preferencesService, dsgnrUtils, designer, $scope, $location, $document, $parse, $filter, $modal, $q, $compile, $timeout, $translate) {
        $scope.designer = designer;
        $scope.validatorOptions = validatorOptions;
        $scope.vc = designer.initViewContainer({
            moduleId: "FRONT",
            subModuleId: "ENDDD",
            taskId: "T_FRONTKNVSTNQU_714",
            taskVersion: "1.0.0",
            viewContainerId: "VC_CLIENTEDAD_206714",
            hasCloseModalEvent: false,
            serverEvents: true
        },
            "${contextPath}/resources/FRONT/ENDDD/T_FRONTKNVSTNQU_714",
        designerEvents.api.clienteform,
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
                vcName: 'VC_CLIENTEDAD_206714'
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
                    taskId: 'T_FRONTKNVSTNQU_714',
                    version: '1.0.0',
                    user: $scope.vc.args.user
                },
                entityNames: {
                    Cliente: "Cliente"
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
                    }
                },
                relations: []
            };
            $scope.vc.queryProperties = {};
            $scope.vc.queryProperties.Q_CLIETTTN_SG94 = {
                autoCrud: false
            };
            $scope.vc.getRequestQuery_Q_CLIETTTN_SG94 = function() {
                var parametersAux = {};
                if ($.isEmptyObject($scope.vc.queries.Q_CLIETTTN_SG94_filters)) {
                    parametersAux = {};
                } else {
                    var filters = $scope.vc.queries.Q_CLIETTTN_SG94_filters;
                    parametersAux = {};
                }
                return {
                    mainEntityPk: {
                        entityId: 'EN_CLIENTESS_736',
                        version: '1.0.0'
                    },
                    queryPk: {
                        queryId: 'Q_CLIETTTN_SG94',
                        version: '1.0.0'
                    },
                    parameters: parametersAux,
                    filters: {},
                    updateParameters: function() {}
                }
            };
            $scope.vc.queries.Q_CLIETTTN_SG94_filters = {};
            var defaultValues = {
                Cliente: {}
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
                $scope.vc.execute("temporarySave", VC_CLIENTEDAD_206714, data, function() {});
            };
            $scope.vc.temporaryRead = function() {
                if (page.hasTemporaryDataSupport) {
                    var data = {
                        model: $scope.vc.model,
                        temporaryStorePK: $scope.vc.metadata.taskPk
                    };
                    return $scope.vc.executeService("readTemporaryData", VC_CLIENTEDAD_206714, data).then(

                    function(response) {
                        var result = $scope.vc.processTemporaryResponse(response);
                        if (result) {
                            $scope.vc.execute("deleteTemporaryData", VC_CLIENTEDAD_206714, data, function() {});
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
            $scope.vc.viewState.VC_CLIENTEDAD_206714 = {
                style: []
            };
            //ViewState - Group: Group1358
            $scope.vc.createViewState({
                id: "G_CLIENTEXLB_274145",
                hasId: true,
                componentStyle: [],
                label: 'Group1358',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            $scope.vc.createViewState({
                id: "VA_VASIMPLELABELLL_819145",
                componentStyle: [],
                label: "FRONT.LBL_FRONT_CLIENTESS_30928",
                validationCode: 0,
                readOnly: designer.constants.mode.None,
                enabled: designer.constants.mode.None,
                visible: designer.constants.mode.All
            });
            //ViewState - Group: Group1640
            $scope.vc.createViewState({
                id: "G_CLIENTEZFG_381145",
                hasId: true,
                componentStyle: [],
                label: 'Group1640',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            $scope.vc.types.Cliente = kendo.data.Model.define({
                id: "dsgnrId",
                fields: {
                    dsgnrId: {
                        type: "string"
                    },
                    trackId: {
                        type: "string"
                    },
                    cedula: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Cliente", "cedula", '')
                    },
                    nombre: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Cliente", "nombre", '')
                    },
                    apellido: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Cliente", "apellido", '')
                    },
                    direccion: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Cliente", "direccion", '')
                    },
                    telefono: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Cliente", "telefono", '')
                    },
                    estado: {
                        type: "string",
                        editable: true,
                        defaultValue: $scope.vc.channelDefaultValues("Cliente", "estado", '')
                    }
                }
            });
            $scope.vc.model.Cliente = new kendo.data.DataSource({
                transport: {
                    read: function(options) {
                        var promise = false;
                        var isRefresh = (angular.isDefined(options.data) && angular.isDefined(options.data.refresh));
                        if (isRefresh || !designer.enums.hasFlag(designer.constants.mode.Insert, $scope.vc.mode)) {
                            var queryId = 'Q_CLIETTTN_SG94';
                            var queryRequest = $scope.vc.getRequestQuery_Q_CLIETTTN_SG94();
                            if (queryId && queryRequest) {
                                var queryLoaded = queryRequest.loaded;
                                if (angular.isUndefined(queryLoaded) || isRefresh === true) {
                                    queryRequest.loaded = true;
                                    queryRequest.updateParameters();
                                    promise = true;
                                    $scope.vc.executeQuery(
                                        'QV_BN94_GSD54',
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
                        //this block of code only appears if the grid has set a RowInsertingEvent
                        var args = {
                            rowData: model,
                            nameEntityGrid: 'Cliente',
                            cancel: false
                        }
                        $scope.vc.gridRowAction('QV_BN94_GSD54', $scope.vc.designerEventsConstants.GridRowInserting, args, function() {
                            if (!args.cancel) {
                                options.success(args.rowData);
                            } else {
                                options.error(args.rowData);
                            }
                        });
                        // end block
                    },
                    update: function(options) {
                        var model = options.data;
                        //this block of code only appears if the grid has set a RowUpdatingEvent
                        var args = {
                            rowData: model,
                            nameEntityGrid: 'Cliente',
                            cancel: false
                        }
                        $scope.vc.gridRowAction('QV_BN94_GSD54', $scope.vc.designerEventsConstants.GridRowUpdating, args, function() {
                            if (!args.cancel) {
                                options.success(args.rowData);
                            } else {
                                options.error(args.rowData);
                            }
                        });
                        // end block
                    },
                    destroy: function(options) {
                        var model = options.data;
                        //this block of code only appears if the grid has set a RowDeletingEvent
                        var args = {
                            rowData: model,
                            nameEntityGrid: 'Cliente',
                            cancel: false
                        }
                        $scope.vc.gridRowAction('QV_BN94_GSD54', $scope.vc.designerEventsConstants.GridRowDeleting, args, function() {
                            if (!args.cancel) {
                                options.success(args.rowData);
                            } else {
                                options.error(new Error('DeletingError'));
                            }
                        });
                        // end block
                    }
                },
                schema: {
                    model: $scope.vc.types.Cliente
                },
                aggregate: [],
                error: function(e) {
                    if (e.xhr.message && e.xhr.message === 'DeletingError') {
                        $("#QV_BN94_GSD54").data("kendoExtGrid").cancelChanges();
                    }
                }
            });
            $scope.vc.queries.Q_CLIETTTN_SG94 = $scope.vc.model.Cliente;
            $scope.vc.trackers.Cliente = new $scope.vc.crud.DataSourceTracker(
            $scope.vc.metadata.entities.Cliente);
            $scope.vc.model.Cliente.bind('change', function(e) {
                $scope.vc.trackers.Cliente.track(e);
            });
            $scope.vc.grids.QV_BN94_GSD54 = {};
            $scope.vc.grids.QV_BN94_GSD54.queryId = 'Q_CLIETTTN_SG94';
            $scope.vc.viewState.QV_BN94_GSD54 = {
                style: []
            };
            $scope.vc.viewState.QV_BN94_GSD54.column = {};
            $scope.vc.grids.QV_BN94_GSD54.editable = {
                mode: 'inline',
                confirmation: false
            };
            $scope.vc.grids.QV_BN94_GSD54.events = {
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
                    $scope.vc.trackers.Cliente.cancelTrackedChanges(e.model);
                },
                edit: function(e) {
                    $scope.vc.grids.QV_BN94_GSD54.selectedRow = e.model;
                    var commandCell = $scope.vc.getCommandCellData(e.container);
                    var titleUpdate = $filter('translate')('DSGNR.SYS_DSGNR_LBLACEPT0_00007');
                    var titleCancel = $filter('translate')('DSGNR.SYS_DSGNR_LBLCANCEL_00006');
                    commandCell.html("<a class='btn btn-default k-grid-update cb-row-image-button' onmousedown='this.focus()' title='" + titleUpdate + "' href='#'><span class='fa fa-check-circle'></span></a><a class='btn btn-default k-grid-cancel cb-row-image-button' title='" + titleCancel + "' href='#'><span class='fa fa-times-circle'></span></a>");
                    $scope.vc.validateForm();
                },
                dataBound: function(e) {
                    var index;
                    var grid = e.sender;
                    $scope.vc.gridDataBound("QV_BN94_GSD54", false, grid);
                    $scope.vc.hideShowColumns("QV_BN94_GSD54", grid);
                    var dataView = null;
                    dataView = this.dataSource.view();
                    var styleName, iStyle;
                    for (var i = 0; i < dataView.length; i++) {
                        if (typeof $scope.vc.viewState.QV_BN94_GSD54.rows[dataView[i].uid] != "undefined") {
                            for (iStyle = 0; iStyle < $scope.vc.viewState.QV_BN94_GSD54.rows[dataView[i].uid].style.length; iStyle++) {
                                styleName = $scope.vc.viewState.QV_BN94_GSD54.rows[dataView[i].uid].style[iStyle];
                                if ($("#QV_BN94_GSD54 tbody").find("tr[data-uid=" + dataView[i].uid + "]").hasClass(styleName) === false) {
                                    $("#QV_BN94_GSD54 tbody").find("tr[data-uid=" + dataView[i].uid + "]").addClass(styleName);
                                }
                            }
                        }
                    }
                }
            };
            //Comandos de registros del Grid
            $scope.vc.grids.QV_BN94_GSD54.columns = [];
            //Registros de fila del Grid
            $scope.vc.viewState.QV_BN94_GSD54.rows = [];
            //Controles de edicion en linea del Grid
            $scope.vc.viewState.QV_BN94_GSD54.column.cedula = {
                title: 'cedula',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXZMW_719145',
                element: []
            };
            $scope.vc.grids.QV_BN94_GSD54.AT20_CEDULADQ736 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_BN94_GSD54.column.cedula.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXZMW_719145",
                        'data-validation-code': "{{vc.viewState.QV_BN94_GSD54.column.cedula.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_BN94_GSD54.column.cedula.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_BN94_GSD54.column.nombre = {
                title: 'nombre',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXAUW_849145',
                element: []
            };
            $scope.vc.grids.QV_BN94_GSD54.AT62_NOMBREBT736 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_BN94_GSD54.column.nombre.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXAUW_849145",
                        'data-validation-code': "{{vc.viewState.QV_BN94_GSD54.column.nombre.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_BN94_GSD54.column.nombre.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_BN94_GSD54.column.apellido = {
                title: 'apellido',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXNVQ_747145',
                element: []
            };
            $scope.vc.grids.QV_BN94_GSD54.AT63_APELLIDO736 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_BN94_GSD54.column.apellido.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXNVQ_747145",
                        'data-validation-code': "{{vc.viewState.QV_BN94_GSD54.column.apellido.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_BN94_GSD54.column.apellido.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_BN94_GSD54.column.direccion = {
                title: 'direccion',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXUNG_714145',
                element: []
            };
            $scope.vc.grids.QV_BN94_GSD54.AT13_DIRECCNN736 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_BN94_GSD54.column.direccion.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXUNG_714145",
                        'data-validation-code': "{{vc.viewState.QV_BN94_GSD54.column.direccion.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_BN94_GSD54.column.direccion.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_BN94_GSD54.column.telefono = {
                title: 'telefono',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXCVK_748145',
                element: []
            };
            $scope.vc.grids.QV_BN94_GSD54.AT26_TELEFONN736 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_BN94_GSD54.column.telefono.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.All,vc.mode)",
                        'id': "VA_TEXTINPUTBOXCVK_748145",
                        'data-validation-code': "{{vc.viewState.QV_BN94_GSD54.column.telefono.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_BN94_GSD54.column.telefono.style"
                    });
                    textInput.appendTo(container);
                }
            };
            $scope.vc.viewState.QV_BN94_GSD54.column.estado = {
                title: 'estado',
                titleArgs: {},
                tooltip: '',
                enabled: designer.enums.hasFlag(designer.constants.mode.None, $scope.vc.mode),
                hidden: !designer.enums.hasFlag(designer.constants.mode.None, $scope.vc.mode),
                readOnly: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
                decimals: 0,
                style: [],
                validationCode: 0,
                componentId: 'VA_TEXTINPUTBOXPHP_605145',
                element: []
            };
            $scope.vc.grids.QV_BN94_GSD54.AT91_ESTADOCH736 = {
                control: function(container, options) {
                    var textInput = $('<input/>', {
                        'name': options.field,
                        'data-bind': "value:" + options.field,
                        'ng-disabled': "!vc.viewState.QV_BN94_GSD54.column.estado.enabled",
                        'ng-readonly': "designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)",
                        'ng-show': "designer.enums.hasFlag(designer.constants.mode.None,vc.mode)",
                        'id': "VA_TEXTINPUTBOXPHP_605145",
                        'data-validation-code': "{{vc.viewState.QV_BN94_GSD54.column.estado.validationCode}}",
                        'type': "text",
                        'class': "k-textbox",
                        'ng-model-onblur': "",
                        'ng-class': "vc.viewState.QV_BN94_GSD54.column.estado.style"
                    });
                    textInput.appendTo(container);
                }
            };
            //Creacion de columnas del Grid
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_BN94_GSD54.columns.push({
                    field: 'cedula',
                    title: '{{vc.viewState.QV_BN94_GSD54.column.cedula.title|translate:vc.viewState.QV_BN94_GSD54.column.cedula.titleArgs}}',
                    width: $scope.vc.viewState.QV_BN94_GSD54.column.cedula.width,
                    format: $scope.vc.viewState.QV_BN94_GSD54.column.cedula.format,
                    editor: $scope.vc.grids.QV_BN94_GSD54.AT20_CEDULADQ736.control,
                    template: "<span ng-class='vc.viewState.QV_BN94_GSD54.column.cedula.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.cedula, \"QV_BN94_GSD54\", \"cedula\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_BN94_GSD54.column.cedula.style",
                        "title": "{{vc.viewState.QV_BN94_GSD54.column.cedula.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_BN94_GSD54.column.cedula.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_BN94_GSD54.columns.push({
                    field: 'nombre',
                    title: '{{vc.viewState.QV_BN94_GSD54.column.nombre.title|translate:vc.viewState.QV_BN94_GSD54.column.nombre.titleArgs}}',
                    width: $scope.vc.viewState.QV_BN94_GSD54.column.nombre.width,
                    format: $scope.vc.viewState.QV_BN94_GSD54.column.nombre.format,
                    editor: $scope.vc.grids.QV_BN94_GSD54.AT62_NOMBREBT736.control,
                    template: "<span ng-class='vc.viewState.QV_BN94_GSD54.column.nombre.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.nombre, \"QV_BN94_GSD54\", \"nombre\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_BN94_GSD54.column.nombre.style",
                        "title": "{{vc.viewState.QV_BN94_GSD54.column.nombre.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_BN94_GSD54.column.nombre.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_BN94_GSD54.columns.push({
                    field: 'apellido',
                    title: '{{vc.viewState.QV_BN94_GSD54.column.apellido.title|translate:vc.viewState.QV_BN94_GSD54.column.apellido.titleArgs}}',
                    width: $scope.vc.viewState.QV_BN94_GSD54.column.apellido.width,
                    format: $scope.vc.viewState.QV_BN94_GSD54.column.apellido.format,
                    editor: $scope.vc.grids.QV_BN94_GSD54.AT63_APELLIDO736.control,
                    template: "<span ng-class='vc.viewState.QV_BN94_GSD54.column.apellido.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.apellido, \"QV_BN94_GSD54\", \"apellido\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_BN94_GSD54.column.apellido.style",
                        "title": "{{vc.viewState.QV_BN94_GSD54.column.apellido.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_BN94_GSD54.column.apellido.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_BN94_GSD54.columns.push({
                    field: 'direccion',
                    title: '{{vc.viewState.QV_BN94_GSD54.column.direccion.title|translate:vc.viewState.QV_BN94_GSD54.column.direccion.titleArgs}}',
                    width: $scope.vc.viewState.QV_BN94_GSD54.column.direccion.width,
                    format: $scope.vc.viewState.QV_BN94_GSD54.column.direccion.format,
                    editor: $scope.vc.grids.QV_BN94_GSD54.AT13_DIRECCNN736.control,
                    template: "<span ng-class='vc.viewState.QV_BN94_GSD54.column.direccion.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.direccion, \"QV_BN94_GSD54\", \"direccion\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_BN94_GSD54.column.direccion.style",
                        "title": "{{vc.viewState.QV_BN94_GSD54.column.direccion.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_BN94_GSD54.column.direccion.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
                $scope.vc.grids.QV_BN94_GSD54.columns.push({
                    field: 'telefono',
                    title: '{{vc.viewState.QV_BN94_GSD54.column.telefono.title|translate:vc.viewState.QV_BN94_GSD54.column.telefono.titleArgs}}',
                    width: $scope.vc.viewState.QV_BN94_GSD54.column.telefono.width,
                    format: $scope.vc.viewState.QV_BN94_GSD54.column.telefono.format,
                    editor: $scope.vc.grids.QV_BN94_GSD54.AT26_TELEFONN736.control,
                    template: "<span ng-class='vc.viewState.QV_BN94_GSD54.column.telefono.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.telefono, \"QV_BN94_GSD54\", \"telefono\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_BN94_GSD54.column.telefono.style",
                        "title": "{{vc.viewState.QV_BN94_GSD54.column.telefono.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_BN94_GSD54.column.telefono.hidden
                });
            }
            if (designer.enums.hasFlag(designer.constants.mode.None, $scope.vc.mode)) {
                $scope.vc.grids.QV_BN94_GSD54.columns.push({
                    field: 'estado',
                    title: '{{vc.viewState.QV_BN94_GSD54.column.estado.title|translate:vc.viewState.QV_BN94_GSD54.column.estado.titleArgs}}',
                    width: $scope.vc.viewState.QV_BN94_GSD54.column.estado.width,
                    format: $scope.vc.viewState.QV_BN94_GSD54.column.estado.format,
                    editor: $scope.vc.grids.QV_BN94_GSD54.AT91_ESTADOCH736.control,
                    template: "<span ng-class='vc.viewState.QV_BN94_GSD54.column.estado.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.estado, \"QV_BN94_GSD54\", \"estado\")'></span>",
                    attributes: {
                        "class": "",
                        "ng-class": "vc.viewState.QV_BN94_GSD54.column.estado.style",
                        "title": "{{vc.viewState.QV_BN94_GSD54.column.estado.tooltip|translate}}"
                    },
                    hidden: $scope.vc.viewState.QV_BN94_GSD54.column.estado.hidden
                });
            }
            $scope.vc.viewState.QV_BN94_GSD54.column.edit = {
                element: []
            };
            $scope.vc.viewState.QV_BN94_GSD54.column["delete"] = {
                element: []
            };
            $scope.vc.viewState.QV_BN94_GSD54.column.cmdEdition = {};
            $scope.vc.viewState.QV_BN94_GSD54.column.cmdEdition.hidden = (!designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode)) ? false : true;
            $scope.vc.grids.QV_BN94_GSD54.columns.push({
                field: 'cmdEdition',
                title: ' ',
                command: [{
                    name: "edit",
                    text: "{{'DSGNR.SYS_DSGNR_LBLEDIT00_00005'|translate}}",
                    cssMap: "{'btn': true, 'btn-default': true, 'cb-row-image-button': true" + ", 'k-grid-edit': !vc.viewState.G_CLIENTEZFG_381145.disabled}",
                    template: "<a ng-class='vc.getCssClass(\"edit\", " + "vc.viewState.QV_BN94_GSD54.column.edit.element[dataItem.uid].style, #:cssMap#, vc.viewState.QV_BN94_GSD54.column.edit.element[dataItem.dsgnrId].style)' " + "title=\"{{'DSGNR.SYS_DSGNR_LBLEDIT00_00005'|translate}}\" " + "ng-disabled = (vc.viewState.G_CLIENTEZFG_381145.disabled==true?true:false) " + "href='\\#'>" + "<span class='fa fa-pencil'></span>" + "</a>"
                }, {
                    name: "destroy",
                    text: "{{'DSGNR.SYS_DSGNR_LBLDELETE_00008'|translate}}",
                    cssMap: "{'btn': true, 'btn-default': true, 'cb-row-image-button': true" + ", 'k-grid-delete': !vc.viewState.G_CLIENTEZFG_381145.disabled}",
                    template: "<a ng-class='vc.getCssClass(\"destroy\", " + "vc.viewState.QV_BN94_GSD54.column.delete.element[dataItem.uid].style, #:cssMap#, vc.viewState.QV_BN94_GSD54.column.delete.element[dataItem.dsgnrId].style)' " + "title=\"{{'DSGNR.SYS_DSGNR_LBLDELETE_00008'|translate}}\" " + "ng-disabled = (vc.viewState.G_CLIENTEZFG_381145.disabled==true?true:false) " + ">" + "<span class='fa fa-times'></span>" + "</a>"
                }],
                attributes: {
                    "class": "btn-toolbar"
                },
                hidden: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode) === true ? true : $scope.vc.viewState.QV_BN94_GSD54.column.cmdEdition.hidden,
                width: Number(sessionStorage.columnSize) || 100
            });
            $scope.vc.viewState.QV_BN94_GSD54.toolbar = {
                create: {
                    visible: !designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode)
                }
            }
            $scope.vc.grids.QV_BN94_GSD54.toolbar = [{
                "name": "create",
                "text": "",
                "template": "<button class = 'btn btn-default k-grid-add cb-grid-button' " + "ng-if = 'vc.viewState.QV_BN94_GSD54.toolbar.create.visible' " + "ng-disabled = 'vc.viewState.G_CLIENTEZFG_381145.disabled?true:false'" + "title = \"{{'DSGNR.SYS_DSGNR_LBLNEW000_00013'|translate}}\" >" + "<span class='fa fa-plus'></span>{{'DSGNR.SYS_DSGNR_LBLNEW000_00013'|translate}}</button>"
            }];
            //ViewState - Command: Accept
            $scope.vc.createViewState({
                id: "T_FRONTKNVSTNQU_714_ACCEPT",
                componentStyle: [],
                label: 'Accept',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Command: Cancel
            $scope.vc.createViewState({
                id: "T_FRONTKNVSTNQU_714_CANCEL",
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
                $scope.vc.render('VC_CLIENTEDAD_206714');
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
    var cobisMainModule = cobis.createModule("VC_CLIENTEDAD_206714", ["ngResource", "ngRoute", "kendo.directives", "ui.bootstrap", "oc.lazyLoad", "pascalprecht.translate", cobis.modules.CONTAINER, "designerModule"], ["DSGNR", "FRONT"]);
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
        $routeProvider.when("/VC_CLIENTEDAD_206714", {
            templateUrl: "VC_CLIENTEDAD_206714_FORM.html",
            controller: "VC_CLIENTEDAD_206714_CTRL",
            label: "ClienteForm",
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
                return "/VC_CLIENTEDAD_206714?" + $.param(search);
            }
        });
        VC_CLIENTEDAD_206714(cobisMainModule);
    }]);
} else {
    VC_CLIENTEDAD_206714(cobisMainModule);
}