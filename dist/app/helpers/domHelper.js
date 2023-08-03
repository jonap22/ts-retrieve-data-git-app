function getElementById(id) {
    return document.getElementById(id);
}
function addClickListener(element, callback) {
    if (element) {
        element.addEventListener("click", async () => {
            await callback();
        });
    }
}
export { getElementById, addClickListener };
