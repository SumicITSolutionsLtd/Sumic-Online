// Features.jsx
import React from "react";
import { LayoutGrid, CheckCircle, ArrowRightLeft, Layers } from "lucide-react";
import "../../../styles/Features.css";

const features = [
  {
    icon: <LayoutGrid size={32} />,
    title: "Millions of business offerings",
    desc: "Explore products and suppliers for your business from millions of offerings worldwide."
  },
  {
    icon: <CheckCircle size={32} />,
    title: "Assured quality and transactions",
    desc: "Ensure production quality from verified suppliers, with your orders protected from payment to delivery."
  },
  {
    icon: <ArrowRightLeft size={32} />,
    title: "One-stop trading solution",
    desc: "Order seamlessly from product/supplier search to order management, payment, and fulfillment."
  },
  {
    icon: <Layers size={32} />,
    title: "Tailored trading experience",
    desc: "Get curated benefits, such as exclusive discounts, enhanced protection, and extra support, to help grow your business every step of the way."
  }
];

export default function Features() {
  return (
    <div className="features-section">
      {features.map((f, i) => (
        <div key={i} className="feature-card">
          <div className="feature-icon">{f.icon}</div>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>
  );
}
