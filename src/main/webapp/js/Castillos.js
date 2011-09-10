function Castillos(){}

var THREE, window, requestAnimationFrame, 
	camera, scene, renderer, geometry, material, mesh;

Castillos.init = function(){
	camera = new THREE.Camera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 1000;

    scene = new THREE.Scene();
    
    geometry = new THREE.CubeGeometry( 200, 200, 200 );
    material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
    
    mesh = new THREE.Mesh( geometry, material );
    
    scene.addObject( mesh );

    renderer = new THREE.CanvasRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );
    Castillos.animate();
};

Castillos.animate = function(){
    requestAnimationFrame( Castillos.animate );
    Castillos.render();
};

Castillos.render = function(){
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render( scene, camera );
};
