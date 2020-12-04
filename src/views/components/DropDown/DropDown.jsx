import React from "react";

import "./dropdown.scss";
class DropDown extends React.Component {
  state = {
    active: false
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = e => {
    if (this.list && !this.list.contains(e.target)) {
      this.setState({ active: false });
    }
  };

  render() {
    const { active } = this.state;
    const { children, prev } = this.props;

    return (
      <div
        tabIndex="0"
        ref={ref => (this.input = ref)}
        className="dropdown"
        onClick={() => this.setState({ active: true })}
      >
        {prev}
        <div
          className={"wrapperChildren"}
          ref={ref => (this.list = ref)}
          onMouseLeave={() => this.setState({ active: false })}
        >
          {active && (
            <div onClick={() => this.setState({ active: false })}>
              {children}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default DropDown;
