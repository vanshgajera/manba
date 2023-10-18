import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/contactUs.css";
import "../App.css";
import building from "../Assets/office-building 1(2).jpg";
import phone from "../Assets/old-typical-phone 1.jpg";
import emaill from "../Assets/email 2.jpg";

export const ContactUs = () => {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [localStorageData, setLocalStorageData] = useState([]);

  const [fnameError, setFnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [cityError, setCityError] = useState("");
  const [selectedOptionError, setSelectedOptionError] = useState(""); 

  const options = [
    "----Select Your Loan----",
    "Home Loan",
    "Personal Loan",
    "Gold Loan",
    "Business Loan"
  ];

  


  const submitForm = async (e) => {
    e.preventDefault();

   if(fname == "" || email == "" || number == "" || city == "" || message == "" || selectedOption == ""){

      if(fname == ""){
        setFnameError("Please fill this field. This field is requred.")
      }
      else{
        setFnameError("")
      }

      if(email == ""){
        setEmailError("Please fill this field. This field is requred.")
      }
      else{
        setEmailError("")
      }
      
      if(number == ""){
        setNumberError("Please fill this field. This field is requred.")
      }else if (!/^\d{10}$/.test(number)){
        setNumberError("Please enter ten digites")
      }
      else{
        setNumberError("")
      }

      if(city == ""){
        setCityError("Please fill this field. This field is requred.")
      }
      else{
        setCityError("")
      }

      if(selectedOption == ""){
        setSelectedOptionError("Please fill this field. This field is requred.")
      }
      else{
        setSelectedOptionError("")
      }

   }
   else{

     const submitData = {
       fname: fname,
       email: email,
       number: number,
       city: city,
       message: message,
       selectedOption: selectedOption,
     };

     const updatedLocalStorageData = [...localStorageData, submitData];
    localStorage.setItem("formData", JSON.stringify(updatedLocalStorageData));
    setLocalStorageData(updatedLocalStorageData);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/customer/customerdata",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: submitData,
    };

    await axios(config)
      .then((submitData) => {
        JSON.stringify(submitData);
      })
      .catch((error) => {
        console.log(error);
      });
     
      
      setFname('');
      setEmail('');
      setNumber('');
      setCity('');
      setSelectedOption('');
      setMessage('')
    }
    window.location.reload(true); 
  };
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
      setLocalStorageData(storedData);
    }
  }, []);
  const handleNumberChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue;
     if (numericValue.length <= 10  ) {
        setNumber(numericValue);
    }
  };
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  
  };
  return (
    <>
      <div className="bgg"></div>
      <div className="container">
        <div className="main">
          <div className="section">
            <h2 className="firsthead">Get In Touch</h2>
            <p className="firstpara">Please contact us or send us an email.</p>
           <form onSubmit={submitForm} method="post">
           <div className="from_input">
              <div className="row">
                <div className="col-lg-6 col-12 inputText ">
                  <input type="text" name="name" placeholder="Your Name" value={fname} autoComplete="off" onChange={(e) => setFname(e.target.value)} />
              <span className="error">{fnameError}</span>
                </div>
                <div className="col-lg-6 col-12 inputText ">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your E-mail"
                    value={email}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className="error">{emailError}</span>
                </div>
                <div className="col-lg-6 col-12 inputText ">
                  <input
                    type="tel"
                    name="number"
                    placeholder="Your Number"
                    value={number}
                    onKeyDown={(e) => setNumber(e.target.value)}
                    onChange={handleNumberChange}
                    pattern="^\d{10}$"
                  />
                  <span className="error">{numberError}</span>
                </div>  
                <div className="col-lg-6 col-12 inputText ">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Your City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <span className="error">{cityError}</span>
                </div>
              </div>
              <select
                id="loans"
                name="loans"
                onChange={handleSelectChange}
                className="select inputText"
                placeholder="select your loan"
              >
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <span className="error">{selectedOptionError}</span>
              <input
              type="text"
              name="message"
              id="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="message_input"
            />
            <div className="btn"><input type="submit" value="Submit" style={{border:"none", textAlign:"center", padding:"0"}}/></div>
            </div>
           </form>
           
          </div>
        </div>
        <div className="contact">
          <h2 className="help_you">We are here to help you</h2>
          <p className="help_para">
            Various versions have evolved over the years sometimes by accident
            sometimes on purpose injected humour and the like.
          </p>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-12">
              <div className="box">
                <img src={building} alt="building" />
                <h3>BRANCH OFFICE</h3>
                <p>312, super diamond market, surat</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-12">
              <div className="box">
                <img src={phone} alt="phone" />
                <h3>CALL US AT</h3>
                <p>+91 22 6212 5000</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-12">
              <div className="box">
                <img src={emaill} alt="email" />
                <h3>EMAIL ADDRESS</h3>
                <p>Manbafinaserve@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
