import './modal.css'
const de_config = {
  type: 'confim', // waring
  title: '',
  content: '',
  okText: '确定',
  cancelText: '取消',
  onOk: () => {
    console.log('onOk')
  },
  cancelOk: () => {
    console.log('cancelOk')
  },
  del: (elem) => {
    document.body.removeChild(elem)
  }
}

function modal(config: Object) {
  let new_config = Object.assign({}, de_config, config)
  // 外层div
  let modal = document.createElement('div')
  // mask
  let mask = document.createElement('div')
  mask.className = 'ehr-modal-mask'
  // 内部同mask级盒子
  let wrapper = document.createElement('div')
  wrapper.className = 'ehr-modal-wrap'
  // 内部内容
  let content = document.createElement('div')
  content.className = 'ehr-modal'
  // loading type对应的不同的动画
  let loadingView = document.createElement('div')
  loadingView.className = 'loading-view'
  let html = `
    <div class="ehr-modal-content">
        <div class="ehr-modal-body">
        <span class="ehr-icon ${new_config.type != 'error' ? 'icon-waring' : ''}">${new_config.type == 'confim' ? 'X' : '!'}</span>
          ${new_config.title ? `<div class="ehr-modal-title">${new_config.title}</div>` : ''}
          ${new_config.content ? `<div class="ehr-modal-body-content">${new_config.content}</div>` : ''}
        </div>
        <div class="ehr-modal-btns">
          ${new_config.type == 'confim' ? `<div class="ant-btn" type="button">${new_config.cancelText}</div>` : ''}
          <button class="ant-btn ant-btn-primary" type="button">${new_config.okText}</button>
        </div>
    </div>
  `
  loadingView.innerHTML = html
  content.appendChild(loadingView)
  wrapper.appendChild(content)

  loadingView.onclick = (ev) => {
    let e = ev || window.event
    let target = e.target || e.srcElement
    console.log(target.className)
    if (target.className.indexOf('ant-btn-primary') > -1) {
      new_config.onOk()
      new_config.del(modal)
    }
    if (target.className == 'ant-btn') {
      new_config.cancelOk()
      new_config.del(modal)
    }
  }
  
  modal.appendChild(mask)
  modal.appendChild(wrapper)
  document.body.appendChild(modal)
}
export default modal