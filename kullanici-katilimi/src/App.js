import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import * as Yup from "yup";
import Error from "./Components/Error";
import axios from "axios";

let formSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Bu kısım en az 5 karakter olmalıdır.")
    .required("Bu kısımın doldurulması zorunludur."),
  email: Yup.string()
    .email("Geçerli bir e posta adresi giriniz.")
    .required("Bu kısımın doldurulması zorunludur."),
  password: Yup.string()
    .min(5, "En az 5 karakter olmalıdır.")
    .required("Bu kısımın doldurulması zorunludur."),
  terms: Yup.boolean().oneOf([true], "Kullanım şarları kabul edilmelidir."),
});

const dummyForm = { name: "", email: "", password: "", terms: false };
const dummyeError = { name: "", email: "", password: "", terms: "" };
function App() {
  const [form, setForm] = useState(dummyForm);
  const [registerMember, setRegisterMember] = useState(dummyForm);
  const [errors, setErrors] = useState(dummyeError);
  const [submitDisable, setSubmitDisable] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", form)
      .then((response) => setRegisterMember(response.data))
      .catch((err) => console.log(err));
  };
  const handleChange = (event) => {
    const { value, name, checked, type } = event.target;
    let newValue = type === "checkbox" ? checked : value;
    checkForm(name, newValue);
    setForm({ ...form, [name]: newValue });
  };
  const checkForm = (name, value) => {
    Yup.reach(formSchema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };
  useEffect(() => {
    formSchema.isValid(form).then((response) => setSubmitDisable(response));
  }, [form]);

  return (
    <div className="App">
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        member={form}
        submitDisable={submitDisable}
      />
      <Error errors={errors} />
      --
      {registerMember.name !== "" && (
        <p>
          {registerMember.id} numaralı {registerMember.name} isimli müşteri
          kaydedilmiştir.
        </p>
      )}
      --
    </div>
  );
}

export default App;
