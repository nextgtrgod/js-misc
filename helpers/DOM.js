;(function() {

	function DOM(selector) {

		let elements = [];

		if(selector) {
			if ((selector === document) || (selector === window)) {
				elements.push(selector);
			} else {
				if (selector.nodeType) {
					elements.push(selector);
				} else {
					elements = Array.from(document.querySelectorAll(selector));
				}
			}
		};


		return {
			elements,

			get: (url, callback) => {
					fetch(url, {method: 'get'})
						.then(response => response.json() )
						.then(data => callback(data) )
						.catch(error => console.error('request failed:', error));
				},

			trigger: (eventName, eventOptions) => {
				elements.forEach(element => {
					let event;
					if (window.CustomEvent) {
						event = new CustomEvent(eventName, eventOptions);
					} else {
						event = document.createEvent('CustomEvent');
						event.initCustomEvent(eventName, true, true, options);
					}
					element.dispatchEvent(event);
				});
			},

			// not ready
			// eq: (elementIndex) => {
			// 	if((elementIndex >= 0) && (elementIndex < elements.length)) {
			// 		return elements[elementIndex];
			// 	} else {
			// 		return -1;
			// 	}
			// },

			index: () => {
				let result;
				elements.forEach(element => {
					let children = element.parentNode.childNodes;
					let num = 0;
					for (let i = 0; i < children.length; i++) {
						if (children[i] === element) {
							result = num;
							return;
						}
						if (children[i].nodeType === 1) {
							num++;
						}
					}
					result = -1;
					return;
				});
				return result;
			},

			addClass: (className) => {
					elements.forEach(element => {
						if (element.classList) {
							element.classList.add(className);
						}					
						else {
							element.className += ' ' + className;
						}
					});
				},

			removeClass: (className) => {
					elements.forEach(element => {
						if (element.classList) {
							element.classList.remove(className);
						} else {
							let elementClasses = element.className.split(' ');
							let existingIndex = elementClasses.indexOf(className);

							if (existingIndex >= 0) {
								elementClasses.splice(existingIndex, 1);
							}
						}
					});
				},

			hasClass: (className) => {
					let result;
					elements.forEach(element => {
						let elementClasses = element.className.split(' ');
						let existingIndex = elementClasses.indexOf(className);

						if (existingIndex >= 0) {
							result = true
						} else {
							result = false
						}
					});
					return result;
				},
			
			toggleClass: (className) => {
					elements.forEach(element => {
						element.classList.toggle(className);
					});
				},

			// html: function html(newHTML) {
			// 		this.elements.forEach(function(element) {
			// 			element.innerHTML = newHtml;
			// 		});
			// 		return this;
			// 	},

			empty: () => {
					elements.forEach(element => {
						while(element.firstChild){
							element.removeChild(element.firstChild);
						};
					});
				},
			
			style: (attr, value) => {
					elements.forEach(element => {
						element.style[attr] = value;
					});
				},

			on: (event, handler) => {
					elements.forEach(element => {
						element.addEventListener(event, handler);
					});
				},
			
			once: (type, callback) => {
					elements.forEach(element => {
						element.addEventListener(type, function fn(event) {
							element.removeEventListener(type, fn);
							callback(event);
						});
					});
				}

		};
	};

	window.Y = DOM;

}());