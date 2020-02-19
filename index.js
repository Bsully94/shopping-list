var deleteButton = document.getElementsByClassName("shopping-item-delete");
console.log(deleteButton)
for (var i = 0; i < deleteButton.length; i++) {
    var button = deleteButton[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
    })
}

var addItem = document.getElementsById ("shopping-list-entry")
for (var i = 0; i < addItem.length; i++){
    var button = addItem[i]
    button.addEventListener("click", addToList)
}

function addToList(event) {
    document.getElementsById("js-shopping-list-form").submit();
    var button = event.target;
    console.log(inner.text);
}
