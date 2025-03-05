class Todo {
  constructor(data, templateSelector, handleCheck, handleDelete) {
    this._completed = data.completed;
    this._data = data;
    this._templateEl = document.querySelector(templateSelector);
    this._handleCheck = handleCheck;
    this._handleDelete = handleDelete;
  }

  _setEventListeners() {
    this._deleteBtnEl.addEventListener("click", () => {
      this._handleDelete(this._completed);
      this._remove();
    });

    this._todoCheckboxEl.addEventListener("change", () => {
      this._toggleCompletion();
      this._handleCheck(this._completed);
    });
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoEl.querySelector(".todo__completed");
    this._todoLabel = this._todoEl.querySelector(".todo__label");
    this._todoDate = this._todoEl.querySelector(".todo__date");

    this._todoCheckboxEl.checked = this._completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);

    this._dueDate = new Date(this._data.date);
    if (!isNaN(this._dueDate)) {
      this._todoDate.textContent = `Due: ${this._dueDate.toLocaleString(
        "en-US",
        {
          year: "numeric",
          month: "short",
          day: "numeric",
        }
      )}`;
    }
  }

  _toggleCompletion() {
    this._completed = !this._completed;
  }

  _remove() {
    this._todoEl.remove();
  }

  getView() {
    this._todoEl = this._templateEl.content
      .querySelector(".todo")
      .cloneNode(true);

    this._deleteBtnEl = this._todoEl.querySelector(".todo__delete-btn");
    const todoNameEl = this._todoEl.querySelector(".todo__name");
    this._todoDate = this._todoEl.querySelector(".todo__date");

    todoNameEl.textContent = this._data.name;

    this._generateCheckboxEl();
    this._setEventListeners();

    return this._todoEl;
  }
}

export default Todo;
