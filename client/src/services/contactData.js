export const contactInputs = [
  {
    name: "name",
    type: "text",
    placeholder: "Your Name",
    rules: {
      required: "Name is required",
      minLength: {
        value: 3,
        message: "Minimum 3 characters",
      },
    },
  },
  {
    name: "email",
    type: "email",
    placeholder: "Your Email",
    rules: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid Email",
      },
    },
  },
  {
    name: "phone",
    type: "text",
    placeholder: "Phone Number",
    rules: {
      required: "Phone is required",
      pattern: {
        value: /^[0-9]{10}$/,
        message: "Invalid Phone Number",
      },
    },
  },
  {
    name: "message",
    type: "textarea",
    placeholder: "Message",
    rules: {
      required: "Message is required",
      minLength: {
        value: 10,
        message: "Minimum 10 characters",
      },
    },
  },
];
