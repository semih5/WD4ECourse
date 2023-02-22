function upDate(previewPic) {
   const displayPic = document.getElementById('image');
   displayPic.innerHTML = previewPic.alt;
   displayPic.style.backgroundColor = '#8e68ff';
   displayPic.style.backgroundImage = 'url('+previewPic.src+')';
}

function unDo() {
   const displayPic = document.getElementById('image');
   displayPic.innerHTML ="Hover over an image below to display here.";
   displayPic.style.backgroundColor = '#8e68ff';
   displayPic.style.backgroundImage = 'none';

}










