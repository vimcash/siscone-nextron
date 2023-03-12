export interface Config {
  companyName: string
  breakfastTime: string
  lunchTime: string,
  lunchEnd: string,
  dinnerTime: string
  dinnerEnd: string,
  breakfastPrice: number,
  breakfastSubsidy: number,
  lunchPrice: number,
  lunchSubsidy: number,
  dinnerPrice: number,
  dinnerSubsidy: number,
  codeSize: number
  status?:string
}