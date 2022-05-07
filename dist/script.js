import React, { useState } from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import ReactSelect from "https://cdn.skypack.dev/react-select@4.3.1";


const App = () => {
  const options = [
  { value: "gujarat", label: "Gujarat" },
  { value: "delhi", label: "Delhi" },
  { value: "punjab", label: "Punjab" },
  { value: "maharashtra", label: "Maharashtra" },
  { value: "rajasthan", label: "Rajasthan" }];


  const multioptions = [
  { value: "orange", label: "Orange" },
  { value: "mango", label: "Mango" },
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "grapes", label: "Grapes" }];

  const emptydata = {
    userImage: '',
    userImageName: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    subject: '',
    reactselect: '',
    reactmultiselect: [],
    gender: '',
    hobbies: [],
    message: '' };

  const [formData, SetFormData] = useState({
    userImage: '',
    userImageName: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    subject: '',
    reactselect: '',
    reactmultiselect: [],
    gender: '',
    hobbies: [],
    message: '' });


  const InputChange = e => {
    const { name, value } = e.target;
    if (name === "hobbies") {
      const hobbies = formData.hobbies;
      const index = hobbies.indexOf(value);
      if (e.target.checked === true) {
        hobbies.push(value);
      } else if (e.target.checked === false) {
        hobbies.splice(index, 1);
      }
    } else
    if (name === "userImage") {
      let reader = new FileReader();
      let file = e.target.files[0];
      let filename = e.target.files[0].name;
      reader.onloadend = () => {
        SetFormData(preValue => {
          return {
            ...preValue,
            userImageName: filename,
            userImage: reader.result };

        });
      };
      if (e.target.files[0]) {
        reader.readAsDataURL(file);
      }
    } else
    {
      SetFormData(preData => {
        return {
          ...preData,
          [name]: value };

      });
    }
  };


  const formSubmitEvent = e => {
    e.preventDefault();

    // Reset form on submit
    e.target.reset();
    SetFormData(emptydata);

    // Result
    console.log(formData);
  };

  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("div", { className: "row m-0 justify-content-center" }, /*#__PURE__*/
    React.createElement("div", { className: "col-md-6 mt-5 mb-5" }, /*#__PURE__*/
    React.createElement("div", { className: "form-area" }, /*#__PURE__*/
    React.createElement("div", { className: "form-inner" }, /*#__PURE__*/
    React.createElement("form", { onSubmit: formSubmitEvent }, /*#__PURE__*/
    React.createElement("h4", { className: "form-heading mb-4 text-primary text-center" }, "React Multiple Inputs form"), /*#__PURE__*/

    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("div", { className: "col-lg-12" }, /*#__PURE__*/
    React.createElement("div", { class: "alert alert-warning", role: "alert" }, "You can see result in console")), /*#__PURE__*/

    React.createElement("div", { className: "col-lg-12" }, /*#__PURE__*/
    React.createElement("div", { className: "form-group text-center" }, /*#__PURE__*/
    React.createElement("div", { className: "userprofile-img-bx" }, /*#__PURE__*/
    React.createElement("img", { id: "imgpreviewPrf", src: formData.userImage === '' ? 'https://image.flaticon.com/icons/svg/145/145867.svg' : formData.userImage, alt: "profile-img", className: "prf-img-prev" }), /*#__PURE__*/
    React.createElement("div", { className: "profile-img-change-btn" }, /*#__PURE__*/
    React.createElement("i", { className: "fa fa-pencil-alt" }), /*#__PURE__*/
    React.createElement("input", { type: "file", name: "userImage", className: "filepreviewprofile", onChange: InputChange }))))), /*#__PURE__*/




    React.createElement("div", { className: "col-lg-6" }, /*#__PURE__*/
    React.createElement("div", { className: "form-group" }, /*#__PURE__*/
    React.createElement("label", { className: "d-block" }, "First Name"), /*#__PURE__*/
    React.createElement("input", { type: "text", name: "firstname", className: "form-control", value: formData.firstname, onChange: InputChange }))), /*#__PURE__*/


    React.createElement("div", { className: "col-lg-6" }, /*#__PURE__*/
    React.createElement("div", { className: "form-group" }, /*#__PURE__*/
    React.createElement("label", { className: "d-block" }, "Last Name"), /*#__PURE__*/
    React.createElement("input", { type: "text", name: "lastname", className: "form-control", value: formData.lastname, onChange: InputChange }))), /*#__PURE__*/


    React.createElement("div", { className: "col-lg-6" }, /*#__PURE__*/
    React.createElement("div", { className: "form-group" }, /*#__PURE__*/
    React.createElement("label", { className: "d-block" }, "Email"), /*#__PURE__*/
    React.createElement("input", { type: "email", name: "email", className: "form-control", value: formData.email, onChange: InputChange }))), /*#__PURE__*/


    React.createElement("div", { className: "col-lg-6" }, /*#__PURE__*/
    React.createElement("div", { className: "form-group" }, /*#__PURE__*/
    React.createElement("label", { className: "d-block" }, "Password"), /*#__PURE__*/
    React.createElement("input", { type: "password", name: "password", className: "form-control", value: formData.password, onChange: InputChange }))), /*#__PURE__*/


    React.createElement("div", { className: "col-lg-6" }, /*#__PURE__*/
    React.createElement("div", { className: "form-group" }, /*#__PURE__*/
    React.createElement("label", { className: "d-block" }, "Subject"), /*#__PURE__*/
    React.createElement("select", { name: "subject", className: "form-control", value: formData.subject, onChange: InputChange }, /*#__PURE__*/
    React.createElement("option", { value: "" }, "Select Subject"), /*#__PURE__*/
    React.createElement("option", { value: "subject 1" }, "Subject 1"), /*#__PURE__*/
    React.createElement("option", { value: "subject 2" }, "Subject 2"), /*#__PURE__*/
    React.createElement("option", { value: "subject 3" }, "Subject 3"), /*#__PURE__*/
    React.createElement("option", { value: "subject 4" }, "Subject 4"), /*#__PURE__*/
    React.createElement("option", { value: "subject 5" }, "Subject 5")))), /*#__PURE__*/



    React.createElement("div", { className: "col-lg-6" }, /*#__PURE__*/
    React.createElement("div", { className: "form-group react-form-group" }, /*#__PURE__*/
    React.createElement("label", { className: "d-block" }, "State (React Select)"), /*#__PURE__*/
    React.createElement(ReactSelect, {
      options: options,
      value: formData.reactselect,
      placeholder: "Select State",
      onChange: value => SetFormData(prevalue => {return { ...prevalue, reactselect: value };}) }))), /*#__PURE__*/



    React.createElement("div", { className: "col-lg-12" }, /*#__PURE__*/
    React.createElement("div", { className: "form-group react-form-group" }, /*#__PURE__*/
    React.createElement("label", { className: "d-block" }, "Select Fruit (Multiple) (React Select)"), /*#__PURE__*/
    React.createElement(ReactSelect, {
      isMulti: true,
      options: multioptions
      // closeMenuOnSelect={false}
      , hideSelectedOptions: false,
      placeholder: "Select Fruits",
      value: formData.reactmultiselect,
      onChange: value => SetFormData(prevalue => {return { ...prevalue, reactmultiselect: value };}) }))), /*#__PURE__*/



    React.createElement("div", { className: "col-lg-6" }, /*#__PURE__*/
    React.createElement("div", { className: "form-group radio-group" }, /*#__PURE__*/
    React.createElement("label", { className: "d-block" }, "Select Gender"), /*#__PURE__*/
    React.createElement("div", { className: "custom-control custom-radio d-inline-block mr-2" }, /*#__PURE__*/
    React.createElement("input", { type: "radio", id: "multiradio1", name: "gender", className: "custom-control-input", value: "Male", onChange: InputChange, checked: formData.gender === 'Male' }), /*#__PURE__*/
    React.createElement("label", { className: "custom-control-label", htmlFor: "multiradio1" }, "Male")), /*#__PURE__*/

    React.createElement("div", { className: "custom-control custom-radio d-inline-block mr-2" }, /*#__PURE__*/
    React.createElement("input", { type: "radio", id: "multiradio2", name: "gender", className: "custom-control-input", value: "Female", onChange: InputChange, checked: formData.gender === 'Female' }), /*#__PURE__*/
    React.createElement("label", { className: "custom-control-label", htmlFor: "multiradio2" }, "Female")), /*#__PURE__*/

    React.createElement("div", { className: "custom-control custom-radio d-inline-block mr-2" }, /*#__PURE__*/
    React.createElement("input", { type: "radio", id: "multiradio3", name: "gender", className: "custom-control-input", value: "Other", onChange: InputChange, checked: formData.gender === 'Other' }), /*#__PURE__*/
    React.createElement("label", { className: "custom-control-label", htmlFor: "multiradio3" }, "Other")))), /*#__PURE__*/



    React.createElement("div", { className: "col-lg-6" }, /*#__PURE__*/
    React.createElement("div", { className: "form-group radio-group" }, /*#__PURE__*/
    React.createElement("label", { className: "d-block" }, "Hobbies"), /*#__PURE__*/
    React.createElement("div", { className: "custom-control custom-checkbox d-inline-block mr-2" }, /*#__PURE__*/
    React.createElement("input", { type: "checkbox", className: "custom-control-input checkbox-input", name: "hobbies", id: "multicheckbox1", value: "Dance", onChange: InputChange, defaultChecked: formData.hobbies.includes('Dance') ? true : false }), /*#__PURE__*/
    React.createElement("label", { className: "custom-control-label", htmlFor: "multicheckbox1" }, "Dance")), /*#__PURE__*/

    React.createElement("div", { className: "custom-control custom-checkbox d-inline-block mr-2" }, /*#__PURE__*/
    React.createElement("input", { type: "checkbox", className: "custom-control-input checkbox-input", name: "hobbies", id: "multicheckbox2", value: "Music", onChange: InputChange, defaultChecked: formData.hobbies.includes('Music') ? true : false }), /*#__PURE__*/
    React.createElement("label", { className: "custom-control-label", htmlFor: "multicheckbox2" }, "Music")), /*#__PURE__*/

    React.createElement("div", { className: "custom-control custom-checkbox d-inline-block mr-2" }, /*#__PURE__*/
    React.createElement("input", { type: "checkbox", className: "custom-control-input checkbox-input", name: "hobbies", id: "multicheckbox3", value: "Cricket", onChange: InputChange, defaultChecked: formData.hobbies.includes('Cricket') ? true : false }), /*#__PURE__*/
    React.createElement("label", { className: "custom-control-label", htmlFor: "multicheckbox3" }, "Cricket")))), /*#__PURE__*/



    React.createElement("div", { className: "col-lg-12" }, /*#__PURE__*/
    React.createElement("div", { className: "form-group" }, /*#__PURE__*/
    React.createElement("label", { className: "d-block" }, "Message"), /*#__PURE__*/
    React.createElement("textarea", { name: "message", rows: "4", className: "form-control", value: formData.message, onChange: InputChange }))), /*#__PURE__*/


    React.createElement("div", { className: "col-lg-12 text-right" }, /*#__PURE__*/
    React.createElement("button", { type: "submit", className: "btn btn-primary form-submit" }, "Submit"))))))))));











};


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));