import { Header, Form, PatientList } from './components';


const App = () => {
  

  return (
    <div className='container mx-auto mt-10'>
      <Header />
      <div className="mt-12 md:flex">
      <Form />
      <PatientList />
      </div>
    </div>
  );
};

export default App;
