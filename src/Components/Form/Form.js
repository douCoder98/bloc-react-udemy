import React, { useRef } from "react";
import "./Form.css";
import { useDispatch } from "react-redux";

export default function Form() {
  const dispatch = useDispatch();

  const inputsRef = useRef([]);

  const addRefs = (el) => {
    if (el && !inputsRef.current.includes(el)) {
      inputsRef.current.push(el);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();

    const newArr = {
      title: inputsRef.current[0].value,
      body: inputsRef.current[1].value,
    };

    dispatch({
      type: "ADDARTICLE",
      payload: newArr,
    });

    e.target.reset();
  };

  return (
    <>
      <h1 className="title-form">Ecrire un article</h1>
      <form onSubmit={handleForm} className="container-form">
        <label htmlFor="title">Titre</label>
        <input
          ref={addRefs}
          className="inp-title"
          type="text"
          id="article"
          placeholder="Entrez votre nom"
        />
        <label htmlFor="article">Votre article</label>
        <textarea
          ref={addRefs}
          className="inp-body"
          id="article"
          placeholder="Votre article"
        ></textarea>

        <button>Envoyer l'article</button>
      </form>
    </>
  );
}
