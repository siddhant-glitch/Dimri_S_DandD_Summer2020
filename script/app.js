(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'),
	puzzlePieces = document.querySelectorAll(".puzzle-image"),
	dropZones = document.querySelectorAll(".drop-zone"),
	gameBoard = document.querySelector(".puzzle-board");


	function changeImageSet() {
		// change all the image elements on the page -> draggable image sources,

		// and set the drop zone background
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgkey}.jpg)`;
	}

	function allowDrag() {
		//let the drag happens, and start a refrence of the ID of the elemnet we're dragging
		console.log('started dragging an image: this one - ', event.target.id);

	}

	function allowDragOver(event) {
		event.preventDefault(); //for the next week
		console.log('dragged over me!')
	}

	// add event handling here -> how is the user going to use our app?
	// what triggers do we need?

	// click on the bottom buttons to change the puzzle image we're working with
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));

	puzzlePieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

	dropZones.forEach( zone => {
			zone.addEventListener('dragover', allowDragOver);
			zone.addEventListener('drop', allowDrop);
	});



	//research call,apply and bind
	changeImageSet.call(puzzleButtons[0]); //emulates a click on the first bottom button
})();
