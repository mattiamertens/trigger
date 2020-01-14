var scene, camera, renderer;
var controls;
var SCREEN_WIDTH, SCREEN_HEIGHT;
var loader, model;
var pistoluzza = new THREE.Object3D();
var pscale = 0.1;
var manager = new THREE.LoadingManager();
var dimensionsH = window.innerHeight / 2;
var dimensionsW = window.innerWidth / 2;


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
    renderer.setClearColor( 0x000000, 1);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

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
    // CALCIO
    var calcioloader = new THREE.GLTFLoader();
    calcioloader.load( '../json/GLTF/calcio/calcio.gltf', function ( gltf ) {

            calcioObj = gltf.scene;
            scene.add( calcioObj );
            gltf.scene.scale.set(pscale, pscale, pscale);

    });


    // CANNA
    var cannaloader = new THREE.GLTFLoader();
    cannaloader.load( '../json/GLTF/canna/canna.gltf', function ( gltf ) {
            
            cannaObj = gltf.scene;
            scene.add( cannaObj );
            gltf.scene.scale.set(pscale, pscale, pscale);
            // pistoluzza.add(cannaloader);

    });

    // GRILLETTO
    var calcioloader = new THREE.GLTFLoader();
    calcioloader.load( '../json/GLTF/grilletto/grilletto.gltf', function ( gltf ) {

            grillettoObj = gltf.scene;
            scene.add( grillettoObj );
            gltf.scene.scale.set(pscale, pscale, pscale);

    });

    // DETTAGLI
    var calcioloader = new THREE.GLTFLoader();
    calcioloader.load( '../json/GLTF/dettagli/dettagli.gltf', function ( gltf ) {

            dettagliObj = gltf.scene;
            scene.add( dettagliObj );
            gltf.scene.scale.set(pscale, pscale, pscale);

    });
    
    
    //CALCIO
    $("#colors_co").children('div').click(function setAnotherTexture() {
        var textureColor = this.className;
        var textureLoader = new THREE.TextureLoader();
        $(this).addClass('on_focus');
        $(this).siblings().removeClass('on_focus');
        
        var newTexture = textureLoader.load( "../json/GLTF/textures/" + textureColor + "_c.png");
        newTexture.encoding = THREE.sRGBEncoding;
        newTexture.flipY = false;
    
        calcioObj.traverse( function ( child ) { 
            
            if (child instanceof THREE.Mesh) {
                child.material.map = newTexture;
                child.material.needsUpdate = true;
                child.material.map.needsUpdate = true;
            }
        });
    });

    //CANNA
    $("#colors_ca").children('div').click(function setAnotherTexture() {
        var textureColor = this.className;
        var textureLoader = new THREE.TextureLoader();
        $(this).addClass('on_focus');
        $(this).siblings().removeClass('on_focus');
        
        var newTexture = textureLoader.load( "../json/GLTF/textures/" + textureColor + "_c.png");
        newTexture.encoding = THREE.sRGBEncoding;
        newTexture.flipY = false;
    
        cannaObj.traverse( function ( child ) { 
            
            if (child instanceof THREE.Mesh) {
                child.material.map = newTexture;
                child.material.needsUpdate = true;
                child.material.map.needsUpdate = true;
            }
        });
    });
   
    //GRILLETTO
    $("#colors_gr").children('div').click(function setAnotherTexture() {
        var textureColor = this.className;
        var textureLoader = new THREE.TextureLoader();
        $(this).addClass('on_focus');
        $(this).siblings().removeClass('on_focus');
        
        var newTexture = textureLoader.load( "../json/GLTF/textures/" + textureColor + "_c.png");
        newTexture.encoding = THREE.sRGBEncoding;
        newTexture.flipY = false;
    
        grillettoObj.traverse( function ( child ) {
            
            if (child instanceof THREE.Mesh) {
                child.material.map = newTexture;
                child.material.needsUpdate = true;
                child.material.map.needsUpdate = true;
            }
        });
    });
  
    //DETTAGLI
    $("#colors_de").children('div').click(function setAnotherTexture() {
        var textureColor = this.className;
        var textureLoader = new THREE.TextureLoader();
        $(this).addClass('on_focus');
        $(this).siblings().removeClass('on_focus');
        
        var newTexture = textureLoader.load( "../json/GLTF/textures/" + textureColor + "_c.png");
        newTexture.encoding = THREE.sRGBEncoding;
        newTexture.flipY = false;
    
        dettagliObj.traverse( function ( child ) { //funzione che gestisce il cambio colore
            
            if (child instanceof THREE.Mesh) {
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

function animate() {
    requestAnimationFrame(animate);
    render();
    renderer.render(scene, camera);
    controls.update(); // keep inertia after letting go
}
init();
animate();




/////////////////////////////////////////////////////////////////////////////
$(window).resize(function () {
    SCREEN_WIDTH = window.innerWidth;
    SCREEN_HEIGHT = window.innerHeight;
    camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
    camera.updateProjectionMatrix();
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
});


// SAVEFILE FUNCTION //
document.getElementsByClassName("send")[0].addEventListener('click', saveAsImage);

function saveAsImage() {
    var mailTo = $('.mailTo').val().trim();
    var a = document.createElement('a');

    renderer.render(scene, camera);
    a.href = renderer.domElement.toDataURL().replace("image/octet-stream", "image/png");
    a.download = mailTo;
    a.click();
}



/// SMTP MAILER /// 
// var counter = 0;  // need to increase counter every click
// var localPath = "/../" + counter + ".png" ;

// function sendEmail() {
// 	Email.send({
// 	Host: "smtp.gmail.com",
// 	Username : "trigger.superfluo@gmail.com",
// 	Password : "piamose18",
// 	To : 'gurki4.mm@gmail.com',
// 	// To : mailTo.value,
// 	From : "trigger@gmail.com",
// 	Subject : "Your Order",
//     Body : "<email body>",
//     Attachments : [
//         {
//             name : "cane.jpg",
//             path : "https://style.corriere.it/wp-content/uploads/2019/11/Gallery-4-Larivei.jpg"
//         }]  
// 	}).then(
// 		message => console.log("mail sent to:" + mailTo.value)
//     );
// };