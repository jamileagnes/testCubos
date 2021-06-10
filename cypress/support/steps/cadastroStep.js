/* global Given, Then, When */

    Given("esteja na tela de cadastro", () => {

        cy.visit('./toTest.html');

    })

    When("preencher todos os dados obrigatorios", () => {

        cy.get('input[name="elementosForm:nome"]').click().type('Celso');

        cy.get('input[name="elementosForm:sobrenome"]').click().type('Ricardo');

        cy.get('[type="radio"]').check('M');

        cy.get('[type="checkbox"]').check('carne');

        cy.get('[type="checkbox"]').check('frango');

        cy.get('[type="checkbox"]').check('pizza');

        cy.get('select').eq(0).select('2graucomp').should('have.value','2graucomp');

        cy.get('select').eq(1).select(['Corrida', 'Karate']).invoke('val').should('deep.equal', ['Corrida','Karate']);

        cy.get('textarea').type('Hello Word');

        cy.get('[type="checkbox"]').eq(5).check();

        cy.get('[type="checkbox"]').eq(6).check();

        cy.get('[type="checkbox"]').eq(7).check();

        cy.get('[type="radio"]').eq(3).check();

        cy.get('[type="radio"]').eq(5).check();

        cy.get('input[type=text]').eq(2).type('Completo');

        cy.get('input[type=text]').eq(3).type('Incompleto');

        cy.get('input[type=text]').eq(4).type('Completo');

        cy.get('input[type=text]').eq(5).type('Incompleto');

        cy.get('input[type=text]').eq(6).type('Incompleto');
    })

    And("clicar no botao Cadastrar", () => {

        cy.get('input[name="elementosForm:cadastrar"]').click();

        cy.get('#confirm').click();

    })

    Then("o cadastro deve ser realizado com sucesso", () => {

        assert.isOk('[id=resultado]', 'Cadastrado!');
        assert.isOk('[id=descNome]', 'Celso');
        assert.isOk('[id="descSobrenome"]', 'Ricardo');
        assert.isOk('[id=descSexo]', 'Masculino');
        assert.isOk('[id=descComida]', 'Carne Frango Pizza');
        assert.isOk('[id=descEscolaridade]', '2graucomp');
        assert.isOk('[id=descEsportes]', 'Corrida Karate');
        assert.isOk('[id=descSugestoes]', 'Hello Word')

    })
