import React from 'react';
import Header from '../../components/ui/Header';
import BreadcrumbNavigation from '../../components/ui/BreadcrumbNavigation';
import SupplierHeader from './components/SupplierHeader';
import SupplierTabs from './components/SupplierTabs';
import ContactSidebar from './components/ContactSidebar';
import CustomerReviews from './components/CustomerReviews';

const SupplierProfile = () => {
  // Mock supplier data
  const supplier = {
    companyName: "TechnoMax Manufacturing Co., Ltd.",
    location: "Shenzhen, Guangdong, China",
    yearsInBusiness: 15,
    totalProducts: 2847,
    responseRate: "98%",
    rating: 4.7,
    reviewCount: 1247,
    bannerImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=400&fit=crop",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop",
    verifications: ["Business License", "ISO 9001", "Trade Assurance"],
    description: `TechnoMax Manufacturing is a leading supplier of electronic components and industrial equipment with over 15 years of experience in the global market. We specialize in providing high-quality products to businesses worldwide, with a focus on innovation, reliability, and customer satisfaction.\n\nOur state-of-the-art manufacturing facilities are equipped with the latest technology and operated by skilled professionals who ensure every product meets international quality standards. We have successfully served over 5,000 clients across 80+ countries.`,
    additionalInfo: "Our commitment to excellence has earned us numerous industry certifications and recognition as a trusted partner for businesses seeking reliable suppliers. We continuously invest in research and development to stay ahead of market trends and provide cutting-edge solutions to our clients.",
    certifications: [
      { name: "ISO 9001:2015", issuer: "SGS", validUntil: "Dec 2025" },
      { name: "CE Certification", issuer: "TUV", validUntil: "Mar 2026" },
      { name: "RoHS Compliance", issuer: "Intertek", validUntil: "Jun 2025" },
      { name: "FCC Certification", issuer: "UL", validUntil: "Sep 2025" }
    ],
    facilityPhotos: [
      { url: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=300&fit=crop", caption: "Main Production Floor" },
      { url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop", caption: "Quality Control Lab" },
      { url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop", caption: "Warehouse & Storage" }
    ],
    statistics: [
      { value: "15+", label: "Years Experience" },
      { value: "5,000+", label: "Satisfied Clients" },
      { value: "80+", label: "Countries Served" },
      { value: "2,847", label: "Products Available" }
    ],
    products: [
      {
        id: 1,
        name: "Industrial Control Panel with Digital Display",
        price: "$245.00 - $389.00",
        moq: "50 pieces",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=300&fit=crop",
        category: "electronics"
      },
      {
        id: 2,
        name: "High-Precision CNC Machine Components",
        price: "$1,250.00 - $2,100.00",
        moq: "10 pieces",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=300&h=300&fit=crop",
        category: "machinery"
      },
      {
        id: 3,
        name: "Electronic Circuit Board Assembly",
        price: "$89.00 - $156.00",
        moq: "100 pieces",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop",
        category: "components"
      },
      {
        id: 4,
        name: "LED Display Module 32x16",
        price: "$45.00 - $78.00",
        moq: "200 pieces",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
        category: "electronics"
      },
      {
        id: 5,
        name: "Hydraulic Pump System",
        price: "$890.00 - $1,450.00",
        moq: "5 pieces",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=300&fit=crop",
        category: "machinery"
      },
      {
        id: 6,
        name: "Precision Ball Bearings Set",
        price: "$25.00 - $45.00",
        moq: "500 pieces",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=300&h=300&fit=crop",
        category: "components"
      }
    ],
    manufacturingProcesses: [
      { name: "CNC Machining", description: "High-precision computer-controlled manufacturing" },
      { name: "Injection Molding", description: "Plastic component production" },
      { name: "Surface Treatment", description: "Coating and finishing processes" },
      { name: "Assembly & Testing", description: "Final product assembly and quality testing" },
      { name: "Packaging", description: "Custom packaging solutions" },
      { name: "Quality Inspection", description: "Multi-stage quality control" }
    ],
    qualityStandards: [
      "ISO 9001:2015 Quality Management System",
      "Six Sigma Manufacturing Process",
      "100% Pre-shipment Inspection",
      "Statistical Process Control (SPC)",
      "Continuous Improvement Programs"
    ],
    testingEquipment: [
      "Coordinate Measuring Machine (CMM)",
      "Digital Oscilloscopes",
      "Environmental Test Chambers",
      "Tensile Testing Machine",
      "Surface Roughness Tester"
    ],
    productionCapacity: [
      { value: "50,000", unit: "units/month", period: "Standard Products" },
      { value: "10,000", unit: "units/month", period: "Custom Products" },
      { value: "24/7", unit: "operation", period: "Production Schedule" },
      { value: "99.2%", unit: "efficiency", period: "Overall Equipment" }
    ],
    exportMarkets: [
      "North America", "Europe", "Southeast Asia", "Middle East", 
      "South America", "Australia", "Africa", "Japan"
    ],
    researchAreas: [
      "IoT Integration Technologies",
      "Advanced Materials Research",
      "Automation & Robotics",
      "Sustainable Manufacturing",
      "AI-Powered Quality Control"
    ],
    paymentMethods: [
      "T/T (Telegraphic Transfer)",
      "L/C (Letter of Credit)",
      "Western Union",
      "PayPal",
      "Trade Assurance"
    ],
    paymentTerms: [
      "30% deposit, 70% before shipment",
      "50% deposit, 50% on delivery",
      "100% payment for small orders",
      "Net 30 days for established clients"
    ],
    shippingMethods: [
      { name: "Express Shipping (DHL/FedEx)", time: "3-7 days" },
      { name: "Air Freight", time: "7-15 days" },
      { name: "Sea Freight", time: "15-35 days" },
      { name: "Land Transportation", time: "5-20 days" }
    ],
    shippingPorts: [
      "Shenzhen Port",
      "Hong Kong Port",
      "Guangzhou Port",
      "Shanghai Port"
    ],
    orderRequirements: [
      { category: "Electronics", moq: "100 pcs", note: "Minimum order quantity" },
      { category: "Machinery", moq: "5 pcs", note: "Due to size and weight" },
      { category: "Components", moq: "500 pcs", note: "Bulk pricing available" }
    ],
    tradeAssurance: {
      coverageAmount: "$500,000 USD",
      protectionPeriod: "Up to 180 days after shipment"
    },
    customizationServices: [
      { name: "OEM Services", description: "Original Equipment Manufacturing" },
      { name: "ODM Services", description: "Original Design Manufacturing" },
      { name: "Custom Packaging", description: "Branded packaging solutions" },
      { name: "Logo Printing", description: "Custom logo and branding" }
    ],
    contactPerson: {
      name: "Sarah Chen",
      title: "International Sales Manager",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop"
    },
    contactInfo: {
      phone: "+86 755 8888 9999",
      email: "sales@technomax.com.cn",
      address: "Building A, Industrial Park, Shenzhen, China 518000",
      website: "www.technomax.com.cn"
    },
    businessHours: [
      { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
      { day: "Saturday", hours: "9:00 AM - 12:00 PM" },
      { day: "Sunday", hours: "Closed" }
    ],
    reviews: [
      {
        id: 1,
        reviewer: {
          name: "Michael Johnson",
          company: "TechCorp Industries",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
        },
        rating: 5,
        date: "2024-08-10",
        comment: "Excellent quality products and outstanding customer service. TechnoMax has been our reliable supplier for over 3 years. Their attention to detail and commitment to delivery schedules is impressive.",
        product: "Industrial Control Panel",
        helpfulCount: 12,
        images: ["https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=100&h=100&fit=crop"]
      },
      {
        id: 2,
        reviewer: {
          name: "Emma Rodriguez",
          company: "Global Manufacturing Ltd.",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop"
        },
        rating: 4,
        date: "2024-08-05",
        comment: "Good quality products with competitive pricing. The communication was clear throughout the process. Delivery was on time and packaging was secure.",
        product: "CNC Machine Components",
        helpfulCount: 8
      },
      {
        id: 3,
        reviewer: {
          name: "David Kim",
          company: "Innovation Electronics",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
        },
        rating: 5,
        date: "2024-07-28",
        comment: "Outstanding supplier! The custom modifications they made to our specifications were perfect. Their technical team is very knowledgeable and responsive.",
        product: "Electronic Circuit Board Assembly",
        helpfulCount: 15
      },
      {
        id: 4,
        reviewer: {
          name: "Lisa Thompson",
          company: "Advanced Systems Inc.",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
        },
        rating: 4,
        date: "2024-07-20",
        comment: "Professional service and high-quality products. The only minor issue was a slight delay in shipping, but they kept us informed throughout the process.",
        product: "LED Display Module",
        helpfulCount: 6
      },
      {
        id: 5,
        reviewer: {
          name: "Robert Wilson",
          company: "Industrial Solutions Co.",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
        },
        rating: 5,
        date: "2024-07-15",
        comment: "Exceptional quality and service. TechnoMax exceeded our expectations with their hydraulic pump systems. The technical documentation was comprehensive and helpful.",
        product: "Hydraulic Pump System",
        helpfulCount: 10
      }
    ]
  };

  const customBreadcrumbs = [
    { label: 'Home', path: '/dashboard' },
    { label: 'Suppliers', path: '/supplier-profile' },
    { label: supplier?.companyName, path: '/supplier-profile', isLast: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <BreadcrumbNavigation customBreadcrumbs={customBreadcrumbs} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <SupplierHeader supplier={supplier} />
              <SupplierTabs supplier={supplier} />
              <CustomerReviews supplier={supplier} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ContactSidebar supplier={supplier} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SupplierProfile;