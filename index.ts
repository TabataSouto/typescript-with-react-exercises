function UserReview(review: boolean | number) {
  if (typeof review === 'number') {
    console.log(`A nota informada é: ${review}`)
  } else {
    console.log("Nenhuma nota foi informada!")
  }
}