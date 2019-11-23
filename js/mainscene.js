var scene, camera, renderer;
var controls;
var SCREEN_WIDTH, SCREEN_HEIGHT;
var loader, model;
var pistoluzza = new THREE.Object3D();
var pscale = 0.1;
var cube;
var manager = new THREE.LoadingManager();

// SE VOGLIO CREARE UNA STANZA DI MERDA ATTIVO STO COSO SOTTO
// var textureCube = new THREE.CubeTextureLoader().load(['json/envmap/posx.jpg', 'json/envmap/negx.jpg', 'json/envmap/posy.jpg', 'json/envmap/negy.jpg', 'json/envmap/posz.jpg', 'json/envmap/negz.jpg']);
// textureCube.generateMipmaps = false;

manager.onLoad = function () {
    scene.add(pistoluzza);
}

var loader = new THREE.JSONLoader(manager);

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 500);
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setClearColor( 0x656256, 1 );
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // CONTROLLO DELLA CAMERA
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.minDistance = 10;
    controls.maxDistance = 65;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.2;
    controls.addEventListener('change', render);

    camera.position.x = 15;
    camera.position.y = 10;
    camera.position.z = 15;
    camera.lookAt(scene.position);

    // LUCI
    h1 = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.5);
    h1.position.set(-300,200, -3000);
    scene.add(h1);

    var s1 = new THREE.SpotLight(0xffffff);
    s1.position.set(300, 300, -1000);
    scene.add(s1);

    var s2 = new THREE.SpotLight(0xffffff);
    s2.position.set(-300, 300, 1000);
    scene.add(s2);

    var d1 = new THREE.DirectionalLight (0xffffff, 0.4);
    d1.position.set(0, 1000, 0);
    scene.add(d1);
    

    // PISTOLUZZA
    // CALCIO
    var calcioloader = new THREE.GLTFLoader();
    calcioloader.load( 'json/GLTF/calcio/calcio.gltf', function ( gltf ) {

            calcioObj = gltf.scene;
            scene.add( calcioObj );
            gltf.scene.scale.set(pscale, pscale, pscale);

    });


    // CANNA
    var cannaloader = new THREE.GLTFLoader();
    cannaloader.load( 'json/GLTF/canna/canna.gltf', function ( gltf ) {
            
            cannaObj = gltf.scene;
            scene.add( cannaObj );
            gltf.scene.scale.set(pscale, pscale, pscale);
            // pistoluzza.add(cannaloader);

    });

    // GRILLETTO
    var calcioloader = new THREE.GLTFLoader();
    calcioloader.load( 'json/GLTF/grilletto/grilletto.gltf', function ( gltf ) {

            grillettoObj = gltf.scene;
            scene.add( grillettoObj );
            gltf.scene.scale.set(pscale, pscale, pscale);

    });

    // DETTAGLI
    var calcioloader = new THREE.GLTFLoader();
    calcioloader.load( 'json/GLTF/dettagli/dettagli.gltf', function ( gltf ) {

            dettagliObj = gltf.scene;
            scene.add( dettagliObj );
            gltf.scene.scale.set(pscale, pscale, pscale);

    });


    // BOX GEOMETRY
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshPhongMaterial( {color: 0xccff00} );
    var cube = new THREE.Mesh( geometry, material );
    cube.receiveShadow = true;
    scene.add( cube );

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.BasicShadowMap;
    
    // CANNA
    // $("#colorOption1").change(function setAnotherTexture() {
    //     var textureColor = document.getElementById("colorOption1").value;
    //     var textureLoader = new THREE.TextureLoader();
        
    //     var newTexture = textureLoader.load( "json/GLTF/textures/" + textureColor + "_t.png");
    //     newTexture.encoding = THREE.sRGBEncoding;
    //     newTexture.flipY = false;
    
    //     cannaObj.traverse( function ( child ) { //funzione che gestisce il cambio colore
            
    //         if (child instanceof THREE.Mesh) {
    //             //create a global var to reference later when changing textures
    //             //apply texture

    //             child.material.map = newTexture;
    //             child.material.needsUpdate = true;
    //             child.material.map.needsUpdate = true;
    //         }
    //     });
    // });

    //CALCIO
    $("#colors_co").children('div').click(function setAnotherTexture() {
        var textureColor = this.className;
        // console.log(textureColor);
        var textureLoader = new THREE.TextureLoader();
        
        var newTexture = textureLoader.load( "json/GLTF/textures/" + textureColor + "_t.png");
        newTexture.encoding = THREE.sRGBEncoding;
        newTexture.flipY = false;
    
        calcioObj.traverse( function ( child ) { //funzione che gestisce il cambio colore
            
            if (child instanceof THREE.Mesh) {
                //create a global var to reference later when changing textures
                //apply texture

                child.material.map = newTexture;
                child.material.needsUpdate = true;
                child.material.map.needsUpdate = true;
            }
        });
    });

    //CANNA
    $("#colors_ca").children('div').click(function setAnotherTexture() {
        var textureColor = this.className;
        // console.log(textureColor);
        var textureLoader = new THREE.TextureLoader();
        
        var newTexture = textureLoader.load( "json/GLTF/textures/" + textureColor + "_t.png");
        newTexture.encoding = THREE.sRGBEncoding;
        newTexture.flipY = false;
    
        cannaObj.traverse( function ( child ) { //funzione che gestisce il cambio colore
            
            if (child instanceof THREE.Mesh) {
                //create a global var to reference later when changing textures
                //apply texture

                child.material.map = newTexture;
                child.material.needsUpdate = true;
                child.material.map.needsUpdate = true;
            }
        });
    });

    //GRILLETTO
    $("#colors_gr").children('div').click(function setAnotherTexture() {
        var textureColor = this.className;
        // console.log(textureColor);
        var textureLoader = new THREE.TextureLoader();
        
        var newTexture = textureLoader.load( "json/GLTF/textures/" + textureColor + "_t.png");
        newTexture.encoding = THREE.sRGBEncoding;
        newTexture.flipY = false;
    
        grillettoObj.traverse( function ( child ) { //funzione che gestisce il cambio colore
            
            if (child instanceof THREE.Mesh) {
                //create a global var to reference later when changing textures
                //apply texture

                child.material.map = newTexture;
                child.material.needsUpdate = true;
                child.material.map.needsUpdate = true;
            }
        });
    });

    //DETTAGLI
    $("#colors_de").children('div').click(function setAnotherTexture() {
        var textureColor = this.className;
        // console.log(textureColor);
        var textureLoader = new THREE.TextureLoader();
        
        var newTexture = textureLoader.load( "json/GLTF/textures/" + textureColor + "_t.png");
        newTexture.encoding = THREE.sRGBEncoding;
        newTexture.flipY = false;
    
        dettagliObj.traverse( function ( child ) { //funzione che gestisce il cambio colore
            
            if (child instanceof THREE.Mesh) {
                //create a global var to reference later when changing textures
                //apply texture

                child.material.map = newTexture;
                child.material.needsUpdate = true;
                child.material.map.needsUpdate = true;
            }
        });
    });
   

    $("#container").append(renderer.domElement);
}

function render() {

}

var SPEED = 0.01;
function rotateCube() {
    cube.rotation.x -= SPEED * 2;
    cube.rotation.y -= SPEED;
    cube.rotation.z -= SPEED * 3;
}

function animate() {
    requestAnimationFrame(animate);
    render();
    renderer.render(scene, camera);
    controls.update(); // keep inertia after leaving
    rotateCube();
}
init();
animate();

/////////////////////////////////////////////////////////////////////////////

// SEDUTA
// $('.backk').on('click', function () {

//     textureTarget = $(this).attr("alt");
	
//     protoBack = new THREE.TextureLoader().load( backTextures[textureTarget], function () {
//         mat = new THREE.MeshPhongMaterial({
//             map: protoBack,
//             shininess: 0,
//             reflectivity: 0,
//             bumpScale: .0001
//         });
//         loader.load( 'json/GLTF/calcio.glb', function ( gltf ) {

//             scene.add( gltf.scene );
//             gltf.scene.scale.set(pscale, pscale, pscale);
        
//             }, undefined, function ( error ) {
        
//             console.error( error );
        
//         } );
//     });
//     currentBackMaterial = textureTarget;
// });





/////////////////////////////////////////////////////////////////////////////


$(window).resize(function () {
    SCREEN_WIDTH = window.innerWidth / 100 * 40;
    SCREEN_HEIGHT = window.innerHeight / 100 * 80;
    camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
    camera.updateProjectionMatrix();
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
});