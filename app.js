let contasClientes = [];

const validarSenhasIguais = (evento) => {
  //   const senha = document.getElementById('senha').value;
  //   const confirmacao = document.getElementById('confirmacao').value;
  if (evento.target.senha.value === evento.target.confirmacao.value) {
    return true;
  }

  return false;
};

const cadastrarConta = (evento) => {
  evento.preventDefault();

  if (validarSenhasIguais(evento)) {
    const conta = {
      nome: evento.target.nome.value,
      cpf: evento.target.cpf.value,
      celular: evento.target.celular.value,
      senha: evento.target.senha.value,
      conta: Math.floor(1000 + Math.random() * 90000),
      saldo: 0,
    };

    contasClientes.push(conta);
    alert(`Conta criada com sucesso! Número: ${conta.conta}`);
  } else {
    alert('Senhas não conferem');
  }
};

const sacar = () => {};

const depositar = () => {};

const consultarSaldo = () => {};

const validarConta = (conta, senha) => {
  const contaCliente = contasClientes.find((c) => c.conta === conta);

  return contaCliente && contaCliente.senha === senha ? true : false;
};

const efetuarOperacao = (evento) => {
  evento.preventDefault();
  const contaValida = validarConta(parseInt(evento.target.conta.value), evento.target.senha.value);

  if (contaValida) {
    switch (evento.target.operacao.value) {
      case 'SAQUE':
        sacar();
        break;
      case 'DEPOSITO':
        depositar();
        break;
      case 'SALDO':
        consultarSaldo();
        break;
      default:
        alert('Operação inválida');
    }
  } else {
    alert('Conta ou senha inválida');
  }
};

const operacao = document.getElementById('operacao');
operacao.addEventListener('change', trocarOperacao);

const formAcoes = document.getElementById('form-acoes');
formAcoes.addEventListener('submit', efetuarOperacao);

const form = document.getElementById('form');
form.addEventListener('submit', cadastrarConta);