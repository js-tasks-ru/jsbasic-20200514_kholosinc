/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement("ul");

  for (friend of friends) {
    let li = document.createElement("li");
    li.innerHTML = `${friend.firstName} ${friend.lastName}`
    ul.appendChild(li);
  }
  return ul
}
