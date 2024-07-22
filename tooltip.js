/* To be usable as a custom element, you need to extend something with the extends keyword which means you have to build your class based on some other base class*/

class Tooltip extends HTMLElement {
    constructor() {
        super();
        console.log('It is working!');
    }
}

customElements.define('uc-tooltip', Tooltip);