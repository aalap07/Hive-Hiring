import React, { Component } from "react";
import PropTypes from "prop-types";
import { ReactComponent as ArrowDown } from "../assets/arrowDown.svg";
import { ReactComponent as ArrowUp } from "../assets/arrowUp.svg";
import { ReactComponent as Check } from "../assets/check.svg";
import "../styles/dropdown.css";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    const { title, list } = this.props;

    this.state = {
      isListOpen: false,
      title,
      selectedItems: [],
      list,
    };
  }

  componentDidMount() {
    const { select } = this.props;

    if (select.length) {
      this.selectMultipleItems(select);
    }
  }

  componentDidUpdate() {
    const { isListOpen } = this.state;

    setTimeout(() => {
      if (isListOpen) {
        window.addEventListener("click", this.close);
      } else {
        window.removeEventListener("click", this.close);
      }
    }, 0);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.close);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { list } = nextProps;

    if (JSON.stringify(list) !== JSON.stringify(prevState.list)) {
      return { list };
    }

    return null;
  }

  close = () => {
    this.setState({
      isListOpen: false,
    });
  };

  selectSingleItem = (item) => {
    const { list } = this.props;

    const selectedItem = list.find((i) => i.value === item.value);
    this.handleSingleSelect(selectedItem);
  };

  handleSingleSelect = (item) => {
    const { label, value } = item;
    const { list, selectedItems } = this.state;
    const { name, onChange } = this.props;

    let foundItem;

    if (!label) {
      foundItem = list.find((i) => i.value === item.value);
    }

    this.setState(
      {
        title: label || foundItem.label,
        isListOpen: false,
        selectedItems: [item],
      },
      () => selectedItems[0]?.value !== value && onChange(item, name)
    );
  };

  selectMultipleItems = (items) => {
    const { list } = this.state;

    items.forEach((item) => {
      const selectedItem = list.find((i) => i.value === item.value);
      setTimeout(() => {
        this.selectMultipleItems(selectedItem, true);
      });
    });
  };

  handleMultiSelect = (item, noCloseOnSelection = false) => {
    const { closeOnSelection } = this.props;

    this.setState(
      {
        isListOpen: (!noCloseOnSelection && !closeOnSelection) || false,
      },
      () => this.handleSelection(item, this.state.selectedItems)
    );
  };

  handleSelection = (item, selectedItems) => {
    const { name, onChange } = this.props;

    const index = selectedItems.findIndex((i) => i.value === item.value);

    if (index !== -1) {
      const selectedItemsCopy = [...selectedItems];
      selectedItemsCopy.splice(index, 1);
      this.setState(
        () => ({
          selectedItems: selectedItemsCopy,
        }),
        () => {
          onChange(this.state.selectedItems, name);
          this.handleTitle();
        }
      );
    } else {
      this.setState(
        (prevState) => ({
          selectedItems: [...prevState.selectedItems, item],
        }),
        () => {
          onChange(this.state.selectedItems, name);
          this.handleTitle();
        }
      );
    }
  };

  handleTitle = () => {
    const { selectedItems } = this.state;
    const { title } = this.props;

    const { length } = selectedItems;

    if (!length) {
      this.setState({
        title,
      });
    }
  };

  toggleList = () => {
    this.setState((prevState) => ({
      isListOpen: !prevState.isListOpen,
    }));
  };

  listItems = () => {
    const { id, multiselect, checkIcon, styles } = this.props;
    const { listItem, listItemNoResult } = styles;
    const { list, selectedItems } = this.state;
    let tempList = [...list];

    if (tempList.length) {
      if (multiselect) {
        return tempList.map((item) => (
          <button
            type="button"
            className={`dd-list-item ${id}`}
            style={listItem}
            key={item.value}
            onClick={() => this.handleMultiSelect(item)}
          >
            {item.label}{" "}
            {selectedItems.some((i) => i.value === item.value) && (
              <span style={styles.checkIcon}>{checkIcon || <Check />}</span>
            )}
          </button>
        ));
      } else {
        return tempList.map((item) => (
          <button
            type="button"
            className={`dd-list-item ${id}`}
            style={listItem}
            key={item.value}
            onClick={() => this.selectSingleItem(item)}
          >
            {item.label}{" "}
            {item.value === selectedItems[0] && (
              <span style={styles.checkIcon}>{checkIcon || <Check />}</span>
            )}
          </button>
        ));
      }
    }

    return (
      <div
        className={`dd-list-item no-result ${id}`}
        style={listItemNoResult}
      ></div>
    );
  };

  render() {
    const { id, multiselect, arrowUpIcon, arrowDownIcon, styles } = this.props;
    const { isListOpen, title } = this.state;

    const {
      wrapper,
      header,
      headerTitle,
      headerArrowUpIcon,
      headerArrowDownIcon,
      list,
      scrollList,
    } = styles;

    return (
      <div className={`dd-wrapper ${id}`} style={wrapper}>
        <button
          type="button"
          className={`dd-header ${id}`}
          style={header}
          onClick={this.toggleList}
        >
          <div className={`dd-header-title ${id}`} style={headerTitle}>
            <div style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}>
              {this.state.selectedItems.length
                ? this.state.selectedItems.map((item) => item.label).join(", ")
                : title}
            </div>
          </div>

          {isListOpen ? (
            <span style={headerArrowUpIcon}>{arrowUpIcon || <ArrowUp />}</span>
          ) : (
            <span style={headerArrowDownIcon}>
              {arrowDownIcon || <ArrowDown />}
            </span>
          )}
        </button>
        {isListOpen && (
          <div
            role="list"
            type="button"
            className={`dd-list ${id}`}
            style={list}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`dd-scroll-list ${id}`} style={scrollList}>
              {this.listItems()}
            </div>
          </div>
        )}
      </div>
    );
  }
}

Dropdown.defaultProps = {
  id: "",
  select: [],
  closeOnSelection: false,
  multiselect: false,
  styles: {},
  arrowUpIcon: null,
  arrowDownIcon: null,
  checkIcon: null,
};

Dropdown.propTypes = {
  id: PropTypes.string,
  styles: PropTypes.shape({
    wrapper: PropTypes.string,
    header: PropTypes.string,
    headerTitle: PropTypes.string,
    headerArrowUpIcon: PropTypes.string,
    headerArrowDownIcon: PropTypes.string,
    checkIcon: PropTypes.string,
    list: PropTypes.string,
    scrollList: PropTypes.string,
    listItem: PropTypes.string,
    listItemNoResult: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
  list: PropTypes.shape([{ value: PropTypes.string, label: PropTypes.string }])
    .isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  closeOnSelection: PropTypes.bool,
  multiselect: PropTypes.bool,
  select: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
    })
  ),
  checkIcon: PropTypes.elementType,
  arrowUpIcon: PropTypes.elementType,
  arrowDownIcon: PropTypes.elementType,
};

export default Dropdown;
