import { DoubleSidedControl } from 'components/DoubleSidedControl';
import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <DoubleSidedControl
        onClickLeft={() => console.log('left')}
        onClickRight={() => console.log('right')}
      />
    </div>
  );
};

export default App;
