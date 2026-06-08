"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Globe, GraduationCap, Users, Plane, Car } from "lucide-react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",  subsets: ["latin"],
});

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="largeSizeMediumTitles"
      background="aurora"
      cardStyle="subtle-shadow"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav" className={`${montserrat.variable}`}>
        <NavbarLayoutFloatingOverlay
          brandName="Oxin International Group"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ErXI6G61gcAkoaNMmdyIHdKyiK/uploaded-1780938897129-l5emtpc4.png"
          logoAlt="Oxin International Group Logo"
          logoImageClassName="h-12"
          navItems={[
            { name: "Home", id: "#home" },
            { name: "About", id: "#about" },
            { name: "Services", id: "#services" },
            { name: "Destinations", id: "#destinations" },
            { name: "Testimonials", id: "#testimonials" },
            { name: "FAQ", id: "#faq" },
            { name: "Contact", id: "#contact" }
          ]}
          button={{ text: "Get a Quote", href: "#contact" }}
        />
      </div>
      <div id="home" data-section="home">
        <HeroSplitKpi
          title="Oxin International Group"
          titleClassName="text-center text-6xl md:text-7xl lg:text-8xl xl:text-9xl !leading-tight"
          description="Oxin International Group specializes in student consultancy, seamless admissions, unforgettable tourism experiences, and convenient car rentals across the UAE, Georgia, Armenia, Uzbekistan, Kyrgyzstan, and South Africa."
          background={{ variant: "radial-gradient" }}
          kpis={[
            { value: "8+", label: "Years Experience" },
            { value: "6+", label: "Countries Served" },
            { value: "1000+", label: "Happy Clients" }
          ]}
          enableKpiAnimation={true}
          tag="Global Services"
          tagIcon={Globe}
          buttons={[
            { text: "Explore Services", href: "#services" },
            { text: "Contact Us", href: "#contact" }
          ]}
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/positive-shaved-head-male-dressed-grey-suit-dark-grey-background_613910-11352.jpg", alt: "John Doe" },
            { src: "http://img.b2bpic.net/free-photo/portrait-smiling-waitress_107420-12307.jpg", alt: "Jane Smith" },
            { src: "http://img.b2bpic.net/free-photo/pretty-attractive-young-mixed-race-model-with-large-afro-wearing-navy-jacket-her-naked-body-shorts_633478-1216.jpg", alt: "Michael Brown" },
            { src: "http://img.b2bpic.net/free-photo/portrait-jolly-car-dealership-agent-hired-respond-client-inquiries_482257-118268.jpg", alt: "Emily White" }
          ]}
          avatarText="Trusted by hundreds worldwide"
          imageSrc="http://img.b2bpic.net/free-photo/full-shot-friends-traveling-together_52683-126499.jpg"
          imageAlt="Students with luggage in airport with global map overlay"
          mediaAnimation="slide-up"
          imagePosition="right"
        />
      </div>
      <div id="about" data-section="about">
        <TextAbout
          tag="Who We Are"
          title="Empowering Your Journey Across Continents"
          buttons={[
            { text: "Our Story", href: "#" },
            { text: "Our Vision", href: "#" }
          ]}
          useInvertedBackground={true}
        />
      </div>
      <div id="services" data-section="services">
        <FeatureHoverPattern
          features={[
            { icon: GraduationCap, title: "Student Admissions", description: "Guiding you through every step of university applications, securing admissions to top institutions globally." },
            { icon: Users, title: "Student Consultancy", description: "Expert advice on courses, visas, scholarships, and career paths tailored to your academic goals." },
            { icon: Plane, title: "Tourism & Travel", description: "Crafting bespoke travel experiences, from luxurious getaways to adventurous explorations across our destinations." },
            { icon: Car, title: "Rent a Car Services", description: "Providing reliable and comfortable vehicles for seamless mobility during your stay or travels." }
          ]}
          animationType="slide-up"
          title="Comprehensive Global Services"
          description="From academic pursuits to leisure and local transportation, we cover all your international needs with expertise and care."
          tag="Our Offerings"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="destinations" data-section="destinations">
        <ProductCardThree
          products={[
            { id: "car-mercedes", name: "Luxury SUV (Mercedes-Benz)", price: "From $150/day", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ErXI6G61gcAkoaNMmdyIHdKyiK/uploaded-1780940128106-ih7465my.jpg", imageAlt: "White Mercedes-Benz E-Class" },
            { id: "car-bmw", name: "Executive Sedan (BMW)", price: "From $120/day", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ErXI6G61gcAkoaNMmdyIHdKyiK/uploaded-1780940254844-mer8pkc6.jpg", imageAlt: "Black BMW 5 Series" },
            { id: "car-audi", name: "Premium (Audi)", price: "From $100/day", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ErXI6G61gcAkoaNMmdyIHdKyiK/uploaded-1780954029021-xlgasag3.jpg", imageAlt: "Silver Audi A6" },
            { id: "car-toyota", name: "Standard Sedan (Toyota)", price: "From $60/day", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ErXI6G61gcAkoaNMmdyIHdKyiK/uploaded-1780954295619-xabm7irb.webp", imageAlt: "White Toyota Camry" },
            { id: "car-nissan", name: "SUV (Nissan)", price: "From $180/day", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ErXI6G61gcAkoaNMmdyIHdKyiK/uploaded-1780954495822-rh66hgvs.webp", imageAlt: "Grey Nissan Altima" },
            { id: "tour-dubai", name: "Dubai City Tour Package", price: "From $300", imageSrc: "http://img.b2bpic.net/free-photo/long-range-shot-two-cars-parked-top-sand-dunes-with-clear-blue-sky-sunny-day_181624-2899.jpg", imageAlt: "Dubai skyline with Burj Khalifa" },
            { id: "tour-georgia", name: "Georgian Mountain Escape", price: "From $500", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ErXI6G61gcAkoaNMmdyIHdKyiK/uploaded-1780955088592-x1g4shqc.jpg", imageAlt: "Scenic view of Georgian mountains" }
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          title="Explore Our Destinations & Fleet"
          description="Discover exceptional travel packages and a diverse fleet of vehicles tailored to your needs across our operating regions."
          tag="Travel & Mobility"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>
      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          metrics={[
            { id: "students-placed", value: "95%", description: "Student Admission Success Rate" },
            { id: "tours-arranged", value: "500+", description: "Customized Tours Arranged Annually" },
            { id: "cars-fleet", value: "100+", description: "Vehicles in Our Global Rental Fleet" }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="depth-3d"
          title="Our Impact Around the World"
          description="Proudly supporting individuals and businesses with exceptional service and tangible results."
          tag="Our Achievements"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          testimonials={[
            { id: "1", name: "Dr. Nour Haider ", role: "Student", company: "UAE", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ErXI6G61gcAkoaNMmdyIHdKyiK/uploaded-1780955265742-eapj7hmg.png", imageAlt: "Ahmed Al-Farsi, satisfied student" },
            { id: "2", name: "Sophia Lekishvili", role: "Traveler", company: "Georgia", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ErXI6G61gcAkoaNMmdyIHdKyiK/uploaded-1780955665697-tvlqutf8.jpg", imageAlt: "Sophia Lekishvili, happy traveler" },
            { id: "3", name: "David ", role: "Consultancy Client", company: "Armenia", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ErXI6G61gcAkoaNMmdyIHdKyiK/uploaded-1780955818758-ylk3ivlw.jpg", imageAlt: "David Gasparyan, satisfied client" },
            { id: "4", name: "Amina Usmanova", role: "Car Rental Client", company: "Uzbekistan", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/people-traveling-without-covid-worries_23-2149051607.jpg", imageAlt: "Amina Usmanova, happy car rental customer" },
            { id: "5", name: "Hudha Bekbolotov", role: "Student", company: "Kyrgyzstan", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ErXI6G61gcAkoaNMmdyIHdKyiK/uploaded-1780955985716-uy21zwa2.jpg", imageAlt: "Nurlan Bekbolotov, successful student" },
            { id: "6", name: "Thandiwe Mkhize", role: "Pilot Student ", company: "South Africa", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ErXI6G61gcAkoaNMmdyIHdKyiK/uploaded-1780956641131-x7h8gm7u.jpg", imageAlt: "Thandiwe Mkhize, happy tourist" }
          ]}
          carouselMode="buttons"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          title="What Our Clients Say"
          description="Hear from the individuals and families whose international dreams we've helped achieve."
          tag="Trusted Voices"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>
      <div id="faq" data-section="faq">
        <FaqDouble
          faqs={[
            { id: "faq-1", title: "What services does Oxin International Group offer?", content: "We offer comprehensive services including student admission assistance, personalized student consultancy, curated tourism packages, and reliable car rental services in the UAE, Georgia, Armenia, Uzbekistan, Kyrgyzstan, and South Africa." },
            { id: "faq-2", title: "Which countries do you cover for student admissions?", content: "Our student admission and consultancy services extend to top educational institutions in countries like the UAE, Georgia, Armenia, Uzbekistan, Kyrgyzstan, and South Africa." },
            { id: "faq-3", title: "Can you help with visa applications for students?", content: "Yes, our student consultancy includes detailed guidance and support for visa applications, ensuring a smooth process for your international studies." },
            { id: "faq-4", title: "What kind of car rental options do you provide?", content: "We offer a diverse fleet ranging from economy sedans to luxury vehicles, suitable for various needs and budgets, available in all our operating countries." },
            { id: "faq-5", title: "Are your tourism packages customizable?", content: "Absolutely! We specialize in crafting personalized tourism experiences. You can choose from our pre-designed packages or work with us to create a tailor-made itinerary." },
            { id: "faq-6", title: "How do I start my application process?", content: "Simply reach out to us via our contact form or phone number. Our team will schedule an initial consultation to understand your needs and guide you through the next steps." }
          ]}
          title="Frequently Asked Questions"
          description="Find quick answers to common queries about our student consultancy, tourism, and car rental services."
          tag="Your Questions, Our Answers"
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          names={[
            "Global Universities",            "International Airlines",            "Luxury Car Brands",            "Visa & Immigration Partners",            "Education Platforms",            "Premium Hotel Chains",            "Financial Institutions"
          ]}
          title="Our Esteemed Partners"
          description="Collaborating with leading institutions and brands to deliver excellence in every service we provide."
          tag="Partners & Affiliations"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>
      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Get in Touch"
          title="Ready to Start Your Global Journey?"
          description="Whether for studies, travel, or mobility, our team is here to assist you. Contact us today for personalized support. You can also reach us directly at +995595156470."
          buttons={[
            { text: "Send a Message", href: "mailto:info@oxin.com" },
            { text: "Call Us", href: "tel:+995595156470" }
          ]}
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            { title: "Services", items: [{ label: "Student Admissions", href: "#services" }, { label: "Student Consultancy", href: "#services" }, { label: "Tourism", href: "#destinations" }, { label: "Rent a Car", href: "#destinations" }] },
            { title: "Company", items: [{ label: "About Us", href: "#about" }, { label: "Testimonials", href: "#testimonials" }, { label: "Our Partners", href: "#social-proof" }, { label: "Contact Us", href: "#contact" }] },
            { title: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] }
          ]}
          logoText="Oxin International Group"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ErXI6G61gcAkoaNMmdyIHdKyiK/uploaded-1780938897129-l5emtpc4.png"
          logoAlt="Oxin International Group Logo"
          copyrightText="© 2024 Oxin International Group. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}