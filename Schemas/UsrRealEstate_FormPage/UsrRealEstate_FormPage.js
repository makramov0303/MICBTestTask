define("UsrRealEstate_FormPage", /**SCHEMA_DEPS*/["UsrRealEstateJSUtils", "@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(UsrRealEstateJSUtils, sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "CloseButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "remove",
				"name": "MainHeaderBottom"
			},
			{
				"operation": "remove",
				"name": "CardToolsContainer"
			},
			{
				"operation": "remove",
				"name": "TagSelect"
			},
			{
				"operation": "remove",
				"name": "CardToggleContainer"
			},
			{
				"operation": "remove",
				"name": "CardButtonToggleGroup"
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "remove",
				"name": "GeneralInfoTabContainer"
			},
			{
				"operation": "remove",
				"name": "CardToggleTabPanel"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainer"
			},
			{
				"operation": "remove",
				"name": "Feed"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderContainer"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderLabel"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainer"
			},
			{
				"operation": "remove",
				"name": "AttachmentList"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainerHeaderContainer"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainerHeaderLabel"
			},
			{
				"operation": "remove",
				"name": "AttachmentAddButton"
			},
			{
				"operation": "remove",
				"name": "AttachmentRefreshButton"
			},
			{
				"operation": "insert",
				"name": "Button_ygkfpmv",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_ygkfpmv_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.PrintablesRequest",
						"params": {
							"dataSourceName": "PDS"
						}
					},
					"clickMode": "default",
					"menuItems": []
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ActionsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ActionsButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"menuItems": [],
					"clickMode": "menu",
					"visible": true,
					"icon": "actions-button-icon"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "AddRealEstateMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(AddRealEstateMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrRealEstateViewsAddRecordsProcess",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "RealEstateId"
						}
					}
				},
				"parentName": "ActionsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrSquare",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrSquare",
					"control": "$UsrSquare",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrPrice",
					"control": "$UsrPrice",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrType",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrType"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_p05nfxk",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_p05nfxk_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrOfferType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrOfferType",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrOfferType",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null,
					"secondaryDisplayValue": null
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_2xjf5zi",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_2xjf5zi_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrOfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrCommission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrCommission",
					"control": "$UsrCommission",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "UsrComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 7,
						"rowSpan": 3
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrComment",
					"control": "$UsrComment",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": true,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "RealEstateViewsPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(RealEstateViewsPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_u9us21f",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "RealEstateViewsPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealEstateViewsFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"wrap": "wrap",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_u9us21f",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealEstateAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RealEstateAddButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-icon",
					"visible": true,
					"icon": "add-button-icon",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealEstateView",
							"defaultValues": [
								{
									"attributeName": "UsrRealEstate",
									"value": "$Id"
								}
							]
						}
					},
					"clickMode": "default"
				},
				"parentName": "RealEstateViewsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealEstateViewsRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RealEstateViewsRefreshButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-icon",
					"visible": true,
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"refreshDataConfig": {
								"mode": "RefreshAll"
							}
						}
					},
					"clickMode": "default",
					"icon": "reload-icon",
					"menuItems": []
				},
				"parentName": "RealEstateViewsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RealEstateViewsDataGrid",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						},
						"columns": {
							"dragAndDrop": false,
							"resizing": false
						}
					},
					"items": "$DataGrid_vehzf35",
					"activeRow": "$DataGrid_vehzf35_ActiveRow",
					"selectionState": "$DataGrid_vehzf35_SelectionState",
					"_selectionOptions": {
						"attribute": "DataGrid_vehzf35_SelectionState"
					},
					"primaryColumnName": "DataGrid_vehzf35DS_Id",
					"columns": [
						{
							"id": "d10fd240-7688-7b07-44b6-f0a310c8bd7c",
							"code": "DataGrid_vehzf35DS_UsrViewDate",
							"caption": "#ResourceString(DataGrid_vehzf35DS_UsrViewDate)#",
							"dataValueType": 7
						},
						{
							"id": "edc537fe-dbc4-4939-ac64-8a485a921138",
							"code": "DataGrid_vehzf35DS_UsrPotentialClient",
							"caption": "#ResourceString(DataGrid_vehzf35DS_UsrPotentialClient)#",
							"dataValueType": 10
						},
						{
							"id": "26f979c1-7afe-e29f-6a7e-3dba787262f3",
							"code": "DataGrid_vehzf35DS_UsrComment",
							"caption": "#ResourceString(DataGrid_vehzf35DS_UsrComment)#",
							"dataValueType": 29
						}
					],
					"placeholder": false,
					"bulkActions": [],
					"visible": true,
					"fitContent": true
				},
				"parentName": "RealEstateViewsPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_vehzf35_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Добавить тег",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "RealEstateViews_DS",
							"filters": "$DataGrid_vehzf35 | crt.ToCollectionFilters : 'DataGrid_vehzf35' : $DataGrid_vehzf35_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_vehzf35_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "RealEstateViewsDataGrid",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_vehzf35_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Удалить тег",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "RealEstateViews_DS",
							"filters": "$DataGrid_vehzf35 | crt.ToCollectionFilters : 'DataGrid_vehzf35' : $DataGrid_vehzf35_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_vehzf35_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_vehzf35_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_vehzf35_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Экспорт в Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealEstateViewsDataGrid",
							"filters": "$DataGrid_vehzf35 | crt.ToCollectionFilters : 'DataGrid_vehzf35' : $DataGrid_vehzf35_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_vehzf35_SelectionState"
						}
					}
				},
				"parentName": "RealEstateViewsDataGrid",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_vehzf35_MergeBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Объединить",
					"icon": "merge-icon",
					"clicked": {
						"request": "crt.MergeRecordsRequest",
						"params": {
							"dataSourceName": "RealEstateViews_DS",
							"selectionState": "$DataGrid_vehzf35_SelectionState"
						}
					}
				},
				"parentName": "RealEstateViewsDataGrid",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DataGrid_vehzf35_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Удалить",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "RealEstateViews_DS",
							"filters": "$DataGrid_vehzf35 | crt.ToCollectionFilters : 'DataGrid_vehzf35' : $DataGrid_vehzf35_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_vehzf35_SelectionState"
						}
					}
				},
				"parentName": "RealEstateViewsDataGrid",
				"propertyName": "bulkActions",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"UsrSquare": {
						"modelConfig": {
							"path": "PDS.UsrSquare"
						},
						"validators": {
							"SquareNonNegativeValueValidator": {
								"type": "crt.Min",
								"params": {
									"min": 0,
									"message": "#ResourceString(NegativeValueErrorMsg)#"
								}
							}
						}
					},
					"UsrPrice": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"PriceNonNegativeValueValidator": {
								"type": "crt.Min",
								"params": {
									"min": 0,
									"message": "#ResourceString(NegativeValueErrorMsg)#"
								}
							}
						}
					},
					"UsrType": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"UsrType_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"UsrOfferType": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"UsrCommissionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOfferType.UsrCommissionPercent"
						}
					},
					"UsrOfferType_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"UsrComment": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"DataGrid_vehzf35": {
						"isCollection": true,
						"modelConfig": {
							"path": "RealEstateViews_DS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_vehzf35_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "UsrViewDate"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_vehzf35DS_UsrViewDate": {
									"modelConfig": {
										"path": "RealEstateViews_DS.UsrViewDate"
									}
								},
								"DataGrid_vehzf35DS_UsrPotentialClient": {
									"modelConfig": {
										"path": "RealEstateViews_DS.UsrPotentialClient"
									}
								},
								"DataGrid_vehzf35DS_UsrComment": {
									"modelConfig": {
										"path": "RealEstateViews_DS.UsrComment"
									}
								},
								"DataGrid_vehzf35DS_Id": {
									"modelConfig": {
										"path": "RealEstateViews_DS.Id"
									}
								}
							}
						}
					},
					"DataGrid_vehzf35_PredefinedFilter": {
						"value": null
					},
					"UsrCommission": {
						"modelConfig": {
							"path": "PDS.UsrCommission"
						}
					},
					"UsrWsHandler": {}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"CardState"
				],
				"values": {
					"modelConfig": {}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"RealEstateViews_DS": [
							{
								"attributePath": "UsrRealEstate",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealEstate",
							"attributes": {}
						},
						"scope": "page"
					},
					"RealEstateViews_DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealEstateView",
							"attributes": {
								"UsrViewDate": {
									"path": "UsrViewDate"
								},
								"UsrPotentialClient": {
									"path": "UsrPotentialClient"
								},
								"UsrComment": {
									"path": "UsrComment"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelInitRequest",
				handler: async (request, next) => {
					await next?.handle(request);

					request.$context.UsrWsHandler = async function(event, message) {
						var data = JSON.parse(message?.Body || "{}");
						var recordId = await request.$context.Id;

						if (message?.Header?.Sender === "UsrAddRealEstateViesResult" 
							&& data.realEstateId === recordId) {
								
							var handlerChain = sdk.HandlerChainService.instance;
							if (data.success) {
								await handlerChain.process({
									type: "crt.LoadDataRequest",
									$context: this,
									config: { loadType: "reload" },
									dataSourceName: "RealEstateViews_DS"
								});
							}
							const resources = await request.$context.Resources;
							var successMsg = await resources?.Strings?.RealEstateViewsAddSuccessMsg;
							var errorTemplate = await resources?.Strings?.RealEstateViewsAddErrorMsg;
							var errorMsg = Ext.String.format(errorTemplate, data.error);
							await handlerChain.process({
								type: "crt.NotificationRequest",
								$context: request.$context,
								message: data.success ? successMsg : errorMsg
							});
						}
					};

					Terrasoft.ServerChannel.on(
						Terrasoft.EventName.ON_MESSAGE,
						await request.$context.UsrWsHandler,
						request.$context
					);
				}
			},
			{
				request: "crt.HandleViewModelDestroyRequest",
				handler: async (request, next) => {
					Terrasoft.ServerChannel.un(
						Terrasoft.EventName.ON_MESSAGE,
						await request.$context.UsrWsHandler,
						request.$context
					);
					return next?.handle(request);
				}
			},


			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				handler: (request, next) => {
					next?.handle(request);
					const changed = request.attributeName;
					if (changed === "UsrPrice" || changed === "UsrOfferType" ||changed === "UsrOfferType_List") {
						UsrRealEstateJSUtils.calculateCommission(request);
					}
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});