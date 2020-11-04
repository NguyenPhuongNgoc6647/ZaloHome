$(document).ready(function(){
   setInterval(function(){
      $('#btn-next').trigger('click');
   },3000)

   $('#btn-next').click(function(event){
      var slide_sau = $('.active').next();
      var vi_tri_hien_tai = $('.active_slide').index()+1;
      if(slide_sau.length != 0){
         $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
            $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
         });
         slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
            $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
         });

         $('.list-dot li').removeClass('active_slide')
         $('.list-dot li:nth-child('+(vi_tri_hien_tai+1)+')').addClass('active_slide')

      }
      else{
         $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
            $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
         });
         $('.box-item-slide:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
            $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
         });

         $('.list-dot li').removeClass('active_slide')
         $('.list-dot li:nth-child(1)').addClass('active_slide')
      }
   })

   $('#btn-prev').click(function(event) {
      var slide_truoc = $('.active').prev();
      var vi_tri_hien_tai = $('.active_slide').index()+1;
      if(slide_truoc.length!=0){
         $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
            $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
         });
         slide_truoc.addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
            $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
         });

         $('.list-dot li').removeClass('active_slide')
         $('.list-dot li:nth-child('+(vi_tri_hien_tai-1)+')').addClass('active_slide')
      }else{
         $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
            $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
         });
         $('.box-item-slide:last-child').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
            $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
         });

         $('.list-dot li').removeClass('active_slide')
         $('.list-dot li:last-child').addClass('active_slide')
      }
   });
})