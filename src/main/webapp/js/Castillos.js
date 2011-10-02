var Castillos = function(){
	if(!(this instanceof Castillos)) {
		throw 'Invalid function invocation';
	}
};

var THREE, window, requestAnimationFrame, PerspectiveController,
	camera, scene, renderer, geometry, material, mesh, projector;

Castillos.prototype.init = function(){

	//camera = new THREE.Camera( 50, window.innerWidth / window.innerHeight, 1, 10000 );
	//camera.position.z = 1000;
	camera = this.initCamera();

	projector = new THREE.Projector();
	
    scene = new THREE.Scene();
    
    geometry = new THREE.CubeGeometry( 400, 200, 200 );
    
    material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
    
    mesh = new THREE.Mesh( geometry, material );
    mesh.rotation.x = 0.10;
    mesh.rotation.y = 0.65;
    mesh.position.z = -200;
    
    scene.addObject( mesh );

    this.initGrid();
    
    renderer = new THREE.CanvasRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    //TODO: can we have the renderer work with an existing element? 
    document.body.appendChild( renderer.domElement );
    camera.domelement = renderer.domElement ;
    renderer.render( scene, camera );
    
};

Castillos.prototype.initGrid = function() {
	
	var geometry, linesMaterial, plane, i, line;
	
	geometry = new THREE.Geometry();
	geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( - 500, 0, 0 ) ) );
	geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( 500, 0, 0 ) ) );
	
	linesMaterial = new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } );

	for ( i = 0; i <= 20; i ++ ) {

		line = new THREE.Line( geometry, linesMaterial );
		line.position.z = ( i * 50 ) - 500;
		scene.addObject( line );

		line = new THREE.Line( geometry, linesMaterial );
		line.position.x = ( i * 50 ) - 500;
		line.rotation.y = 90 * Math.PI / 180;
		scene.addObject( line );

	}
	
	plane = new THREE.Mesh( new THREE.PlaneGeometry( 1000, 1000 ), linesMaterial );
	plane.rotation.x = 0.5;
	scene.addObject( plane );
};

Castillos.prototype.initCamera = function() {
	var camera = new THREE.TrackballCamera({
        
        fov: 25,
        aspect: window.innerWidth / window.innerHeight,
        near: 50,
        far: 1e7,

        rotateSpeed: 0.1,
        zoomSpeed: 1.2,
        panSpeed: 0.2,

        noZoom: false,
        noPan: false,

        staticMoving: false,
        dynamicDampingFactor: 0.3,

        keys: [ 'A'.charCodeAt(0), 'S'.charCodeAt(0), 'D'.charCodeAt(0) ], // [ rotateKey, zoomKey, panKey ],

    });
    camera.position.y = 100;
    camera.position.z = 800;
    
    return camera;
}


