import React from "react";
import ServicesSection from "../ServicesSection/ServicesSection";
import incroption from "../../assets/Incorporation.jpg";
import Registration from "../../assets/registration.jpg";
import income from "../../assets/incometax.jpg";
import acconting from "../../assets/accounting.jpg";
import govt from "../../assets/govtregistra.jpg";
import consult from "../../assets/counsultancy.jpg";
import agreement from "../../assets/VAT.jpg";


const Indiaservices = () => {
  const services = [
    {
      title: "Incorporation Services",
      desc: "We help you incorporate different types of entities in India.",
      img:incroption ,
      items: [
        "Private Limited Company",
        "LLP",
        "Public Limited Company",
        "Partnership Firm",
        "NGO",
        "Trust",
        "Sole Proprietorship",
        "OPC",
      ],
    },
    {
      title: "Registration & Compliance Services",
      desc: "Expert registration & compliance services for businesses across India.",
      img:Registration,
      items: [
        "Society",
        "Nidhi Company",
        "Microfinance Company",
        "Producer Company",
        "Startup India Registration",
        "Virtual Office",
        "Trademark Registration & Renewals",
        "Copyright & Patent Registration",
        "Intellectual Property Dispute Resolution",
        "Annual Compliance (LLP, Pvt Ltd, Nidhi, etc.)",
      ],
    },
    {
      title: "Income Tax & GST Services",
      desc: "Comprehensive Direct & Indirect Tax services.",
      img:income,
      items: [
        "Income Tax Return Filing",
        "TDS Return Filing",
        "PF Return Filing",
        "80-IAC Tax Exemption",
        "GST Registration & Filing",
        "GSTR-9 Annual Return",
        "E-Invoice & E-Way Bill Registration",
        "Input Tax Credit & ITC Refunds",
        "Assessment & Appeals",
      ],
    },
    {
      title: "Accounting & Bookkeeping",
      desc: "End-to-end financial management & reporting solutions.",
      img:acconting,
      items: [
        "Outsourced Bookkeeping",
        "Zoho, Xero, QuickBooks, Tally",
        "ERP Implementation",
        "Payroll Support",
        "Ind AS, IFRS, GAAP Compliance",
        "Financial Consolidation",
      ],
    },
    {
      title: "Government Registrations",
      desc: "Expert assistance with government certifications & licenses.",
      img:govt,
      items: [
        "ISO Certification",
        "Ayush License",
        "ISI Mark Certification",
        "Professional Tax Registration",
        "Factory License",
        "RERA Registration",
        "SPICe+ Form",
        "GMP Certification",
      ],
    },
    {
      title: "Consultation Services",
      desc: "Expert CA & Financial Advisory services.",
      img:consult,
      items: [
        "CA Services & Online Consultation",
        "Mergers & Acquisitions Advisory",
        "Financial Consultancy & Modelling",
        "Startup Planning & Pitch Deck",
        "CSR Registration",
      ],
    },
    {
      title: "Agreements & Contracts",
      desc: "Legal drafting & contract management.",
      img:agreement,
      items: [
        "MOU",
        "Franchise Agreement",
        "Shareholder Agreement",
        "Founders Agreement",
        "NDA",
        "Service Level Agreement",
        "Non-Compete Agreement",
        "Succession & Legal Heir Certificates",
        "Sale Deed & Gift Deed",
      ],
    },
  ];

  return (
    <ServicesSection
      title="India"
      subtitle="Comprehensive Professional Services for Businesses in India"
      services={services}
    />
  );
};

export default Indiaservices;