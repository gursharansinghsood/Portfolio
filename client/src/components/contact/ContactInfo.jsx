import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

const contactInfo = [
    {
        icon: <FaEnvelope />,
        title: "Email",
        value: "gursharansinghsood@gmail.com",
        href: "mailto:gursharansinghsood@gmail.com",
    },
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        value: "+91 76500 76914",
        href: "tel:+917650076914",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Location",
        value: "Mohali, Punjab, India",
    },
    {
        icon: <FaGithub />,
        title: "GitHub",
        value: "github.com/gursharansinghsood",
        href: "https://github.com/gursharansinghsood",
    },
    {
        icon: <FaLinkedin />,
        title: "LinkedIn",
        value: "linkedin.com/in/gursharansinghsood",
        href: "https://www.linkedin.com/in/gursharan-singh-sood/",
    },
];

const ContactInfo = () => {
    return (
        <div className="rounded-xl border border-border bg-surface p-6 h-fit">
            <h2 className="text-2xl font-bold text-text mb-2">
                Contact Information
            </h2>

            <p className="text-text-muted mb-8">
                Feel free to reach out through any of the following platforms.
            </p>

            <div className="space-y-5">
                {contactInfo.map((item) => (
                    <div
                        key={item.title}
                        className="flex items-start gap-4"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-active/10 text-active text-xl">
                            {item.icon}
                        </div>

                        <div className="flex-1">
                            <h3 className="text-text font-semibold">
                                {item.title}
                            </h3>

                            {item.href ? (
                                <a
                                    href={item.href}
                                    target={
                                        item.href.startsWith("http")
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel="noreferrer"
                                    className="text-text-muted hover:text-active transition-colors break-all"
                                >
                                    {item.value}
                                </a>
                            ) : (
                                <p className="text-text-muted">
                                    {item.value}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-10 rounded-lg border border-active/30 bg-active/5 p-4">
                <h3 className="text-active font-semibold mb-2">
                    Let's Build Something Amazing 🚀
                </h3>

                <p className="text-sm text-text-muted leading-6">
                    I'm always interested in discussing new opportunities,
                    freelance projects, internships, or full-time roles.
                    Feel free to send me a message anytime!
                </p>
            </div>
        </div>
    );
};

export default ContactInfo;