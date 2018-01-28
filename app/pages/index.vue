<template>
	<f7-page>
		<f7-navbar back-link="Back" title="Contacts" sliding></f7-navbar>

		<f7-list contacts>
			<f7-list-group>
				<f7-list-item title="All" group-title></f7-list-item>
				
				<transition-group name="list-change" mode="in-out">


					<f7-list-item class="slow-move" v-for="(contact, index) in allContacts" :key="contact" :title="contact.lastName" swipeout>
						<f7-swipeout-actions>
							<f7-swipeout-button @click="swipeDelete(index)" class="delete-swipeout" style="background: red">Delete</f7-swipeout-button>
						</f7-swipeout-actions>
					</f7-list-item>




				</transition-group>


			</f7-list-group>
		</f7-list>
		<f7-fab color="red" @click="gotoAddContact">
			<f7-icon if-ios="f7:add" if-material="material:add"></f7-icon>
		</f7-fab>



		<f7-popover class="popover-menu">
			<f7-list>
				<f7-list-item link="/dialog/" popover-close title="Dialog"></f7-list-item>
				<f7-list-item link="/tabs/" popover-close title="Tabs"></f7-list-item>
				<f7-list-item link="/panel/" popover-close title="Side Panels"></f7-list-item>
				<f7-list-item link="/list/" popover-close title="List View"></f7-list-item>
				<f7-list-item link="/inputs/" popover-close title="Form Inputs"></f7-list-item>
			</f7-list>
		</f7-popover>
	</f7-page>
</template>

<script>

export default {
	data() {
		return {
			allContacts: [
				{lastName: "sfsdfsd"},
				{lastName: "sfsdfsd"},
				{lastName: "sfsdfsd"},
				{lastName: "sfsdfsd"},
				{lastName: "sfsdfsd"},
				{lastName: "sfsdfsd"},
				{lastName: "sfsdfsd"},
				{lastName: "sfsdfsd"},
				{lastName: "sfsdfsd"},
				{lastName: "sfsdfsd"},
				{lastName: "sfsdfsd"},
				{lastName: "sfsdfsd"},
			],
		}
	},
	methods: {
		async refresh() {
			this.allContacts = await this.$axios.$get('contact');
		},
		gotoAddContact() {
			this.$f7router.navigate('/addContact');
		},
		async swipeDelete(index) {
			console.log(this.allContacts[index]);
			let result = await this.$axios.$post('contact', {
				action: 'remove',
				data: {
					userName: this.allContacts[index].userName
				}
			});
			if(result.ok === 1);
				this.allContacts.splice(index, 1);
		}
	},
	mounted() {
		// this.refresh();
	}
	
};
</script>

<style>
.slow-move {
	transition: all 0.5s ease-out;
}

.list-change-move {
	transition: all 0.5s ease-out;
}
</style>
