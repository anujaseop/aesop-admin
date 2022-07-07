import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import PropTypes from "prop-types";
import classnames from "classnames";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { editSetting, getSetting } from "../../../actions/settingAction";
import LaddaButton, { ZOOM_OUT } from "react-ladda";
import "ladda/dist/ladda-themeless.min.css";

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settingId: null,
      aboutUs: "",
      updateLoading: false,
      errors: {
        error_aboutUs: "",
      },
    };
    this.modules = {
      toolbar: [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        [{ direction: "rtl" }], // text direction
        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],
        ["clean"], // remove formatting button
      ],
    };
  }
  componentDidMount() {
    this.props.getSetting();
    setTimeout(() => {
      const { getSettings, loading } = this.props.setting;

      if (getSettings !== null && !loading) {
        this.setState({
          settingId: getSettings._id,
          aboutUs: getSettings.aboutUs,
        });
      }
    }, 1000);
  }

  onSubmitForm = (e, id) => {
    e.preventDefault();

    let { aboutUs, settingId, errors } = this.state;
    let validationFlag = true;
    let error;
    for (var key in errors) {
      if (errors.hasOwnProperty(key)) {
        if (key) {
          errors[key] = "";
        }
      }
    }

    // console.log('Setting -> onSubmitForm -> aboutUs', aboutUs)
    if (
      aboutUs === "<p><br></p>" ||
      aboutUs.length === 0 ||
      aboutUs === '<p class="ql-align-justify"><br></p>'
    ) {
      error = "About Us Fields is required";
      if (error) {
        validationFlag = false;
        errors.error_aboutUs = error;
      }
    }

    if (validationFlag) {
      this.setState({
        updateLoading: true,
      });
      const data = {
        aboutUs,
      };

      this.props
        .editSetting(settingId, data)
        .then((res) => {
          this.setState({
            updateLoading: false,
          });
          toast.success("About Us Updated successfully");
          this.props.getSetting();
        })
        .catch((err) => {
          this.setState({
            updateLoading: false,
          });
          toast.error("Settings Update Fail");
        });
      this.setState({
        errors,
      });
    } else {
      this.setState({
        errors,
      });
    }
  };

  onFieldChangeAb = (aboutUs) => {
    this.setState({
      aboutUs,
    });
  };
  render() {
    const containerStyle = {
      zIndex: 1999,
    };

    const { errors, aboutUs, updateLoading } = this.state;

    return (
      <div className="animated fadeIn">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          style={containerStyle}
        />
        <Row>
          <Col xs="12">
            <Card className="shadow">
              <CardHeader>
                <i class="fas fa-question-circle"></i>
                <strong>About Us</strong>
              </CardHeader>
              <CardBody>
                <form
                  onSubmit={(e) =>
                    this.onSubmitForm(e, "5f8d7327db37de1ebc614095")
                  }
                >
                  <Row>
                    <Col xs="12">
                      <div className="form-group">
                        <label>About Us</label>
                        <ReactQuill
                          name="aboutUs"
                          value={aboutUs}
                          placeholder="Enter About Us"
                          onChange={(e) => this.onFieldChangeAb(e)}
                          modules={this.modules}
                          style={{ insetInlineStart: "5" }}
                          className={classnames({
                            "is-invalid": errors.error_aboutUs.length > 0,
                          })}
                        />
                        {errors.error_aboutUs.length > 0 ? (
                          <em className="invalid-feedback d-block">
                            {errors.error_aboutUs}
                          </em>
                        ) : null}
                      </div>

                      <div className="w-100 float-left mt-3">
                        <LaddaButton
                          className="btn btnColor btn-brand  btn-ladda"
                          loading={updateLoading}
                          data-color="blue"
                          data-style={ZOOM_OUT}
                          onClick={this.onSaveLanguage}
                        >
                          Update
                        </LaddaButton>
                      </div>
                    </Col>
                  </Row>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

Setting.propTypes = {
  editSetting: PropTypes.func.isRequired,
  getSetting: PropTypes.func.isRequired,
  setting: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  setting: state.setting,
});
export default connect(mapStateToProps, { editSetting, getSetting })(Setting);
