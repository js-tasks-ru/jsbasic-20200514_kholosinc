function showSalary(data, age) {
  let newArr = data.filter(item =>
    item.age <= age
  ).map(item => item.name + ", " + item.balance).join("\n")
  return newArr
}
