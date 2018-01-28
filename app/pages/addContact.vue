<template>
	<f7-page>
		<f7-navbar back-link="Cancel" title="New Contact">
			<f7-nav-right sliding>
				<f7-link @click="submit">Save</f7-link>
			</f7-nav-right>
		</f7-navbar>
		<f7-block>
			<f7-row>
				<f7-col width="25">
					<img class="img-fluid" src="../static/user-icon-placeholder.png">
				</f7-col>
				<f7-col width="75">
					<f7-list class="top" no-hairlines-md inset>
						<f7-list-item>
							<div class="item-input-wrap">
								<input type="text" v-model="firstName" placeholder="First name"/>
								<span class="input-clear-button"></span>
							</div>
						</f7-list-item>
						<f7-list-item>
							<div class="item-input-wrap">
								<input type="text" v-model="lastName" placeholder="Last name"/>
								<span class="input-clear-button"></span>
							</div>
						</f7-list-item>
					</f7-list>
				</f7-col>
			</f7-row>
		</f7-block>
		<f7-list class="top" inset>
			<f7-list-item>
				<div class="item-input-wrap">
					<div class="item-input-wrap">
						<input readonly="readonly" type="text" placeholder="Select date" id="calendar-modal">
					</div>
				</div>
			</f7-list-item>
			<f7-list-item>
				<div class="item-input-wrap">
					<div class="item-input-wrap">
						<input type="text" v-model="username" placeholder="Username">
						<span class="input-clear-button"></span>
					</div>
					
				</div>
			</f7-list-item>
			<f7-list-item>
				<div class="item-input-wrap">
					<div class="item-input-wrap">
						<textarea class="input-with-value" type="textarea" v-model="note" placeholder="Note"/>
						<span class="input-clear-button"></span>
					</div>
				</div>
			</f7-list-item>
		</f7-list>
	</f7-page>

</template>

<script>
import index from './index'

export default {
	data() {
		return {
			firstName: '',
			lastName: '',
			dateOfBirth: '',
			username: '',
			note: '',
		}
	},
	methods: {
		async submit() {
			if(!this.firstName || this.firstName === '') return;
			if(!this.lastName || this.lastName === '') return;
			if(!this.dateOfBirth || this.dateOfBirth === '') return;
			if(!this.username || this.username === '') return;
			if(!this.note || this.note === '') return;

			let result = await this.$axios.$post("contact", {
				action: 'add',
				data: {
					firstName: this.firstName,
					lastName: this.lastName,
					dateOfBirth: this.dateOfBirth,
					userName: this.username,
					note: this.note
				}
			});
			if(result.created_at) {
				index.refresh();
				this.$f7router.back();
			}
		}
	},
	on: {
		pageInit(e) {
			this.calendarModal = this.$f7.calendar.create({
				inputEl: "#calendar-modal",
				openIn: "customModal",
				header: true,
				footer: true,
				dateFormat: 'd MM, yyyy'
			});
			this.calendarModal.on('close', () => {
				this.dateOfBirth = this.calendarModal.getValue()[0];
			})
		}
	},
	pageBeforeRemove() {
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
