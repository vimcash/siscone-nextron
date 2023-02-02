export interface inputLabel {
  type?: 'email' | 'password' | 'text' | 'time' | 'number' | 'date'
  title: string
  disabled?: boolean
  onChangeValue: any
  value?:string
  className?: string
  name?: string
}