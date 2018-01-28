<template>
	<f7-page>
		<f7-navbar back-link="Back" title="Contacts" sliding></f7-navbar>

		<f7-list contacts>
			<f7-list-group>
				<f7-list-item title="All" group-title></f7-list-item>
				<f7-list-item v-for="(contact, index) in allContacts" :key="contact._id" :title="contact.lastName" @swipeout:delete="swipeDelete(index)" swipeout>
					<f7-swipeout-actions>
						<f7-swipeout-button delete>Delete</f7-swipeout-button>
					</f7-swipeout-actions>
				</f7-list-item>
			</f7-list-group>
		</f7-list>
		<f7-fab color="red" @click="gotoAbout">
			<f7-icon if-ios="f7:add" if-material="material:add"></f7-icon>
		</f7-fab>
	</f7-page>
</template>

<script>

export default {
	data() {
		return {
			allContacts: [],
		}
	},
	methods: {
		async refresh() {
			this.allContacts = await this.$axios.$get('contact');
		},
		gotoAbout() {
			this.$f7router.navigate('/addContact');
		},
		swipeDelete(index) {
			console.log(this.allContacts[index]);
			this.$axios.$post('contact', {
				action: 'remove',
				data: {
					userName: this.allContacts[index].userName
				}
			})
		}
	},
	mounted() {
		this.refresh();
	}
	
};
</script>

<style>

</style>
