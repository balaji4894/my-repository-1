'use strict';

/**
 * @ngdoc function
 * @name bootstrapLearningApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bootstrapLearningApp
 */
angular.module('bootstrapLearningApp')
  .controller('tableDemoCtrl', function ($scope,$route) {
    this.city={
    	cities:[{
    		country:"India",
    		states:[{
    			state:"TN",
    			cities:["Chennai","Trichy","Madurai"]
    		},{
    			state:"Maharashtra",
    			cities:["Mumbai","Pune","Nagpur"]
    		}]
    	},{
    		country:"USA",
    		states:[{
    			state:"TX",
    			cities:["Houston","San Antonio"]
    		}]
       	}]
    };

    this.rows=[{
    	country:'',
    	state:'',
    	city:'',
    	countries:[],
    	states:[],
    	cities:[],
    	resetCountry:function(){
    		country='',
    		countries=[]
    	},
    	resetState:function(){
    		state='',
    		states=[]
    	},
    	resetCity:function(){
    		city='',
    		cities=[]
    	}
    }]

    this.addRow=function(){
    	console.log("in add row");
    	this.rows.push({
    	country:'',
    	state:'',
    	city:'',
    	countries:[],
    	states:[],
    	cities:[]
   		});
    	console.log(this.rows)
    }

    this.removeRow=function(){
    	this.rows.pop();
    }
    this.findStates=function(country){
    	console.log("in find states");
    	var i;
    	for(i=0;i<this.city.cities.length;i++){
    		console.log(this.city.cities[i]);
    		if(this.city.cities[i].country==country){
    			console.log(this.city.cities[i]);
    			return this.city.cities[i].states;
    		}
    	}

    }

    this.findCities=function(states,state){
    	var i;
    	console.log(states);
    	for(i=0;i<states.length;i++){

    		if(states[i].state==state){
    			console.log(states);
    			return states[i].cities;
    		}
    	}


    }
    $scope.$route = $route;
  });
