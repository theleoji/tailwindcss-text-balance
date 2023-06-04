import plugin from 'tailwindcss/plugin'

const textBalance = plugin(function ({ addUtilities }) {
  addUtilities({
    '.text-balance': {
      'text-wrap': 'balance',
    },
  })
})

export default textBalance
