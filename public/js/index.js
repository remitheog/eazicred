// Javascript code that are only for the homepage
// SLIDER
$('.stats__inner-mobile').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    prevArrow: false,
    nextArrow: false
});

$('.loans__inner-mobile').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    prevArrow: false,
    nextArrow: false
});

$('.gallery__inner-mobile').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    prevArrow: false,
    nextArrow: false
});

// LOAN CALCULATOR
const form = document.querySelector('.form');

form.addEventListener('submit', calculateResults);

function calculateResults (e) {
    // UI VARIABLES
    const amount = document.getElementById('amount');
    const period = document.getElementById('period');
    const interest = document.getElementById('interest');
    
    const interestResult = document.querySelector('.results-interest');
    const monthlyResult = document.querySelector('.results-payment');
    const durationResult = document.querySelector('.results-duration');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(period.value);


    // CALCULATE MONTHLY PAYMENTS
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);
    
    if (isFinite(monthly)) {
        monthlyResult.value = monthly.toFixed(2);
        monthlyResult.innerHTML = `₦${monthlyResult.value}`;
        interestResult.innerHTML = `${interest.value}%`;

        if (period.value > 1) {
            durationResult.innerHTML = `${period.value} months`;
        } else {
            durationResult.innerHTML = `${period.value} month`;
        }
    } else {
        monthlyResult.innerHTML = 0;
        interestResult.innerHTML = 0;
        durationResult.innerHTML = 0;
    }
    e.preventDefault();
}