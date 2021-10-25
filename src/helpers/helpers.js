export const viewHandler = (e) => {
    const name = e.target.name; 
    
    const editorButtons = document.querySelectorAll('.three-editor-buttons');
    editorButtons.forEach((item) => {
        if (item.name === name) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        } 
    })

    const editors = document.querySelectorAll('.editor-container');
    editors.forEach((view) => {
        if (view.id === name){
            view.classList.add('view');
        } 
        else {
            view.classList.remove('view');
        }
    });
};

export const toggleInstructionsHandler = (
    toggleInstructions,
    setToggleInstructions
) => {
    const toggleBox = toggleInstructions === '' ? 'toggleInstructions' : '';
    setToggleInstructions(toggleBox);
};
export const viewListHandler = (toggleList, setToggleList) => {
    const toggleBox = toggleList === '' ? 'toggleList' : '';
    setToggleList(toggleBox);
};
