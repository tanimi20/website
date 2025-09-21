import Designservices from "../Designservices/Designservices";
import businessstup from "../../assets/businessstup.jpg";
import corporatetax from "../../assets/corporatetax.jpg";
import VAT from "../../assets/VAT.jpg";
import accounting from "../../assets/accounting.jpg";
import advisory from "../../assets/advisory.jpg";

const Completeuaseservices = () => {
  const services = [
    {
      title: "Business Setup Services",
      desc: "Complete support for setting up and expanding businesses in the UAE.",
      img: businessstup,
      items: [
        "Mainland Company Formation",
        "Offshore Company Formation",
        "Free Zone Company Formation",
        "Branch and Representative Office Setup",
        "VISA Services",
      ],
    },
    {
      title: "Corporate Tax and Transfer Pricing",
      desc: "Expert guidance and compliance support for UAE Corporate Tax & Transfer Pricing.",
      img: corporatetax,
      items: [
        "Corporate Tax Consulting Service",
        "Corporate Tax Registration Service",
        "Corporate Tax Accounting Services",
        "Corporate Tax Audit Services",
        "Corporate Tax Refund Services",
        "Corporate Tax Return Filing",
        "Corporate Tax Assessment Services",
        "Corporate Tax Deregistration",
        "Corporate Tax Appeals and Assessment",
        "Transfer Pricing Policy and ALP Services",
        "Global Taxation Support",
        "Benchmarking",
      ],
    },
    {
      title: "VAT Services",
      desc: "End-to-end VAT consulting, compliance, and advisory services.",
      img: VAT,
      items: [
        "VAT Consulting Service",
        "VAT Registration Service",
        "VAT Accounting Services",
        "Tax Agent Services",
        "VAT Audit Services",
        "VAT Refund Services",
        "VAT Return Filing",
        "TRN Verification Services",
        "VAT Computation Services",
        "VAT Health Check Services",
        "VAT Deregistration",
      ],
    },
    {
      title: "Accounting and Finance",
      desc: "Comprehensive financial management and accounting solutions.",
      img: accounting,
      items: [
        "Bookkeeping & Accounting Services (Zoho, Xero, QuickBooks, Tally)",
        "Business Valuation & Restructuring",
        "Account Reconciliation",
        "Intercompany Reconciliation",
        "Cash Flow & Forecasting",
        "ERP Implementation",
        "Payroll Support",
        "Ind AS, IFRS and GAAP Implementation",
        "Consolidation Services",
      ],
    },
    {
      title: "Advisory Services",
      desc: "Strategic business advisory and financial consulting in the UAE.",
      img: advisory,
      items: [
        "Deal Advisory",
        "Mergers & Acquisitions",
        "Business Feasibility Study",
        "Risk Consulting Service",
        "AML (Anti-Money Laundering) Consulting Service",
        "Management Consulting",
        "Virtual CFO",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <Designservices
        title="Our Professional Services in UAE"
        subtitle="From company setup to corporate taxation and advisory, we provide comprehensive solutions to help your business thrive in the UAE."
        services={services}
      />
    </section>
  );
};

export default Completeuaseservices;
