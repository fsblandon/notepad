//Build Form

const form = {};
form.noteText = document.querySelector('#noteText');
form.color = document.querySelector('#selectColor');
form.addButton = document.querySelector('#addButton');

const notes = document.querySelector('#notes');

form.noteText.focus();

//Functions

function addNote() {
    let text = form.noteText.value;
    let note = document.createElement('div');
    let deleteBtn = document.createElement('span');
    
    note.classList.add('note');
    note.classList.add(form.color.value);
    note.innerHTML = `<div class='note-text'>${text}</div>`;
    
    deleteBtn.classList.add('note-delete');
    deleteBtn.innerHTML = '&times;';
    
    note.appendChild(deleteBtn);
    notes.appendChild(note);
    
    form.noteText.value = '';
    form.noteText.focus();
    
    addListenerDeleteButton(deleteBtn);   
}

function addListenerDeleteButton(deleteBtn) {
    deleteBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        deleteNote(e);
    });
}

function deleteNote(e) {
    let eventNote = e.target.parentNode;
    eventNote.parentNode.removeChild(eventNote);
}

//listeners

form.addButton.addEventListener('click', function(e) {
    e.preventDefault();
    if (form.noteText.value != '') {
        addNote();
    }
});