import sendEmail from "../services/email.server.js"

export const sendEmailController = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body
        
        if (!name || !email || !phone || !message) {
            return res.status(409).json({ message: "All field are required", success: false})
        }

        await sendEmail({ name, email, phone, message })
        
        return res.status(200).json({message: "Message Sent", success: true})
    } catch (error) {
        return res.status(500).json({message: error.message || "Internal Server Error", success: false})
    }
}