    // 封装队列
    function Queue() {
      // 属性
      this.items = []
      // 1.将元素加入到队列
      Queue.prototype.enqueue = function(element) {
        this.items.push(element)
      }
      // 2.从队列中删除元素
      Queue.prototype.dequeue = function() {
        return this.items.shift()
      }
      // 3.查看前端元素
      Queue.prototype.front = function() {
        return this.items[0]
      }
      // 4.查看队列是否为空
      Queue.prototype.isEmpty = function() {
        return this.items.length == 0
      }
      // 5.查看队列中元素的个数
      Queue.prototype.size = function() {
        return this.items.length
      }
      // 6.toString方法
      Queue.prototype.toString = function(){
        var resultString = ''
        for (var i = 0; i < this.items.length; i++) {
          resultString += this.items[i] + ' '
        }
        return resultString 
      }
    }
