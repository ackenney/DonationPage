import React, {useState} from 'react';
import {AppFormData} from "./form/AppFormData";
import AppForm from "./form/AppForm";


const App: React.FC = () => {
  const [formData, setFormData] = useState<AppFormData>({
    name: '',
    date: '',
    email: '',
    address: '',
    number: '',
  });

  return (
      <div className={`app`}>
        <AppForm formData={formData} setFormData={setFormData} />
      </div>
  );
};

export default App;
