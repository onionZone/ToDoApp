import React from "react";

class AddTask extends React.Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    owner: "",
    date: this.minDate,
    priority: false,
  };

  handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    const checked = e.target.checked;
    if (type === "date" || type === "text") {
      this.setState({ [name]: value });
    }
    if (type === "checkbox") {
      this.setState({ [name]: checked });
    }
  };

  handleClick = (e) => {
    e.preventDefault();
    const { text, owner, date, priority } = this.state;
    const add = this.props.add(text, owner, date, priority);
    if (add) {
      this.setState({
        text: "",
        owner: "",
        priority: false,
        date: this.minDate,
      });
    }
    console.log("Click done");
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";

    return (
      <form>
        <h3>Add some task to do:</h3>
        <div className="form-group row m-3">
          <label for="text" className="col-sm-2 col-form-label">
            Task description:
          </label>
          <div className="col-sm-5">
            <input
              name="text"
              type="text"
              id="text"
              className="form-control"
              placeholder="Description.."
              value={this.state.text}
              onChange={this.handleForm}
            />
          </div>
        </div>

        <div className="form-group row  m-3">
          <label for="owner" className="col-sm-2 col-form-label">
            Owner:
          </label>
          <div className="col-sm-5">
            <input
              name="owner"
              id="owner"
              type="text"
              className="form-control"
              placeholder="Owner.."
              value={this.state.owner}
              onChange={this.handleForm}
            />
          </div>
        </div>

        <div className="form-group row  m-3">
          <label for="date" className="col-sm-2 col-form-label">
            Due date:
          </label>
          <div className="col-sm-5">
            <input
              name="date"
              type="date"
              id="date"
              className="form-control"
              value={this.state.date}
              min={this.minDate}
              max={maxDate}
              onChange={this.handleForm}
            />
          </div>
        </div>

        <div className="form-group row  m-3">
          <div className="col-sm-2">
            <label for="priority" className="form-check-label">
              Important task:
            </label>
          </div>
          <div className="col-sm-3">
            <input
              name="priority"
              type="checkbox"
              id="priority"
              className="form-check-input"
              checked={this.state.priority}
              onChange={this.handleForm}
            />
          </div>
        </div>

        <div className="form-group row  m-3 text-center">
          <div className="col-sm-7">
            <button
              className="btn btn-dark btn-block"
              onClick={this.handleClick}
            >
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddTask;
