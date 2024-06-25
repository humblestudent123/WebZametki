function addNote() {
    const notesList = document.getElementById('notes');
    const newNoteInput = document.getElementById('newNote');
    const newNoteText = newNoteInput.value.trim();

    if (newNoteText !== "") {
        const newNoteItem = document.createElement('li');
        newNoteItem.innerHTML = `${newNoteText} <button onclick="editNote(this)">Редактировать</button> <button onclick="deleteNote(this)">Удалить</button>`;
        notesList.appendChild(newNoteItem);
        newNoteInput.value = "";
    }
}

function editNote(button) {
    const noteItem = button.parentElement;
    const noteText = noteItem.firstChild.textContent.trim();
    const newNoteText = prompt("Изменить заметку:", noteText);

    if (newNoteText !== null && newNoteText.trim() !== "") {
        noteItem.firstChild.textContent = newNoteText + " ";
    }
}

function deleteNote(button) {
    const noteItem = button.parentElement;
    noteItem.remove();
}
//za
console.log("nothing")
    

