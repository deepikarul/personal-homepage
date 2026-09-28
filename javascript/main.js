document.querySelectorAll(".toggle-details").forEach((button) => {
// I really like how you use data-target to connect each button to its
// details section. It keeps the logic reusable and avoids repetition!
  button.addEventListener("click", () => {
    const details = document.getElementById(button.dataset.target);
    const isHidden = details.classList.toggle("d-none");
    button.textContent = isHidden ? "Show details" : "Hide details";
  });
});
