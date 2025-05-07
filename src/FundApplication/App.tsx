import React, {useState} from 'react';
import {AppFormData} from "./form/AppFormData";
import AppForm from "./form/AppForm";


const App: React.FC = () => {
  const [formData, setFormData] = useState<AppFormData>({
    studentfname: '',
    studentlname: '',
    parentfname: '',
    parentlname: '',
    date: '',
    email: '',
    address: '',
    number: '',
    state:'',
    aptNumber:'',
    schoolName:'',
    gradeLevel:'',
    city:'',
    zipCode:'',
    lunchQuestion:''
  });

  return (
      <div className={`app`}>
        <AppForm formData={formData} setFormData={setFormData} />
      </div>
  );

};


export default App;
