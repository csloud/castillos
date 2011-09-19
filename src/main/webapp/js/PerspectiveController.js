var THREE, window;

function PerspectiveController(window, renderer, camera, scene) {
	if(!(this instanceof PerspectiveController)) {
		throw 'Invalid constructor invocation';
	}
	
	this.window = window;
	this.renderer = renderer;
	this.camera = camera;
	this.scene = scene;
	this.projector = new THREE.Projector();
	
	this.radius = 1600;
	this.isMouseDown = false;
	this.theta = 45;
	this.phi = 60; 
	this.onMouseDownTheta = 45;
	this.onMouseDownPhi = 60;
	this.renderer = renderer;
	this.onMouseDownX = 0;
	this.onMouseDownY = 0;
	
	this.window.addEventListener('mousedown', this.onDocumentMouseDown, false);
	this.window.addEventListener('mouseup', this.onDocumentMouseUp, false);
	this.window.addEventListener('mousemove', this.onDocumentMouseMove, false);
}

PerspectiveController.prototype.onDocumentMouseDown = function(event){
	event.preventDefault();
	this.isMouseDown = true;
	
	this.onMouseDownTheta = this.theta;
    this.onMouseDownPhi = this.phi;
    
    this.onMouseDownX = event.clientX;
    this.onMouseDownY = event.clientY;
};
	
PerspectiveController.prototype.onDocumentMouseUp = function(event) {
	event.preventDefault();
	this.isMouseDown = false;

	this.onMouseDownX = event.clientX - this.onMouseDownX;
    this.onMouseDownY = event.clientY - this.onMouseDownY;
};

PerspectiveController.prototype.onDocumentMouseMove = function(event){
	event.preventDefault();
	
	if ( this.isMouseDown ) {

        this.theta = - ( ( event.clientX - this.onMouseDownX ) * 0.5 ) + this.onMouseDownTheta;
        this.phi = ( ( event.clientY - this.onMouseDownY ) * 0.5 ) + this.onMouseDownPhi;

        this.phi = Math.min( 180, Math.max( 0, this.phi ) );

        this.camera.position.x = this.radious * Math.sin( this.theta * Math.PI / 360 ) * Math.cos( this.phi * Math.PI / 360 );
        this.camera.position.y = this.radious * Math.sin( this.phi * Math.PI / 360 );
        this.camera.position.z = this.radious * Math.cos( this.theta * Math.PI / 360 ) * Math.cos( this.phi * Math.PI / 360 );
        this.camera.updateMatrix();
    }
	
	var ray = new THREE.Ray( this.camera.position, null );
	var mouse3D = this.projector.unprojectVector( new THREE.Vector3( ( event.clientX / this.renderer.domElement.width ) * 2 - 1, - ( event.clientY / this.renderer.domElement.height ) * 2 + 1, 0.5 ), this.camera );
    
	ray.direction = mouse3D.subSelf( this.camera.position ).normalize();
	
	//this.renderer.render(this.scene, this.camera);
};