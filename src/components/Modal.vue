<template>
	<div
		id="modal"
		class="modal-container"
		:class="{ off }"
		@click="toggleModal($event)"
	>
		<p>Please answer all questions</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			off: false,
		};
	},
	methods: {
		toggleModal(e) {
			if (e.target.id === "modal") {
				this.off = !this.off;
			}
		},
	},
};
</script>

<style lang="scss">
.modal-container {
	position: fixed;
	background: #282828e6;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: top 0.5s;
	cursor: pointer;

	p {
		background-color: #fff;
		padding: 1rem 3rem;
		border-radius: 0.5rem;
	}
}

.off {
	top: -100vh;
}
</style>
