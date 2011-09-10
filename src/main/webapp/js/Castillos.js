var Castillos = function(){
	if(!(this instanceof Castillos)) {
		throw 'Invalid function invocation';
	}
};

var THREE, window, requestAnimationFrame, 
	camera, scene, renderer, geometry, material, mesh;

Castillos.prototype.init = function(){
	camera = new THREE.Camera( 50, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 1000;

    scene = new THREE.Scene();
    
    geometry = new THREE.CubeGeometry( 400, 200, 200 );
    
    material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
    
    mesh = new THREE.Mesh( geometry, material );
    mesh.rotation.x = 0.50;
    mesh.rotation.y = 0.65;
    
    cylinder = new THREE.CylinderGeometry( 20, 100, 100, 100 );
    cylMesh = new THREE.Mesh( cylinder, material );
    cylMesh.rotation.x = 2.05;
    cylMesh.rotation.y = 0.0;
    
    scene.addObject( mesh );
    scene.addObject(cylMesh);

    renderer = new THREE.CanvasRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );

    renderer.render( scene, camera );
};


