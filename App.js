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
