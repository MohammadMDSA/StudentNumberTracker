<template>
	<f7-page>
		<f7-navbar back-link="Back" title="Contacts" sliding></f7-navbar>

		<f7-list contacts>
			<f7-list-group v-for="(group, index) in contacts" :key="index">
				<f7-list-item :title="index" group-title></f7-list-item>
				<f7-list-item v-for="contact in group" :key="contact.name" :title="name"></f7-list-item>
			</f7-list-group>
		</f7-list>
		<!-- <f7-fab color="red">
			<f7-icon if-ios="f7:add" if-material="material:add"></f7-icon>
		</f7-fab> -->
	</f7-page>
</template>

<script>
import Router from ''

export default {
	data() {
		return {
			contacts: {
				'$': [],
				'A': [],
				'B': [],
				'C': [],
				'D': [],
				'E': [],
				'F': [],
				'G': [],
				'H': [],
				'I': [],
				'J': [],
				'K': [],
				'L': [],
				'M': [],
				'N': [],
				'o': [],
				'P': [],
				'Q': [],
				'R': [],
				'S': [],
				'T': [],
				'U': [],
				'V': [],
				'W': [],
				'X': [],
				'Y': [],
				'X': [],
			}
		}
	},
	methods: {
		async refresh() {
			const all = await this.$axios.$get();
			console.log(all);
			all.forEach((item) => {
				let name;
				let unknown = false;
				if(item.lastName !== undefined)
					name = item.lastName;
				else if(item.firstName != undefined)
					name = item.firstName;
				else {
					name = 'Unknown'
					
					unknown = true;
				}
				if(unknown)
					this.contacts.$.push(item);
				else {
					var k = name.charAt(0).toUpperCase();
					this.contacts[k].push(item);
				}

			});
		}
	}
};
</script>

<style>

</style>
