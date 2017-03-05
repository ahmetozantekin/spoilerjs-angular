angular.module('angular-spoiler', [])
     .directive('spoiler',[function(){
        return{
            restrict: 'E',
            link: function(scope, element, attrs){
               element[0].style.cursor = "pointer";
               element[0].style.transition = "all .5s";
               element[0].style.filter= "blur(3px)";
               element.bind('click', function() {
                   // You wan'it.
                   blurFilter = this.style.filter;
                   if(blurFilter.search('0') < 0){
                       //none
                        this.style.filter= "blur(0)";
                   } else {
                        this.style.filter= "blur(3px)";
                   }
                });
            }
        }
    }])
