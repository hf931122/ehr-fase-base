function getIndex(inputs: any, ctlI: any, cons: any): any {
  let isShow = inputs[ctlI].clientHeight && inputs[ctlI].clientWidth
  if (!isShow) {
    if (ctlI < inputs.length - 1) {
      return getIndex(inputs, ctlI + 1, cons)
    } else {
      if (cons != 0) {
        return 0
      } else {
        return getIndex(inputs, 0, cons + 1)
      }
    }
  }
  if (inputs[ctlI].getAttribute('disabled')) {
    if (ctlI < inputs.length - 1) {
      return getIndex(inputs, ctlI + 1, cons)
    } else {
      if (cons != 0) {
        return 0
      } else {
        return getIndex(inputs, 0, cons + 1)
      }
    }
  } else {
    return ctlI
  }
}
function setHous(binding: any, ev: any, inputs: any) {
	if (ev.keyCode === 13) {
		const attrIndex = ev.srcElement.getAttribute('keyFocusIndex')
		const ctlI = parseInt(attrIndex)
		const nextIndex = ctlI < inputs.length - 1 ? ctlI + 1 : 0
		const index = getIndex(inputs, nextIndex, 0)
		inputs[index].focus()
	}
}
/**
 * v-enter
 * <div v-enter>
 * ```
 */
export default (Vue: any) => {
	Vue.directive('enter', {
    mounted: function (el: any, binding: any) {
			const list = el.querySelectorAll('.ant-input, .ant-input-number-input, .ant-select-selection-search-input'), inputs: any = []
			for (let i = 0; i < list.length; i++) {
        const onedom = list[i]
				if (!onedom.getAttribute('readonly')) {
					inputs.push(onedom)
				}
      }
			let isfocus = false
			const dofocus = document.hasFocus(), focusInner = document.activeElement
      for (let i = 0; i < inputs.length; i++) { // IE9及以后 addEventListener()  和attachEvent()
				const focusIndex = inputs[i].getAttribute('keyFocusIndex')
				if (!focusIndex && focusIndex !== 0) {
					inputs[i].addEventListener('keyup', (ev: any) => setHous(binding, ev, inputs))
				}
        inputs[i].setAttribute('keyFocusIndex', i)
				if (dofocus && inputs[i] == focusInner) {
					isfocus = true
				}
      }
			if (!isfocus && inputs.length > 0) {
				inputs[0].focus()
			}
    },
    updated: function (el: any, binding: any) { // el-checkbox__original
    },
		unmounted (el: any, binding: any) { // 解除事件监听
			const list = el.querySelectorAll('.ant-input, .ant-select-selection-search-input')
      for (let i = 0; i < list.length; i++) {
        const onedom = list[i]
        onedom.removeEventListener('keyup', setHous)
			}
		}
  }),
	// Vue 定义自定义指令:防止按钮重复提交
	Vue.directive('preventOnce', {
		mounted (el: any, binding: any) {
			el.addEventListener('click', () => {
				if (!el.disabled) {
					el.disabled = true
					setTimeout(() => {
						el.disabled = false
					}, binding.value || 2000)
				}
			})
		}
	})
}
/*
1、bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
2、inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
3、update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 。
4、componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
5、unbind：只调用一次，指令与元素解绑时调用。

指令钩子函数会被传入以下参数：
1、el：指令所绑定的元素，可以用来直接操作 DOM 。
2、binding：一个对象，包含以下属性：
            2-1、name：指令名，不包括 v- 前缀。
            2-2、value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
            2-3、oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
            2-4、expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
            2-5、arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
            2-6、modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
3、vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
4、oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
*/