import React from "react";
import { Card, Button } from "react-bootstrap";

const PlanCard = ({ title, heading, content, buttonText, features }) => {
    return (
        <Card className="paymentCard">
            <Card.Body>
                <Card.Title className="cardTitle">{title}</Card.Title>
                <div className="text-center">
                    <h1 className="cardHeading py-4">{heading}</h1>
                    <p className="cardContent">{content}</p>
                    <div className="line-27 my-5"></div>
                </div>
                <ul className="cardContent">
                    {features.map((feature, index) => (
                        <li className="pb-4" key={index}>{feature}</li>
                    ))}
                </ul>
                <div className="d-flex flex-column justify-content-center align-items-center py-3">
                    <Button variant="primary" className="btn btn-size btn-primary">{buttonText}</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default PlanCard;
