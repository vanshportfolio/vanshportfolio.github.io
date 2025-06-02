// payment.js
// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const modelTitle = urlParams.get('model');

// Update the summary with dynamic data
document.getElementById('modelTitle').textContent = `${modelTitle} DCF Model`;
document.getElementById('modelDescription').textContent = '$9.99';

// Initialize Stripe
const stripe = Stripe('https://script.google.com/macros/s/AKfycbzvAfRp3_lBOTVJMemCkyWKJ5nfxOq_7Tyh-Bo9xbgTN3WJwhrqboYA_sGz_8Qn6Dkh/exec');
const elements = stripe.elements();

// Create card element
const card = elements.create('card', {
    style: {
        base: {
            fontSize: '16px',
            color: '#32325d',
            fontFamily: '"Inter", sans-serif',
            '::placeholder': {
                color: '#aab7c4'
            }
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a'
        }
    }
});

// Mount card element
card.mount('#card-element');

// Handle form submission
const form = document.getElementById('paymentForm');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const {token, error} = await stripe.createToken(card);
    
    if (error) {
        const errorElement = document.getElementById('card-errors');
        errorElement.textContent = error.message;
    } else {
        // Send token to your server
        stripeTokenHandler(token);
    }
});

function stripeTokenHandler(token) {
    // Add the token to a hidden form field
    const form = document.getElementById('paymentForm');
    const hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', 'stripeToken');
    hiddenInput.setAttribute('value', token.id);
    form.appendChild(hiddenInput);
    
    // Submit the form
    form.submit();
}
