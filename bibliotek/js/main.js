let app = new Vue({
	el: '#app',
	methods: {
		get_libraries_count: function() {
			let count = Math.round(this.libraries.length/4);
			if (this.libraries.length % 4 !== 0) {
				let counter = 1;
				count = count + 1;
				if (this.libraries.length % 4 >= 4) {
					for (let i = 1; i < this.libraries.length % 4; i++) {
						if (counter === 4) {
							counter = 1;
							count = count + 1;
						} else {
							counter = counter + 1;
						}
					}
				}
			}
			return count;
		},
		page_forward: function() {
			this.change_page(this.current_page + 1);
		},
		page_back: function() {
			this.change_page(this.current_page - 1);
		},
		change_page: function(index) {
			this.tmp_libraries = [];
			let counter = 1;
			for (let i = index*4; i < this.libraries.length; i++) {
				if (counter <= 4) {
					this.tmp_libraries.push(this.libraries[i]);
					counter = counter + 1;
				}
			}
			this.current_page = index;
			this.search = '';
		},
		startSearch: function () {
			if (this.search === '') {
				this.change_page(this.current_page);
			} else {
				this.tmp_libraries = this.libraries;
			}
		},
		openLibrary: function(title, description) {
			this.openModalData.title = title;
			this.openModalData.description = description;
		},
		openNewLibraryModal: function () {
			this.newLibraryModalData = {
				title: '',
				description: '',
				name: '',
				date: '',
				email: '',
			};
		},
		get_libraries: function() {
			let api_url = "https://enkeltapi.firebaseio.com/bibliotek/data.json";
			
			let Httpreq = new XMLHttpRequest(); // a new request
		    Httpreq.open("GET", api_url,false);
		    Httpreq.send(null);

		    let json_obj = Httpreq.responseText;
			return JSON.parse(json_obj);
		},
	},
	created: function() {
		this.libraries = this.get_libraries();
		this.change_page(0);
	},
	computed: {
		filtered_libraries: function() {
			return this.tmp_libraries.filter((library) => {
				return library.title.match(this.search);
			});
		},
	},
	data: {
		search: '',
		current_page: 0,
		newLibraryModalData: {
			title: '',
			description: '',
			name: '',
			date: '',
			email: '',
		},
		openModalData: {
			title: '',
			description: '',
		},
		tmp_libraries: [],
		libraries: [],
	},
});