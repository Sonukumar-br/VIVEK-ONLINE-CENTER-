/**
 * Frontend Service Layer for Vivek Online CSC Centre.
 * Designed for future Spring Boot REST API connection.
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api/v1';

/**
 * Submit a service request from the user.
 * Currently simulates network request with local validation and isolated API architecture.
 *
 * @param {Object} requestData
 * @param {string} requestData.fullName
 * @param {string} requestData.mobileNumber
 * @param {string} requestData.selectedService
 * @param {string} requestData.message
 * @returns {Promise<{success: boolean, message: string, data?: Object}>}
 */
export async function submitServiceRequest(requestData) {
  // Client-side validation
  if (!requestData.fullName || requestData.fullName.trim().length < 2) {
    return { success: false, message: "Please enter a valid full name." };
  }

  const phoneRegex = /^[0-9]{10}$/;
  const cleanPhone = requestData.mobileNumber ? requestData.mobileNumber.replace(/\D/g, '') : '';
  if (!phoneRegex.test(cleanPhone)) {
    return { success: false, message: "Please enter a valid 10-digit mobile number." };
  }

  if (!requestData.selectedService) {
    return { success: false, message: "Please select a service." };
  }

  // Simulate network latency (400ms)
  await new Promise((resolve) => setTimeout(resolve, 400));

  /* 
  FUTURE SPRING BOOT INTEGRATION:
  try {
    const response = await fetch(`${API_BASE_URL}/service-requests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: requestData.fullName.trim(),
        mobileNumber: cleanPhone,
        serviceId: requestData.selectedService,
        message: requestData.message ? requestData.message.trim() : ''
      })
    });
    if (!response.ok) throw new Error('Server request failed');
    return await response.json();
  } catch (error) {
    return { success: false, message: "Unable to reach server. Please try contacting via WhatsApp." };
  }
  */

  // Frontend-only response
  return {
    success: true,
    message: "Thank you! Your service request has been received. You can also contact us directly on WhatsApp for instant assistance.",
    data: {
      id: "REQ-" + Math.floor(100000 + Math.random() * 900000),
      fullName: requestData.fullName.trim(),
      mobileNumber: cleanPhone,
      selectedService: requestData.selectedService,
      submittedAt: new Date().toISOString()
    }
  };
}
