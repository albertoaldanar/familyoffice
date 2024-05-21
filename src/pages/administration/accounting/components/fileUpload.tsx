import React from "react";
//@ts-ignore
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const FileUpload = () => {
  return (
    <div style={{width: '60%'}}>
    <FilePond
        files={[]}
        onupdatefiles={() => console.log('')}
        allowMultiple={false}
        maxFiles={1}
        server="/api"
        name="files" /* sets the file input name, it's filepond by default */
        labelIdle={`
        <div style=" display:flex; flex-direction:row; align-content:center; justify-content: center; align-items:center; rotate: 180deg;">
          <img style="width:50px; height:50px; margin-left:20px;" src="https://static.thenounproject.com/png/3554029-200.png">
        </div>

      `}
      />
  </div>
  );
};

export default FileUpload;
