var scene, camera, renderer;
var controls;
var SCREEN_WIDTH, SCREEN_HEIGHT;
var loader, model;
var pistoluzza = new THREE.Object3D();
var pscale = 0.12;
var manager = new THREE.LoadingManager();
var dimensionsH = window.innerHeight / 2;
var dimensionsW = window.innerWidth / 2;
var first_collab = document.getElementById('first_collab');
var second_collab = document.getElementById('second_collab');


manager.onLoad = function () {
    scene.add(pistoluzza);
}
var loader = new THREE.JSONLoader(manager);

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, .1, 500);
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true
    });
    renderer.setClearColor( 0x00ff00, 1);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize($(first_collab).width(), $(first_collab).height());

    // CONTROLLO DELLA CAMERA
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.minDistance = 30;
    controls.maxDistance = 30;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.2;
    controls.addEventListener('change', render);

    camera.position.set(22,10,8);
    camera.lookAt(scene.position);

    // LUCI
    h1 = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.5);
    h1.position.set(-300,200, -3000);
    scene.add(h1);
    
    h2 = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.2);
    h2.position.set(-1000, 200, 100);
    scene.add(h2);

    var s1 = new THREE.SpotLight(0xffffff);
    s1.position.set(300, 300, -1000);
    scene.add(s1);

    var s2 = new THREE.SpotLight(0xffffff);
    s2.position.set(-300, 300, 1000);
    scene.add(s2);
    
    // var s3 = new THREE.SpotLight(0xffffff);
    // s3.position.set(0, 0, 100);
    // scene.add(s3);

    var d1 = new THREE.DirectionalLight (0xffffff, 0.4);
    d1.position.set(0, 1000, 0);
    scene.add(d1);
    
    // var d2 = new THREE.DirectionalLight (0xffffff, 0.4);
    // d2.position.set(0, 0, 0);
    // scene.add(d2);


    // PISTOLUZZA
    var gun_texture = new THREE.TextureLoader();
    var gunloader = new THREE.GLTFLoader();
    // Voglio provare a fare un loader unico e non uno per ogni parte della pistola

    // CALCIO
    gunloader.load( '../json/GLTF/calcio/calcio.gltf', function ( gltf ) {

        calcioObj = gltf.scene;
        calcioObj.traverse ( ( o ) => {
            if ( o.isMesh ) {
                o.material = new THREE.MeshBasicMaterial({
                map: gun_texture.load('../json/GLTF/textures/t_7_c.png')});
            }
        });

        scene.add( calcioObj );
        gltf.scene.scale.set(pscale, pscale, pscale); 
    });
    

    // CANNA
    gunloader.load( '../json/GLTF/canna/canna.gltf', function ( gltf ) {
            
        cannaObj = gltf.scene;
        cannaObj.traverse ( ( o ) => {
            if ( o.isMesh ) {
                o.material = new THREE.MeshBasicMaterial({
                map: gun_texture.load('../json/GLTF/textures/test.png')});
            }
        });

        scene.add( cannaObj );
        gltf.scene.scale.set(pscale, pscale, pscale);
    });

    // GRILLETTO
    gunloader.load( '../json/GLTF/grilletto/grilletto.gltf', function ( gltf ) {

        grillettoObj = gltf.scene;
        grillettoObj.traverse ( ( o ) => {
            if ( o.isMesh ) {
                o.material = new THREE.MeshBasicMaterial({
                map: gun_texture.load('../json/GLTF/textures/orange_c.png')});
            }
        });

        scene.add( grillettoObj );
        gltf.scene.scale.set(pscale, pscale, pscale);

    });

    // DETTAGLI
    // var dettagliloader = new THREE.GLTFLoader();
    gunloader.load( '../json/GLTF/dettagli/dettagli.gltf', function ( gltf ) {

        dettagliObj = gltf.scene;
        dettagliObj.traverse ( ( o ) => {
            if ( o.isMesh ) {
                o.material = new THREE.MeshBasicMaterial({
                map: gun_texture.load('../json/GLTF/textures/magenta_c.png')});
            }
        });

        scene.add( dettagliObj );
        gltf.scene.scale.set(pscale, pscale, pscale);

    });

    first_collab.append(renderer.domElement);
}

function render() {
}

function animate() {
    requestAnimationFrame(animate);
    render();
    renderer.render(scene, camera);
    controls.update();
}
init();
animate();




/////////////////////////////////////////////////////////////////////////////
$(window).resize(function () {
    SCREEN_WIDTH = window.innerWidth;
    SCREEN_HEIGHT = window.innerHeight;
    camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
    camera.updateProjectionMatrix();
    renderer.setSize($(first_collab).width(), $(first_collab).height());
});