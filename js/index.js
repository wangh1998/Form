onload = function() {
  // /^[\u4e00-\u9fa5\uf900-\ufa2d-s]{2,20}$/
  var name = document.getElementById('name')
  var manager = document.getElementById('manager')
  var concatPeople = document.getElementById('concatPeople')
  var enterpriseIds = document.getElementById('enterpriseIds')
  var desc = document.getElementById('desc')
  var Sub = document.querySelector('.Sub')
  var Exit = document.querySelector('.Exit')
  Sub.onclick = function(e) {
    var e = window.event || event
    e.stopPropagation()
    e.preventDefault()
    var nameValue = name.value
    var reg = /^[\u4e00-\u9fa5\uf900-\ufa2d-]{2,20}$/
    if (!reg.test(nameValue)) {
      return alert('调查名称格式：创建人姓名-调查名称')
    }
    var managerValue = manager.value
    // console.log(managerValue)
    if (managerValue === '') {
      return alert('负责人名称，不能为空')
    }
    var concatPeopleValue = concatPeople.value
    var radioValue = document.querySelector('.radio:checked').value
    var isPreResearch = radioValue == 0 ? true : false
    // console.log(isPreResearch)
    var enterpriseIdsValue = enterpriseIds.value
    var reg2 = /^[1-9][0-9]{0,20}(,[1-9][0-9]{0,20})*$/
    if (!reg2.test(enterpriseIdsValue) || !enterpriseIdsValue) {
      return alert('企业账号之间以英文逗号分割，如234,456,不能为空')
    }
    var enterpriseIdsValue = enterpriseIdsValue
      .split(',')
      .map(item => Number(item))
    var descValue = desc.value
    var obj = {}
    obj.name = nameValue
    obj.manager = managerValue
    obj.concatPeople = concatPeopleValue
    obj.isPreResearch = isPreResearch
    obj.enterpriseIds = enterpriseIdsValue
    obj.desc = descValue
    console.log(obj)
  }
  Exit.onclick = function(e) {
    var e = window.event || event
    e.stopPropagation()
    e.preventDefault()
    name.value = ''
    manager.value = ''
    concatPeople.value = ''
    enterpriseIds.value = ''
    desc.value = ''
  }
}
