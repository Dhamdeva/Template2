import "../component/Layout.css";

export function Twoslides(props: any) {
  return (
    <div className={props.classname}>
      <div className="col-md-5 col-12 first-slide d-flex align-items-center justify-content-center">
        <img data-aos="zoom-in" className="img-fluid" src={props.img} alt="" />
        <img data-aos="fade-up" className="img-fluid" src={props.img1} alt="" />
      </div>
      <div
        className="col-md-7 col-xl-7 second-slide col-12 px-md-5 px-3 d-flex flex-column justify-content-center"
        data-aos="fade-up"
      >
        <h1>{props.h1}</h1>
        <h5>{props.h5}</h5>
        <li>
          <i className={props.icon}></i>
          {props.li1}
        </li>
        <li>
          <i className={props.icon}></i>
          {props.li2}
        </li>
        <li>
          <i className={props.icon}></i>
          {props.li3}
        </li>
        <li>
          <i className={props.icon}></i>
          {props.li4}
        </li>
        <a className="button" href={props.href}>
          {props.button}
          <i className={props.btnicon}></i>
        </a>
      </div>
    </div>
  );
}
export function Numbers(props: any) {
  return (
    <div className="col-lg-11 mx-auto d-flex flex-wrap my-5 justify-content-around text-center numbers bg-white">
      <div
        className="col-lg-3 col-6"
        data-aos="slide-up"
        data-aos-duration="1000"
      >
        <h1>600K</h1>
        <p>PayPe Direct Business Outlet</p>
      </div>
      <div
        className="col-lg-3 col-6"
        data-aos="slide-up"
        data-aos-duration="2000"
      >
        <h1>9x</h1>
        <p>Business Growth</p>
      </div>
      <div
        className="col-lg-3 col-6"
        data-aos="slide-up"
        data-aos-duration="3000"
      >
        <h1>30mn</h1>
        <p>Customers Served Every Month</p>
      </div>
      <div
        className="col-lg-3 col-6"
        data-aos="slide-up"
        data-aos-duration="4000"
      >
        <h1>17K</h1>
        <p>Of 19k Pin Codes</p>
      </div>
    </div>
  );
}
export function Fourboxes(props: any) {
  return (
    <div data-aos="slide-up" className={props.classname}>
      <h5 className="fw-bold">{props.h5}</h5>
      <p>{props.p}</p>
      <img data-aos="zoom-in" src={props.img} alt="" />
    </div>
  );
}
export function Topimage(props: any) {
  return (
    <div className="d-flex flex-wrap top-img">
      <div className="col-6 col-lg-3 order-2 order-lg-0">
        <img
          data-aos="slide-left"
          className="img-fluid"
          src={props.img1}
          alt=""
        />
      </div>
      <div data-aos="fade-up" className="col-lg-6  col-12 order-1 order-lg-0">
        <div className="d-flex topimage-text justify-content-center">
          <h1>{props.h1}</h1>
          <h1>{props.h2}</h1>
          <h1>{props.h3}</h1>
        </div>
        <p className="text-center">{props.p1}</p>
      </div>
      <div className="col-6 col-lg-3 order-2 order-lg-0">
        <img
          data-aos="slide-right"
          className="img-fluid"
          src={props.img2}
          alt=""
        />
      </div>
    </div>
  );
}
export function Parallelogram(props: any) {
  return (
    <div
      className="text-center d-flex justify-content-center align-items-center"
      data-aos="zoom-in"
    >
      <div className="parallelogram col-md-7 col-lg-8 col-sm-9 col-10 mx-auto"></div>
      <h2 data-aos="fade-up" className="parallelogram-text">
        {props.h1}
      </h2>
    </div>
  );
}
export function Top1image(props: any) {
  return (
    <div className="top1image d-flex">
      <div className=" d-flex flex-wrap col-lg-11 mx-auto">
        <div
          className="col-md-6 col-12 d-flex flex-column justify-content-center"
          data-aos="zoom-in"
        >
          <h1>{props.h1}</h1>
          <p>{props.p}</p>
          <div className="d-flex">
            <input
              className="col-8 "
              type="number"
              name="number"
              placeholder="Enter your mobile number"
              id=""
            />
            <button className="col">Get Started</button>
          </div>
        </div>
        <div className="col-md-6 col-12  top1image-img">
          <img
            data-aos="zoom-in"
            className="img-fluid"
            src={props.img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export function Collapse(props: any) {
  return (
    <div
      className="col-md-9 col-11 mx-auto row mx-0 p-0 main-collapse"
      data-aos="zoom-in"
    >
      <a href={props.idcall} className="a-collapse" data-bs-toggle="collapse">
        {props.head}
        <span className="accicon">
          <i className="fas fa-angle-down rotate-icon"></i>
        </span>
      </a>
      <div id={props.id} className="collapse">
        {props.content}
      </div>
    </div>
  );
}
export function Circle(props: any) {
  return (
    <div className="box" data-aos="fade-up">
      <img
        data-aos="zoom-in"
        src={props.img}
        className="img-fluid"
        alt="services"
      />
      <h6>{props.h6}</h6>
    </div>
  );
}
export function Testimonial(props: any) {
  return (
    <div className="testimonial">
      <img data-aos="fade-up" src={props.img} alt="" />
      <h5 data-aos="fade-up" className="fw-bold">
        {props.h5}
      </h5>
      <h6 data-aos="fade-up">{props.h6}</h6>
      <p data-aos="fade-up">{props.p}</p>
    </div>
  );
}
export function Agent(props: any) {
  return (
    <div className="agent">
      <Top1image
        h1={`Become a PayPe Direct Business Outlet (Agent)`}
        img={require("../asset/sample1/man.png")}
      />
    </div>
  );
}
export function Address(Props: any) {
  return (
    <div
      className="col-lg-11 mx-auto row justify-content-around griev mx-0 bg-white my-5"
      data-aos="fade-up"
    >
      <h3 className="my-4 fw-bold">
        In case of specific queries - you may also reach out to our Grievance
        Officer
      </h3>
      <h4>Jithin Karkera</h4>
      <h5 className="fw-bold">Grievance Nodal Officer</h5>
      <div className="col-md-4 address ">
        <i className="fa fa-envelope-open col-4"></i>
        <div>
          <h6>Email</h6>
          <p>grievanceofficer@PayPe.com</p>
        </div>
      </div>
      <div className="col-md-4 address ">
        <i className="fa fa-phone col-4"></i>
        <div>
          <h6>Phone no</h6>
          <p>+91 120 6366000</p>
        </div>
      </div>
      <div className="col-md-4 address">
        <i className="fa fa-location-dot col-4"></i>
        <div>
          <h6>Address</h6>
          <p>
            PayPe Fintech Pvt. Ltd, A-8,7&8th Floor (Q-Tower), Sector-68, Noida
            – 201309
          </p>
        </div>
      </div>
    </div>
  );
}
export function Form(props: any) {
  return (
    <div className="bg-white my-5 py-5" data-aos="fade-up">
      <h1 className="text-center fw-bold">
        Share your details with us to get started
      </h1>
      <div className="row detail mx-0 col-lg-10 mx-auto py-5">
        <div className="col-md-6">
          <input type={"text"} className="col-12 " placeholder="Name" />
        </div>
        <div className="col-md-6">
          <input type={"email"} className="col-12 " placeholder="Email" />
        </div>
        <div className="col-md-6">
          <input type={"number"} className="col-12 " placeholder="Phone" />
        </div>
        <div className="col-md-6">
          <input type={"text"} className="col-12 " placeholder="City" />
        </div>
        <div className="col-md-12">
          <input type={"tel"} className="col-12 " placeholder="Pincode" />
        </div>
        <div className="col-md-12">
          <textarea
            className="col-12 py-4 mt-2"
            placeholder="Enter your Query"
          />
        </div>
        <div className="col-md-12 ">
          <button type="submit" className="col-12 button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
export function Register(props: any) {
  return (
    <div data-aos="fade-up">
      <i className={props.icon}></i>
      <div className="d-flex flex-column align-items-start">
        <h6>{props.h6}</h6>
        <p>{props.p}</p>
      </div>
    </div>
  );
}
export function Input(props: any) {
  return (
    <div
      data-aos="slide-up"
      className="input-div col-lg-10 col-md-11 col-sm-7 col-12"
    >
      <i className={props.icon}></i>
      <input
        className="input-field col-sm-11 col-10"
        placeholder={props.placeholder}
        type={props.type}
      />
      <span className={props.bar}></span>
    </div>
  );
}
export function Button(props: any) {
  return (
    <div className="d-flex justify-content-center pt-5">
      <button data-aos="fade-up" className={props.btnclassname}>
        {props.btnvalue}
      </button>
    </div>
  );
}
