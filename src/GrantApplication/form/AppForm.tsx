import React, {useRef, /* useState */} from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import {validateAddress, validateNumber, validateEmail, validateName, validatePhone} from "./AppFormValidation";
import {AppFormData} from "./AppFormData";
import axios from "axios";
import "./AppForm.scss";


const part5 = 'nIFHX3K';
const part3 = 'ed879e22efc0d33baa0ccad2f9a';
const part1 = 'xkeysib-01c8a3ea';
const part2 = '55565d9545f23464a340b27';
const part4 = '8ee2f4-V9AYTsn41';



export interface AppFormProps {
  formData: AppFormData;

  setFormData: (formData: AppFormData) => void;
}

export const AppForm: React.FC<AppFormProps> = (props) => {
  const formRef = useRef<HTMLFormElement>(null);

  const formData = props.formData;
  const setFormData = props.setFormData;





/*   const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  }; */

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const canPrintToPdf = (): boolean => {
    return (
        validateName(formData.studentfname) &&
        validateName(formData.studentlname) &&
        validateName(formData.parentfname) &&
        validateName(formData.parentlname) &&
      
        validateEmail(formData.email) &&
        validateAddress(formData.address) &&
        validatePhone(formData.number)&&
        validateName(formData.state) &&
        validateAddress(formData.schoolName) &&
        validateAddress(formData.gradeLevel) &&
        validateAddress(formData.city)&&
        validateNumber(formData.zipCode)&&
        validateName(formData.lunchQuestion) 
        
      
    );
  };

  const printToPdf = (): void => {
    if (formRef.current) {
      if (!canPrintToPdf()) {
        return;
      }

      const doc = new jsPDF();
      doc.text('Parent/Child Interest form for The Library Cut Grant', 10, 10);
      autoTable(doc, {
        startY: 20,
        body: [
          ['School Grade Level', formData.gradeLevel],
          ['School Name', formData.schoolName],
          ['Student First Name', formData.studentfname],
          ['Student Last Name', formData.studentlname],
          ['City', formData.city],
          ['Street Address', formData.address],
          ['State', formData.state],
          ['Zip Code', formData.zipCode],
          ['Appartment Number', formData.aptNumber],
          ['Parent/Guardian First Name', formData.parentfname],
          ['Parent/Guardian Last Name', formData.parentlname],
          ['Parent/Guardian Email', formData.email],
          ['Parent/Guardian Phone Number', formData.number],
          ['Is your child eligible for free or reduced lunch at their school? (verification required upon selection)', formData.lunchQuestion],
      
        ],
      });
      doc.save('docForm (' + formData.studentfname +'_'+ formData.studentlname+ ").pdf");
    }
  };
  const generatePDF =()=>{
    if (formRef.current) {
      if (!canPrintToPdf()) {
        return;
      }

      const doc = new jsPDF();
      doc.text('Test Application Form', 10, 10);
      autoTable(doc, {
        startY: 20,
        body: [
          ['School Grade Level', formData.gradeLevel],
          ['School Name', formData.schoolName],
          ['Student First Name', formData.studentfname],
          ['Student Last Name', formData.studentlname],
          ['City', formData.city],
          ['Street Address', formData.address],
          ['State', formData.state],
          ['Zip Code', formData.zipCode],
          ['Appartment Number', formData.aptNumber],
          ['Parent/Guardian First Name', formData.parentfname],
          ['Parent/Guardian Last Name', formData.parentlname],
          ['Parent/Guardian Email', formData.email],
          ['Parent/Guardian Phone Number', formData.number],
          ['Is your child eligible for free or reduced lunch at their school? (verification required upon selection)', formData.lunchQuestion],
        ],
      });
      doc.save('docForm (' + formData.studentfname +'_'+ formData.studentlname + ").pdf");
      return doc;
    }
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const document = await generatePDF();
        if (!document) {
            throw new Error("Failed to generate PDF.");
        }
        await sendEmailWithAttachment(document);
    } catch (error) {
        console.error("Error submitting form:", error);
    }
};


interface PdfDoc {
    output: (type: string) => string;
}

const sendEmailWithAttachment = async (pdfDoc: PdfDoc): Promise<void> => {
    try {
        const base64Pdf = pdfDoc.output('datauristring').split(',')[1];

        const response = await axios.post(
            'https://api.brevo.com/v3/smtp/email',
            {
                sender: {
                    name: 'Maroon Strategy',
                    email: 'ackenney22@ackenney.com',
                    "ips": [
                      {
                        "ip": "185.199.108.153",
                        "domain": "ackenney.com",
                      "weight": 50
                          
                      }
                 ],
                },
                to: [
                    {
                        name: formData.studentfname +' '+ formData.studentlname,
                        email: formData.email,
                    },
                ],
                subject: formData.studentfname +' '+ formData.studentlname + ' Application type',
                htmlContent: 'Thank you for applying!',
                attachment: [
                    {
                        content: base64Pdf,
                        name: 'docForm (' + formData.studentfname +'_'+ formData.studentlname + ").pdf",
                    },
                ],
            },
            {
                headers: {
                    accept: 'application/json',
                    'api-key': part1+part2+part3+part4+part5,
                    'content-type': 'application/json',
                },
                
            }
      
        );

        console.log('Email sent', response.data);
        alert('Application Sent Successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};


  return (
      <div className={`app-form`} >
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form onSubmit={submitForm} ref={formRef} className="mt-5">
                <div className="d-flex justify-content-between align-items-center">
                  
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h1>Parent/Child Interest form for The Library Cut Grant</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                

                <label htmlFor="gradeLevel" className="col-sm-2 col-form-label"><strong>Student Grade Level:</strong></label>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <select
                      id="gradeLevel"
                      name="gradeLevel"
                      className="form-control"
                      required
                      value={formData.gradeLevel}
                      
                      onChange={handleInputChange}
                    >
                      <option value="">Select a Grade Level</option>
                      <option value="1st">1st</option>
                      <option value="2nd">2nd</option>
                      <option value="3rd">3rd</option>
                      <option value="4th">4th</option>
                      <option value="5th">5th</option>
                      <option value="6th">6th</option>
            
                    </select>
                  </div>
                </div>


                <label htmlFor="schoolName" className="col-sm-2 col-form-label">
                  <span><strong>School Name:</strong></span>
                </label>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input type="text" id="schoolName" required   pattern ="[a-zA-Z]+" placeholder="" name="schoolName" className="form-control" value={formData.schoolName} onChange={handleInputChange} />
                  </div>
                </div>


                <label htmlFor="studentfname" className="col-sm-2 col-form-label">
                  <span><strong>Student First Name:</strong></span>
                </label>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input type="text" id="studentfname" required   pattern ="[a-zA-Z]+" placeholder="John" name="studentfname" className="form-control" value={formData.studentfname} onChange={handleInputChange} />
                  </div>
                </div>
                
                <label htmlFor="studentlname" className="col-sm-2 col-form-label">
                  <span><strong>Student Last Name:</strong></span>
                </label>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input type="text" id="studentlname" required  pattern ="[a-zA-Z]+" placeholder="Doe" name="studentlname" className="form-control" value={formData.studentlname} onChange={handleInputChange} />
                  </div>
                </div>

                <label htmlFor="address" className="col-sm-2 col-form-label"><strong>Street Address:</strong></label>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input type="text" required id="address" name="address" className="form-control" value={formData.address} onChange={handleInputChange} />
                  </div>
                </div>
                <label htmlFor="city" className="col-sm-2 col-form-label"><strong>City:</strong></label>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input type="text" required id="address" name="city" className="form-control" value={formData.city} onChange={handleInputChange} />
                  </div>
                </div>

                <label htmlFor="state" className="col-sm-2 col-form-label"><strong>State:</strong></label>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <select
                      id="state"
                      name="state"
                      className="form-control"
                      required
                      value={formData.state}
                      
                      onChange={handleInputChange}
                    >
                      <option value="">Select a state</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                  </div>
                </div>


                <label htmlFor="zipCode" className="col-sm-4 col-form-label"><strong>Zip Code:</strong></label>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input type="tel" required id="zipCode" name="zipCode" placeholder="#####" pattern='[0-9]{5}'className="form-control"  value={formData.zipCode} onChange={handleInputChange} />
                  </div>
                </div>

                <label htmlFor="aptNumber" className="col-sm-2 col-form-label"><strong>Apartment Number:</strong></label>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input type="text" id="address" name="aptNumber" className="form-control" value={formData.aptNumber} onChange={handleInputChange} />
                  </div>
                </div>


                <label htmlFor="parentfname" className="col-sm-2 col-form-label">
                  <span><strong>Parent/Guardian First Name:</strong></span>
                </label>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input type="text" id="parentfname" required   pattern ="[a-zA-Z]+" placeholder="John" name="parentfname" className="form-control" value={formData.parentfname} onChange={handleInputChange} />
                  </div>
                </div>
                
                <label htmlFor="parentlname" className="col-sm-2 col-form-label">
                  <span><strong>Parent/Guardian Last Name:</strong></span>
                </label>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input type="text" id="parentlname" required  pattern ="[a-zA-Z]+" placeholder="Doe" name="parentlname" className="form-control" value={formData.parentlname} onChange={handleInputChange} />
                  </div>
                </div>
              
                <label htmlFor="email" className="col-sm-2 col-form-label"><strong>Parent/Guardian Personal Email:</strong></label>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input type="email" id="email" required  name="email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" className="form-control" value={formData.email} onChange={handleInputChange} />
                  </div>
                </div>


              

              
                <label htmlFor="number" className="col-sm-4 col-form-label"><strong>Parent/Guardian Phone Number:</strong></label>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input type="tel" required id="number" name="number" placeholder="### - ### - ####" pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'className="form-control"  value={formData.number} onChange={handleInputChange} />
                  
                  
                  </div>
                </div>

                <label htmlFor="lunchQuestion" className="col-sm-2 col-form-label"><strong>Is your child eligible for free or reduced lunch at their school? (verification required upon selection)</strong></label>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <select
                      id="lunchQuestion"
                      name="lunchQuestion"
                      className="form-control"
                      required
                      value={formData.lunchQuestion}
                      
                      onChange={handleInputChange}
                    >
                      <option value="">Select an Answer</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>
                </div>



                <div className="mt-4  grid-cols-1 justify-content-right">
                      <button
                          type="button"
                          className={`btn btn-lg ${!canPrintToPdf() ? 'btn-secondary' : 'btn-success'}`}
                          disabled={!canPrintToPdf()}
                          onClick={printToPdf}
                      >
                        Download
                      </button>
                    
                      <button type="submit" name="submit" id="submit" value="Submit" className={`btn btn-lg ${!canPrintToPdf() ? 'btn-secondary' : 'btn-success'}`}
                        disabled={!canPrintToPdf()}>
                        Submit
                        </button>
                
                      
                    </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      
  );
};

export default AppForm;
