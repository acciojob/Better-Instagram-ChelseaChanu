const images = document.querySelectorAll(".image");
let source;
let target;
let sourceText = "";
let sourceId = "";
let targetId = "";

images.forEach(image=>{
	image.addEventListener('dragstart', dragstart_handler);
	image.addEventListener('dragover', dragover_handler);
	image.addEventListener('drop', drop_handler);
});

function dragstart_handler(event){
	event.dataTransfer.setData('text/plain',event.target.id);
	sourceText = event.target.innerText;
	sourceId = event.target.id;
}

function dragover_handler(event){
	event.preventDefault();
	event.dataTransfer.dropEffect = 'move';
}

function drop_handler(event){
	event.preventDefault();
	targetId = event.target.id;
	let targetText = event.target.innerText;
	source = document.getElementById(sourceId);
	target = document.getElementById(targetId);
	let sourceBg = window.getComputedStyle(source).backgroundImage;
	let targetBg = window.getComputedStyle(target).backgroundImage;
	let sourceUrl = sourceBg.slice(5,-2);
	let targetUrl = targetBg.slice(5,-2);
	source.innerText = targetText
	target.innerText = sourceText;
	source.style.cssText += `background-image:url(${targetUrl})`;
	target.style.cssText += `background-image:url(${sourceUrl})`;
}