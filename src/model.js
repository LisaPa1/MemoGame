import { action } from 'easy-peasy';

export default {
  cards: [
    {
      name: "cards1",
      value: 1,
      image: "fab fa-canadian-maple-leaf",
      completed: false
    },
    {
      name: "cards2",
      value: 2,
      image: "fas fa-pizza-slice",
      completed: false
    },
    {
      name: "cards3",
      value: 3,
      image: "fas fa-pepper-hot",
      completed: false
    },
    {
      name: "cards4",
      value: 4,
      image: "fas fa-anchor",
      completed: false
    }
  ],
  cardsRandomArray : [],
  selected: [
    {
      value: null
    },
    {
      value: null
    }
  ],
  // Actions
  random: action((state) => {
    const newArray = state.cards.concat(state.cards)
    const blend = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array
    }
    state.cardsRandomArray = blend(newArray)

  }),
  toggle: action((state, value) => {
    state.selected[0].value !== null ? state.selected[1].value = value : state.selected[0].value = value
  }),
  reset: action((state) => {
    state.selected[0].value = null
    state.selected[1].value = null
  }),
  complete: action((state, value) => {
    state.cardsRandomArray.map(card => {
      if (card.value === value) {
        card.completed = true
      }
      return card
    })
    state.selected[0].value = null
    state.selected[1].value = null
  })
}