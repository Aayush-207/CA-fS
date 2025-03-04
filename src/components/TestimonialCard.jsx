import React from "react";
//TestimonialCard that receives props and displays name and description
function TestimonialCard() {

    const prop = {
        name1: "Emily Watson",
        review1: "This service was amazing! Highly recommended",
        name2: "John Smith",
        review2: "Nice for this service"
    }
    return(
        <>
        <div className="testimonial-card">
            <h3>Name: {prop.name1}</h3>
            <p>Description: {prop.review2}</p>
        </div>
        <div className="testimonial-card">
            <h3>Name: {prop.name2}</h3>
            <p>Description: {prop.review2}</p>
        </div>
        </>
        
    )
}

export default TestimonialCard;