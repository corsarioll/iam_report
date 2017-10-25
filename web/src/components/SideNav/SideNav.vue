<template>
	<v-list class="pa-0">
		<v-list-tile avatar tag="div">
			<v-list-tile-avatar>
				<img src="https://randomuser.me/api/portraits/men/85.jpg" />
			</v-list-tile-avatar>
			<v-list-tile-content>
				<v-list-tile-title>John Leider</v-list-tile-title>
			</v-list-tile-content>
			<v-list-tile-action>
				<v-btn icon @click.native.stop="mini = !mini">
					<v-icon>chevron_left</v-icon>
				</v-btn>
			</v-list-tile-action>
		</v-list-tile>
	</v-list>
</template>