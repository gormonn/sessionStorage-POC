const PARAM_NAME = 'muteSound';
const content = document.getElementById('content');

const storage = sessionStorage;
// const storage = localStorage;

saveParam();
loadParam();

function loadParam() {
    const value = storage.getItem(PARAM_NAME)

    let text = 'Not provided.';
    if (value) {
        text = `is ${value}.`;
    }
    content.innerHTML += `<br/>Parameter "${PARAM_NAME}" ${text}`
}

function saveParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const value = urlParams.get(PARAM_NAME);

    if (value) {
        storage.setItem(PARAM_NAME, value)
        content.innerHTML += `Parameter "${PARAM_NAME}" was saved`
    }else{
        const value = storage.getItem(PARAM_NAME)
        if(!value) {
            storage.clear();
            content.innerHTML += `Parameter "${PARAM_NAME}" was cleared`
        }
    }
}