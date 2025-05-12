
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectDetails: "",
    agreeToTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (could be added later)
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      projectDetails: "",
      agreeToTerms: false,
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Address",
      value: "Shirpur, Maharashtra, India",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 9158498492",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "antarachitte.genai@gmail.com",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/antarachitte",
      link: "https://www.linkedin.com/in/antara-chitte-44b364329",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-darker">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Hire Me <span className="purple-arrow">↓</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-medium mb-6">Services</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {["Website Development", "Front-End Development", "Assistant Developer", "Responsive Design"].map((service, index) => (
                <div 
                  key={index}
                  className={`p-4 border rounded-lg transition-all duration-300 ${
                    index === 0 
                      ? "border-purple-primary bg-purple-primary/10" 
                      : "border-gray-700 bg-dark/50 hover:border-purple-primary/50"
                  }`}
                >
                  {service}
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-medium mb-6">Duration</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              {["1-2 Months", "2-4 Months", "4-6 Months", "More than 6 months"].map((budget, index) => (
                <div 
                  key={index}
                  className={`p-4 text-sm md:text-base text-center border rounded-lg transition-all duration-300 ${
                    index === 1
                      ? "border-purple-primary bg-purple-primary/10" 
                      : "border-gray-700 bg-dark/50 hover:border-purple-primary/50"
                  }`}
                >
                  {budget}
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-primary/10 flex items-center justify-center text-purple-light">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-light transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-dark/50 p-6 md:p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-medium mb-6">Personal Data</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">First Name</label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="bg-darker border-gray-700 focus:border-purple-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Last Name</label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="bg-darker border-gray-700 focus:border-purple-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-darker border-gray-700 focus:border-purple-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Project Details (Optional)</label>
                  <Textarea
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    className="bg-darker border-gray-700 focus:border-purple-primary min-h-[100px]"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={formData.agreeToTerms}
                    onCheckedChange={handleCheckboxChange}
                    required
                    className="data-[state=checked]:bg-purple-primary data-[state=checked]:border-purple-primary"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm leading-none text-gray-300"
                  >
                    I agree to the processing of my data in accordance with the Privacy Policy
                  </label>
                </div>
                
                <Button 
                  type="submit"
                  className="glow-button w-full flex items-center justify-center"
                  disabled={!formData.agreeToTerms}
                >
                  HIRE ME <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
