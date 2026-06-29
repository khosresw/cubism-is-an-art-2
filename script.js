
const words=["Love","Care","Home","Trust","Smile","Support","Together","Kindness"];
const inventory=document.getElementById("inventory");
const slots=document.getElementById("slots");
let placed=0;

words.forEach(w=>{
 const d=document.createElement("div");
 d.className="word";
 d.textContent=w;
 d.draggable=true;
 d.dataset.word=w;
 d.addEventListener("dragstart",e=>{
   e.dataTransfer.setData("text/plain",w);
 });
 inventory.appendChild(d);
});

for(let i=0;i<8;i++){
 const s=document.createElement("div");
 s.className="slot";
 s.textContent="Drop Here";
 s.addEventListener("dragover",e=>{
   e.preventDefault();
   s.classList.add("over");
 });
 s.addEventListener("dragleave",()=>s.classList.remove("over"));
 s.addEventListener("drop",e=>{
   e.preventDefault();
   s.classList.remove("over");
   if(s.dataset.done)return;
   const w=e.dataTransfer.getData("text/plain");
   s.textContent=w;
   s.dataset.done=1;
   s.classList.add("complete");
   const tile=[...document.querySelectorAll(".word")].find(x=>x.dataset.word===w);
   if(tile) tile.remove();
   placed++;
   if(placed===8){
      setTimeout(()=>alert("🎉 Family face completed! Part 3 will fold this into the cube."),200);
   }
 });
 slots.appendChild(s);
}
