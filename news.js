Vue.component('message',{
    'props':['title','body'],
    'template':`<div class="media">
  <div class="media-left media-middle">
<h4>{{title}}	</h4>
      <img class="media-object" src="https://a.fsdn.com/sd/topics/linux_64.png" alt="...">
    
  </div>
  <div class="media-body">
    {{body}}
    
  </div>
</div>`,
    'data':function () {
        return {
            isVisible:true
        }
    }
});
