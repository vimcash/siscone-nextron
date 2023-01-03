export interface inputLabel {
  type?: 'email' | 'password' | 'text'
  title: string
  disabled?: boolean
  onChangeValue: any
  value:string
}