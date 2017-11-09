//Components
import Login from './components/pages/Login/Login.vue';
import Home from './components/pages/Home/Home.vue';
import Charts from './components/pages/Charts/Charts.vue';
import Maps from './components/pages/Maps/Maps.vue';
import Calendar from './components/pages/Calendar/Calendar.vue';
import Proyects from './components/pages/Proyects/Proyects.vue';
import Report from './components/pages/Report/Report.vue';
import AddReport from './components/pages/AddReport/AddReport.vue';
import AddProyect from './components/pages/AddProyect/AddProyect.vue';

/*	{url:'/',icon:"home",title:'Home'},
	{url:'/login',icon:"perm_identity",title:'Login'},
	{url:'/charts',icon:"show_chart",title:'Charts'},
	{url:'/maps',icon:"map",title:'Maps'},
	{url:'/calendar',icon:'today',title:'Calendar'},
	{url:'/proyects',icon:'developer_board',title:'Proyects'},*/

export default [
	{path:'/',component:Home,icon:"home",title:'Home'},
	{path:'/login',component:Login,icon:"perm_identity",title:'Login'},
	{path:'/charts',component:Charts,icon:"show_chart",title:'Charts'},
	{path:'/maps',component:Maps,icon:"map",title:'Maps'},
	{path:'/calendar',component:Calendar,icon:'today',title:'Calendar'},
	{path:'/proyects',component:Proyects,icon:'developer_board',title:'Proyects'},
	{path:'/add_proyects',component:AddProyect,icon:'library_add',title:'Add Proyect'},
	{path:'/report',component:Report,icon:'assignment_turned_in',title:'Report'},
	{path:'/add_report',component:AddReport,icon:'playlist_add',title:'Add Report'},
]
