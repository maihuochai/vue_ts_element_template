import { Component, Prop, Vue } from 'vue-property-decorator'
import { RGB2Hex } from '@/utils/colors'

@Component({
  components: {}
})
export default class Toast extends Vue {
  visible = false
  timer = 0
  icon = ''
  message = ''
  close = true
  wait = 3000
  position: 'top' | 'center' | 'bottom' = 'top'
  round = false
  color = '#333'
  bgColor = '#fff'
  width = ''
  height = ''
  border:string|boolean=false

  render () {
    const {
      icon,
      message,
      close,
      position,
      visible,
      color,
      border,
      bgColor,
      width,
      round,
      height
    } = this
    return (
      <transition name={position === 'center' ? 'toast-center' : 'toast'} onAfterLeave={this.afterLeave}>
        {
          visible && (
            <div
              style={{
                color,
                background: bgColor,
                width,
                border,
                height
              }}
              class={['toast', position, { round }, border && { round, border: this.border }]}>
              {icon && <i class={['icon', icon]}/>}
              <div class='content'>{message}</div>
              {
                close && <i class='close mdi mdi-close' onclick={() => {
                  this.visible = false
                }}/>
              }
            </div>
          )
        }
      </transition>
    )
  }

  closeToast (): void {
    this.visible = false
  }

  afterLeave () {
    this.$el.remove()
    this.$destroy()
  }

  mounted () {
    this.visible = true
    this.timer = setTimeout(() => {
      this.visible = false
      clearTimeout(this.timer)
    }, this.wait)
  }
}
