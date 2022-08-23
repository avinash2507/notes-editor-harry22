// add event listener for the Button
showNotesComp();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (event) {
  let addText = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesComp = [];
  } else {
    notesComp = JSON.parse(notes);
  }
  notesComp.push(addText.value);
  localStorage.setItem("notes", JSON.stringify(notesComp));
  addText.value = "";
  //   console.log(notesComp);
  showNotesComp();
});

function showNotesComp() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesComp = [];
  } else {
    notesComp = JSON.parse(notes);
  }
  let notify = "";
  notesComp.forEach(function (element, index) {
    notify += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text"> ${element}</p>
                    <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>`;
  });

  let note = document.getElementById("notes");
  if (notesComp.length != 0) {
    note.innerHTML = notify;
  } else {
    note.innerHTML = `Aji kuch Notes Banane ke Liye Upper Diye Hue Button Aur Textarea Me likhe kuch......`;
  }
}
function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == 0) {
    notesComp = [];
  } else {
    notesComp = JSON.parse(notes);
    notesComp.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesComp));
    showNotesComp();
  }
}

let search = document.getElementById("txtSearch");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  console.log("Input event fired!", inputVal);
  let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function(element){
      let cardTxt = element.getElementsByTagName("p")[0].innerText;
      if(cardTxt.includes(inputVal)){
          element.style.display = "block";
      }
      else{
          element.style.display = "none";
      }
      // console.log(cardTxt);
  })
})
