const loader = document.getElementById("loader")
const slides = document.querySelectorAll(".slide")

setTimeout(() => {

loader.style.display = "none"

slides.forEach(s => {
    s.style.opacity = 1
    s.style.transform = "translateY(0)"
})

}, 3000)


class LudozTerminal extends HTMLElement {
    connectedCallback() {
        const content = this.innerHTML;
        // Recuperiamo tutte le classi che hai messo sul tag (es. "red", "green")
        const classes = this.getAttribute('class') || '';
        
        this.innerHTML = `
            <div class="terminal ${classes}">
                <div class="header">
                    <p>code</p>
                    <p class="copy-btn" style="cursor:pointer"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                        </svg>
                        copy
                    </p>
                </div>
                <div class="terminal-body">
                    ${content}
                </div>
            </div>`;

        // Logica di copia
        this.querySelector('.copy-btn').onclick = () => {
            navigator.clipboard.writeText(this.querySelector('.terminal-body').innerText);
        };
    }
}
customElements.define('ludoz-terminal', LudozTerminal);