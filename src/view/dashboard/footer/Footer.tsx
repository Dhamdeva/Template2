import "../footer/Footer.css";

export function Option(props: any) {
  return (
    <div className="d-flex flex-column option">
      <h5 className="p-0 ">{props.h5}</h5>
      <span></span>
      <a href={props.a1href}>{props.a1name}</a>
      <a href={props.a2href}>{props.a2name}</a>
      <a href={props.a3href}>{props.a3name}</a>
      <a href={props.a4href}>{props.a4name}</a>
      <a href={props.a5href}>{props.a5name}</a>
      <a href={props.a6href}>{props.a6name}</a>
      <a href={props.a7href}>{props.a7name}</a>
      <a href={props.a8href}>{props.a8name}</a>
      <a href={props.a9href}>{props.a9name}</a>
      {/* <a href={props.a10href}>{props.a10name}</a>
      <a href={props.a11href}>{props.a11name}</a> */}
    </div>
  );
}
export function Icon(props: any) {
  return (
    <p className="d-flex icon">
      <a href={props.href}>
        <i className={props.icon}></i>
      </a>
      {props.p}
      <br />
      {props.p1}
    </p>
  );
}

export function Footer() {
  return (
    <div className="main-footer">
      <div className="footer-img"></div>

      <div className="footer col-lg-12 mx-auto d-flex flex-wrap pt-5 p-0">
        <div className="col-lg-2 col-sm-4  logo text-center">
          <img
            className="img-fluid "
            src={require("../../../asset/sample1/logo.png")}
            alt=""
          />
          <h6 className="fw-bold text-center py-3">Download the App</h6>
          <img
            className="img-fluid"
            src={require("../../../asset/sample1/a.png")}
            alt=""
          />
          <img
            className="img-fluid"
            src={require("../../../asset/sample1/g.png")}
            alt=""
          />
        </div>
        <div className="col-lg-2 col-sm-4 bg-">
          <Option
            h5={`DBOs`}
            a1href={"/microatm"}
            a1name={`Micro ATM`}
            a2href={"/aeps"}
            a2name={`Aeps`}
            a3href={"/dmt"}
            a3name={`Domestic Money Transfer`}
            a4href={"/insurances"}
            a4name={`Insurance`}
            a5href={"/bbps"}
            a5name={`BBPS Recharges`}
            a6href={"/cash"}
            a6name={"Cash Management Services"}
            a7href={"/msme"}
            a7name={"MSME Loan"}
            a8href={"/merchants"}
            a8name={"Merchants"}
            a9href={"/anagent"}
            a9name={"Agent"}
            // a10href={"/"}
            // a10name={"DBO Leads"}
          />
        </div>
        <div className="col-lg-2 col-sm-4 col-6 bg-ifo">
          <Option
            h5={`Consumers`}
            a1href={"/bankaccount"}
            a1name={`Bank Account`}
            a2href={"/payments"}
            a2name={`Payments`}
            a3href={"/loans"}
            a3name={`Loans`}
            a4href={"/investment"}
            a4name={`Investments`}
            a5href={"/insurances"}
            a5name={`Insurance`}
          />
        </div>
        <div className="col-lg-2 col-sm-4 col-6 bg-waring">
          <Option
            h5={`Company`}
            a1href={"/about"}
            a1name={`About Us`}
            a2href={"/"}
            a2name={`Media`}
            a3href={"/"}
            a3name={`Careers`}
            a4href={"/contact"}
            a4name={`Contact US`}
          />
        </div>
        <div className="col-lg-2 col-sm-4 col-6 bg-priary">
          <Option
            h5={`Legal`}
            a1href={"/"}
            a1name={`Disclaimer`}
            a2href={"/"}
            a2name={`Annual Report`}
            a3href={"/"}
            a3name={`Privacy`}
            a4href={"/"}
            a4name={`Grievance`}
            a5href={"/"}
            a5name={`FAQs`}
            a6href={"/"}
            a6name={`Loan Grievance`}
          />
        </div>
        <div className="col-lg-2 col-sm-4 col-6 bg-secondar">
          <Option
            h5={`Policies`}
            a1href={"/"}
            a1name={`EPR Policy`}
            a2href={"/"}
            a2name={`KYC Policy`}
            a3href={"/"}
            a3name={`Terms of use - Merchants`}
            a4href={"/"}
            a4name={`Terms of use - agent`}
            a5href={"/"}
            a5name={`Remuneration Policy`}
          />
        </div>

        <div className="col-lg-3 col-sm-4 text-center mx-auto social">
          {/* <Option h5={`Follow us on`} /> */}
          <h5 className="fw-bold mb-3">Follow us on</h5>
          <div
            className=" col-12 d-flex justify-content-around"
            // style={{ marginTop: "5px" }}
          >
            <Icon href={"#"} icon={"fa fa-facebook  "} />
            <Icon href={"#"} icon={"fa fa-twitter  "} />
            <Icon href={"#"} icon={"fa fa-youtube  "} />
            <Icon href={"#"} icon={"fa fa-instagram  "} />
            <Icon href={"#"} icon={"fa fa-linkedin  "} />
            <Icon href={"#"} icon={"fa fa-google  "} />
          </div>
        </div>
        <p className="text-center order-4 col-12 mt-4 last">
          © 2021 PayPe PVT. LTD. ALL RIGHT RESERVED.
        </p>
      </div>
    </div>
  );
}
