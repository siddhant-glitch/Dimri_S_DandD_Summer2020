(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'),
	//querySelectorAll is for a one to many relationship an dretyurns a nodeList(an array) of match.
	puzzlePieces = document.querySelectorAll(".puzzle-image"),
	dropZones = document.querySelectorAll(".drop-zone"),
	gameBoard = document.querySelector(".puzzle-board");

let imageNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	function changeImageSet() {
		//I decided to go with the for loop as i'm a little more comfortable with it.
		for (let i = 1; i < gameBoard.children.length; i++) {
		const piece = gameBoard.children[i]
		if (piece.firstChild) {
		  const removedPuzzlePiece = piece.removeChild(piece.firstChild)
		  document.querySelector('.puzzle-pieces').appendChild(removedPuzzlePiece)
		}
	  }

		// change all the image elements on the page -> draggable image sources,
		  imageNames.forEach((piece, index) => {
			puzzlePieces[index].src = `images/${piece + this.dataset.bgkey}.jpg`;
		});
		// and set the drop zone background
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgkey}.jpg)`;

	}

	function allowDrag(event) {
		//let the drag happens, and start a refrence of the ID of the elemnet we're dragging
		console.log('started dragging an image: this one - ', event.target.id);

		event.dataTransfer.setData("draggedImg", this.id); //setting data for draggedImg
	//event.dataTransfer.setData("targetTrack", this.dataset.track);   //for audio track
	}

	function allowDragOver(event) {
		event.preventDefault(); //for the next week
		console.log('dragged over me!')
	}

	function allowDrop(event) {
		

		if(!this.hasChildNodes()){
			event.preventDefault();
			console.log('dropped!');

			let droppedImage = event.dataTransfer.getData("draggedImg");

			event.target.appendChild(document.querySelector(`#${droppedImage}`));
		}
		
	//	let currentTrack = event.dataTransfer.getData('targetTrack')   // for audio track
		
	}

	// add event handling here -> how is the user going to use our app?
	// what triggers do we need?
	// click on the bottom buttons to change the puzzle image we're working with
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));
	puzzlePieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

	// dropZones.forEach(zone => {
	// 		zone.addEventListener('dragover', allowDragOver);
	// 		zone.addEventListener('drop', allowDrop);
	// });

//rewrite this loop in an older style
//for (var i = 0; i < dropZones.length; i++) {
	//do a repeating action
//}

for (let zone of dropZones) {
	zone.addEventListener('dragover', allowDragOver);
	zone.addEventListener('drop', allowDrop);
}

	//research call,apply and bind
	changeImageSet.call(puzzleButtons[0]); //emulates a click on the first bottom button

})();

