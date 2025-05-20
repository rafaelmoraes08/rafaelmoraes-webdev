

// Navegação suave entre seções com ajuste para o cabeçalho fixo

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    const offset = document.querySelector('header').offsetHeight;

    window.scrollTo({
      top: targetSection.offsetTop - offset,
      behavior: 'smooth'
    });
  });
});


// Intercepta o envio do formulário e exibe um modal de confirmação

document.getElementById('form-contato').addEventListener('submit', function(e) {
  e.preventDefault(); // Impede o envio real do formulário

  // Cria o modal
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = 0;
  modal.style.left = 0;
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  modal.style.zIndex = 2000;

  const box = document.createElement('div');
  box.style.backgroundColor = '#fff';
  box.style.padding = '30px';
  box.style.borderRadius = '8px';
  box.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
  box.style.textAlign = 'center';

  const msg = document.createElement('p');
  msg.textContent = 'Mensagem enviada com sucesso!';
  msg.style.marginBottom = '20px';

  const okBtn = document.createElement('button');
  okBtn.textContent = 'OK';
  okBtn.style.padding = '10px 20px';
  okBtn.style.backgroundColor = '#1E3A5F';
  okBtn.style.color = '#fff';
  okBtn.style.border = 'none';
  okBtn.style.borderRadius = '4px';
  okBtn.style.cursor = 'pointer';

  okBtn.addEventListener('click', () => {
    modal.remove();
    document.getElementById('form-contato').reset(); // limpa o formulário
  });

  box.appendChild(msg);
  box.appendChild(okBtn);
  modal.appendChild(box);
  document.body.appendChild(modal);
});

