const insert = document.querySelector("#insert");

window.addEventListener("keydown", e => {
  insert.innerHTML = `
    <div class="card">
      ${e.key === " " ? "space" : e.key}
      <small>key</small>
    </div>

    <div class="card">
      ${e.keyCode}
      <small>keyCode</small>
    </div>

    <div class="card">
      ${e.code}
      <small>code</small>
    </div>
  `;
});
