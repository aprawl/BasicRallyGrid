Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc3/doc/">App SDK 2.0rc3 Docs</a>'},
    
    launch: function() {
app = this;
        console.log('Our First App');

        app._loadData();
    },

    _loadData: function() {
// var app = this;
    var myStore = Ext.create('Rally.data.wsapi.Store', {
                        model: 'hierarchicalrequirement',
                        autoLoad: true,
                        limit: Infinity,
                        pageSize: 1000000,
                        // filters: [{
                        //     property: 'PortfolioItemType',
                        //     operator: '=',
                        //     value: 'Capability'
                        // }],
    listeners: {
        load: function(myStore, myData, success) {
            // var app = this;
            //process data
            console.log('got data!', myStore, myData, success);
app._loadGrid(myStore);
            // var myGrid = Ext.create('Rally.ui.grid.Grid', {
            // 	store: myStore,
            // 	columnCfgs: [
            // 	'FormattedID', 'Name', 'Owner', 'ScheduleState'
            // 	]
            // });

            // console.log('my grid', myGrid);

            // this.add(myGrid);
            // console.log('what is this?', this);
        },
        scope: app
    },
    fetch: ['FormattedID', 'Name', 'Owner', 'ScheduleState']
});
    
    },

    _loadGrid: function(myStoryStore) {
        // var app = this;
var scoringFields = Ext.create('Ext.form.Panel', {
    title: 'Scoring Weights',
    width: 300,
    bodyPadding: 10,
    renderTo: Ext.getBody(),
    items: [{
        xtype: 'textfield',
        name: 'npsimpact',
        fieldLabel: 'NPS impact to # existing clients',
        allowBlank: false  // requires a non-empty value
    }, {
        xtype: 'textfield',
        name: 'cabpriority',
        fieldLabel: 'CAB Priority',
        vtype: 'email'  // requires value to be a valid email address format
    }, {
        xtype: 'textfield',
        name: 'revuplift',
        fieldLabel: 'Revenue Uplift to EE',
        vtype: 'email'  // requires value to be a valid email address format
    }, {
        xtype: 'textfield',
        name: 'prospects',
        fieldLabel: '# of prospective clients from target list',
        vtype: 'email'  // requires value to be a valid email address format
    }, {
        xtype: 'textfield',
        name: 'winlossgap',
        fieldLabel: 'Proven gap based on Win/loss analysis',
        vtype: 'email'  // requires value to be a valid email address format
    }]
});
            app.add(scoringFields);
            console.log('scoringFields', this);

var dropDown = Ext.create('Ext.button.Split', {
    renderTo: Ext.getBody(),
    text: 'Options',
    // handle a click on the button itself
    handler: function() {
        alert("The button was clicked");
    },
    menu: new Ext.menu.Menu({
        items: [
            // these will render as dropdown menu items when the arrow is clicked:
            {text: 'Item 1', handler: function(){ alert("Item 1 clicked"); }},
            {text: 'Item 2', handler: function(){ alert("Item 2 clicked"); }}
        ]
    })
});
            app.add(dropDown);
            console.log('dropDown menu', this);

var myGrid = Ext.create('Rally.ui.grid.Grid', {
            	store: myStoryStore,
            	columnCfgs: [
            	'FormattedID', 'Name', 'Owner', 'ScheduleState'
            	]
            });

            console.log('my grid', myGrid);

            app.add(myGrid);
            console.log('what is this?', this);
    }

// launch: function() {
        //Write app code here
        // console.log('Our First App');

//         var myStore = Ext.create('Rally.data.wsapi.Store', {
//     model: 'User Story',
//     autoLoad: true,
//     listeners: {
//         load: function(myStore, myData, success) {
//             //process data
//             console.log('got data!', myStore, myData, success);

//             var myGrid = Ext.create('Rally.ui.grid.Grid', {
//             	store: myStore,
//             	columnCfgs: [
//             	'FormattedID', 'Name', 'Owner', 'ScheduleState'
//             	]
//             });

//             console.log('my grid', myGrid);

//             this.add(myGrid);
//             console.log('what is this?', this);
//         },
//         scope: this
//     },
//     fetch: ['FormattedID', 'Name', 'Owner', 'ScheduleState']
// });
//     }
});
