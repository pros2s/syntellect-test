import { AlertControl } from 'models/AlertControl';
import { TenMaxHintsControl } from 'models/TenVaxHintsControl';
import { TextControl } from 'models/TextControl';
import { ThreeMaxHintsControl } from 'models/ThreeMaxHintsControl';
import './App.scss';

const App = () => (
  <div className='App'>
    <TextControl />
    <AlertControl />
    <div className='d-flex'>
      <ThreeMaxHintsControl />
      <TenMaxHintsControl />
    </div>
  </div>
);

export default App;
