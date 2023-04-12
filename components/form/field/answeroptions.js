import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

class AnswerOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      type: 0,
      errors: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  componentDidMount() {
    const { options, type } = this.props;
    this.setState({ options, type });
  }

  componentDidUpdate(prevProps, prevState) {
    const { options, type } = this.props;
    if (prevProps.options !== options) {
      this.setState({ options });
    }
    if (prevProps.type !== type) {
      this.setState({ type });
    }
  }

  removeItem = (i) => {
    const { options } = this.state;
    if (i > -1) {
      options.splice(i, 1); // 2nd parameter means remove one item only
      this.setState({ options });
    }
  };

  addNew = () => {
    const { options } = this.state;
    options.push({ value: "", is_answer: false });
    this.setState({ options });
  };

  validateOptions = () => {
    const { callback, type, seterror } = this.props;
    const { options } = this.state;
    const errors = [];
    this.setState({ errors }, () => {
      seterror(errors);
    });
    const emptys = options.filter((o) => o.value === "");
    const answers = options.filter((o) => o.is_answer === true);
    const is_multi_answers = type == "1" && answers.length > 1;
    const is_emptys = emptys.length > 0;
    console.log(answers);
    if (
      is_multi_answers ||
      is_emptys ||
      options.length == 0 ||
      answers.length == 0
    ) {
      if (options.length == 0 || is_emptys) {
        errors.push("Answer options should not contain empty.");
      }
      if (is_multi_answers) {
        errors.push(
          "Single Select choosed but multiple options are marked as answer."
        );
      }
      if (answers.length == 0) {
        errors.push("Atlest one answer should be valid answer.");
      }
      this.setState({ errors }, () => {
        seterror(errors);
      });
      return false;
    } else {
      this.setState({ errors: [] }, () => {
        callback(options);
      });
      return true;
    }
  };

  updateOption = (name, value, key) => {
    const { options } = this.state;
    const index = name.replace(`${key}-`, "");
    options[index][key] = value;

    this.setState({ options }, () => {
      this.validateOptions();
    });
  };

  handleChange(event) {
    const { name, value } = event.target;
    this.updateOption(name, value, "value");
  }

  handleCheckbox(event) {
    const { name, checked } = event.target;
    this.updateOption(name, checked, "is_answer");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.options !== this.props.options) {
      const { options, type } = this.props;
      this.setState({ options, type });
    }
  }

  render() {
    const { options, type, errors } = this.state;
    let inc = 0;
    return (
      type !== 0 && (
        <Form.Group className="mb-3">
          <Form.Label>Options </Form.Label>
          {options &&
            options.length > 0 &&
            options?.map((v, i) => {
              inc = inc + 1;
              return (
                <>
                  <Row md={4} className={`g-4 mb-3 answeroption-${i}`}>
                    <Col xs={1} md={1}>
                      {inc}
                    </Col>
                    <Col xs={5} sm={5} md={3}>
                      <Form.Control
                        type="text"
                        value={v["value"]}
                        name={`value-${i}`}
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col xs={5} sm={5} md={4}>
                      <Form.Check
                        type="checkbox"
                        name={`is_answer-${i}`}
                        checked={v["is_answer"]}
                        label="Is Valid Answer?"
                        onChange={this.handleCheckbox}
                      />
                    </Col>
                    <Col xs={1} sm={1} md={1}>
                      <a onClick={() => this.removeItem(i)}>
                        <FontAwesomeIcon
                          width={10}
                          size={"xs"}
                          icon={faClose}
                        />
                      </a>
                    </Col>
                  </Row>
                  {/* <Row>
                    <Col>
                      <p>{errors[i]}</p>
                    </Col>
                  </Row> */}
                </>
              );
            })}
          <Button
            className="mt-4"
            variant="outline-success mx-auto d-block"
            onClick={this.addNew}
          >
            Add New
          </Button>
          <hr className="text-success"></hr>
        </Form.Group>
      )
    );
  }
}
export default AnswerOptions;
