export const fetchCats = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_CATS'})
      fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
        return response.json()
      }).then(responseJSON => {
        //   console.log(responseJSON.images)
        dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
      })
    }
  }