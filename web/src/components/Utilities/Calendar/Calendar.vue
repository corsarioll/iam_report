<template>
  <v-container grid-list-md text-xs-center>
		<v-layout row wrap>
			<v-flex xs8 class="calendar">
				
				<div class="date-select">
					<div class="selects">
						<v-btn flat icon class="select-arrow" v-on:click="changeMonth(-1)">
              <v-icon>keyboard_arrow_left</v-icon>
            </v-btn>
						<div class="select-item month">
							<v-select
									v-bind:items="months"
									v-model="date.month"
									label="month"
									single-line
									item-value="id"
									bottom
								>
							</v-select>
						</div>	
						<div class="select-item">
							<v-select
								v-bind:items="years"
								v-model="date.year"
								label="year"
								single-line
								bottom
							></v-select>
						</div>
						
						<v-btn flat icon class="select-arrow" v-on:click="changeMonth(1)">
              <v-icon>keyboard_arrow_right</v-icon>
            </v-btn>
						
					</div>
				</div>
				
				<div class="day-label">
					<p>Sun</p>
				</div>
				<div class="day-label">
					<p>Mon</p>
				</div>
				<div class="day-label">
					<p>Tue</p>
				</div>
				<div class="day-label">
					<p>Wed</p>
				</div>
				<div class="day-label">
					<p>Thu</p>
				</div>
				<div class="day-label">
					<p>Fri</p>
				</div>
				<div class="day-label">
					<p>Sat</p>
				</div>
				<div class="day" v-for="item in daysArray" :key="item.id" v-bind:class="{block:item.over,active:select == item.id}" v-on:click="select = item.id; date.day = item.day">
					
					<h6>{{item.day}}</h6>
					<div class="text-xs-center" v-if="!item.over">
						<v-badge left>
							<span slot="badge">{{item.items.length}}</span>
							<v-icon large color="grey lighten-1">recent_actors</v-icon>
						</v-badge>
					</div>
					<div class="underline" v-if="select == item.id"></div>
				</div>
			</v-flex>
			<v-flex xs4>
				<v-card height="185px" flat color="cyan darken-3">
          <v-card-text class="date-title">
						<h3>{{date.day}}</h3>
						<h6>{{date.year}} - {{date.month}}</h6>
          </v-card-text>
        </v-card>
				<div class="report-list">
					<v-list two-line subheader>
						<v-subheader inset>Reports	</v-subheader>
						<v-list-tile avatar v-for="item in items" v-bind:key="item.title" @click="">
							<v-list-tile-avatar>
								<v-icon v-bind:class="[item.iconClass]">assignment_ind</v-icon>
							</v-list-tile-avatar>
							<v-list-tile-content>
								<v-list-tile-title>{{ item.name }}</v-list-tile-title>
								<v-list-tile-sub-title>{{ item.reporter }}</v-list-tile-sub-title>
							</v-list-tile-content>
							<v-list-tile-action>
								<v-btn icon ripple>
									<v-icon color="grey lighten-1">visibility</v-icon>
								</v-btn>
							</v-list-tile-action>
						</v-list-tile>
					</v-list>
				</div>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
	export default {
		data () {	
			var currentTime = new Date();
			return {
				title:"Calendar",
				days:0,
				select: 1,
				date: {
					year : currentTime.getFullYear(),
					month: currentTime.getMonth() + 1,
					day: currentTime.getDate()
				},
				items: [
          { iconClass: 'grey lighten-1 white--text', name: 'Photos', reporter: 'Daniel 1' },
          { iconClass: 'grey lighten-1 white--text', name: 'Recipes', reporter: 'Daniel 2' },
          { iconClass: 'grey lighten-1 white--text', name: 'Work', reporter: 'Diego' },
        ],
				months:[
					{text:'January',id:1},
					{text:'February',id:2},
					{text:'March',id:3},
					{text:'April',id:4},
					{text:'May',id:5}, 
					{text:'June',id:6}, 
					{text:'July',id:7}, 
					{text:'August',id:8}, 
					{text:'September',id:9},
					{text:'October',id:10}, 
					{text:'November',id:11}, 
					{text:'December',id:12}
				],
				years :[
					currentTime.getFullYear()
				],
				daysArray:[
				]
			}
		},
		methods:{
			daysGenerate (){
				var date = new Date(this.date.year, this.date.month, 0)
				this.days = date.getDate();
			},
			changeMonth (num){
				this.date.month  = this.date.month + num;
				if (this.date.month > 12){
					this.date.month = 1;
					this.date.year ++;
				}else if (this.date.month == 0 ){
					this.date.month = 12;
					this.date.year --;
				};
				this.daysGenerate ()
				var weekDay = new Date(this.date.year,this.date.month-1,1).getDay()
				var d = new Date();
				var total = new Date(this.date.year, this.date.month-2, 0).getDate()
				var before = new Date(this.date.year, this.date.month -3, 0).getDate()
				this.daysArray = []
				for (var i = 0 ; i < weekDay; i ++){
					//this.daysArray.push(before - i)
					this.daysArray.push({
						day:before - i,
						over:true,
						id:this.daysArray.length
					})
				}
				for (var i = 0; i < total; i++){
					this.daysArray.push({
						day:i+1,
						over:false,
						id:this.daysArray.length,
						items:['sad','asd','asas']
					})
				}
				//display select te actual day 
				for (var i = 0; i < this.daysArray.length;i++){
					if(this.daysArray[i].id == this.date.day){
						this.select = this.date.day + this.daysArray[i].id - this.daysArray[i].day
					}
				}
			},
			dayClick (){
				
			}
		},
		mounted (){
			this.daysGenerate();
			this.changeMonth(0);
			//generate list of years 
			for (var i = 0;i < 3; i++  ){
				this.years.push(this.date.year--);
			};
			this.date.year = this.years[0];
		}
	}
</script>
<style lang="scss" scoped>
	.report-list{
		overflow-x: scroll;
		overflow-y: hidden;
	}
	.calendar .day{
		width: 14%;
		float: left;
		border-bottom: 1px solid #bdbdbd;
		height: 100px;
		cursor: pointer;
		position: relative;
	}
	.calendar .day.block{
		pointer-events: none;
	}
	.calendar .day.block h6{
		color: #bdbdbd;
	}
	.calendar .day .underline{
		height: 5px;
		position: absolute;
		bottom: 0px;
		width: 100%;
		background-color: #ffb300;
	}
	.calendar .day-label{
		width: 14%;
		float: left;
		border-bottom: 1px solid #bdbdbd;
	}
	.calendar .date-select{
		float: left;
		width: 100%;
		position: relative;
		height: 100px;
	}
	.calendar .date-select .selects{
		position: absolute;
		left: 50%;
		width: 390px;
		-webkit-transform: translateX(-50%);
		-moz-transform: translateX(-50%);
		-ms-transform: translateX(-50%);
		-o-transform: translateX(-50%);
		transform: translateX(-50%);
	}
	.calendar .date-select .selects .select-item{
		width: 100px;
		float: left;
	}
	.calendar .date-select .selects .select-arrow{
		float: left;
		margin-top: 15px;
	}
	.calendar .date-select .selects .select-item.month{
		width: 140px;
		margin-right: 10px;
	}
	.calendar .active{
		background-color: #fff;	
		-webkit-box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
    box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
	}
	.calendar .day h6{
		text-align: left;
		padding-left: 20px;
		padding-top: 20px;
		color: #616161;
	}
	.date-title{
		text-align: left;
		color: #fff;
	}
	.date-title h3{
		margin-top: 70px;
	}
	
	/*Styles corrections */
	.badge__badge.primary span{
		z-index: 1;
	}
</style>