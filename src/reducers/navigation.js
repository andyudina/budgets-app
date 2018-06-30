const defaultNavigation = {
  navigateToCategories: false
}

const navigation = (state = defaultNavigation, action) => {
  switch (action.type) {
    // Set up navigation flags on particular events
    case 'TOTAL_BUDGET_UPDATED':
      // Navigate from total budget update page to categories creation
      return Object.assign(
        {},
        state,
        {
          navigateToCategories: true,
        })
   // Disable naviation flags
   case 'DISABLE_NAVIGATION_TO_CATEGORIES':
      return Object.assign(
        {},
        state,
        {
          navigateToCategories: false,
        })   
    default:
      return state
  }
}

export default navigation