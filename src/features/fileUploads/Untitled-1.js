import React from "react";
import { render } from "react-dom";
import { Formik } from "formik";
import { useDropzone } from "react-dropzone";
import yup from "yup";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Formik
          initialValues={{ files: null }}
          onSubmit={values => {
            console.log({
              files: values.files.map(file => ({
                fileName: file.name,
                type: file.type,
                size: `${file.size} bytes`
              }))
            });
          }}
          validationSchema={yup.object().shape({
            files: yup.mixed().required()
          })}
          render={({ values, handleSubmit, setFieldValue }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="file">Multiple files upload</label>

                  <UploadComponent setFieldValue={setFieldValue} />
                  {values.files &&
                    values.files.map((file, i) => (
                      <li key={i}>
                        {`File:${file.name} Type:${file.type} Size:${
                          file.size
                        } bytes`}{" "}
                      </li>
                    ))}
                </div>
                <button type="submit" className="btn btn-primary">
                  submit
                </button>
              </form>
            );
          }}
        />
      </div>
    );
  }
}
const UploadComponent = props => {
  const { setFieldValue } = props;
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => {
      setFieldValue("files", acceptedFiles);
    }
  });
  return (
    <div>
      {}
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
//https://stackoverflow.com/questions/59128693/uploading-files-in-react-by-react-dropzone-and-formik
