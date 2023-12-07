import './SelectStyle.css'

export default function SelectStyle({ mode }) {
  return (
    // mode属性に応じてクラスを切り替える
    <div className={`box ${mode === 'dark' ? 'dark' : 'light'}`}>
      Hello, World!
    </div>
  )
}
