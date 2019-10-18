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
    },
    {
      name: "cards5",
      value: 5,
      image: "fas fa-mug-hot",
      completed: false
    },
    {
      name: "cards6",
      value: 6,
      image: "fas fa-fan",
      completed: false
    },
    {
      name: "cards7",
      value: 7,
      image: "fas fa-snowflake",
      completed: false
    },
    {
      name: "cards8",
      value: 8,
      image: "fas fa-palette",
      completed: false
    },
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
  random: action((state, level) => {
    const levelArray = state.cards.slice(0, level)
    const newArray = levelArray.concat(levelArray)
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