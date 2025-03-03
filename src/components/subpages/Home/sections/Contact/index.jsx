// import contact data
import {
  FormInput,
  FormSubmitBtn,
  FormTextarea,
  SectionHeader,
} from '@/components/reusable';
import { contact } from '@/utils/data';
import { validation } from '@/utils/validation';
import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const formMethods = useForm({
    resolver: zodResolver(validation),
    defaultValues: initialValues,
  });
  const onSubmit = async (values) => {
    setLoading(true);
    const emailTemplate = {
      from_name: values?.email,
      to_name: 'Hasan Rifat',
      message: `
      Name: ${values?.name} \n
      email: ${values?.email} \n
      subject: ${values?.subject || ''} \n
      Message: ${values?.message}
      `,
    };
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
        emailTemplate,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? '',
        }
      );

      if (response.status === 200) {
        formMethods.reset();
        toast.success('Message sent successfully');
      } else {
        toast.error('Message not sent. Please try again later');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Message not sent. Please try again later');
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section className="section bg-secondary-2 relative" id="contact">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:sm:block bg-gradient-to-r from-sky-400 to-emerald-300 bg-clip-text  text-transparent">
              Contact me
            </h2>
            <SectionHeader
              eyebrow={'My Skills'}
              title="
            Get in touch with me!
            "
              description={
                "Feel free to drop me a message and let's start building something great together"
              }
            />
            {/* <p className="subtitle font-montserrat">
            Get in touch with me! I&apos;am here to answer any questions,
            discuss potential collaborations, or just chat about all things
            tech. Drop me a message and let&apos;s start building something
            great together
          </p> */}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-1 mt-14">
            <div className="flex lg:mx-auto flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
              {contact?.map((item, index) => {
                const { icon, title, subtitle, description } = item;
                return (
                  <div className="flex flex-row gap-x-1 font-sans" key={index}>
                    <div className="text-secondary rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                      {icon}
                    </div>
                    <div>
                      <h4 className=" text-xl mb-1 font-sans ">{title}</h4>
                      <p className="mb-1 text-paragraph font-body ">
                        {subtitle}
                      </p>
                      <p className="text-secondary font-body ">{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <div className="font-sans ">
              <FormProvider {...formMethods}>
                <form
                  onSubmit={formMethods.handleSubmit((values) =>
                    onSubmit(values)
                  )}
                  className="space-y-7"
                >
                  <div className="flex flex-col md:flex-row  gap-8">
                    <FormInput
                      name="name"
                      label="Your name"
                      placeholder="Your name"
                    />
                    <FormInput
                      name="email"
                      label="Your email"
                      placeholder="Your email"
                    />
                  </div>
                  <FormInput
                    name="subject"
                    label="Subject"
                    placeholder="Subject"
                  />
                  <FormTextarea
                    name="message"
                    label="Message"
                    placeholder="Message"
                    rows={5}
                  />
                  <FormSubmitBtn text="Send Message" isLoading={loading} />
                </form>
              </FormProvider>
            </div> */}
          </div>
        </div>
        {/* gradient start */}
        {/* <div className="absolute z-[1] w-[30%] h-[30%] rounded-full top-0 right-[10%] white__gradient bottom-40" />
      <div className="absolute z-[0] w-[20%] h-[20%] left-[35%] top-16 blue__gradient" /> */}
        {/* gradient end */}
      </section>
      <Toaster />
    </>
  );
};

export default Contact;
