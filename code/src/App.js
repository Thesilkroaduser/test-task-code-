import './App.scss';
import Controls from '../src/components/controls/controls';
import Notification from '../src/components/notification/notification';
import Output from '../src/components/output/output';

function App() {

  return (
    <main className="App">
      <Notification />
      <Controls />
      <Output />
    </main>
  );
}

export default App;
