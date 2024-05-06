import React from "react";
import "./index.css";
import { ToastContainer } from "react-toastify";
import PlanCard from "./Card";
import { Col, Row } from "react-bootstrap";

const Payment = () => {
  const features = [
    "Access to Anew’s financial disclosure & settlement planning tools",
    "Assets & debts summary",
    "Lifestyle analysis: income & expenses report",
    "Home equity split calculation",
    "Settlement planning tools"
  ];

  const termsConditions = [
    "Basic Plan refund policy: you won’t be charged during the 7-day trial. If you cancel after the trial period ends, there will be no refund and your subscription will continue to be active until the end of your current billing cycle.",
    "Advanced Plan refund policy: due to the immediate access of digital content, including all electronic materials, videos, guides, worksheets, etc, all sales are final and there will be no refund.",
    "For personal use only:  Anew’s Products are for personal use only. You are granted one (1) non-transferable, non-sublicensable, non-exclusive license to use Anew’s Products you have purchased through the website. You agree not to copy, reproduce, redistribute, alter, modify, share with third parties, display the content publicly, or create derivative works of Anew’s products.",
    "Indemnity: Anew’s products and plans are for general interest, education, and informational use only and do not include legal or financial advice. Errors, inaccuracies and omissions may occur. You agree to indemnify and hold Anew, its officers, directors, advisors and employees harmless from any losses (including attorneys’ fees) related to your use or misuse of Anew’s products.  In no event shall Anew be liable for any special, indirect, incidental, consequential, punitive or exemplary damages or for loss of profits, revenues, contracts, loss of use, loss of data, business interruption, or cost of replacement goods related to or in connection with the use of Anew’s products."
  ]
  return (
    <>
      <ToastContainer />
      {/* <h1 className="divorce-heading pt-5 avenue-step1">Anew</h1> */}
      <img className="m-4" src="assets/img/logo.svg" />
      <div className="container col-md-12">
        <div className="my-2">
          <div className="d-flex align-items-center mb-2">
            <div role="group" className="col-md-12">
              <div className="pb-5">
                <h3 className="heading-3 text-center">Start your FREE 7-day trial </h3>
              </div>
              <div className="d-flex justify-content-between mx-4">
                <Row>
                  <PlanCard
                    title="Basic"
                    heading="Free Trial"
                    content="Get your financials organized. Free for 7 days, then $116/year."
                    features={features}
                    buttonText="Start  now"
                  />
                </Row>
                <Row>
                  <PlanCard
                    title="Advanced"
                    heading="$508"
                    content="For less than a coffee a day, learn to uncover hidden assets & secure your financial future"
                    features={features}
                    buttonText="Get it all"
                  />
                </Row>
              </div>
              <div className="mx-5 pt-5 pb-2">
                <div className="mx-5">
                  <p>Policies, Terms of Use & Disclaimer:</p>
                  <ul>
                    {termsConditions.map((terms, index) => (
                      <li className="pb-4" key={index}>{terms}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
