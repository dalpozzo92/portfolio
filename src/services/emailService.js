import emailjs from '@emailjs/browser';

const EMAIL_CONFIG = {
  serviceId: 'service_o4m96k4',     
  templateId: 'template_mm3eps4',   
  publicKey: 'w0fIixiFZlK7SHVfM',   
};

export const sendEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Nicola Dal Pozzo',
      reply_to: formData.email,
    };

    const result = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams,
      EMAIL_CONFIG.publicKey
    );

    return { success: true, data: result };
  } catch (error) {
    console.error('Errore EmailJS:', error);
    return { 
      success: false, 
      error: error.text || error.message || 'Errore sconosciuto' 
    };
  }
};