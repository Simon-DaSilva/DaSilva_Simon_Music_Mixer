let drag = document.querySelectorAll('.icons img'),
dropZones = document.querySelectorAll('.drop-zone'),
draggedPiece;

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
}


drag.forEach(part => part.addEventListener("dragstart", handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));