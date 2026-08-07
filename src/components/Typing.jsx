import { useEffect, useState } from "react";

const TYPE_SPEED = 90;
const DELETE_SPEED = 45;
const HOLD_TIME = 1700;

export default function Typing({ words }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timeout;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), HOLD_TIME);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(word.slice(0, text.length + (deleting ? -1 : 1)));
        },
        deleting ? DELETE_SPEED : TYPE_SPEED,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return <span>{text}</span>;
}
