<template>
	<f7-page>
		<f7-navbar back-link="Cancel" title="New Contact" sliding></f7-navbar>
		<f7-block>
			<f7-row>
				<f7-col width="25">
					<img class="img-fluid" src="../static/user-icon-placeholder.png">
				</f7-col>
				<f7-col width="75">
					<f7-list class="top" no-hairlines-md>
						<f7-list-item>
							<f7-input type="text" placeholder="First name" required clear-button/>
						</f7-list-item>
						<f7-list-item>
							<f7-input type="text" placeholder="Last name" required clear-button/>
						</f7-list-item>
					</f7-list>
				</f7-col>
			</f7-row>
			<f7-list class="top">
				<f7-list-item>
					<input type="text" v-model="dateOfBirt" placeholder="Select date" readonly="readonly" id="calendar-modal">
				</f7-list-item>
				<f7-list-item>
					<f7-input type="text" placeholder="Username" required clear-button/>
				</f7-list-item>
				<f7-list-item>
					<f7-input type="textarea" placeholder="Note" required clear-button/>
				</f7-list-item>
			</f7-list>
		</f7-block>
	</f7-page>

</template>

<script>
export default {
	data() {
		return {
			firstName: '',
			lastName: '',
			dateOfBirt: '',
			username: '',
			node: '',
		}
	},
	on: {
		pageInit(e) {
			this.calendarModal = this.$f7.calendar.create({
				inputEl: "#calendar-modal",
				openIn: "customModal",
				header: true,
				footer: true,
				dateFormat: "MM dd yyyy"
			});
		}
	},
	pagetBeforeRemove() {
		this.calendarModal.destroy();
	}
};
</script>

<style scoped>
.img-fluid {
  max-width: 100%;
  margin: 10%;
}

.top {
  margin: 0px;
}
</style>
