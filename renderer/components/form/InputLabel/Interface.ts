export interface inputLabel {
  type?: 'email' | 'password' | 'text' | 'time' | 'number'
  title: string
  disabled?: boolean
  onChangeValue: any
  value:string
}