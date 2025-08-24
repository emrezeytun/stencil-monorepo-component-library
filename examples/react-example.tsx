// React kullanım örneği
import * as React from 'react';
import { Button } from '@arcadia-components/button/bindings/react';
import { HelloWorld } from '@arcadia-components/hello-world/bindings/react';

export function App() {
  const handleButtonClick = (event: CustomEvent<MouseEvent>) => {
    console.log('Button clicked!', event.detail);
    alert('Button clicked!');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React Components Test</h1>
      
      <section style={{ marginBottom: '20px' }}>
        <h2>HelloWorld Component</h2>
        <HelloWorld />
      </section>

      <section>
        <h2>Button Component</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <Button 
            variant="primary" 
            size="small"
            onButtonClick={handleButtonClick}
          >
            Primary Small
          </Button>
          
          <Button 
            variant="secondary" 
            size="medium"
            onButtonClick={handleButtonClick}
          >
            Secondary Medium
          </Button>
          
          <Button 
            variant="danger" 
            size="large"
            onButtonClick={handleButtonClick}
          >
            Danger Large
          </Button>
          
          <Button 
            variant="primary" 
            disabled={true}
            onButtonClick={handleButtonClick}
          >
            Disabled
          </Button>
        </div>
      </section>
    </div>
  );
}

export default App;
