import React from 'react';

function ImportFile(props) {
  let fileReader;
  const handleFileRead = (e) => {
    const content = fileReader.result;
    console.log(content);
  };
  function handleFileChosen(file) {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  }

  return (
    <div>
      input
      <input
        type="file"
        id="file"
        accept=".csv"
        onChange={(e) => handleFileChosen(e.target.files[0])}
      />
    </div>
  );
}

export default ImportFile;
