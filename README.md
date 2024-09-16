# ShadowDOM.contains

Shadow DOM aware version of Node.contains(). Will search shadow-root for container, and follows slotted elements.

Examples:

  contains(container, contained);

  contains(container, contained, { slotted: false })
