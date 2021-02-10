// Created by Davis Frank (www.davisfrank.de)
// Donate
// paypal: davisfrank@hotmail.de
// btc:
// eth or erc20-tokens: 
// free to use while: 
// my name is mentioned 
// and donate adresses are mentioned
var _tooltip = null;
var _bodyRect = null;

function tooltip(element, text) {
  element.setAttribute("tooltip", text)
  element.addEventListener("mouseenter", (event) => {
    viewToolTip(element, text, event)
  })
  element.addEventListener("mouseleave", (event) => {

    if (_tooltip != null) _tooltip.classList.add("hide")
  })
}

function tooltip2(event) {
  console.log("element", event);
  tooltip(event.target, event.target.getAttribute("tooltip"))
}

function viewToolTip(element, text, event) {
  let rect = element.getBoundingClientRect()
  let dX = 0
  let dY = 0
  _tooltip.textContent = text
  _tooltip.style.left = rect.left + 3 + "px"
  _tooltip.style.top = rect.top + element.clientHeight + "px"
  _tooltip.classList.remove("hide")
  dX = _bodyW - rect.left - _tooltip.clientWidth
  dY = _bodyH - rect.top - _tooltip.clientHeight

  if (dX < 1) {
    _tooltip.style.left = rect.left - 300 + "px"
    _tooltip.style.left = rect.left - _tooltip.clientWidth + "px"
  }
  if (dY < 40) {
    _tooltip.style.top = event.clientY - _tooltip.clientHeight - element.clientHeight / 2 + "px"
  }


}
function hideTooltip() {
  _tooltip.classList.add("hide")
}
function startToolTip() {
  let existing = document.getElementById("smart-tooltip")
  if (existing != null) existing.remove()
  let body = document.getElementsByTagName("BODY")[0]
  _tooltip = document.createElement("div")
  _tooltip.classList.add("tooltip", "hide", "flex-midY")
  _tooltip.id = "smart-tooltip"
  body.appendChild(_tooltip)
  _bodyH = body.clientHeight
  _bodyW = body.clientWidth

}
window.addEventListener("resize", () => {
  let body = document.getElementsByTagName("BODY")[0]
  _bodyH = body.clientHeight
  _bodyW = body.clientWidth
})
function initTooltips() {
  let tooltipItems = document.getElementsByClassName("tooltip-item")
  for (let i = 0; i < tooltipItems.length; i++) tooltip(tooltipItems[i], tooltipItems[i].getAttribute("tooltip"))
}

startToolTip()
initTooltips()