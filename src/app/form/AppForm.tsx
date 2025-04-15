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
        validateName(formData.name) &&
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
          ['Name', formData.name],
          ['Date', formData.date],
          ['Email', formData.email],
          ['Address', formData.address],
          ['Number', formData.number],
        ],
      });
      doc.save('docForm (' + formData.name + ").pdf");
    }
  };

  

  return (
      <div className={`app-form`}>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form onSubmit={handleSubmit} ref={formRef} className="mt-5">
                <div className="d-flex justify-content-between align-items-center">
                  
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h1>Application Form Testing</h1>
                </div>
                <label htmlFor="name" className="col-sm-2 col-form-label">
                  <span><strong>Name:</strong></span>
                </label>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleInputChange} />
                  </div>
                </div>
                <label htmlFor="date" className="col-sm-2 col-form-label"><strong>Date:</strong></label>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input type="date" id="date" name="date" className="form-control" value={formData.date} onChange={handleInputChange} />
                  </div>
                </div>
                <label htmlFor="email" className="col-sm-2 col-form-label"><strong>Email:</strong></label>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleInputChange} />
                  </div>
                </div>
                <label htmlFor="address" className="col-sm-2 col-form-label"><strong>Address:</strong></label>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input type="text" id="address" name="address" className="form-control" value={formData.address} onChange={handleInputChange} />
                  </div>
                </div>
                <label htmlFor="number" className="col-sm-4 col-form-label"><strong>Number:</strong></label>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input type="number" id="number" name="number" className="form-control" value={formData.number} onChange={handleInputChange} />
                    <p></p>
                    <div className="mt-3 d-flex justify-content-center">
                      <button
                          type="button"
                          className={`btn btn-lg ${!canPrintToPdf() ? 'btn-secondary' : 'btn-success'}`}
                          disabled={!canPrintToPdf()}
                          onClick={printToPdf}
                      >
                        Download
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
