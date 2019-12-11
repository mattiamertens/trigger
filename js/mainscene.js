var scene, camera, renderer;
var controls;
var SCREEN_WIDTH, SCREEN_HEIGHT;
var loader, model;
var pistoluzza = new THREE.Object3D();
var pscale = 0.1;
var cube;
var manager = new THREE.LoadingManager();
var strDownloadMime = "image/octet-stream";
var mailTo = document.getElementById('mail');
var dimensionsH = window.innerHeight / 2;
var dimensionsW = window.innerWidth / 2;


manager.onLoad = function () {
    scene.add(pistoluzza);
}

var loader = new THREE.JSONLoader(manager);

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 500);
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


    // var saveLink = document.createElement('div');
    // saveLink.style.position = 'absolute';
    // saveLink.style.top = '10px';
    // saveLink.style.width = '100%';
    // saveLink.style.textAlign = 'center';
    // saveLink.innerHTML =
    //     '<a href="#" id="saveLink">Save Frame</a>';
    // document.body.appendChild(saveLink);

    // document.getElementById("saveLink").addEventListener('click', saveAsImage);
    

    
    //CALCIO
    $("#colors_co").children('div').click(function setAnotherTexture() {
        var textureColor = this.className;
        // console.log(textureColor);
        var textureLoader = new THREE.TextureLoader();
        
        var newTexture = textureLoader.load( "../json/GLTF/textures/" + textureColor + "_c.png");
        newTexture.encoding = THREE.sRGBEncoding;
        newTexture.flipY = false;
    
        calcioObj.traverse( function ( child ) { 
            
            if (child instanceof THREE.Mesh) {
                //create a global var to reference later when changing textures
                //apply texture

                child.material.map = newTexture;
                child.material.needsUpdate = true;
                child.material.map.needsUpdate = true;
            }
        });
    });
    //CALCIO TEXTURES
    $("#textures_co").children('div').click(function setAnotherTexture() {
        var textureColor = this.className;
        // console.log(textureColor);
        var textureLoader = new THREE.TextureLoader();
        
        var newTexture = textureLoader.load( "../json/GLTF/textures/" + textureColor + "_t.png");
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
        
        var newTexture = textureLoader.load( "../json/GLTF/textures/" + textureColor + "_c.png");
        newTexture.encoding = THREE.sRGBEncoding;
        newTexture.flipY = false;
    
        cannaObj.traverse( function ( child ) { 
            
            if (child instanceof THREE.Mesh) {
                //create a global var to reference later when changing textures
                //apply texture

                child.material.map = newTexture;
                child.material.needsUpdate = true;
                child.material.map.needsUpdate = true;
            }
        });
    });
    //CANNA TEXTUREZ
    $("#textures_ca").children('div').click(function setAnotherTexture() {
        alert('si si')
        var textureColor = this.className;
        // console.log(textureColor);
        var textureLoader = new THREE.TextureLoader();
        
        var newTexture = textureLoader.load( "../json/GLTF/textures/" + textureColor + "_t.png");
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
        
        var newTexture = textureLoader.load( "../json/GLTF/textures/" + textureColor + "_c.png");
        newTexture.encoding = THREE.sRGBEncoding;
        newTexture.flipY = false;
    
        grillettoObj.traverse( function ( child ) {
            
            if (child instanceof THREE.Mesh) {
                //create a global var to reference later when changing textures
                //apply texture

                child.material.map = newTexture;
                child.material.needsUpdate = true;
                child.material.map.needsUpdate = true;
            }
        });
    });
    //GRILLETTO TEXTUREZ
    $("#textures_gr").children('div').click(function setAnotherTexture() {
        var textureColor = this.className;
        // console.log(textureColor);
        var textureLoader = new THREE.TextureLoader();
        
        var newTexture = textureLoader.load( "../json/GLTF/textures/" + textureColor + "_t.png");
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
        
        var newTexture = textureLoader.load( "../json/GLTF/textures/" + textureColor + "_c.png");
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
    //DETTAGLI TEXTUREZ
    $("#textures_de").children('div').click(function setAnotherTexture() {
        alert('si si')
        var textureColor = this.className;
        // console.log(textureColor);
        var textureLoader = new THREE.TextureLoader();
        
        var newTexture = textureLoader.load( "../json/GLTF/textures/" + textureColor + "_t.png");
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

function animate() {
    requestAnimationFrame(animate);
    render();
    renderer.render(scene, camera);
    controls.update(); // keep inertia after leaving
}
init();
animate();




/////////////////////////////////////////////////////////////////////////////


$(window).resize(function () {
    SCREEN_WIDTH = dimensionsW;
    SCREEN_HEIGHT = dimensionsH;
    camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
    camera.updateProjectionMatrix();
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
});



// SAVEFILE FUNCTION //
function saveAsImage() {
    var imgData;

    try {
        var strMime = "image/jpeg";
        imgData = renderer.domElement.toDataURL(strMime);

        saveFile(imgData.replace(strMime, strDownloadMime), "Trigger.jpg");

    } catch (e) {
        console.log(e);
        return;
    }

}

var saveFile = function (strData, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        document.body.appendChild(link); //Firefox requires the link to be in the body
        link.download = filename;
        link.href = strData;
        link.click();
        document.body.removeChild(link); //remove the link when done
    } else {
        location.replace(uri);
    }
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