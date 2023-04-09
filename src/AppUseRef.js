import React, { useRef } from "react";
import { useFormik } from 'formik'; // quan li du lieu form
import * as Yup from 'yup'; // validate data

export default function AppUseRef() {
  // sự khác biệt useRef vs state là ko bị renđer lại
  const sumSpan = useRef(null); // null: chua tro den obj nao ca.
  const myFormik = useFormik({
    // Khoi tao gia tri, dựa vào attr "name="
    initialValues: {
      soA: '',
      soB: ''
    },
    // Khai bao du lieu
    validationSchema: Yup.object({
      soA: Yup.number().typeError('Vui lòng nhập con số A').required('khong dc de trong so A'),
      soB: Yup.number().typeError('Vui lòng nhập con số B').required('khong dc de trong so B')
    }),
    // khi thoả mãn validate thì onSubmit sẽ đc gọi
    onSubmit: values => {
      // sumSpan : tro den element span dua vao attr "ref"
      sumSpan.current.innerHTML = Number(values.soA) + Number(values.soB);
      console.log(sumSpan.current);
    }
  });

  return (
    <>
      <form action="#" onSubmit={myFormik.handleSubmit}>
        <div className="container">
          <div className="form-group">
            Số A: <input type="text" className="form-control" name="soA" onChange={myFormik.handleChange} onBlur={myFormik.handleBlur} value={myFormik.values.soA} />
            {
              myFormik.touched.soA && myFormik.errors.soA
              ? <div className="text-danger">{myFormik.errors.soA}</div>
              : null
            }
          </div>
          <div className="form-group">
            Số B: <input type="text" className="form-control" name="soB" onChange={myFormik.handleChange} onBlur={myFormik.handleBlur} value={myFormik.values.soB} />
            {
              myFormik.touched.soB && myFormik.errors.soB
              ? <div className="text-danger">{myFormik.errors.soB}</div>
              : null
            }
          </div>
          <div className="form-group">
            sum = <span ref={sumSpan}></span>
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Tính</button>
          </div>
        </div>
      </form>
    </>
  );
}
