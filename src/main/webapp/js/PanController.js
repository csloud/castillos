var window;

function PanController(window) {
	if(!(this instanceof PanController)) {
		throw 'Invalid constructor invocation';
	}
	this.isMouseDown = false;
	this.window = window;
	
	this.window.addEventListener('mousedown', this.onDocumentMouseDown, false);
	this.window.addEventListener('mouseup', this.onDocumentMouseUp, false);
}

PanController.prototype.onDocumentMouseDown = function(event){
	event.preventDefault();
	this.isMouseDown = true;
};
	
PanController.prototype.onDocumentMouseUp = function(event) {
	event.preventDefault();
	this.isMouseDown = false;
	this.window.alert(this.isMouseDown);
};