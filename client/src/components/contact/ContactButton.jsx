import { FaPaperPlane } from "react-icons/fa";

const ContactButton = ({
    loading = false,
    text = "Send Message",
}) => {
    return (
        <button
            type="submit"
            disabled={loading}
            className={`
        w-full
        flex
        items-center
        justify-center
        gap-3
        rounded-lg
        bg-active
        px-5
        py-3
        font-semibold
        text-white
        transition-all
        duration-300
        ${loading
                    ? "cursor-not-allowed opacity-70"
                    : "cursor-pointer hover:opacity-90 active:scale-[0.98]"
                }
      `}
        >
            {loading ? (
                <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>Sending...</span>
                </>
            ) : (
                <>
                    <FaPaperPlane />
                    <span>{text}</span>
                </>
            )}
        </button>
    );
};

export default ContactButton;