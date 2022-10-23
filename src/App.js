import './App.css';
import EmailEditor from 'react-email-editor';
import React, { useRef } from 'react';

function App() {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
    });
  };  

  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  }

  const onReady = () => {
    // editor is ready    
    console.log('onReady');
  };

  return (
    <div className="App">
      <h1>React Email Editor (Demo)</h1>

      <button onClick={exportHtml}>Export HTML</button>

      <React.StrictMode>
        <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
      </React.StrictMode>
  </div>
  );
}
export default App;
