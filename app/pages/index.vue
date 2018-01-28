<template>
	<f7-page>
		<f7-navbar back-link="Back" title="Contacts" sliding></f7-navbar>

		<f7-list contacts>
			<f7-list-group>
				<f7-list-item title="All" group-title></f7-list-item>
				
				<transition-group name="list-change" mode="in-out">


					<f7-list-item class="slow-move" v-for="(contact, index) in allContacts" :key="contact._id" :title="contact.lastName" swipeout>
						<f7-swipeout-actions>
							<f7-swipeout-button @click="swipeDelete(index)" class="delete-swipeout" delete>Delete</f7-swipeout-button>
						</f7-swipeout-actions>
					</f7-list-item>



				</transition-group>


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
		async swipeDelete(index) {
			console.log(this.allContacts[index]);
			let result = await this.$axios.$post('contact', {
				action: 'remove',
				data: {
					userName: this.allContacts[index].userName
				}
			});
			if(result.ok === 1)
				this.allContacts.splice(index, 1);
		}
	},
	mounted() {
		this.refresh();
	}
	
};
</script>

<style>
.delete-swipeout {
	background: red;
}

.slow-move {
	transition: all 0.5s ease-out;
}

.list-change-item {
  transition: all 0.5s;
  display: inline-block;
}
.list-change-enter,
.list-change-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-change-enter-active {
  position: relative;
}
.list-change-leave-active {
  position: absolute;
}
.list-change-enter-to,
.list-change-leave {
  opacity: 1;
}
</style>
