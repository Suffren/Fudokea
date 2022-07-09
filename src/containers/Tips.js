import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addTip } from '../reducers/TipsReducer'

export default function Tips({ onDelTip }) {
  const count = useSelector((state) => state.tips.count);
  const tips = useSelector((state) => state.tips.data);
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
    <div>
      <span>Nombre de tips: {count}</span>
      <div>
        {tips.map((tip, id) => (
          <li key={id}>
            <NavLink to={`/tips/${tip.id}`} key={tip.id} state={tip}>
              {tip.title}
            </NavLink>

            <button onClick={() => onDelTip(tip)}>Delete</button>
          </li>
        ))}
      </div>

      <div>
        <input value={titleTip} onChange={handleTitleChange} type="text" />
        <input value={contentTip} onChange={handleContentChange} type="text" />
        <button onClick={submitTip}>Add</button>
      </div>
    </div>
  );
}
