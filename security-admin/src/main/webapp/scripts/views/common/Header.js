/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

 
define(function(require){
    'use strict';

	var Backbone            = require('backbone');
    var XALinks             = require('modules/XALinks');
    var XAEnums             = require('utils/XAEnums');
    var XAUtil              = require('utils/XAUtils');
    var SessionMgr          = require('mgrs/SessionMgr');
    var App                 = require('App');
    var localization        = require('utils/XALangSupport');
    var RangerServiceList   = require('collections/RangerServiceList');
    var RangerService       = require('models/RangerService');
    var ServicemanagerSidebarlayoutTmpl = require('hbs!tmpl/common/ServiceManagerSidebarLayout_tmpl');
    var vUploadServicePolicy     = require('views/UploadServicePolicy');
    var vDownloadServicePolicy   = require('views/DownloadServicePolicy');
    var RangerServiceViewDetail  = require('views/service/RangerServiceViewDetail');
    var RangerServiceDefList    = require('collections/RangerServiceDefList');
    var RangerServiceDef        = require('models/RangerServiceDef');
    var RangerZoneList      = require('collections/RangerZoneList');

	var Header_tmpl = require('hbs!tmpl/common/Header_tmpl'); 
	
	var Header = Backbone.Marionette.ItemView.extend(
	/** @lends Header */
	{

		_viewName : Header,
		
    	template: Header_tmpl,
        
    	/** ui selector cache */
    	ui: {
            'sideCollapes' : '[data-id="sideCollapes"]',
        },

		/** ui events hash */
		events: function() {
			var events = {};
			//events['change ' + this.ui.input]  = 'onInputChange';
            events['mousedown ' + this.ui.sideCollapes] = 'sideCollapes';
			return events;
		},

    	/**
		* intialize a new Footer ItemView 
		* @constructs
		*/
		initialize: function(options) {
			console.log("initialized a Header ItemView");

			_.extend(this, _.pick(options, ''));
            
            this.collapes = false,
			this.bindEvents();
		},

		/** all events binding here */
		bindEvents : function(){
			/*this.listenTo(this.model, "change:foo", this.modelChanged, this);*/
			/*this.listenTo(communicator.vent,'someView:someEvent', this.someEventHandler, this)'*/
		},

		/** on render callback */
		onRender: function() {
			this.initializePlugins();
		},

        sideCollapes : function (e) {
            e.stopImmediatePropagation()
            if (this.collapes) {
                console.log(this.collapes);
                this.collapes = false;
                App.rSideBar.$el.addClass('expanded');
                App.rContent.$el.addClass('expanded-contant');
                App.rSideBar.$el.removeClass('collapsed');
                e.target.setAttribute('class' , 'fa fa-bars fa-lg')
            } else {
                console.log(this.collapes);
                this.collapes = true;
                App.rSideBar.$el.addClass('collapsed');
                App.rContent.$el.removeClass('expanded-contant');
                App.rSideBar.$el.removeClass('expanded');
                e.target.setAttribute('class' , 'fa fa-bars fa-lg');
            }
        },

		/** all post render plugin initialization */
		initializePlugins: function(){
		},

		/** on close */
		onClose: function(){
			
		}

	});

	return Header;
});
