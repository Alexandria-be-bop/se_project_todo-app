class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer; // take in 'raw' data, convert it to html, and place it on the page/dom
    this._container = document.querySelector(containerSelector);
  }

  // render all the items within this._items onto the page
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(item) {
    this._container.append(item);
  }
}

export default Section;
