import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTip } from "../ducks/tips/reducer";

export default function TipsCreate() {
  const dispatch = useDispatch();

  const [titleTip, setTitleTip] = useState("");
  const [contentTip, setContentTip] = useState("");

  const submitTip = function () {
    const tip = { title: titleTip, content: contentTip };
    dispatch(addTip(tip));
    setTitleTip("");
    setContentTip("");
  };

  function handleTitleChange(event) {
    setTitleTip(event.target.value);
  }
  function handleContentChange(event) {
    setContentTip(event.target.value);
  }

  return (
    <StyledContent>
      <div className="card" style={{ width: "60rem" }}>
        <div className="card-body">
          <h5 className="card-title">Créer un conseil</h5>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Titre"
              value={titleTip}
              onChange={handleTitleChange}
            />
          </div>
          <div className="input-group mb-3">
            <textarea
              className="form-control"
              placeholder="Contenu"
              value={contentTip}
              onChange={handleContentChange}
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={submitTip}>
            Créer
          </button>
        </div>
      </div>
    </StyledContent>
  );
}

const StyledContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
