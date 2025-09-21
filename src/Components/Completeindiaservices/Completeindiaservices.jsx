import ServicesSection from "../ServicesSection/ServicesSection";
import Registration from "../../assets/registration.jpg";
import income from "../../assets/incometax.jpg";
import acconting from "../../assets/accounting.jpg";
import govt from "../../assets/govtregistra.jpg";
import consult from "../../assets/counsultancy.jpg";
import agreement from "../../assets/VAT.jpg";
import Designservices from "../Designservices/Designservices";

const Completeindiaservices = () => {
  const services = [
    {
      title: "Incorporation Services",
      desc: "We help you incorporate different types of entities in India.",
      img: income,
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
      img: Registration,
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
      img: income,
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
      img: acconting,
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
      img: govt,
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
      img: consult,
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
      img: agreement,
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
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      {/* Section Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-950">
          Our Professional Services in India
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          From company incorporation to taxation and legal compliance, we
          provide end-to-end business solutions to help your organization grow
          seamlessly.
        </p>
      </div>

      {/* Services Grid */}
      <Designservices services={services} />
    </section>
  );
};

export default Completeindiaservices;
