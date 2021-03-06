import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  h1 {
    transition: all 0.5s ease-in-out;
    transform: ${({ show }) => (show ? "translateY(70px)" : "translateY(0)")};
    /* opacity: ${({ show }) => (show ? 0 : 1)}; */
  }

  p {
    transition: all 0.5s ease-in-out;
    transform: ${({ show }) => (show ? "translateY(100px)" : "translateY(0)")};
    opacity: ${({ show }) => (show ? 0 : 1)};
  }

  @media (max-width: 768px) {
    h1 {
      transform: translateY(-20px);
      opacity: 1;
    }
    p {
      transform: translateY(-15px);
      opacity: 1;
      max-width: 200px
    }
  }
`;

export default function ActivitiesDevelopmentSup() {
  const [show, setShow] = useState(true);
  return (
    <a href="">
      <Box
        className="grids__development-supply"
        show={show}
        onMouseEnter={() => setShow(!show)}
        onMouseLeave={() => setShow(!show)}
      >
        <h1>комплектация</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui mollitia
          rem quas voluptas nesciunt possimus illum? Consequatur magnam illo
          pariatur!
        </p>
      </Box>
    </a>
  );
}
