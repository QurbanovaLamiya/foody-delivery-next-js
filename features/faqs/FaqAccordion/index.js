import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFaqs } from "../../../store/slice/faqSlice";

import { faqsAPI } from "../../../api/faqs";

const FaqAccordion = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  useEffect(() => {
    getFaqs();
  }, []);

  const getFaqs = () => {
    faqsAPI
      .then((res) => {
        dispatch(setFaqs(res.data.faq.faqs));
      })
      .catch((err) => {
        // console.log("err", err);
      });
  };

  return (
    <Fragment>
      {state.faq.faqs.map((item, index) => (
        <Accordion
          style={{ padding: "12px 0", marginBottom: "23px" }}
          key={index}
        >
          <AccordionSummary
            expandIcon={clicked === index ? <RemoveIcon /> : <AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={() => toggle(index)}
          >
            <Typography
              style={{ fontWeight: 500, fontSize: "22px", lineHeight: "30px" }}
            >
              {item.question}
            </Typography>
          </AccordionSummary>
          {clicked === index ? (
            <AccordionDetails>
              <Typography
                style={{
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "30px",
                  color: "#828282",
                }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          ) : null}
        </Accordion>
      ))}
    </Fragment>
  );
};

export default FaqAccordion;
