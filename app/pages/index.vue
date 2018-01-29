<template>
	<f7-page>
		<f7-navbar title="Contacts" sliding>
			<f7-nav-right>
				<f7-link @click="sorting = !sorting" sortable-toggle=".sortable">{{sorting ? "Done" : "Edit"}}</f7-link>
			</f7-nav-right>
		</f7-navbar>
		<span>{{sorting}}</span>
		<f7-list contacts sortable>
			<f7-list-item title="All" group-title></f7-list-item>
			
			<!--<transition-group name="list-change" mode="in-out">-->


				<f7-list-item class="slow-move" href="#" @swipeout="sorting = false" @taphold="gotoAddContact" v-for="(contact, index) in allContacts" :key="contact.userName" :title="contact.lastName" :swipeout="!sorting">
					<f7-swipeout-actions v-if="!sorting">
						<f7-swipeout-button @click="openPopOver($event.srcElement)">More</f7-swipeout-button>
						<f7-swipeout-button delete @click="swipeDelete(index)" class="delete-swipeout" style="background: red">Delete</f7-swipeout-button>
					</f7-swipeout-actions>
				</f7-list-item>




		</transition-group>

		</f7-list>
		<f7-fab color="skyblue" @click="gotoAddContact">
			<f7-icon if-ios="f7:add" if-material="material:add"></f7-icon>
		</f7-fab>
		<f7-popover ref="popMenuElement" class="popover-menu">
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
import {f7Popover} from 'framework7-vue'


export default {
	data() {
		return {
			allContacts: [],
			sorting: false,
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
		},
		openPopOver(element) {
			this.$refs.popMenuElement.open(element);
		}
	},
	mounted() {
		this.refresh();
	},
	components: {
		f7Popover
	}
};
</script>

<style scoped>
.slow-move {
	transition: all 0.1s ease-out;
}

.list-change-move {
	transition: all 0.1s ease-out;
}

.fill-container {
	max-width: 100%;
	position: relative;
}

</style>
