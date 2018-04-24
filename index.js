function onFocus (t) {
  t.classList.add('touched')
  const formState = document.getElementsByClassName("formState")
  formState[0].innerHTML = 'touched'
}

function onChange (t) {
  t.classList.add('dirty')
  const formState = document.getElementsByClassName("formState")
  formState[0].innerHTML = 'dirty'
}