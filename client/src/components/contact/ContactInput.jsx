
const ContactInput = ({
    name,
    type,
    placeholder,
    register,
    rules,
    error,
}) => {
    const commonClass =
        "w-full rounded-lg border border-border bg-surface px-4 py-3 text-text outline-none transition-all duration-200 focus:border-active focus:ring-2 focus:ring-active/20 placeholder:text-text-muted";

    return (
        <div className="flex flex-col gap-1">
            {type === "textarea" ? (
                <textarea
                    rows={6}
                    placeholder={placeholder}
                    className={`${commonClass} resize-none`}
                    {...register(name, rules)}
                />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    className={commonClass}
                    {...register(name, rules)}
                />
            )}

            {error && (
                <span className="text-sm text-danger">
                    {error.message}
                </span>
            )}
        </div>
    );
};

export default ContactInput;