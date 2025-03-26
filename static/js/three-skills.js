// List of words to be displayed
const words = ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "Three JS", "Vanilla JS", "Responsive Design", "Flowbite", "Sweet Alert", "Select2",  "Chart JS", "Data Tables", "JQuery"];

var skills = document.querySelector('#threeSkills')

// Initialize scene, camera, and renderer
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(skills.clientWidth, skills.clientHeight)
skills.appendChild(renderer.domElement);

// CSS2DRenderer for text rendering
const labelRenderer = new THREE.CSS2DRenderer();
labelRenderer.setSize(skills.clientWidth, skills.clientHeight);
labelRenderer.domElement.style.position = "absolute";
// labelRenderer.domElement.style.top = "0px";
skills.appendChild(labelRenderer.domElement);

let group = new THREE.Group();
scene.add(group);

let radius = window.innerWidth < 768 ? 1.5 : 3; // Responsive radius
words.forEach((word, i) => {
    let angle = Math.acos(-1 + (2 * i) / words.length);
    let phi = Math.sqrt(words.length * Math.PI) * angle;

    // Create a div element for each word
    let wordDiv = document.createElement("div");
    wordDiv.textContent = word;
    wordDiv.style.color = "white";
    wordDiv.style.fontSize = "20px";
    wordDiv.style.fontFamily = "Montserrat";
    wordDiv.style.padding = "5px";
    // wordDiv.style.position = "absolute";

    let wordLabel = new THREE.CSS2DObject(wordDiv);
    wordLabel.position.set(
        radius * Math.cos(phi) * Math.sin(angle),
        radius * Math.sin(phi) * Math.sin(angle),
        radius * Math.cos(angle)
    );
    group.add(wordLabel);
});

camera.position.z = 6;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    group.rotation.y += 0.005;
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
}
animate();

// Responsive canvas resizing
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(skills.clientWidth, skills.clientHeight);
    labelRenderer.setSize(skills.clientWidth, skills.clientHeight);
});