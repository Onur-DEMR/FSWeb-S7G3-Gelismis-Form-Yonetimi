import React from "react";

const Form = (props) => {
  const { handleChange, submitDisable, handleSubmit } = props;
  const { name, email, password, terms } = props.member;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        İsim Soyisim
        <input type="text" name="name" onChange={handleChange} value={name} />
      </label>
      <label htmlFor="email">
        E-mail
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>
      <label htmlFor="password">
        Şifre
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>
      <label htmlFor="terms">
        <input
          type="checkbox"
          name="terms"
          onChange={handleChange}
          value={terms}
        />
        Kullanım şartlarını kabul ediyorum.
      </label>
      <input type="submit" value="Kaydet" disabled={!submitDisable} />
    </form>
  );
};

export default Form;
