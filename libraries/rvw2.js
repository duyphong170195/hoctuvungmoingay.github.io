var bag = [
        ["religion", "region", "accommodation", "accompany", "accumulate", "accurate"],
        ["momentary", "temporary", "temperature", "promotion", "promote", "procedure"],
        ["instead of", "in spite of", "in addition to", "because of", "Despite", "due to", "be used to/get used to"],
        ["excellent", "complement", "compliment", "quantity", "quality"],
        ["appeal", "appear", "amaze", "amuse", "pollution", "population"],
        ["attempt", "attend", "intend", "absent", "inform", "announce"],
        ["Therefore", "However", "Nevertheless", "Nonetheless", "Moreover", "Meanwhile"]
    ];
var bonus = [
 ["accumulator", "accuracy"],
 ["permanent"],
 [],
 ["excellence", "complementary", "complimentary", "praise", "quantify", "quantities", "qualify"],
 ["disappear", "amazing", "amusing", "amusement", "pollute", "polluted", "populate"],
 ["attendee", "intention", "intentional", "information", "informer", "informant", "informative", "announcement"],
 []
]
var bind = Function.prototype.bind,
    $append = bind.call(Element.prototype.appendChild, document.querySelector("output")),
    $new = bind.call(Document.prototype.createElement, document),
    $text = bind.call(Document.prototype.createTextNode, document),
    $rnd = function() { return (Math.random() * 125 + 0)|0; }, 
    $promise = function(thenFn) {
      var args, promise, wait, slice=Array.prototype.slice, isResolved = false;
      var promise = {
        wait: function(ms) {
          wait = ms;
          return promise;
        },
        then: function() {
          args = slice.call(arguments);
          return promise = $promise(thenFn);
        },
        resolve: function() {
          isResolved = true;
          if(args) {
            var next = Function.prototype.bind.apply(thenFn, [undefined].concat(args).concat([promise]));
            wait ? setTimeout(next, wait) : next();
          }

        }
      };
      return promise;
    };

var process = function(target, chars, promise) {
  var first = chars[0], rest = chars.slice(1);
  if(!first) {
    promise.resolve();
    return;
  }
  target.appendChild(first);
  setTimeout(process.bind(undefined, target, rest, promise), $rnd());
}

var type = function(text, promise) {
  var chars = text.split("").map($text);
  promise = promise || $promise(type);
  $append($new("br"));
  process($append($new("q")), chars, promise);
  return promise;
};

type("ACCESSING DATA .....")
  .wait(3000)
  .then("Day 8: " + bag[0].join(', '))
  .wait(1000)
  .then("Day 9: " + bag[1].join(', '))
  .wait(1000)  
  .then("Day 10: " + bag[2].join(', '))
  .wait(1000)
  .then("Day 11: " + bag[3].join(', '))
  .wait(1000) 
  .then("Day 12: " + bag[4].join(', '))
  .wait(1000) 
  .then("Day 13: " + bag[5].join(', '))
  .wait(1000) 
  .then("Day 14: " + bag[6].join(', '))
  .wait(1000)
  .then("Show related words? Press y/n")
var flag = true;
$(document).on('keypress', function(e) {
    if ( e.which === 121 && flag == true) {
      type("Day 8: " + bonus[0].join(', '))
      .wait(1000)
      .then("Day 9: " + bonus[1].join(', '))
      .wait(1000)
      .then("Day 10: " + bonus[2].join(', '))
      .wait(1000)
      .then("Day 11: " + bonus[3].join(', '))
      .wait(1000)
      .then("Day 12: " + bonus[4].join(', '))
      .wait(1000)
      .then("Day 13: " + bonus[5].join(', '))
      .wait(1000)
      .then("Day 14: " + bonus[6].join(', '));
      flag = false;
    }else if(e.which === 110 && flag == true){
      type("Keep calm & Have fun with English ^^");
      flag = false;
    }    
});
  
var bag1 = [];
for(var i = 0; i < bag.length; i++)
{
   bag1 = bag1.concat(bag[i]);
}
function call(){
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  bag1 = shuffle(bag1);
  
  for(var i=0; i<bag1.length; i++){
    $('.words').append('<span>'+bag1[i]+'</span>');
  };

    (function(){
    $.each($('span'), function(i,el) {
      var a = Math.floor(Math.random() * 7),
          b = (Math.floor(Math.random() * 400)/10),
          c = Math.floor(Math.random() * 8);
      $(this).css({
        '-webkit-animation-delay' : b + 's',
        'animation-delay' : b + 's',
      });
      $(this).addClass('p' + c);
    });
  })();
}  
setTimeout(function(){ call(); }, 3000);
$('div.arrow').on('click',function(){  
    $('.words').empty();
    call();
  });