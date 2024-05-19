import React, { useState } from "react";
import axios from "axios";
import SignInForm from "./SignInForm";

const SignUpForm = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [pseudoError, setPseudoError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [termsError, setTermsError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setPseudoError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setTermsError("");

    if (password !== confirmPassword || !termsChecked) {
      if (password !== confirmPassword) {
        setConfirmPasswordError("Les mots de passe ne correspondent pas");
      }
      if (!termsChecked) {
        setTermsError("Veuillez valider notre Politique de Confidentialité ");
      }
    } else {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}api/user/register`,
          {
            pseudo: pseudo,
            email: email,
            password: password,
          }
        );

        console.log(response.data);
        const res = response.data;
        if (res.errors) {
          setPseudoError(res.errors.pseudo);
          setEmailError(res.errors.email);
          setPasswordError(res.errors.password);
        } else {
          setFormSubmit(true);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      {formSubmit ? (
        <>
          <SignInForm />
          <span></span>
          <h4 className="success">
            Enregistrement réussi, veuillez-vous connecter
          </h4>
        </>
      ) : (
        <form onSubmit={handleRegister} id="sign-up-form">
          <label htmlFor="pseudo">Pseudo</label>
          <br />
          <input
            type="text"
            name="pseudo"
            id="pseudo"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
          />
          <div className="pseudo error">{pseudoError}</div>
          <br />

          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="email error">{emailError}</div>

          <br />
          <label htmlFor="password">Mot de passe</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="password error">{passwordError}</div>
          <br />

          <label htmlFor="password">Confirmer le mot de passe</label>
          <br />
          <input
            type="password"
            name="password"
            id="password-conf"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="password-confirm error">{confirmPasswordError}</div>
          <br />

          <input
            type="checkbox"
            id="terms"
            checked={termsChecked}
            onChange={(e) => setTermsChecked(e.target.checked)}
          />
          <label htmlFor="terms">
            J'accepte la{" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              Politique de Confidentialité
            </a>
          </label>

          <div className="terms error">{termsError}</div>
          <br />

          <input type="submit" value="Créer votre compte" />
        </form>
      )}
    </>
  );
};

export default SignUpForm;
