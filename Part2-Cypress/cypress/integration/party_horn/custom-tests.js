describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/')
  })

  it('First Test', () => {
    expect(true).to.equal(true)
  })

  it('slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75')
    cy.get('#volume-slider').then(function ($el) {
      expect($el).to.have.value(75)
    })
  })

  it('volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', '33').trigger('input')
    cy.get('#volume-number').then(function ($el) {
      expect($el).to.have.value(33)
    })
  })

  it('audio volume changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', '33').trigger('input')
    cy.get('#horn-sound').then(function ($el) {
      expect($el).to.have.prop('volume', 0.33)
    })
  })

  it('image and sound source changes when radio button is selected', () => {
    cy.get('#radio-air-horn').check()
    cy.get('#sound-image').then(function ($el) {
      expect($el).to.have.attr('src', './assets/media/images/air-horn.svg')
    })
    cy.get('#horn-sound').then(function ($el) {
      expect($el).to.have.attr('src', './assets/media/audio/air-horn.mp3')
    })
    cy.get('#radio-car-horn').check()
    cy.get('#sound-image').then(function ($el) {
      expect($el).to.have.attr('src', './assets/media/images/car.svg')
    })
    cy.get('#horn-sound').then(function ($el) {
      expect($el).to.have.attr('src', './assets/media/audio/car-horn.mp3')
    })
    cy.get('#radio-party-horn').check()
    cy.get('#sound-image').then(function ($el) {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg')
    })
    cy.get('#horn-sound').then(function ($el) {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3')
    })
    cy.get('#radio-air-horn').check()
    cy.get('#sound-image').then(function ($el) {
      expect($el).to.have.attr('src', './assets/media/images/air-horn.svg')
    })
    cy.get('#horn-sound').then(function ($el) {
      expect($el).to.have.attr('src', './assets/media/audio/air-horn.mp3')
    })
  })

  it('volume image changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', '0').trigger('input')
    cy.get('#volume-image').then(function ($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg')
    })
    cy.get('#volume-slider').invoke('val', '1').trigger('input')
    cy.get('#volume-image').then(function ($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg')
    })
    cy.get('#volume-slider').invoke('val', '33').trigger('input')
    cy.get('#volume-image').then(function ($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg')
    })
    cy.get('#volume-slider').invoke('val', '34').trigger('input')
    cy.get('#volume-image').then(function ($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg')
    })
    cy.get('#volume-slider').invoke('val', '66').trigger('input')
    cy.get('#volume-image').then(function ($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg')
    })
    cy.get('#volume-slider').invoke('val', '67').trigger('input')
    cy.get('#volume-image').then(function ($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg')
    })
    cy.get('#volume-slider').invoke('val', '100').trigger('input')
    cy.get('#volume-image').then(function ($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg')
    })
  })

  it('volume image changes when number input changes', () => {
    cy.get('#volume-number').clear().type('0')
    cy.get('#volume-image').then(function ($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg')
    })
    cy.get('#volume-number').clear().type('1')
    cy.get('#volume-image').then(function ($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg')
    })
    cy.get('#volume-number').clear().type('33')
    cy.get('#volume-image').then(function ($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg')
    })
    cy.get('#volume-number').clear().type('34')
    cy.get('#volume-image').then(function ($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg')
    })
    cy.get('#volume-number').clear().type('66')
    cy.get('#volume-image').then(function ($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg')
    })
    cy.get('#volume-number').clear().type('67')
    cy.get('#volume-image').then(function ($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg')
    })
    cy.get('#volume-number').clear().type('100')
    cy.get('#volume-image').then(function ($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg')
    })
  })

  it('honk button disable at invalid input', () => {
    cy.get('#volume-number').clear().type('NaN')
    cy.get('#honk-btn').then(function ($el) {
      expect($el).to.have.prop('disabled', true)
    })
    cy.get('#volume-number').clear()
    cy.get('#honk-btn').then(function ($el) {
      expect($el).to.have.prop('disabled', true)
    })
    cy.get('#volume-number').clear().type(' ')
    cy.get('#honk-btn').then(function ($el) {
      expect($el).to.have.prop('disabled', true)
    })
  })

  it('error is thrown at invalid ', () => {
    cy.get('#volume-number').clear().type('-1')
    cy.get('input:invalid').should('have.length',1)
  })
})
