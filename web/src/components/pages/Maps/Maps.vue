<template>
	<v-container grid-list-md>
		<v-layout row wrap>
			<v-flex xs12>
				<h4>{{title}}</h4>
			</v-flex>
			<v-flex xs12>
				<v-card class="map-container">
					<v-toolbar class="white map-search" floating dense>
							<v-text-field prepend-icon="search" hide-details single-line></v-text-field>
							<v-btn icon>
								<v-icon>my_location</v-icon>
							</v-btn>
							<v-btn icon>
								<v-icon>more_vert</v-icon>
							</v-btn>
					</v-toolbar>
					<gmap-map
										:center="{lat:1.38, lng:103.8}" 
										:zoom="12"
										style="width: 100%; height: 400px"
										class="map-canvas">
						<gmap-marker v-for="item in markers" :position="item.position" :icon="item.icon" :key="item.id"></gmap-marker>
							<gmap-info-window :position="{lat:1.10, lng:103.8}">
								<h4>Hello world!</h4>
								<p>texto ramdm para llenar el campo </p>
							</gmap-info-window>
					</gmap-map>
				</v-card>
			</v-flex>
			<v-flex xs12>
				<v-card>	 
					<v-list two-line subheader>
						<v-subheader inset>Avaible icons</v-subheader>
						<v-list-tile v-for="item in items2" v-bind:key="item.title" avatar @click="">
							<v-list-tile-avatar>
								<v-icon v-bind:class="[item.iconClass]">{{ item.icon }}</v-icon>
							</v-list-tile-avatar>
							<v-list-tile-content>
								<v-list-tile-title>{{ item.title }}</v-list-tile-title>
							</v-list-tile-content>
							<v-list-tile-action>
								<v-btn icon ripple>
									<v-icon class="grey--text text--lighten-1">info</v-icon>
								</v-btn>
							</v-list-tile-action>
						</v-list-tile>
					</v-list>
				</v-card>
				
			</v-flex>
			<v-flex xs12>
					<a href="https://github.com/xkjyeah/vue-google-maps/blob/HEAD/API.md#getting-started-with-npm" target="_blank"> documentation</a>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
	import icons from '../../../data/mapIcons';
	export default {
		data () {
			return {
				title:"Maps",
				markers:[
					{position:{lat:1.38,lng:103.8},icon:icons.markerRed,id:1},
					{position:{lat:1.39,lng:103.9},icon:icons.markerGreen,id:2},
					{position:{lat:1.40,lng:104},icon:icons.markerOrange,id:3},
				],
        items2: [
          { icon: 'location_on', iconClass: 'red white--text', title: 'Location red' },
          { icon: 'location_on', iconClass: 'green white--text', title: 'Location green' },
          { icon: 'location_on', iconClass: 'orange white--text', title: 'Location orange' },
          { icon: 'location_searching', iconClass: 'blue white--text', title: 'My location' },
          { icon: 'location_off', iconClass: 'deep-orange white--text', title: 'location of' },
        ]
			}
		}
	}
</script>
<style>
	.map-container {
		position: relative;
  }
	.map-container .map-search{
		z-index: 1;
		margin-left: 0 ;
		margin-top: 0;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>