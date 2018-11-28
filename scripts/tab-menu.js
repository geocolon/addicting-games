function openPage(pageName,elmnt,color) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablink');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = '';
  }
  document.getElementById(pageName).style.display = 'block';
  elmnt.style.backgroundColor = color;

  let startBox = document.getElementById('select-player').style.display;
    let startBtn = document.getElementById('defaultOpen').style;
    if(startBox === 'block'){
        console.log(startBtn.color = 'black');
    } else {
        startBtn.color = 'white';
    }
}
// Get the element with id="defaultOpen" and click on it
document.getElementById('defaultOpen').click();