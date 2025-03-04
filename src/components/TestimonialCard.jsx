import React from "react";
//TestimonialCard that receives props and displays name and description
function TestimonialCard() {

    const prop = {
        name: "Emily Watson",
        review: "This service was amazing! Highly recommended"
    }
    return(
        <div className="testimonial-card">
            <h3>Name: {prop.name}</h3>
            <p>Description: {prop.review}</p>
        </div>
    )
}

export default TestimonialCard;