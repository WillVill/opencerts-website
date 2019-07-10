import { IMG_SCDF } from "../common";
import {
  renderSignatureQual,
  renderIssuingDate,
  renderAwardTextSOA,
  renderLogoWSQ
} from "../common/functions";
import fonts from "../common/fonts";

/* eslint-disable */
// Disabled eslint as there's no way to add proptypes to an anonymous function like this
export default ({ logo }) => ({ certificate }) => (
  <div>
    <div
      className="container"
      style={{ border: 5, borderColor: "#AAA", borderStyle: "solid", paddingLeft:"6%", paddingRight:"6%", paddingTop:"100px", paddingBottom:"100px", width:"100%", fontFamily:"Arial" }}
      >
        {fonts()}
        {renderLogoWSQ()}
        {renderAwardTextSOA(certificate)}
        {renderIssuingDate(certificate)}
        {certificate.additionalData.certSignatories
          ? renderSignatureQual(certificate,IMG_SCDF)
          : ""}
    </div>
  </div>
);