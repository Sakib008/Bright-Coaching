import ContactForm from './ContactForm';
import ContactMap  from './ContactMap';

export default function ContactSplitSection() {
  return (
    <section aria-label="Contact form and map" className="bg-[#F1F5F9] py-14 md:py-16">
      <div className="mx-auto max-w-[1160px] px-4 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <ContactMap  />
        </div>
      </div>
    </section>
  );
}
