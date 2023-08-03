function getElementById(id: string): HTMLElement | null {
    return document.getElementById(id);
}

function addClickListener(element: HTMLElement | null, callback: () => Promise<void>) {
    if (element) {
        element.addEventListener("click", async () => {
            await callback();
        });
    }
}

export { getElementById, addClickListener };
