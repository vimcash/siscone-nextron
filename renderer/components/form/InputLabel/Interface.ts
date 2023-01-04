export interface inputLabel {
  type?: 'email' | 'password' | 'text' | 'time'
  title: string
  disabled?: boolean
  onChangeValue: any
  value:string
}