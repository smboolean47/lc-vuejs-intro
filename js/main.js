const app = new Vue({
	el: '#root',
	data: {
		messaggio: "Ciao a tutti",
		mieClassi: "text-red"
	},
	methods: {
		cambiaColore: function() {
			// se this.mieClassi  è uguale a text-blue allora
			// this.mieClassi = text-red
			// altrimenti
			// this.mieClassi = text-blue
			if(this.mieClassi == 'text-blue') {
				this.mieClassi = 'text-red';
			} else {
				this.mieClassi = 'text-blue';
			}

			// this.mieClassi = this.mieClassi == 'text-blue' ? 'text-red' : 'text-blue';
		}
	}
});
