//Dependencies 
import Vue from 'vue';
import App from './App.vue';
import style from  './libs/vuetify.min.css';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import VueCharts from 'vue-chartjs';
import { Bar, Line } from 'vue-chartjs';
import VueResource from 'vue-resource';
import VueApollo from 'vue-apollo';
import { ApolloClient, createBatchingNetworkInterface, createNetworkInterface } from 'apollo-client'
//import '/node_modules/vuetify/dist/vuetify.min.css'
import {store} from './store/store';	

// Create the apollo client
const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:4000/graphql',
  }),
  connectToDevTools: true,
});

//Apollo provider 
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

// Install the vue plugin
Vue.use(VueApollo);

//import charts component 
import BarChart from './components/Charts/BarChart';
import LineChart from './components/Charts/LineChart';
import DoughnutChart from './components/Charts/DoughnutChart';
import PieChart from './components/Charts/PieChart';
import RadarChart from './components/Charts/RadarChart';
import PolarChart from './components/Charts/PolarChart';
import BubbleChart from './components/Charts/BubbleChart';
//declarate the charts component
Vue.component('BarChart',BarChart);
Vue.component('LineChart',LineChart);
Vue.component('DoughnutChart',DoughnutChart);
Vue.component('PieChart',PieChart);
Vue.component('RadarChart',RadarChart);
Vue.component('PolarChart',PolarChart);
Vue.component('BubbleChart',BubbleChart);
//declarate the calendar component
import Calendar from './components/Utilities/Calendar/Calendar.vue';
Vue.component('Calendar',Calendar);
//declarate the alert component
import Alert from './components/Utilities/Alerts/Alerts.vue';
Vue.component('Alert',Alert);

//Router
import Routes from'./routes';

//Maps
const VueGoogleMaps = require('vue2-google-maps');

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBKcqfFOoOZZbc-jDc-6U8lILC8NrfQ7nY',
    v: '3.27',
    libraries: 'places',
		GmapMap:'gmap-map',
		GmapMarker:'gmap-marker',
		GmapCluster:'gmap-cluster',
		GmapInfoWindow:'gmap-infoWindow',
		GmapPolyline:'gmap-polyline',
		GmapPolygon:'gmap-polygon',
		GmapCircle:'gmap-circle',
		GmapRectangle:'gmap-rectangle',
		GmapPlaceInput:'gmap-placeInput',
  }
})

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(VueResource);

// Ruter 
const router = new VueRouter({
	routes: Routes,
	mode:'history'
});


new Vue({
	store:store,
  el: '#app',
	apolloProvider,
  render: h => h(App),
	router:router
})
