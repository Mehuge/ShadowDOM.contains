
/**
 * Shadow dom aware version of Node.contains(). Test if one element is contained within another.
 * @param {Element} container
 * @param {Element} el
 * @param {Object} options  optional 
 * @param {Boolean} options.slotted  if an element is slotted, check shadow dom for container. Default is true
 * @returns true if container contains the element.
 */
export default function contains(container, el, options = { slotted: true }) {
  const { slotted } = options;
  while (el && el != container) {
    // follow parent chain, if not local search, escape shadow dom. 
    // if considerig slotted elements, follow slotted (parentElement and assignedSlot are mutually exclusive)
    // a child of shadowRoot does not have a parentElement
    // el.getRootNode().host works for the shadow root and for children of the shadow root 
    el = el.parentElement || (slotted && el.assignedSlot) || el.getRootNode()?.host;
  }
  return !!el;
}
