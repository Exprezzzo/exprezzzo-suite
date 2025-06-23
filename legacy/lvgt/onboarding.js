// Onboarding.js - AI-powered business onboarding (Mock Logic)
document.getElementById('submit-form').addEventListener('click', async () => {
  const name = document.getElementById('vendor-name').value;
  const zone = document.getElementById('vendor-zone').value;

  const newVendor = {
    name,
    zone,
    timestamp: new Date().toISOString()
  };

  console.log('Submitting vendor:', newVendor);
  alert('Vendor submitted! (This is a mock flow)');
});