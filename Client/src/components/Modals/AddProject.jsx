import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./project.css";

const validationSchema = Yup.object().shape({
  projectName: Yup.string().trim().required("Project Name Can't be empty"),
});

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      projectName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onSubmit(values.projectName);
    },
  });

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Create Project</h2>
        </div>
        <form onSubmit={formik.handleSubmit} className="modal-body">
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formik.values.projectName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`modal-input ${
              formik.touched.projectName && formik.errors.projectName
                ? "input-invalid"
                : ""
            }`}
            placeholder="Enter Project Name"
          />
          {formik.touched.projectName && formik.errors.projectName && (
            <p className="error-message">{formik.errors.projectName}</p>
          )}
          <div className="modal-footer">
            <button
              type="button"
              onClick={onClose}
              className="modal-cancel-button"
            >
              Cancel
            </button>
            <button type="submit" className="modal-create-button bg-purple-900">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
