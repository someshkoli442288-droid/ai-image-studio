/* =====================================
   AI IMAGE STUDIO PRO
   HISTORY SCRIPT
===================================== */


const historyGrid =
document.getElementById("historyGrid");


// Load Saved Images

function loadHistory(){


if(!historyGrid){

    return;

}


const images =
JSON.parse(
localStorage.getItem("aiImages")
) || [];



if(images.length === 0){

return;

}



historyGrid.innerHTML = "";



images.forEach((item,index)=>{


const card = document.createElement("div");


card.className =
"preview-card";



card.innerHTML = `

<img src="${item.image}"
alt="AI Image">


<div class="preview-content">

<h3>
${item.style}
</h3>


<p>
${item.prompt}
</p>


<button 
class="btn btn-outline"
onclick="deleteImage(${index})">

Delete

</button>


</div>

`;



historyGrid.appendChild(card);



});


}



// Delete Image

function deleteImage(index){


let images =
JSON.parse(
localStorage.getItem("aiImages")
) || [];



images.splice(index,1);



localStorage.setItem(

"aiImages",

JSON.stringify(images)

);



loadHistory();


}




loadHistory();
