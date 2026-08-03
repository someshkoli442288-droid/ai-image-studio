/* =====================================
   AI IMAGE STUDIO PRO
   GENERATOR SCRIPT
===================================== */


const generateButton =
document.getElementById("createImage");

const promptInput =
document.getElementById("imagePrompt");

const styleInput =
document.getElementById("imageStyle");

const ratioInput =
document.getElementById("imageRatio");

const preview =
document.getElementById("imagePreview");

const loader =
document.getElementById("imageLoader");



if(generateButton){


generateButton.addEventListener("click",()=>{


const prompt =
promptInput.value.trim();


if(prompt === ""){

alert("Please enter an image prompt");

return;

}


// Show Loading

preview.innerHTML =
"";


loader.classList.remove("hidden");



setTimeout(()=>{


loader.classList.add("hidden");


// Temporary AI Preview

preview.innerHTML = `

<div>

<h3>
AI Image Generated
</h3>

<p>
Prompt: ${prompt}
</p>

<p>
Style: ${styleInput.value}
</p>

<p>
Ratio: ${ratioInput.value}
</p>

</div>

`;


},2000);



});

}
