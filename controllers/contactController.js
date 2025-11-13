import Contact from "../models/Contact.js";

const contactFormSubmit = async (req, res) => {
  const { name, email,phone, message } = req.body;
try {
    
    const newContact = new Contact({ name, email,phone, message });
    await newContact.save();

    res.status(201).json({ message: "Contact form submitted successfully" });
} catch (error) {
    res.status(500).json({ message: error.message });
}

}

export default contactFormSubmit;