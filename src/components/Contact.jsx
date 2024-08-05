import { IoMail } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="border-b-2">
      <div className="w-full flex flex-col gap-5 py-40 px-3 lg:px-10 lg:flex-row lg:items-center lg:gap-20">
        <div className="text-center basis-1/2" data-aos="fade-right">
          <h2 className="text-6xl">Contact</h2>
          <p>
            {`I would love to hear about your projects and how I can help you.
            Please email or whatsapp me, and I'll get back to you as soon as
            possible.`}
          </p>
        </div>
        <div className="mx-auto basis-1/2" data-aos="fade-left">
          <a
            className="flex gap-5 mb-10"
            href="mailto:zainudeenzaidmohammed7@gmail.com"
            target="__blank"
          >
            <IoMail />{" "}
            <p className="border-b-2 border-b-NeonGreen hover:border-b-white hover:text-NeonGreen transition-all">
              zainudeenzaidmohammed7@gmail.com
            </p>
          </a>
          <a
            className="flex gap-5"
            href="https://wa.me/+233597308850"
            target="__blank"
          >
            <FaWhatsapp />{" "}
            <p className="border-b-2 border-b-NeonGreen hover:border-b-white hover:text-NeonGreen transition-all">
              +233 59 730 8850
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
