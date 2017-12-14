//Components
//import Login from './components/pages/Login/Login.vue';
import Home from './components/pages/Home/Home.vue';
import Charts from './components/pages/Charts/Charts.vue';
import Maps from './components/pages/Maps/Maps.vue';
import Calendar from './components/pages/Calendar/Calendar.vue';
import Projects from './components/pages/Projects/Projects.vue';
import Report from './components/pages/Report/Report.vue';
import AddReport from './components/pages/AddReport/AddReport.vue';
import AddProject from './components/pages/AddProject/AddProject.vue';
import Users from './components/pages/Users/users.vue';
import AddUser from './components/pages/AddUser/AddUser.vue';

/*	{url:'/',icon:"home",title:'Home'},
	{url:'/login',icon:"perm_identity",title:'Login'},
	{url:'/charts',icon:"show_chart",title:'Charts'},
	{url:'/maps',icon:"map",title:'Maps'},
	{url:'/calendar',icon:'today',title:'Calendar'},
	<i class="material-icons">person_add</i>
	{url:'/proyects',icon:'developer_board',title:'Projects'},*/
export default [
	{path:'/',component:Home,icon:"home",title:'Home',roleReq:4},
	{path:'/charts',component:Charts,icon:"show_chart",title:'Charts',roleReq:4},
	{path:'/maps',component:Maps,icon:"map",title:'Maps',roleReq:4},
	{path:'/calendar',component:Calendar,icon:'today',title:'Calendar',roleReq:4},
	{path:'/proyects',component:Projects,icon:'developer_board',title:'Projects',roleReq:4},
	{path:'/add_proyects',component:AddProject,icon:'library_add',title:'Add Proyect',roleReq:1},
	{path:'/report',component:Report,icon:'assignment_turned_in',title:'Report',roleReq:4},
	{path:'/add_report',component:AddReport,icon:'playlist_add',title:'Add Report',roleReq:4},
	{path:'/users',component:Users,icon:'supervisor_account',title:'Users',roleReq:2},
	{path:'/addUser',component:AddUser,icon:'person_add',title:'Add User',roleReq:2},
]
