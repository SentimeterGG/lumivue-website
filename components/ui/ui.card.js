class UICard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.background =
      this.getAttribute("background") || "var(--color-accent-100)";
    this.style.width = "100%";
    this.style.height = "100%";
    this.shadowRoot.innerHTML = `
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.card{
  height: 100%;
  width: 100%;
  border-radius: 0.75rem;
  padding: 3rem;
  background: ${this.background};
}
  .tertiary{
    border: 1px solid var(--color-accent-800);
    background: transparent;
    color: var(--color-accent-800);
  }
  .small{
    padding: 0.25rem 0.5rem;
    white-space: nowrap;
    border-radius: 0.25rem;
    font-size: var(--font-size__small);
  }
</style>
<div part="card" class="card ${this.getAttribute("variant") || ""}">
  <slot></slot>
</div>
`;
  }
}
customElements.define("ui-card", UICard);
