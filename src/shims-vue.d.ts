declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


declare module '*'


interface Window {
  captchaObj: any
  initGeetest4: any
}
