$(document).ready(function() {
  
    function add() {
      $("#js-shopping-list-form").on('submit', function(event){
        event.preventDefault();
        var text = $('#shopping-list-entry').val();
        $(".shopping-list").append(list(text));
      })
    }
  
    $(add);
  
      function list(item){
          return "<li><span class='shopping-item'>" + item + "</span><div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>check</span></button> <button class='shopping-item-delete'><span class='button-label'>delete</span></button></div></li>";
      }
  
      function check() {
        $(document).on('click', '.shopping-item-toggle', function() {
          const checkItem = $(this).parents('li').children(".shopping-item");
          $(checkItem).toggleClass('shopping-item__checked');
        })
      }  
  
      $(check);
  
      function deleteFromList() {
        $(document).on('click', '.shopping-item-delete', function(){
          const deleteItem = $(this).parents('li');
          $(deleteItem).remove();
        })
      }
  
      $(deleteFromList);
  
  })