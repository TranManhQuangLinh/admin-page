import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import ColorPicker from "./ColorPicker";
import { DateRangePicker } from 'rsuite';
import "rsuite/dist/rsuite.css";

const Settings = () => {
  const setting = JSON.parse(localStorage.getItem('setting'))
  const [newTitle, setNewTitle] = useState(setting ? setting.title : 'Admin');
  const [newEmail, setNewEmail] = useState(setting ? setting.email : 'L3032001@gmail.com');
  const [newBgColor, setNewBgColor] = useState(setting ? setting.bgColor : '#000000');
  const [newActiveDate, setNewActiveDate] = useState(setting && setting.activeDate ? [new Date(setting.activeDate[0]), new Date(setting.activeDate[1])] : [new Date('2001-03-30'), new Date('2001-03-30')]);
  const [showSaveButton, setShowSaveButton] = useState(false);

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
    setShowSaveButton(true);
  };

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
    setShowSaveButton(true);
  };

  const handleBgColorChange = (color) => {
    setNewBgColor(color);
    setShowSaveButton(true);
  };

  const handleActiveDateChange = (date) => {

    if (newActiveDate == null) {
      document.getElementById('date-feedback').style.display = 'none'
    } 
    else
      document.getElementById('date-feedback').style.display = 'block'
    setNewActiveDate(date);
    setShowSaveButton(true);
  };

  const handleSave = (event) => {
    event.preventDefault()
    event.stopPropagation()
    event.target.parentElement.classList.add('was-validated')
    // Validate input fields
    if (newTitle.trim() === '') {
      alert('Title is required');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(newEmail)) {
      alert('Email is not valid');
      return;
    }

    if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(newBgColor)) {
      alert('Color is not valid');
      return;
    }

    if (newActiveDate == null) {
      alert('Active date is required')
      return
    }

    // Save settings to local storage
    const setting = {
      title: newTitle,
      email: newEmail,
      bgColor: newBgColor,
      activeDate: newActiveDate,
    };
    console.log('save', setting);
    localStorage.setItem('setting', JSON.stringify(setting))
    setShowSaveButton(false);
  };

  return (
    <>
      <div className="title">Settings</div>
      <div className="content-data settings">
        <form className="form needs-validation row justify-content-center">
          <div className="form-group col-12 col-sm-6 mb-4">
            <label htmlFor="title-input">Title:</label>
            <input
              id="title-input"
              type="text"
              value={newTitle}
              onChange={handleTitleChange}
              className="form-control"
              required
            />
            <div className="invalid-feedback">
              Please enter a title.
            </div>
          </div>

          <div className="form-group col-12 col-sm-6 mb-4">
            <label htmlFor="email-input">Email:</label>
            <input
              id="email-input"
              type="email"
              value={newEmail}
              onChange={handleEmailChange}
              className="form-control"
              required
            />
            <div className="invalid-feedback">
              Please enter a valid email address.
            </div>
          </div>

          <div className="form-group col-12 col-sm-6 mb-4">
            <label htmlFor="bg-color-input">Background color:</label>
            <div className="input-group">
              <input
                id="bg-color-input"
                type="text"
                className="form-control"
                value={newBgColor}
                onChange={(event) => {
                  handleBgColorChange(event.target.value);
                }}
                pattern="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
                maxLength="7"
                aria-describedby="basic-addon2"
                required
              />
              <div className="input-group-append" style={{ border: '1px solid #ced4da' }}>
                <ColorPicker
                  color={newBgColor}
                  handleBgColorChange={handleBgColorChange}
                />
              </div>
              <div className="invalid-feedback">
                Please enter a valid hexadecimal color code.
              </div>
            </div>
          </div>

          <div className="form-group col-12 col-sm-6 mb-4">
            <label htmlFor="active-date-input">Active date:</label>
            <DateRangePicker
              id="active-date-input"
              value={newActiveDate}
              onChange={handleActiveDateChange}
              placement='bottomEnd'
              className="input-group"
              required
            />
            
            <div className="invalid-feedback" id="date-feedback">
              Please select an active date range.
            </div>
          </div>

          {showSaveButton && <button className="btn btn-primary w-auto" onClick={handleSave}>Save</button>}

        </form>
      </div>
    </>

  );
};

export default Settings;
