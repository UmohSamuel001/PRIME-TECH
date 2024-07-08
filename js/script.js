function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("closebtn").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("closebtn").style.display = "none";
}

function toggleNightMode() {
    const html = document.querySelector('html'); // or 'body' depending on where your attribute is set
    const darkSwitchMobile = document.getElementById('darkSwitchMobile');
    const darkSwitchLargeScreen = document.getElementById('darkSwitchLargeScreen');
    
    if (darkSwitchMobile.checked || darkSwitchLargeScreen.checked) {
        html.setAttribute('data-theme', 'dark');
    } else {
        html.removeAttribute('data-theme');
    }
}


const balanceElement = document.getElementById('balance');
const eyeIcon = document.querySelector('.fa-eye');
const eyeSlashIcon = document.querySelector('.fa-eye-slash');
const convertNaira = document.querySelector('.convert-naira');
const convertDollar = document.querySelector('.convert-dollar');
var balance = balanceElement.textContent;

function addThousandSeparator(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Extract the numerical value from the balance text
const balanceValue = parseFloat(balance.replace('$', '').replace(',', ''));

// Add thousand separators to the balance value
const formattedBalance = '$' + addThousandSeparator(balanceValue.toFixed(2));

// Update the balance text with thousand separators
balanceElement.textContent = formattedBalance;

    
eyeSlashIcon.addEventListener('click', function () {
    eyeIcon.classList.remove('hidden');
    eyeSlashIcon.classList.add('hidden');
    balanceElement.textContent = '******';
});

eyeIcon.addEventListener('click', function () {
    eyeIcon.classList.add('hidden');
    eyeSlashIcon.classList.remove('hidden');
    balanceElement.textContent = formattedBalance; // Replace with original balance
});

convertNaira.addEventListener('click', function () {
    const balance = parseFloat(balanceElement.textContent.replace('$', '').replace('₦', '').replace(/,/g, ''));
    // Conversion rate to Naira
    const nairaBalance = balance * 1000; // Assuming 1 USD = 1000 NGN
    balanceElement.textContent = `₦${nairaBalance.toLocaleString('en', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    convertNaira.classList.add('hidden');
    convertDollar.classList.remove('hidden');
});

convertDollar.addEventListener('click', function () {
    const balance = parseFloat(balanceElement.textContent.replace('₦', '').replace(/,/g, ''));
    // Conversion rate to Dollar
    const dollarBalance = balance / 1000; // Assuming 1 USD = 1000 NGN
    balanceElement.textContent = `$${dollarBalance.toLocaleString('en', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    convertDollar.classList.add('hidden');
    convertNaira.classList.remove('hidden');
});
        

setTimeout(function() {
    var alertElement = document.querySelector('.alert');
    alertElement.classList.remove('show');
    alertElement.classList.add('hidden'); // Optional: Add a hide class for custom CSS animations or styling
}, 7000);
        