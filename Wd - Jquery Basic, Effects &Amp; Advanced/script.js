$(document).ready(function () {
    // Function to evaluate password strength
    function evaluatePasswordStrength(password) {
        let strength = 0;

        // Check if password contains lowercase letters
        if (/[a-z]/.test(password)) {
            strength++;
        }

        // Check if password contains uppercase letters
        if (/[A-Z]/.test(password)) {
            strength++;
        }

        // Check if password contains numbers
        if (/[0-9]/.test(password)) {
            strength++;
        }

        // Check if password contains special characters
        if (/[@$!%*?&#]/.test(password)) {
            strength++;
        }

        // Check the length of the password
        if (password.length >= 8) {
            strength++;
        }

        return strength;
    }

    // Bind keyup event to the password field
    $('#password').on('keyup', function () {
        const password = $(this).val();
        const strength = evaluatePasswordStrength(password);
        const $strengthBar = $('#strengthBar .strength');
        const $strengthText = $('#strengthText');

        // Reset bar and text
        $strengthBar.removeClass('weak medium strong').css('width', '0');
        $strengthText.text('Strength: ');

        // password strength
        if (strength === 0) {
            return; // No input, no feedback
        } else if (strength <= 2) {
            $strengthBar.addClass('weak').css('width', '33%');
            $strengthText.text('Strength: Weak');
            console.log('Password is weak.');
        } else if (strength === 3 || strength === 4) {
            $strengthBar.addClass('medium').css('width', '66%');
            $strengthText.text('Strength: Medium');
            console.log('Password is medium.');
        } else if (strength === 5) {
            $strengthBar.addClass('strong').css('width', '100%');
            $strengthText.text('Strength: Strong');
            console.log('Password is strong.');
        }
    });
});