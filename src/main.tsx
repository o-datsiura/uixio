import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from './components/Button';

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>uixio Component Library</h1>
      
      <div className="demo-section">
        <h2>Button Variants</h2>
        <div className="button-grid">
          <div className="button-demo">
            <label>Primary</label>
            <Button variant="primary" onClick={() => console.log('Primary clicked')}>
              Primary Button
            </Button>
          </div>
          <div className="button-demo">
            <label>Secondary</label>
            <Button variant="secondary" onClick={() => console.log('Secondary clicked')}>
              Secondary Button
            </Button>
          </div>
          <div className="button-demo">
            <label>Outline</label>
            <Button variant="outline" onClick={() => console.log('Outline clicked')}>
              Outline Button
            </Button>
          </div>
          <div className="button-demo">
            <label>Ghost</label>
            <Button variant="ghost" onClick={() => console.log('Ghost clicked')}>
              Ghost Button
            </Button>
          </div>
        </div>
      </div>
      
      <div className="demo-section">
        <h2>Button Sizes</h2>
        <div className="button-grid">
          <div className="button-demo">
            <label>Small</label>
            <Button size="sm" onClick={() => console.log('Small clicked')}>
              Small Button
            </Button>
          </div>
          <div className="button-demo">
            <label>Medium</label>
            <Button size="md" onClick={() => console.log('Medium clicked')}>
              Medium Button
            </Button>
          </div>
          <div className="button-demo">
            <label>Large</label>
            <Button size="lg" onClick={() => console.log('Large clicked')}>
              Large Button
            </Button>
          </div>
        </div>
      </div>
      
      <div className="demo-section">
        <h2>Button States</h2>
        <div className="button-grid">
          <div className="button-demo">
            <label>Disabled</label>
            <Button disabled onClick={() => console.log('This should not fire')}>
              Disabled Button
            </Button>
          </div>
          <div className="button-demo">
            <label>With Custom Class</label>
            <Button 
              className="bg-blue-500 hover:bg-blue-600 text-white"
              onClick={() => console.log('Custom styled clicked')}
            >
              Custom Styled
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 