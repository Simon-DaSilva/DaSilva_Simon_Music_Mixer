const bass = document.querySelector("#bass");
const clarinet = document.querySelector("#clarinet");
const piano = document.querySelector("#piano");
const trumpet = document.querySelector("#trumpet");
const saxaphone = document.querySelector("#saxaphone");
const drum = document.querySelector("#drum");
const trombone = document.querySelector("#trombone");

let drag = document.querySelectorAll('.icons img'),
dropZones = document.querySelectorAll('.drop-zone'),
draggedPiece;

function refreshPage(){
    window.location.reload();
} 

function handleStartDrag() { 
	console.log('started dragging this piece:', this);
    draggedPiece = this;
}

function handleDragOver(e) { 
	e.preventDefault(); 
	console.log('dragged over me'); 
}

function handleDrop(e) { 
	e.preventDefault();
	console.log('dropped something on me');
	this.appendChild(draggedPiece);
    playAudio(draggedPiece.id, this)
}

function playAudio(selectedInstrument, selectedDropzone) {
    console.log(selectedInstrument);
    let instrument = document.createElement("audio");    
        instrument.src = `audio/${selectedInstrument}.mp3`;
        instrument.load();
        selectedDropzone.appendChild(instrument); 
        instrument.loop = true;
        instrument.play();
}

drag.forEach(part => part.addEventListener("dragstart", handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));