import React, {useRef, /* useState */} from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import {validateAddress, validateNumber, validateDate, validateEmail, validateName} from "./AppFormValidation";
import {AppFormData} from "./AppFormData";
import "./AppForm.scss";


/* import {exp} from "mathjs";
 */
export interface AppFormProps {
  formData: AppFormData;

  setFormData: (formData: AppFormData) => void;
}

export const AppForm: React.FC<AppFormProps> = (props) => {
  const formRef = useRef<HTMLFormElement>(null);

  const formData = props.formData;
  const setFormData = props.setFormData;



  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const canPrintToPdf = (): boolean => {
    return (
        validateName(formData.fname) &&
        validateName(formData.lname) &&
        validateDate(formData.date) &&
        validateEmail(formData.email) &&
        validateAddress(formData.address) &&
        validateNumber(formData.number)
    );
  };

  const printToPdf = (): void => {
    if (formRef.current) {
      if (!canPrintToPdf()) {
        return;
      }

      const doc = new jsPDF();
      doc.text('Test Application Form', 10, 10);
      autoTable(doc, {
        startY: 20,
        body: [
          ['First Name', formData.fname],
          ['Last Name', formData.lname],
          ['Date', formData.date],
          ['Email', formData.email],
          ['Address', formData.address],
          ['Number', formData.number],
        ],
      });
      doc.save('docForm (' + formData.fname +'_'+ formData.lname + ").pdf");
    }
  };

  

  return (
      <div className={`app-form`} >
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form onSubmit={handleSubmit} ref={formRef} className="mt-5">
                <div className="d-flex justify-content-between align-items-center">
                  
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h1>Application Form Testing</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                
                <label htmlFor="fname" className="col-sm-2 col-form-label">
                  <span><strong>First Name:</strong></span>
                </label>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input type="text" id="fname" required   pattern ="[a-zA-Z]+" placeholder="John" name="fname" className="form-control" value={formData.fname} onChange={handleInputChange} />
                  </div>
                </div>
                
                <label htmlFor="lname" className="col-sm-2 col-form-label">
                  <span><strong>Last Name:</strong></span>
                </label>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input type="text" id="lname" required  pattern ="[a-zA-Z]+" placeholder="Doe" name="lname" className="form-control" value={formData.lname} onChange={handleInputChange} />
                  </div>
                </div>


                <label htmlFor="date"  className="col-sm-2 col-form-label"><strong>Date:</strong></label>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input type="date" required id="date" name="date" className="form-control" value={formData.date} onChange={handleInputChange} />
                  </div>
                </div>
                <label htmlFor="email" className="col-sm-2 col-form-label"><strong>Email:</strong></label>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input type="email" id="email" required  name="email" className="form-control" value={formData.email} onChange={handleInputChange} />
                  </div>
                </div>
                <label htmlFor="address" className="col-sm-2 col-form-label"><strong>Address:</strong></label>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input type="text" required id="address" name="address" className="form-control" value={formData.address} onChange={handleInputChange} />
                  </div>
                </div>
                <label htmlFor="number" className="col-sm-4 col-form-label"><strong>Phone Number:</strong></label>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input type="tel" required id="number" name="number" placeholder="### - ### - ####" pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'className="form-control"  value={formData.number} onChange={handleInputChange} />
                  
                    <div className="mt-4  grid-cols-1 justify-content-right">
                      <button
                          type="button"
                          className={`btn btn-lg ${!canPrintToPdf() ? 'btn-secondary' : 'btn-success'}`}
                          disabled={!canPrintToPdf()}
                          onClick={printToPdf}
                      >
                        Download
                      </button>
                    
                      <button
                          type="button"
                          className={`btn btn-lg ${!canPrintToPdf() ? 'btn-secondary' : 'btn-success'}`}
                          disabled={!canPrintToPdf()}
                          onClick={printToPdf}
                      >
                        Submit
                      </button>
                      
                      
                      
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AppForm;
