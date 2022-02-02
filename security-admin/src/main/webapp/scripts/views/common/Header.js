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

	var Backbone		= require('backbone');
	var Communicator	= require('communicator');
	var App                 = require('App');
	var Header_tmpl = require('hbs!tmpl/common/Header_tmpl'); 
	
	var Header = Backbone.Marionette.ItemView.extend(
	/** @lends Footer */
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

		/** all post render plugin initialization */
		initializePlugins: function(){
		},

        sideCollapes : function (e) {
            e.stopImmediatePropagation()
            if (this.collapes) {
                this.collapes = false;
                App.rSideBar.$el.addClass('expanded');
                App.rContent.$el.addClass('expanded-contant');
                App.rSideBar.$el.removeClass('collapsed');
            } else {
                this.collapes = true;
                App.rSideBar.$el.addClass('collapsed');
                App.rContent.$el.removeClass('expanded-contant');
                App.rSideBar.$el.removeClass('expanded');
            }
        },

		/** on close */
		onClose: function(){
			
		}

	});

	return Header;
});
