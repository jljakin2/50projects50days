// ✅1. grab the add button and listen for clicks so we can add notes
// ✅2. create note element
// ✅3. add "note" class
// ✅4. insert the html that makes up the note
//  ✅- we will toggle the div that shows the note and textarea depending on which mode the user is in
// ✅5. select all necessary elements that were added to the note innerHTML
// ✅6. set value of textArea to the text that was passed to the function
// ✅7. set main div's innerHTML to the text that was passed but make sure it is markdown format
// 8. add listener functions for editing, deleting, and updating textarea
//  - make sure there is a function that updates the localstorage for editing, deleting, adding
// 9. append the note to the body

const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => addNote()); // calling function like this allows for the "text" argument to be included, otherwise we get a weird "pointer event" object

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach(note => addNote(note));
}

function addNote(text = "") {
  const noteEl = document.createElement("div");
  noteEl.classList.add("note");
  noteEl.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
  `;

  const editBtn = noteEl.querySelector(".edit");
  const deleteBtn = noteEl.querySelector(".delete");
  const main = noteEl.querySelector(".main");
  const textArea = noteEl.querySelector("textarea");

  textArea.value = text;
  main.innerHTML = marked(text);

  textArea.addEventListener("input", e => {
    const { value } = e.target;

    main.innerHTML = marked(value);

    updateLocalStorage();
  });

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  deleteBtn.addEventListener("click", () => {
    noteEl.remove();

    updateLocalStorage();
  });

  document.body.appendChild(noteEl);
}

function updateLocalStorage() {
  const notesText = document.querySelectorAll("textarea");

  const notes = [];

  notesText.forEach(note => notes.push(note.value));

  localStorage.setItem("notes", JSON.stringify(notes));
}
