// lib/contactData.ts — Single source of truth for Contact page

export const CONTACT_META = {
  title:       "Contact Bright Minds — Book Your Free JEE & NEET Demo Class",
  description: "Get in touch with Bright Minds Coaching Institute. Book a free demo class for JEE, NEET, or CUET preparation. Expert faculty, small batches, proven results.",
  canonical:   "https://brightminds.edu/contact",
  keywords:    ["contact coaching institute","JEE coaching near me","book demo class","NEET coaching Delhi"],
};

export const CONTACT_DETAILS = {
  phone:     "+91 98765 43210",
  phoneTel:  "tel:+919876543210",
  email:     "hello@brightminds.edu",
  emailHref: "mailto:hello@brightminds.edu",
  address:   "12-B, Connaught Place, New Delhi — 110001",
  mapsUrl:   "https://maps.google.com/?q=Connaught+Place+New+Delhi",
  mapEmbed:  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.89!2d77.2167!3d28.6315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1680000000000",
};

export type InfoCard = {
  id: string; icon: string; title: string;
  line1: string; line2: string; cta: string; href: string; color: string;
};

export const INFO_CARDS: InfoCard[] = [
  { id:"phone",  icon:"phone",   title:"Call for instant support",        line1:"+91 98765 43210",       line2:"Mon–Sat · 8 AM to 8 PM",              cta:"Call now",       href:"tel:+919876543210",                                  color:"#0B3C5D" },
  { id:"visit",  icon:"map-pin", title:"Visit for in-person guidance",    line1:"12-B, Connaught Place", line2:"New Delhi — 110001",                  cta:"Get directions", href:"https://maps.google.com/?q=Connaught+Place+New+Delhi",color:"#27AE60" },
  { id:"email",  icon:"mail",    title:"Email us anytime",                line1:"hello@brightminds.edu", line2:"We reply within 4 working hours",     cta:"Send email",     href:"mailto:hello@brightminds.edu",                        color:"#7C3AED" },
  { id:"hours",  icon:"clock",   title:"Centre hours",                    line1:"Mon–Sat · 8 AM to 8 PM",line2:"Sunday · Closed",                    cta:"Book a slot",    href:"#form",                                               color:"#F39C12" },
];

export type CourseOption = { value: string; label: string };
export const COURSE_OPTIONS: CourseOption[] = [
  { value:"",         label:"Select a programme" },
  { value:"jee-2yr",  label:"JEE Main + Advanced — 2 Year" },
  { value:"jee-1yr",  label:"JEE Main + Advanced — 1 Year Intensive" },
  { value:"jee-drop", label:"JEE Dropper Batch" },
  { value:"neet-2yr", label:"NEET — 2 Year" },
  { value:"neet-1yr", label:"NEET — 1 Year Intensive" },
  { value:"cuet",     label:"CUET Preparation" },
  { value:"class10",  label:"Class 10 Boards" },
];

export type TrustStat = { id:string; num:number; suffix:string; label:string; color:string; };
export const TRUST_STATS: TrustStat[] = [
  { id:"students", num:5000, suffix:"+",    label:"Students trained",              color:"#27AE60" },
  { id:"iit",      num:250,  suffix:"+",    label:"IIT & NIT selections in 2026",  color:"#F39C12" },
  { id:"years",    num:15,   suffix:" Yrs", label:"Years of teaching excellence",  color:"#7C3AED" },
  { id:"ratio",    num:12,   suffix:"",     label:"Mentor-to-student ratio 1:12",  color:"#0891B2" },
];

export const HEADER_COPY = {
  eyebrow: "Admissions open · 2026–27 batches",
  h1:      "Start your success journey with Bright Minds.",
  sub:     "Book your free demo class and take the first step towards JEE, NEET, or board exam success. Our IIT-educated faculty will assess your level and recommend the right batch — at no cost.",
  urgency: "⚡ Limited seats available in upcoming batches",
};
