class CursorEl {
	constructor({el, speed, coef=1, position}) {
		this.el= el;
		this.speed= speed;
		this.coef= coef;
		this.position= position;
		this.state="Normal";
	}

	updateElNormal() {
		this.setHover(false);

		this.el.style.removeProperty("--w");
		this.el.style.removeProperty("--h");
		this.el.style.left = this.position.x + "px";
		this.el.style.top = this.position.y + "px";
	}

	updateElHover() {
		this.el.style.left = this.position.x + "px";
		this.el.style.top = this.position.y + "px";
	}

	updateElHidden() {
		this.el.style.left = this.position.x + "px";
		this.el.style.top = this.position.y + "px";
	}

	getDistanceFromMouse(mouse) {
		return {
			x: mouse.x - this.position.x,
			y: mouse.y - this.position.y
		};
	}

	updatePositionFromMouse(mouse) {
		let dist = this.getDistanceFromMouse(mouse);

		this.position = {
			x: this.position.x + dist.x * this.speed,
			y: this.position.y + dist.y * this.speed
		};
		return this;
	}

	updateDisplacementFromMouse(mouse) {
		let dist = this.getDistanceFromMouse(mouse);

		this.position = {
			x: this.position.x + dist.x * this.coef,
			y: this.position.y + dist.y * this.coef
		};
		return this;
	}

	updateEl() {
		this.setHover(this.state == "Hover");	
		this["updateEl"+this.state]();
	}



	// setters 	
	setState(state) {
		this.state = state;
	}

	setHidden(isHidden) {
		this.el.classList.toggle('hide', isHidden);
	}

	setHover(isHover) {
		this.el.classList.toggle('hover', isHover);
	}

	setHoverAlt(isHover) {
		this.el.classList.toggle('hover-alt', isHover);
	}

	setHoveringElement(element) {
		// this.setState('Hover')
		this.elHovered = element;
	}
}




class SuperCursor {
	constructor() {
		this.props = {
			normal: {
				h: '3rem',
				w: '3rem'
			},

		}

		this.el = document.getElementById('superCursor');

		this.state="Disabled";
		this.stateOn = {
			hover: [
				// 'a', 
				'.hoverable',
				'.underline', 
				'.list-subitem span'
			],
			hoverAlt: [
				'.hoverable-alt'
			],
			hide: [
				'.hideCursor',
				'.pageArrow',
			],
		}

		this.mouse = {
			x: window.innerWidth/2,
			y: window.innerHeight/2
		};


		this.pointer = new CursorEl({
			el: document.getElementById("superCursor-pointer"),
			speed: 0.9,
			coef: 0.8,
			position: {...this.mouse},
			props: {
				hover: hoverElCoords=>({
					h: '7rem',
					w: '7rem'
				})
			}
		})

		this.pointer.updateElHover = function() {
			let hvrElCoords = this.elHovered.getBoundingClientRect();
	

			this.updateDisplacementFromMouse({
				x: hvrElCoords.left + hvrElCoords.width/2,
				y: hvrElCoords.top + hvrElCoords.height/2,
			});

			// this.el.style.setProperty("--w", hvrElCoords.width*1.3+"px");
			// this.el.style.setProperty("--h", hvrElCoords.height*2+"px");

			this.el.style.setProperty("--w", hvrElCoords.width*1.2+"px");	
			this.el.style.setProperty("--h", hvrElCoords.height*1.5+"px");

			this.el.style.left = this.position.x + "px";
			this.el.style.top = this.position.y + "px";
		}

		this.outter = new CursorEl({
			el: document.getElementById("superCursor-outter"),
			speed: 0.15,
			position: {...this.mouse},
			props: {
				hover: hoverElCoords=>({
					h: '7rem',
					w: '7rem'
				})
			}
		});

		this.outter.updateElHover = function() {
			let hvrElCoords = this.elHovered.getBoundingClientRect();

			// this.el.style.setProperty("--w", hvrElCoords.height*2.3+"px");
			// this.el.style.setProperty("--h", hvrElCoords.width*1.6+"px");


			// this.el.style.setProperty("--w", hvrElCoords.height*2.1+"px");
			// this.el.style.setProperty("--h", hvrElCoords.width*1.4+"px");
			
			this.el.style.setProperty("--w", "2rem");
			this.el.style.setProperty("--h", "2rem");

			this.el.style.left = this.position.x + "px";
			this.el.style.top = this.position.y + "px";
		}

		

		


		document.addEventListener("mouseleave", ()=>this.setHidden(true));
		document.addEventListener("mouseenter", ()=>this.setHidden(false));
	
		document.addEventListener("mousemove", (event)=>{
			if(this.state=="Disabled") return;
			this.mouse = {
				x: event.pageX,
				y: event.pageY
			}

			const elHovered = document.elementFromPoint(this.mouse.x, this.mouse.y);
			var realElHovered = elHovered;

			let shouldHide = false;
			for(let hideSelector of this.stateOn.hide) {
				shouldHide = elHovered.matches(hideSelector) || elHovered.closest(hideSelector);
				if(shouldHide!==false && shouldHide !==null) {
					break;
				}
			}
			this.setHidden(shouldHide);
	
			let shouldHover = false;
			for(let hoverSelector of this.stateOn.hover) {
				shouldHover = elHovered.matches(hoverSelector) || elHovered.closest(hoverSelector);
				if(shouldHover!==false && shouldHover !==null) {
					if(shouldHover !==true) {
						realElHovered = shouldHover;
					} 
					this.hoverElement(realElHovered);
					break;
				} else {
					this.setState('Normal');
				}
			}


			if(this.state!=="hover") {
				let shouldHoverAlt = false;
				for(let hoverAltSelector of this.stateOn.hoverAlt) {
					shouldHoverAlt = elHovered.matches(hoverAltSelector) || elHovered.closest(hoverAltSelector);
					if(shouldHoverAlt!==false && shouldHoverAlt !==null) {
						break;
					} 
				}
				this.setHoverAlt(shouldHoverAlt);
			}

			// this.setHover(shouldHover);
			this.setHover(false);
		});
	}

	enable() {
		this.el.classList.remove('hide');
		this.setState("Normal");
		document.body.classList.add('noCursor');
		this.animate();
	}
	disable() {
		this.el.classList.remove('hide');
		this.setState("Disabled");
		document.body.classList.remove('noCursor');
	}

	animate() {
		if(this.state=="Disabled") return;

		this.outter.updatePositionFromMouse(this.mouse);
		this.pointer.updatePositionFromMouse(this.mouse);

		this.outter.updateEl();
		this.pointer.updateEl();

		requestAnimationFrame(this.animate.bind(this));
	}

	hoverElement(hvrEl) {
		this.setState('Hover');
		this.outter.setHoveringElement(hvrEl);
		this.pointer.setHoveringElement(hvrEl);
		// let hvrElCoords = hvrEl.getBoundingClientRect();

		// this.cursor = {
		// 	x: hvrElCoords.left + hvrElCoords.width/2,
		// 	y: hvrElCoords.top + hvrElCoords.height/2,
		// }

		// this.el.style.setProperty("--w", hvrElCoords.width+"px");
		// this.el.style.setProperty("--h", hvrElCoords.height+"px");
		// this.el.style.width = ;
		// this.el.style.height = ;
		// console.log(hvrElCoords);
	}

	setState(state) {
		this.outter.setState(state);
		this.pointer.setState(state);
		this.state = state;
	}

	setHidden(isHidden) {
		this.outter.setHidden(isHidden);
		this.pointer.setHidden(isHidden);
	}

	setHover(isHover) {
		this.outter.setHover(isHover);
		this.pointer.setHover(isHover);
	}

	setHoverAlt(isHover) {
		this.outter.setHoverAlt(isHover);
		this.pointer.setHoverAlt(isHover);
	}

}
window.addEventListener('DOMContentLoaded', function() {
	window.superCursor = new SuperCursor();
	if(!mobileAndTabletCheck()) {
		superCursor.enable();
	}
});