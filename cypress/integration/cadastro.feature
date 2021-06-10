
  Feature: Cadastro de usuário

    Scenario: Cadastro de usuario com sucesso
      Given esteja na tela de cadastro
      When preencher todos os dados obrigatorios
      And clicar no botao Cadastrar
      Then o cadastro deve ser realizado com sucesso