// fancy-button.js
class FancyButton extends HTMLElement {
  constructor() {
    super();
    // Attach a Shadow DOM to encapsulate styles and structure
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // Set up the button’s content and styles when it’s added to the page
    this.shadowRoot.innerHTML = `
      <style>
        button {
          background-color: #007bff;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          font-weight: bold;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
      </style>
      <button>Click Me!</button>
    `;

    // Add a click event listener
    const button = this.shadowRoot.querySelector("button");
    button.addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("fancy-click", {
          detail: { message: "Fancy Button was clicked!" },
          bubbles: true,
          composed: true,
        })
      );
    });
  }
}

// Register the custom element
customElements.define("fancy-button", FancyButton);

// Optional: Log the event in the main app
document.querySelector("fancy-button").addEventListener("fancy-click", (e) => {
  console.log(e.detail.message);
});
