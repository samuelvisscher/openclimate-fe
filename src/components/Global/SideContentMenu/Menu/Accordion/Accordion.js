import React, { useState, useEffect  } from "react";
import "./Accordion.scss";
import Card from "./Card/Card";

const Accordion = ({ data = [], current = null}) => {
  const [openIndex, setOpen] = useState(null);
  useEffect(() => {
    setOpen(current ? current.type : null);
  }, [current]);

  let content;
  content = data.map(item => {
    return (
      <Card
        key={item.index}
        itemIndex={item.index}
        selected={current ? current.id : null}
        title={item.title}
        open={openIndex === item.type}
        handleOpen={() => setOpen(item.type)}
        handleClose={() => setOpen(null)}
        list={item.list ? item.list : null}
        subCards={item.subCards ? item.subCards : null}
      />
    );
  });

  return <div className="oc-accordion">{content}</div>;
};

export default Accordion;
