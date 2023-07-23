// Selecionar os ícones para as senhas
const passwordToggle = document.querySelector('.toggleIcons');
const confirmpasswordToggle = document.querySelector('.toggleIconsConfirm');

// Selecionar todos os ícones com a classe toggleIcons
const toggleIcons = document.querySelectorAll('.toggleIcons');

//Icone para o mode dark/light
const mode = document.getElementById('mode_icon');

// Função para alternar a visibilidade da senha
function togglePasswordVisibility(inputId, toggleIcon) {
    const passwordInput = document.getElementById(inputId);

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.add('visible');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('visible');
    }

    // Alternar classes de cada ícone individualmente
    toggleIcon.classList.toggle('fa-eye-slash');
    toggleIcon.classList.toggle('fa-eye');
}

//mode dark/light
mode.addEventListener('click', () => {
    const form = document.getElementById('form');
    //verifica se o icone é a lua
    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return;
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');
});

// Adicionar eventos de clique para as duas senhas
passwordToggle.addEventListener('click', function() {
    togglePasswordVisibility('password', passwordToggle);
});

confirmpasswordToggle.addEventListener('click', function() {
    togglePasswordVisibility('confirmpassword', confirmpasswordToggle);
});