import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import Fade from "../components/motion/Fade";
import Titlebar from "../components/cards/Titlebar";
import ContactInput from "../components/contact/ContactInput";
import ContactButton from "../components/contact/ContactButton";
import ContactInfo from "../components/contact/ContactInfo";

import API from "../services/api";
import { contactInputs } from "../services/contactData";

const ContactPage = () => {
    const {
        register,
        handleSubmit,
        setFocus,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    useEffect(() => {
        setFocus("name");
    }, [setFocus]);

    const onSubmit = async (data) => {
        try {
            const response = await API.post("/email/send", data);

            toast.success(
                response.data.message || "Message sent successfully."
            );

            reset();
            setFocus("name");
        } catch (error) {
            toast.error(
                error?.response?.data?.message ||
                "Something went wrong. Please try again."
            );
        }
    };

    return (
        <Fade className="flex flex-col h-screen">
            <Titlebar name="Contact Me" />

            <div className="flex-1 overflow-y-auto p-6">
                <div className="grid lg:grid-cols-2 gap-10">

                    {/* Left */}

                    <div>
                        <h2 className="text-2xl font-bold text-text">
                            Get In Touch
                        </h2>

                        <p className="text-text-muted mt-2 mb-8">
                            Have a project in mind? Let's work together.
                        </p>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-5"
                        >
                            {contactInputs.map((item) => (
                                <ContactInput
                                    key={item.name}
                                    {...item}
                                    register={register}
                                    error={errors[item.name]}
                                />
                            ))}

                            <ContactButton
                                loading={isSubmitting}
                                text="Send Message"
                            />
                        </form>
                    </div>

                    {/* Right */}

                    <ContactInfo />
                </div>
            </div>
        </Fade>
    );
};

export default ContactPage;