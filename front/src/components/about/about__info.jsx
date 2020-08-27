import React from "react";
import MailForm from "./mail__form";

export default function AboutInfo() {
  return (
    <div className="banner">
      <div className="banner__img">
        <div className="info__row">
          <div className="info__box">
            <div className="info__title"><span>О</span> компании</div>
            <div className="info__text">
              Группа компаний «Аркос» оказывает полный комплекс услуг по
              изготовлению, продаже, монтажу, вводу в эксплуатацию, а также
              сервисному обслуживанию систем инженерных коммуникаций. «Аркос»
              включает в себя производственное, строительно-монтажное и
              оптово-розничное подразделения.
              <br />
              <br />
              Среди наших поставщиков и партнёров крупные федеральные компании и
              заводы. В нашем товарном портфеле вы сможете найти множество
              качественных решений по оптимальным ценам. Если Ваша задача
              выходит за пределы нашего ассортимента, мы поможем Вам оперативно
              доукомплектовать заявку, в том числе по специфической продукции.
              Вы можете рассчитывать на нас как на надежного партнёра и
              помощника вашей компании.
            </div>
          </div>
          <MailForm />
        </div>
      </div>
    </div>
  );
}